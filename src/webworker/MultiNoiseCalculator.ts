/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;
export { };

import { Climate, DensityFunction, WorldgenRegistries, Identifier, Holder, NoiseRouter, NoiseGeneratorSettings, RandomState, NoiseParameters, MultiNoiseBiomeSource, BiomeSource, FixedBiomeSource } from "deepslate"
import { getSurfaceDensityFunction } from "../util"

class MultiNoiseCalculator {
  private router?: NoiseRouter
  private sampler?: Climate.Sampler
  private y: number | "surface" = "surface"
  private surfaceDensityFunction?: DensityFunction
  private biomeSource: BiomeSource = new FixedBiomeSource(Identifier.create("plains"))

  public calculateMultiNoiseValues(key: string, min_x: number, min_z: number, max_x: number, max_z: number, tileSize: number): void {
    const array: { climate: Climate.TargetPoint, surface: number, biome: string }[][] = Array(tileSize + 2)
    const step = (max_x - min_x) / tileSize
    for (let ix = -1; ix < tileSize + 2; ix++) {
      array[ix] = Array(tileSize + 2)
      for (let iz = -1; iz < tileSize + 2; iz++) {
        const x = ix * step + min_x
        const z = iz * step + min_z
        const surface = this.surfaceDensityFunction?.compute(DensityFunction.context(x<<2, 0, z<<2)) ?? 0
        const y = (this.y === "surface") ? surface : this.y
        const climate = this.sampler?.sample(x, y / 4, z) ?? new Climate.TargetPoint(0,0,0,0,0,0)
        const biome = this.biomeSource.getBiome(0, 0, 0, climate).toString()
        array[ix][iz] = { climate, surface, biome }
      }
    }

    postMessage({ key, array, step })

  }

  public setDimension(biomeSourceJson: unknown, noiseGeneratorSettingsJson: unknown, seed: bigint, id: string, dimension_id: string) {
    this.biomeSource = BiomeSource.fromJson(biomeSourceJson)
    const noiseGeneratorSettings = noiseGeneratorSettingsJson ? NoiseGeneratorSettings.fromJson(noiseGeneratorSettingsJson) : NoiseGeneratorSettings.create({})
    const randomState = new RandomState(noiseGeneratorSettings, seed)
    this.router = randomState.router
    this.sampler = Climate.Sampler.fromRouter(this.router)
    this.surfaceDensityFunction =  getSurfaceDensityFunction(Identifier.parse(id), Identifier.parse(dimension_id)).mapAll(randomState.createVisitor(noiseGeneratorSettings.noise, noiseGeneratorSettings.legacyRandomSource))

  }

  public addDensityFunction(id: Identifier, json: unknown) {
    const df = new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(json))
    WorldgenRegistries.DENSITY_FUNCTION.register(id, df)
  }

  public addNoise(id: Identifier, json: unknown) {
    const noise = NoiseParameters.fromJson(json)
    WorldgenRegistries.NOISE.register(id, noise)
  }


  public setParams(y: number | "surface") {
    this.y = y
  }

  public handleMessage(evt: ExtendableMessageEvent) {
    if (evt.data.task === "calculate") {
      this.calculateMultiNoiseValues(evt.data.key, evt.data.min.x, evt.data.min.y, evt.data.max.x, evt.data.max.y, evt.data.tileSize)
    } else if (evt.data.task === "setDimension") {
      this.setDimension(evt.data.biomeSourceJson, evt.data.noiseGeneratorSettingsJson, evt.data.seed, evt.data.id, evt.data.dimension_id)
    } else if (evt.data.task === "addDensityFunction") {
      this.addDensityFunction(Identifier.parse(evt.data.id), evt.data.json)
    } else if (evt.data.task === "addNoise") {
      this.addNoise(Identifier.parse(evt.data.id), evt.data.json)
    } else if (evt.data.task === "setParams") {
      this.setParams(evt.data.y)
    }
  }
  
}


const multiNoiseCalculator = new MultiNoiseCalculator()

self.onmessage = (evt: ExtendableMessageEvent) => {
  multiNoiseCalculator.handleMessage(evt)
}
