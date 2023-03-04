import * as L from "leaflet"
//import { last, range, takeWhile } from "lodash";
import { Climate, DensityFunction, Holder, Identifier, lerp, lerp2, NoiseGeneratorSettings, NoiseParameters, RandomState, WorldgenRegistries, BiomeSource, BlockPos } from "deepslate";
import { getSurfaceDensityFunction, calculateHillshade, lerp2Climate, hashCode } from "../util";
import { Datapack } from "mc-datapack-loader";
import MultiNoiseCalculator from "../webworker/MultiNoiseCalculator?worker"
import { PRESETS } from "../BuildIn/MultiNoiseBiomeParameterList";

const WORKER_COUNT = 4

export type BiomeLayerSettings = {
	enable_hillshading: boolean,
	y: number | "surface",
	seed: bigint
}

type Tile = { coords: L.Coords, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, done: L.DoneCallback, array?: {climate: Climate.TargetPoint, surface: number, biome: string}[][], step?: number, isRendering?: boolean } 
export class BiomeLayer extends L.GridLayer {
	private next_worker_id = 0

	private Tiles: { [key: string]: Tile} = {}
	private tileSize = 0
	private calcResolution = 0

	private workers: Worker[] = []

	private biomeSource?: BiomeSource
	private datapackLoader: Promise<void> //= Promise.reject(new Error("datapackLoader not initalized"))
	
	public enable_hillshading: boolean = true
	public y: number|"surface" = "surface"
	public seed: bigint = BigInt(0)
	
	public biomeColors: Map<string, {r: number, g: number, b: number}> = new Map()

	public world_preset: Identifier
	public dimension: Identifier
	public datapack?: Datapack 

	private router: any;
	private sampler?: Climate.Sampler;
	private surfaceDensityFunction?: DensityFunction;

	private depth_scale = 0;

	constructor(options: L.GridLayerOptions, datapack: Datapack, world_preset: Identifier, dimension: Identifier) {
		super(options)
		this.tileSize = options.tileSize as number
		this.calcResolution = 1 / 4
		this.world_preset = world_preset
		this.datapack = datapack
		this.dimension = dimension

		this.datapackLoader = this.reloadDatapack()
//		this.settings = options.settings ?? this.settings
		this.createWorkers()
	}

	private createWorkers(){
		this.workers = []
		for (let i = 0; i < WORKER_COUNT; i++) {
			const worker = new MultiNoiseCalculator()
			worker.onmessage = (ev) => {
				const tile = this.Tiles[ev.data.key]
				if (tile === undefined)
					return

				tile.array = ev.data.array
				tile.step = ev.data.step

				tile.isRendering = true
				this.renderTile(tile)

				tile.done()
				tile.done = () => { /* nothing */ }
			}

			this.workers.push(worker)
		}
	}

	renderTile(tile: Tile) {
		tile.isRendering = false
		if (tile.array === undefined || tile.step === undefined){
			console.warn("trying to render empty tile")
			return
		}
		tile.ctx.clearRect(0, 0, this.tileSize, this.tileSize)

		for (let x = 0; x < this.tileSize * this.calcResolution; x++) {
			for (let z = 0; z < this.tileSize * this.calcResolution; z++) {
				
				let hillshade = 1.0
				if (this.enable_hillshading && (this.y === "surface" || tile.array[x+1][z+1].surface < this.y)){
					
					hillshade = calculateHillshade(
						tile.array[x+2][z+1].surface - tile.array[x][z+1].surface,
						tile.array[x+1][z+2].surface - tile.array[x+1][z].surface,
						tile.step
					)
				}				
				
				const biome = tile.array[x + 1][z + 1].biome
				let biomeColor = this.biomeColors.get(biome)
				if (biomeColor === undefined) {
					const hash = hashCode(biome)
					biomeColor = {
						r: (hash & 0xFF0000) >> 16,
						g: (hash & 0x00FF00) >> 8,
						b: hash & 0x0000FF
					}
				}
				tile.ctx.fillStyle = `rgb(${biomeColor.r * hillshade}, ${biomeColor.g * hillshade}, ${biomeColor.b * hillshade})`
				tile.ctx.fillRect(x / this.calcResolution, z / this.calcResolution, 1 / this.calcResolution, 1 / this.calcResolution)

			}
		}
	}

	async reloadDatapack() {
		if (this.datapack === undefined){
			throw new Error("Datapack undefined")
			return
		}

		for (const id of await this.datapack.getIds("worldgen/density_function")) {
			const dfJson = await this.datapack.get("worldgen/density_function", id)
			this.workers.forEach(w => w.postMessage({
				task: "addDensityFunction",
				json: dfJson,
				id: id.toString()
			}))

			const df = new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(dfJson))
			WorldgenRegistries.DENSITY_FUNCTION.register(id, df)
		}

		for (const id of await this.datapack.getIds("worldgen/noise")) {
			const noiseJson = await this.datapack.get("worldgen/noise", id)
			this.workers.forEach(w => w.postMessage({
				task: "addNoise",
				json: noiseJson,
				id: id.toString()
			}))

			const noise = NoiseParameters.fromJson(noiseJson)
			WorldgenRegistries.NOISE.register(id, noise)
		}

