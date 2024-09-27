/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;
export { };

import { Climate, DensityFunction, WorldgenRegistries, Identifier, Holder, NoiseRouter, NoiseGeneratorSettings, RandomState, NoiseParameters, MultiNoiseBiomeSource, BiomeSource, FixedBiomeSource } from "deepslate"

class MultiNoiseCalculator {

	private state: {
		sampler?: Climate.Sampler,
		biomeSource?: BiomeSource,
		surfaceDensityFunction?: DensityFunction,
		terrainDensityFunction?: DensityFunction,
		noiseGeneratorSettings?: NoiseGeneratorSettings
		randomState?: RandomState
		y: number,
		seed: bigint,
		projectDown: boolean
		generationVersion: number
	} = {
		y: 0,
		seed: BigInt(0),
		generationVersion: -1,
		projectDown: true
	}

	private taskQueue: any[] = []

	public update(update: {
		biomeSourceJson?: unknown,
		noiseGeneratorSettingsJson?: unknown,
		densityFunctions?: { [key: string]: unknown },
		noises?: { [key: string]: unknown },
		surfaceDensityFunctionId?: string,
		terrainDensityFunctionId?: string,
		generationVersion?: number

		seed?: bigint,
		y?: number,
		project_down: boolean
	}) {
		this.state.seed = update.seed ?? this.state.seed
		this.state.y = update.y ?? this.state.y
		this.state.projectDown = update.project_down ?? this.state.projectDown
		this.state.generationVersion = update.generationVersion ?? this.state.generationVersion

		if (update.biomeSourceJson) {
			this.state.biomeSource = BiomeSource.fromJson(update.biomeSourceJson)
		}


		if (update.densityFunctions) {
			WorldgenRegistries.DENSITY_FUNCTION.clear()
			for (const id in update.densityFunctions) {
				const df = new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(update.densityFunctions[id]))
				WorldgenRegistries.DENSITY_FUNCTION.register(Identifier.parse(id), df)
			}
		}

		if (update.noises) {
			WorldgenRegistries.NOISE.clear()
			for (const id in update.noises) {
				const noise = NoiseParameters.fromJson(update.noises[id])
				WorldgenRegistries.NOISE.register(Identifier.parse(id), noise)
			}
		}

		if (update.noiseGeneratorSettingsJson) {
			this.state.noiseGeneratorSettings = NoiseGeneratorSettings.fromJson(update.noiseGeneratorSettingsJson)
			this.state.randomState = new RandomState(this.state.noiseGeneratorSettings, this.state.seed)
			this.state.sampler = Climate.Sampler.fromRouter(this.state.randomState.router)
		}

		if (this.state.randomState && this.state.noiseGeneratorSettings) {
			if (update.surfaceDensityFunctionId === "<none>"){
				this.state.surfaceDensityFunction = undefined
			} else if (update.surfaceDensityFunctionId) {
				this.state.surfaceDensityFunction = new DensityFunction.HolderHolder(
					Holder.reference(
						WorldgenRegistries.DENSITY_FUNCTION,
						Identifier.parse(update.surfaceDensityFunctionId)
					)).mapAll(this.state.randomState.createVisitor(this.state.noiseGeneratorSettings.noise, this.state.noiseGeneratorSettings.legacyRandomSource))
			}

			if (update.terrainDensityFunctionId === "<none>"){
				this.state.terrainDensityFunction = undefined
			} else if (update.terrainDensityFunctionId) {
				this.state.terrainDensityFunction = new DensityFunction.HolderHolder(
					Holder.reference(
						WorldgenRegistries.DENSITY_FUNCTION,
						Identifier.parse(update.terrainDensityFunctionId)
					)).mapAll(this.state.randomState.createVisitor(this.state.noiseGeneratorSettings.noise, this.state.noiseGeneratorSettings.legacyRandomSource))
			}
			
		}

		this.taskQueue = []
	}

	public addTask(task: any){
		this.taskQueue.push(task)
	}

	public removeTask(key: string){
		const index = this.taskQueue.findIndex((task) => task.key === key)
		if (index >= 0){
			this.taskQueue.splice(index, 1)
		}
	}

	public async loop() {
		while (true) {
			if (this.taskQueue.length === 0) {
				await new Promise(r => setTimeout(r, 1000));
			} else {
				const nextTaks = this.taskQueue.shift()
				this.calculateMultiNoiseValues(nextTaks.key, nextTaks.min.x, nextTaks.min.y, nextTaks.max.x, nextTaks.max.y, nextTaks.tileSize)
				await new Promise(r => setTimeout(r, 0));
			}
		}
	}

	private calculateMultiNoiseValues(key: string, min_x: number, min_z: number, max_x: number, max_z: number, tileSize: number): void {
		const array: { surface: number, biome: string, terrain: number }[][] = Array(tileSize + 2)
		const step = (max_x - min_x) / tileSize
		for (let ix = -1; ix < tileSize + 2; ix++) {
			array[ix] = Array(tileSize + 2)
			for (let iz = -1; iz < tileSize + 2; iz++) {
				const x = ix * step + min_x
				const z = iz * step + min_z
				const surface = this.state.surfaceDensityFunction?.compute(DensityFunction.context(x * 4, this.state.y, z * 4)) ?? Number.POSITIVE_INFINITY
				const y = this.state.projectDown ? Math.min(surface, this.state.y) : this.state.y
				const biome = this.state.biomeSource?.getBiome(x, y >> 2, z, this.state.sampler!).toString() ?? "minecraft:plains"
				const terrain = this.state.terrainDensityFunction?.compute(DensityFunction.context(x * 4, y , z * 4)) ?? Number.POSITIVE_INFINITY
				array[ix][iz] = { surface, biome, terrain }
			}
		}

		postMessage({ key, array, step, generationVersion: this.state.generationVersion })
	}
}


const multiNoiseCalculator = new MultiNoiseCalculator()
multiNoiseCalculator.loop()

self.onmessage = (evt: ExtendableMessageEvent) => {
	if ("update" in evt.data){
		multiNoiseCalculator.update(evt.data.update)
	} else if ("task" in evt.data){
		multiNoiseCalculator.addTask(evt.data.task)
	} else if ("cancel" in evt.data){
		multiNoiseCalculator.removeTask(evt.data.cancel)
	}
}
