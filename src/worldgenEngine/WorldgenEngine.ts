import { BiomeSource, Climate, DensityFunction, Holder, HolderSet, Json, NbtFile, NoiseGeneratorSettings, NoiseParameters, RandomState, Registry, Structure, StructureSet, StructureTemplatePool, WorldgenRegistries, WorldgenStructure } from "deepslate"
import { AnonymousDatapack, Identifier, ResourceLocation } from "mc-datapack-loader"
import { getCustomDensityFunction, SpawnTargetAlgorithm, versionMetadata } from "../util"
import { BiomeColors } from "../util/BiomeColors"
import { StructureIcons } from "../util/StructureIcons"

const CACHE_SIZE = 11
const CACHE_CENTER = 4

type RegisryMessage = {[key: string]: {[key: string]: unknown}}

type Message = {
    mc_version: string,
    registries: RegisryMessage
    biomeColors?: unknown,
    structureIcons?: unknown
}

export class WorldgenEngine {
    #DIMENSION_REGISTRY = new Registry<any>(Identifier.create("dimension"), (obj) => obj)
    #WORLD_PRESET_REGISTRY = new Registry<any>(Identifier.create("worldgen/world_preset"), (obj) => obj)
    #DIMENSION_TYPE_REGISTRY = new Registry<any>(Identifier.create("dimension_type"), (obj) => obj)
    #MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST_REGISTRY = new Registry<any>(Identifier.create("worldgen/multi_noise_biome_source_parameter_list"), (obj) => obj)

    private static INSTANCE = new WorldgenEngine()

    private loadedDimensions = new Map<string, WorldgenEngine.Dimension>()
    #biomeColor: BiomeColors | undefined
    #structureIcons: StructureIcons | undefined
    #hiddenStructures = new Set<string>()
    #message: Message | undefined
    #mc_version: string | undefined

    public static getInstance() {
        return this.INSTANCE
    }

    public hasDensityFunction(id: Identifier): boolean {
        return WorldgenRegistries.DENSITY_FUNCTION.has(id)
    }

    public getBiomes(): Identifier[] {
        return WorldgenRegistries.BIOME.keys()
    }

