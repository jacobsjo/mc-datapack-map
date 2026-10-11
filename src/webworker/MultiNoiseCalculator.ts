/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;
export { };

import { Identifier } from "mc-datapack-loader";
import { WorldgenEngine } from "../worldgenEngine/WorldgenEngine";

class MultiNoiseCalculator {

	private state: {
		worldgenEngine?: WorldgenEngine
		dimension?: WorldgenEngine.Dimension
		y: number,
		projectDown: boolean
		generationVersion: number
	} = {
		y: 0,
		generationVersion: -1,
		projectDown: true
	}

	private taskQueue: any[] = []
	private wakeup?: () => void
	private updating?: Promise<void>

	public async updateSettings(settings: {
		generationVersion: number
		presetId: string,
		dimensionId: string,
		seed: bigint,
		y: number,
		project_down: boolean
	}) {
		this.taskQueue = []
		this.updating = new Promise(async r => {
			this.state.y = settings.y ?? this.state.y
			this.state.projectDown = settings.project_down ?? this.state.projectDown
			this.state.generationVersion = settings.generationVersion ?? this.state.generationVersion

			this.state.dimension = await WorldgenEngine.getInstance().getDimension(
				Identifier.parse(settings.dimensionId),
				Identifier.parse(settings.presetId),
				settings.seed)

			r()
		})
	}

	public updateWorldgenEngine(worldgenEngineMessage: unknown){
		WorldgenEngine.getInstance().loadFromMessage(worldgenEngineMessage)
	}

	public addTask(task: any){
		this.taskQueue.push(task)
		this.wakeup?.()
		this.wakeup = undefined
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
				await new Promise<void>(r => {this.wakeup = r});
			} 

			await this.updating
			while (this.taskQueue.length > 0) {
				const nextTask = this.taskQueue.shift()
				this.calculateMultiNoiseValues(nextTask.key, nextTask.min.x, nextTask.min.y, nextTask.max.x, nextTask.max.y, nextTask.tileSize)
				await new Promise(r => setTimeout(r, 0));
				await this.updating
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
				const surface = this.state.dimension?.getSurface(x * 4, this.state.y, z * 4) ?? Number.POSITIVE_INFINITY
				const y = this.state.projectDown ? Math.min(surface, this.state.y) : this.state.y
				const biome = this.state.dimension?.getBiome(x, y, z).toString() ?? "minecraft:plains"
				const terrain = this.state.dimension?.getTerrain(x, y , z) ?? Number.POSITIVE_INFINITY
				array[ix][iz] = { surface, biome, terrain }
			}
		}

		postMessage({ key, array, step, generationVersion: this.state.generationVersion })
	}
}


const multiNoiseCalculator = new MultiNoiseCalculator()
multiNoiseCalculator.loop()

self.onmessage = async (evt: ExtendableMessageEvent) => {
	if ("worldgenEngine" in evt.data){
		multiNoiseCalculator.updateWorldgenEngine(evt.data.worldgenEngine)
	}

	// all messages that contain datapack update also contain settings
	if ("settings" in evt.data){
		await multiNoiseCalculator.updateSettings(evt.data.settings)
	}

	if ("task" in evt.data){
		multiNoiseCalculator.addTask(evt.data.task)
	} else if ("cancel" in evt.data){
		multiNoiseCalculator.removeTask(evt.data.cancel)
	}
}