		var dimensionJson: any
		if (await this.datapack.has("dimension", this.dimension)){
			dimensionJson = await this.datapack.get("dimension", this.dimension) 
		} else {
			const world_preset_json = (await this.datapack.get("worldgen/world_preset", this.world_preset)) as {dimensions: {[key: string]: any}}
			dimensionJson = world_preset_json.dimensions[this.dimension.toString()]
		}

		const generator = dimensionJson?.generator ?? {}
		if (generator?.type !== "minecraft:noise"){
			throw new Error("Dimension without noise generator")
		}

		let noiseSettingsJson: any
		let noiseSettingsId: Identifier
		if (typeof generator?.settings === "object"){
			noiseSettingsJson = generator?.settings
			noiseSettingsId = Identifier.parse("inline:inline")
		} else if (typeof generator?.settings === "string"){
			noiseSettingsJson = await this.datapack.get("worldgen/noise_settings", Identifier.parse(generator?.settings))
			noiseSettingsId = Identifier.parse(generator?.settings)
		} else {
			throw new Error("Malformed generator")
		}

		const biome_source = generator?.biome_source
		if (biome_source.type === "minecraft:multi_noise" && "preset" in biome_source){
			let preset = biome_source.preset
			const preset_id = Identifier.parse(preset)
			if (await this.datapack.has("worldgen/multi_noise_biome_source_parameter_list", preset_id)){
				const parameter_list = await this.datapack.get("worldgen/multi_noise_biome_source_parameter_list", preset_id) as {preset: string}
				preset = parameter_list.preset
			}
			biome_source.biomes = PRESETS[preset]
		}

		this.workers.forEach(w => w.postMessage({
			task: "setDimension",
			biomeSourceJson: biome_source,
			noiseGeneratorSettingsJson: noiseSettingsJson,
			seed: this.seed,
			id: noiseSettingsId.toString(),
			dimension_id: this.dimension.toString()
		}))

		const noiseGeneratorSettings = noiseSettingsJson ? NoiseGeneratorSettings.fromJson(noiseSettingsJson) : NoiseGeneratorSettings.create({})
		this.biomeSource = BiomeSource.fromJson(biome_source)
		//this.noiseSettings = noiseGeneratorSettings.noise
		const randomState = new RandomState(noiseGeneratorSettings, this.seed)
		this.router = randomState.router
		this.sampler = Climate.Sampler.fromRouter(this.router)

		this.depth_scale = (this.sampler.sample(0, 64, 0).depth - this.sampler.sample(0, 0, 0).depth) / 256  // don't know why 256 and not 64...

		this.surfaceDensityFunction = getSurfaceDensityFunction(noiseSettingsId, this.dimension).mapAll(randomState.createVisitor(noiseGeneratorSettings.noise, noiseGeneratorSettings.legacyRandomSource))

	}

	async rerender(){
		for (const key in this.Tiles){
			if (!this.Tiles[key].isRendering){
				this.Tiles[key].isRendering = true
				setTimeout(() => this.renderTile(this.Tiles[key]), 0)
			}
		}
	}

	async refresh(){
		console.log("canceling")
		this.workers.forEach(w => w.terminate())
		this.createWorkers()

		this.datapackLoader = this.reloadDatapack()
		await this.datapackLoader

		this.workers.forEach(w => w.postMessage({
			task: "setParams",
			y: this.y,
		}))

		this.redraw()
	}

	recalculateTile(key: string, coords: L.Coords){
		// @ts-expect-error: _tileCoordsToBounds does not exist
		const tileBounds = this._tileCoordsToBounds(coords);
		const west = tileBounds.getWest(),
			east = tileBounds.getEast(),
			north = tileBounds.getNorth(),
			south = tileBounds.getSouth();

		const crs = this._map.options.crs!,
			min = crs.project(L.latLng(north, west)).multiplyBy(0.25),
			max = crs.project(L.latLng(south, east)).multiplyBy(0.25);

		min.y *= -1
		max.y *= -1

		const message = {
			task: "calculate",
			key,
			min,
			max,
			tileSize: this.tileSize * this.calcResolution
		}

		this.workers[this.next_worker_id].postMessage(message)
		this.next_worker_id = (this.next_worker_id + 1) % WORKER_COUNT
	}

	createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement {
		const tile = L.DomUtil.create("canvas", "leaflet-tile")
		tile.width = tile.height = this.tileSize

		tile.onselectstart = tile.onmousemove = L.Util.falseFn

		const ctx = tile.getContext("2d")!

		if (!this._map) {
			return tile;
		}

		this.datapackLoader.then(() => {
			const key = this._tileCoordsToKey(coords)
			this.Tiles[key] = { coords: coords, canvas: tile, ctx: ctx, done: done }

			this.recalculateTile(key, coords)
		})

		return tile
	}

	_removeTile(key: string) {
		delete this.Tiles[key]

		// @ts-expect-error: _removeTile does not exist
		L.TileLayer.prototype._removeTile.call(this, key)
	}

	getPositionInfo(latlng: L.LatLng): {biome: Identifier, pos: BlockPos} {

		const crs = this._map.options.crs!
		const pos = crs.project(latlng)
		pos.y *= -1

		const y: number = this.y === "surface" ? this.surfaceDensityFunction!.compute(DensityFunction.context((pos.x >> 2) << 2, 0, (pos.y >> 2) << 2)) : this.y

		return {
			biome: this.biomeSource!.getBiome(pos.x >> 2, y >> 2, pos.y >> 2, this.sampler!),
			pos: BlockPos.create(pos.x, y, pos.y)
		}
	}
}