    public getVisibleStructures(): Identifier[] {
        return WorldgenStructure.REGISTRY.keys().filter(s => !this.#hiddenStructures.has(s.toString()))
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
        this.#mc_version = mc_version
        this.#message = {
            mc_version: mc_version,
            registries: {}
        }

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

        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_NOISE_SETTINGS, WorldgenRegistries.NOISE_SETTINGS, NoiseGeneratorSettings.fromJson))
        promises.push(this.registerType(datapack, ResourceLocation.DIMENSION, this.#DIMENSION_REGISTRY, (obj) => obj))
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_WORLD_PRESET, this.#WORLD_PRESET_REGISTRY, (obj) => obj))
        promises.push(this.registerType(datapack, ResourceLocation.DIMENSION_TYPE, this.#DIMENSION_TYPE_REGISTRY, (obj) => obj))
        promises.push(this.registerType(datapack, ResourceLocation.WORLDGEN_MULTI_NOISE_BIOME_SOURCE_PRARAMETER_LIST, this.#MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST_REGISTRY, (obj) => obj))


        promises.push(datapack.get(ResourceLocation.DATA_FILE, new Identifier("c", "worldgen/biome_colors")).then(json => {
            this.#biomeColor = new BiomeColors('c', json as {[key: string]: { r: number, g: number, b: number }})
            this.#message!.biomeColors = json
        }))
        promises.push(datapack.get(ResourceLocation.DATA_FILE, new Identifier("c", "worldgen/structure_icons")).then(json => {
            this.#structureIcons = new StructureIcons('c', json as {[key: string]: {item?: string, name?: string}})
            this.#message!.structureIcons = json
        }))

        await Promise.all(promises)

        this.loadedDimensions.clear()
        this.#updateHiddenStructures()
    }

    private async registerType<T>(datapack: AnonymousDatapack, location: ResourceLocation, registry: Registry<T>, loader: (json: any, id: Identifier) => (T | (() => T))): Promise<void>{
        registry.clear()
        const registryMessage: {[key: string]: unknown} = {}
        await Promise.all((await datapack.getIds(location)).map(id => new Promise<void>(async (resolve) => {
            try {
                const data = await datapack.get(location, id)
                try {
                    registry.register(id, loader(data, id))
                    registryMessage[id.toString()] = data
                } catch (e) {
                    console.warn(`Failed to register ${location.location}: ${id.toString()}: ${e}`)
                }
            } catch (e) {
                console.warn(`Failed to load ${location.location}: ${id.toString()}: ${e}`)
            }
            resolve()
        })))
        this.#message!.registries[registry.key.toString()] = registryMessage
    }

    private async registerTag<T>(datapack: AnonymousDatapack, location: ResourceLocation, registry: Registry<T>){
        await this.registerType(datapack, location, registry.getTagRegistry(), (json, id) => HolderSet.fromJson<T>(registry, json, id))
    }


    public loadFromMessage(message: any){ // Message
        this.#mc_version = message.mc_version
        this.registerTypeFromMessage(message.registries, WorldgenRegistries.DENSITY_FUNCTION, (json) => new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(json)))
        this.registerTypeFromMessage(message.registries, WorldgenRegistries.NOISE, NoiseParameters.fromJson)
        this.registerTypeFromMessage(message.registries, StructureSet.REGISTRY, StructureSet.fromJson)
        this.registerTypeFromMessage(message.registries, StructureTemplatePool.REGISTRY, StructureTemplatePool.fromJson)
        this.registerTypeFromMessage(message.registries, Structure.REGISTRY, (arrayBuffer) => () => Structure.fromNbt(NbtFile.read(new Uint8Array(arrayBuffer)).root))
        this.registerTypeFromMessage(message.registries, WorldgenRegistries.BIOME, () => {return {}})
        this.registerTagFromMessage(message.registries, WorldgenRegistries.BIOME)
        this.registerTypeFromMessage(message.registries, WorldgenStructure.REGISTRY, (obj: unknown) => {
            const root = Json.readObject(obj) ?? {}
            if (!versionMetadata[message.mc_version].dimensionPaddingEnabled){
                delete root.dimension_padding
            }
            return WorldgenStructure.fromJson(obj)
        })
        this.registerTagFromMessage(message.registries, WorldgenStructure.REGISTRY)

        this.registerTypeFromMessage(message.registries, WorldgenRegistries.NOISE_SETTINGS, NoiseGeneratorSettings.fromJson)
        this.registerTypeFromMessage(message.registries, this.#DIMENSION_REGISTRY, (obj) => obj)
        this.registerTypeFromMessage(message.registries, this.#WORLD_PRESET_REGISTRY, (obj) => obj)
        this.registerTypeFromMessage(message.registries, this.#DIMENSION_TYPE_REGISTRY, (obj) => obj)
        this.registerTypeFromMessage(message.registries, this.#MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST_REGISTRY, (obj) => obj)

        if (message.biomeColors) this.#biomeColor = new BiomeColors('c', message.biomeColors as {[key: string]: { r: number, g: number, b: number }})
        if (message.structureIcons) this.#structureIcons = new StructureIcons('c', message.structureIcons as {[key: string]: {item?: string, name?: string}})

        this.loadedDimensions.clear()
        this.#updateHiddenStructures()
    }

    private registerTypeFromMessage<T>(registryMessages: RegisryMessage, registry: Registry<T>, loader: (json: any, id: Identifier) => (T | (() => T))){
        registry.clear()
        Object.entries(registryMessages[registry.key.toString()]).forEach(entry => {
            const id = Identifier.parse(entry[0])
            const data = entry[1]
            try {
                registry.register(id, loader(data, id))
            } catch (e) {
                console.warn(`Failed to register ${registry.key}: ${id.toString()}: ${e}`)
            }
        })
    }

    private registerTagFromMessage<T>(registryMessages: RegisryMessage, registry: Registry<T>){
        this.registerTypeFromMessage(registryMessages, registry.getTagRegistry(), (json, id) => HolderSet.fromJson<T>(registry, json, id))
    }


    #updateHiddenStructures(){
        this.#hiddenStructures.clear()
        for (const holder of this.getStructureTag(new Identifier("jacobsjo", "hidden_from_map"))?.getEntries() ?? []){
            this.#hiddenStructures.add(holder.key()?.toString() ?? "")
        }
    }

    public getMessage(): any{
        return this.#message
    }


    get structureIcons() {
        return this.#structureIcons!
    }

    get biomeColors() {
        return this.#biomeColor!
    }

    public isStructureHidden(id: Identifier) {
        return this.#hiddenStructures.has(id.toString())
    }

    public async getDimension(dimensionId: Identifier, worldPresetId: Identifier, seed: bigint): Promise<WorldgenEngine.Dimension | undefined>{
        const cacheString = `${worldPresetId.toString()};${dimensionId.toString()}`

        if (!this.loadedDimensions.has(cacheString)){
            let dimensionJson: any
            
            if (this.#DIMENSION_REGISTRY.has(dimensionId)) {
                dimensionJson = this.#DIMENSION_REGISTRY.get(dimensionId)
            } else {
                const worldPresetJson = this.#WORLD_PRESET_REGISTRY.get(worldPresetId) as { dimensions: { [key: string]: any } }
                dimensionJson = worldPresetJson.dimensions[dimensionId.toString()]
            }

            // get level height from dimension type
            const dimensionTypeId = Identifier.parse(dimensionJson.type)
            const dimensionTypeJson = this.#DIMENSION_TYPE_REGISTRY.get(dimensionTypeId)
            const levelHeight = {minY: dimensionTypeJson.min_y, height: dimensionTypeJson.height}

            const generator = Json.readObject(dimensionJson.generator) ?? {}
            if (generator?.type !== "minecraft:noise") {
                // flat worlds etc. are not supported
                throw new Error("Dimension without noise generator")
            }

            // get Noise Settings json (from inline or from datapack)
            let noiseGeneratorSettings: NoiseGeneratorSettings
            let noiseSettingsId: Identifier | undefined
            if (typeof generator.settings === "object") {
                noiseGeneratorSettings = NoiseGeneratorSettings.fromJson(generator.settings) ?? {}
            } else if (typeof generator.settings === "string") {
                noiseSettingsId = Identifier.parse(Json.readString(generator.settings) ?? "")
                noiseGeneratorSettings = WorldgenRegistries.NOISE_SETTINGS.get(noiseSettingsId)!
            } else {
                throw new Error("Malformed generator")
            }

            // if multi noise is using preset, fill in Build-In biome list
            const biomeSourceJson = Json.readObject(generator.biome_source) ?? {}
            if (biomeSourceJson.type === "minecraft:multi_noise" && "preset" in biomeSourceJson) {
                let preset = Json.readString(biomeSourceJson.preset) ?? ""
                const preset_id = Identifier.parse(preset)
                if (this.#MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST_REGISTRY.has(preset_id)) {
                    const parameter_list = this.#MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST_REGISTRY.get(preset_id) as { preset: string }
                    preset = parameter_list.preset
                }

                const metadata = versionMetadata[this.#mc_version!];
                const response = await fetch(`/biome_parameters/minecraft_${metadata.vanillaDatapack}/${Identifier.parse(preset).path}.json`)
                const json = await response.json()

                biomeSourceJson.biomes = json.biomes
            }

            const biomeSource = BiomeSource.fromJson(biomeSourceJson)
            const randomState = new RandomState(noiseGeneratorSettings, seed)
            const sampler = Climate.Sampler.fromRouter(randomState.router)

            const surfaceDensityFunctionId = getCustomDensityFunction("snowcapped_surface", noiseSettingsId ?? Identifier.create("empty"), dimensionId)
            let surfaceDensityFunction: DensityFunction | undefined
            if (surfaceDensityFunctionId !== undefined){
                surfaceDensityFunction = new DensityFunction.HolderHolder(
                    Holder.reference(WorldgenRegistries.DENSITY_FUNCTION, surfaceDensityFunctionId))
                        .mapAll(randomState.createVisitor(
                            noiseGeneratorSettings.noise,
                            noiseGeneratorSettings.legacyRandomSource
                        ))
            }
            
            const terrainDensityFunctionId = getCustomDensityFunction("map_simple_terrain", noiseSettingsId ?? Identifier.create("empty"), dimensionId)
            let terrainDensityFunction: DensityFunction | undefined
            if (terrainDensityFunctionId !== undefined){
                terrainDensityFunction = new DensityFunction.HolderHolder(
                    Holder.reference(WorldgenRegistries.DENSITY_FUNCTION, terrainDensityFunctionId))
                        .mapAll(randomState.createVisitor(
                            noiseGeneratorSettings.noise,
                            noiseGeneratorSettings.legacyRandomSource
                        ))
            }

            this.loadedDimensions.set(cacheString, new class implements WorldgenEngine.Dimension {
                getBiome(x: number, y: number, z: number): Identifier {
                    return biomeSource.getBiome(x, y, z, sampler)
                }

                getSurface(x: number, y: number, z: number): number | undefined {
                    return surfaceDensityFunction?.compute(DensityFunction.context(x, y, z))
                }

                getTerrain(x: number, y: number, z: number): number | undefined {
                    return terrainDensityFunction?.compute(DensityFunction.context(x, y, z))
                }

                hasSurface(): boolean {
                    return surfaceDensityFunction !== undefined
                }

                hasTerrain(): boolean {
                    return terrainDensityFunction !== undefined
                }

                getLevelHeight(){
                    return levelHeight
                }

                getSeaLevel() {
                    return noiseGeneratorSettings.seaLevel
                }

            }())
        }
        return this.loadedDimensions.get(cacheString)!
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

export namespace WorldgenEngine {
    export interface Dimension {
        getBiome(x: number, y: number, z: number): Identifier
        getSurface(x: number, y: number, z: number): number | undefined
        getTerrain(x: number, y: number, z: number): number | undefined
        hasSurface(): boolean
        hasTerrain(): boolean
        getLevelHeight(): {minY: number, height: number}
        getSeaLevel(): number
    }
}