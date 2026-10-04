import { BiomeSource, Climate, DensityFunction, Holder, HolderSet, Json, NbtFile, NoiseParameters, Registry, Structure, StructureSet, StructureTemplatePool, WorldgenRegistries, WorldgenStructure } from "deepslate"
import { AnonymousDatapack, Datapack, Identifier, ResourceLocation } from "mc-datapack-loader"
import { SpawnTargetAlgorithm, versionMetadata } from "../util"

const CACHE_SIZE = 11
const CACHE_CENTER = 4

export class WorldgenEngine {

    private static INSTANCE = new WorldgenEngine()

    public static getInstance() {
        return this.INSTANCE
    }

    public hasDensityFunction(id: Identifier): boolean {
        return WorldgenRegistries.DENSITY_FUNCTION.has(id)
    }

    public getBiomes(): Identifier[] {
        return WorldgenRegistries.BIOME.keys()
    }

    public getStructures(): Identifier[] {
        return WorldgenStructure.REGISTRY.keys()
    }

    public getStructureSets(): Identifier[] {
        return StructureSet.REGISTRY.keys()
    }

    public getStructureSet(id: Identifier): StructureSet | undefined {
        return StructureSet.REGISTRY.get(id)
    }

    public getStructureTag(id: Identifier): HolderSet<WorldgenStructure> | undefined {
        return WorldgenStructure.REGISTRY.getTagRegistry().get(id)
    }

    public isUnsupporedStructure(s: WorldgenStructure) {
        return s instanceof WorldgenStructure.MineshaftStructure || s instanceof WorldgenStructure.NetherFossilStructure || s instanceof WorldgenStructure.OceanMonumentStructure || s instanceof WorldgenStructure.RuinedPortalStructure
    }

