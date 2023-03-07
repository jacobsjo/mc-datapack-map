import * as L from "leaflet"
//import { last, range, takeWhile } from "lodash";
import { Climate, Identifier, WorldgenStructure, WorldgenContext } from "deepslate";
import { calculateHillshade, hashCode } from "../util";
import MultiNoiseCalculator from "../webworker/MultiNoiseCalculator?worker"
import { useBiomeSearchStore } from "../stores/useBiomeSearchStore";
import { useLoadedDimensionStore } from "../stores/useLoadedDimensionStore";
import { useSettingsStore } from "../stores/useSettingsStore";
import { useDatapackStore } from "../stores/useDatapackStore";

const WORKER_COUNT = 4

export type BiomeLayerSettings = {
	enable_hillshading: boolean,
	y: number | "surface",
	seed: bigint
}

type Tile = { coords: L.Coords, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, done: L.DoneCallback, array?: { climate: Climate.TargetPoint, surface: number, biome: string }[][], step?: number, isRendering?: boolean }
export class BiomeLayer extends L.GridLayer {
	private next_worker_id = 0

	private Tiles: { [key: string]: Tile } = {}
	private tileSize = 0
	private calcResolution = 0

	private workers: Worker[] = []

	public enable_hillshading: boolean = true

	private datapackStore = useDatapackStore()
	private loadedDimensionStore = useLoadedDimensionStore()
	private biomeSearchStore = useBiomeSearchStore()
	private settingsStore = useSettingsStore()

	private datapackLoader: Promise<void> | undefined

	constructor(options: L.GridLayerOptions) {
		super(options)
		this.tileSize = options.tileSize as number
		this.calcResolution = 1 / 4

		this.createWorkers()
		this.datapackLoader = this.reloadDatapack()
	}

	private createWorkers() {
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

	async renderTile(tile: Tile) {
		tile.isRendering = false
		if (tile.array === undefined || tile.step === undefined) {
			console.warn("trying to render empty tile")
			return
		}

		// @ts-expect-error: _tileCoordsToBounds does not exist
		const tileBounds = this._tileCoordsToBounds(tile.coords);
		const west = tileBounds.getWest(),
			east = tileBounds.getEast(),
			north = tileBounds.getNorth(),
			south = tileBounds.getSouth();

		const crs = this._map.options.crs!,
			min = crs.project(L.latLng(north, west)).multiplyBy(0.25),
			max = crs.project(L.latLng(south, east)).multiplyBy(0.25);

		min.y *= -1
		max.y *= -1

		const size = max.subtract(min)

		const generationConxet = new WorldgenStructure.GenerationContext(() => 70, WorldgenContext.create(-64, 384), 63)

		tile.ctx.clearRect(0, 0, this.tileSize, this.tileSize)

		for (let x = 0; x < this.tileSize * this.calcResolution; x++) {
			for (let z = 0; z < this.tileSize * this.calcResolution; z++) {
				const biome = tile.array[x + 1][z + 1].biome

				if (this.biomeSearchStore.biomes.size > 0 && !this.biomeSearchStore.biomes.has(biome)) {
					continue
				}

				let hillshade = 1.0
				if (this.enable_hillshading && (this.settingsStore.y === "surface" || tile.array[x + 1][z + 1].surface < this.settingsStore.y)) {

					hillshade = calculateHillshade(
						tile.array[x + 2][z + 1].surface - tile.array[x][z + 1].surface,
						tile.array[x + 1][z + 2].surface - tile.array[x + 1][z].surface,
						tile.step
					)
				}

				let biomeColor = (await this.loadedDimensionStore.biome_colors).get(biome)
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
        for (const id of await this.datapackStore.composite_datapack.getIds("worldgen/density_function")) {
			const dfJson = await this.datapackStore.composite_datapack.get("worldgen/density_function", id)
			this.workers.forEach(w => w.postMessage({
				task: "addDensityFunction",
				json: dfJson,
				id: id.toString()
			}))
		}

		for (const id of await this.datapackStore.composite_datapack.getIds("worldgen/noise")) {
			const noiseJson = await this.datapackStore.composite_datapack.get("worldgen/noise", id)
			this.workers.forEach(w => w.postMessage({
				task: "addNoise",
				json: noiseJson,
				id: id.toString()
			}))

		}


		await Promise.all(this.workers.map(async w => w.postMessage({
			task: "setDimension",
			biomeSourceJson: await this.loadedDimensionStore.biome_source_json,
			noiseGeneratorSettingsJson: (await this.loadedDimensionStore.noise_settings).json,
			seed: this.settingsStore.seed,
			noiseSettingsId: (await this.loadedDimensionStore.noise_settings).id.toString(),
			dimensionId: this.settingsStore.dimension.toString()
		})))
	}

	async rerender() {
		for (const key in this.Tiles) {
			if (!this.Tiles[key].isRendering) {
				this.Tiles[key].isRendering = true
				setTimeout(() => this.renderTile(this.Tiles[key]), 0)
			}
		}
	}

	async refresh() {
		//console.log("canceling")
		this.workers.forEach(w => w.terminate())
		this.createWorkers()

		this.datapackLoader = this.reloadDatapack()
		await this.datapackLoader

		this.workers.forEach(w => w.postMessage({
			task: "setParams",
			y: this.settingsStore.y,
		}))

		this.redraw()
	}

	recalculateTile(key: string, coords: L.Coords) {
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

		this.datapackLoader?.then((l) => {
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

}