    public async loadFromDatapack(datapack: AnonymousDatapack, mc_version: string) {
        const promises: Promise<void>[] = []
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_DENSITY_FUNCTION, WorldgenRegistries.DENSITY_FUNCTION, (json) => new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(json))))
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_NOISE, WorldgenRegistries.NOISE, NoiseParameters.fromJson))
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_STRUCTURE_SET, StructureSet.REGISTRY, StructureSet.fromJson))
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_TEMPLATE_POOL, StructureTemplatePool.REGISTRY, StructureTemplatePool.fromJson))
        promises.push(this.registerType(datapack, versionMetadata[mc_version].resourceLocations.structure, Structure.REGISTRY, (arrayBuffer) => () => Structure.fromNbt(NbtFile.read(new Uint8Array(arrayBuffer)).root)))
        promises.push(new Promise(async (resolve) => {
            await this.registerType(datapack, ResourceLocation.WORLDGEN_BIOME, WorldgenRegistries.BIOME, () => {return {}})
            await this.registerTag(datapack, ResourceLocation.WORLDGEN_BIOME_TAG, WorldgenRegistries.BIOME)
            await this.registerType(datapack, ResourceLocation.WORLDGEN_STRUCTURE, WorldgenStructure.REGISTRY, (obj: unknown) => {
                    const root = Json.readObject(obj) ?? {}
                    if (!versionMetadata[mc_version].dimensionPaddingEnabled){
                        delete root.dimension_padding
                    }
                    return WorldgenStructure.fromJson(obj)
                }
            )
            await this.registerTag(datapack, ResourceLocation.WORLDGEN_STRUCTURE_TAG, WorldgenStructure.REGISTRY)
            resolve()
        }))
        await Promise.all(promises)
    }

    private async registerType<T>(datapack: AnonymousDatapack, location: ResourceLocation, registry: Registry<T>, loader: (json: any, id: Identifier) => (T | (() => T))): Promise<void>{
        registry.clear()
        await Promise.all((await datapack.getIds(location)).map(id => new Promise<void>(async (resolve) => {
            try {
                const data = await datapack.get(location, id)
                try {
                    registry.register(id, loader(data, id))
                } catch (e) {
                    console.warn(`Failed to register ${location.location}: ${id.toString()}: ${e}`)
                }
            } catch (e) {
                console.warn(`Failed to load ${location.location}: ${id.toString()}: ${e}`)
            }
            resolve()
        })))
    }

    private async registerTag<T>(datapack: AnonymousDatapack, location: ResourceLocation, registry: Registry<T>){
        await this.registerType(datapack, location, registry.getTagRegistry(), (json, id) => HolderSet.fromJson<T>(registry, json, id))
    }


    public CachedBiomeSource = class implements BiomeSource {
        private cache: Map<number, Identifier> = new Map()
        private cache_center_x: number = 0
        private cache_center_z: number = 0


        constructor(
            private readonly base: BiomeSource
        ) { }

        public setupCache(x: number, z: number) {
            this.cache.clear()
            this.cache_center_x = x
            this.cache_center_z = z
        }

        getBiome(x: number, y: number, z: number, climateSampler: Climate.Sampler): Identifier {
            if ((Math.abs(x - this.cache_center_x) > CACHE_CENTER) || (Math.abs(z - this.cache_center_z) > CACHE_CENTER)){
                return this.base.getBiome(x, y, z, climateSampler)
            }
            
            const cache_index
                = (y + 64) * CACHE_SIZE * CACHE_SIZE
                + (x - this.cache_center_x + CACHE_CENTER) * CACHE_SIZE
                + (z - this.cache_center_z + CACHE_CENTER)

            const cached = this.cache.get(cache_index)
            if (cached) {
                //console.log('cache hit!')
                return cached
            } else {
                //console.log('cache miss!')
                const biome = this.base.getBiome(x, y, z, climateSampler)
                this.cache.set(cache_index, biome)
                return biome
            }
        }
    }

    public SpawnTarget = class {

        constructor(
            private paramPoints: Climate.ParamPoint[],
            private algorithm: SpawnTargetAlgorithm
        ){

        }

        public static fromJson(obj: unknown, algorithm: SpawnTargetAlgorithm){
            return new (WorldgenEngine.getInstance().SpawnTarget)(Json.readArray(obj, Climate.ParamPoint.fromJson) ?? [], algorithm)
        }

        public getSpawnPoint(climateSampler: Climate.Sampler): [number, number] {
            const self = this
            var result: [number, number] = [0, 0]
            var result_fitness = getFitness(0, 0)

            radialSearch(2048, 512, 0, 0)
            radialSearch(512, 32, result[0], result[1])

            return result

            function getFitness(x: number, z: number){
                const climate = climateSampler.sample(x >> 2, 0, z >> 2)
                const surfaceClimate = Climate.target(climate.temperature, climate.humidity, climate.continentalness, climate.erosion, 0, climate.weirdness)            
                const climateFitness = Math.min(...self.paramPoints.map(p => p.fittness(surfaceClimate)))

                switch (self.algorithm) {
                    case SpawnTargetAlgorithm.LEGACY_ZERO_BIASED:
                        const distanceFitness = Math.pow((x * x + z * z) / (2500 * 2500),2);
                        return distanceFitness + climateFitness
                    case SpawnTargetAlgorithm.BEST_CLIMATE:
                        return BigInt(x*x + z*z) + BigInt(2048 * 2048) * BigInt(Math.floor(10000 * 10000 * climateFitness))
                }
            }

            function radialSearch(maxRadius: number, radiusStep: number, centerX: number, centerZ: number) {
                var angle = 0
                var radius = radiusStep

                while(radius <= maxRadius) {
                    const x = centerX + Math.floor(Math.sin(angle) * radius)
                    const z = centerZ + Math.floor(Math.cos(angle) * radius)
                    const fitness = getFitness(x, z)
                    if (fitness < result_fitness) {
                        result = [x, z];
                        result_fitness = fitness
                    }

                    angle += radiusStep / radius
                    if (angle > Math.PI * 2) {
                        angle = 0
                        radius += radiusStep
                    }
                }
            }
        }
    }


}