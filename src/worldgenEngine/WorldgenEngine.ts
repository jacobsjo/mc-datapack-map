import { AnonymousDatapack, Identifier, ResourceLocation } from "mc-datapack-loader"
import { getCustomDensityFunction, SpawnTargetAlgorithm, versionMetadata } from "../util"
import { BiomeColors } from "../util/BiomeColors"
import { StructureIcons } from "../util/StructureIcons"
import { WorldgenEngine262 } from "./WorldgenEngine262"

type RegisryMessage = {[key: string]: {[key: string]: unknown}}

type Message = {
    mc_version: string,
    registries: RegisryMessage
    biomeColors?: unknown,
    structureIcons?: unknown
}



export interface WorldgenEngine {
    clearDimensions(): void 
    hasDensityFunction(id: Identifier): boolean
    getBiomes(): Identifier[]
    getVisibleStructures(): Identifier[] 
    getStructureSets(): Identifier[]
    loadFromDatapack(datapack: AnonymousDatapack, mc_version: string): Promise<void>
    loadFromMessage(message: any): void
    getMessage(): any
    get structureIcons(): StructureIcons
    get biomeColors(): BiomeColors
    isStructureHidden(id: Identifier): boolean
    getDimension(dimensionId: Identifier, worldPresetId: Identifier, seed: bigint): Promise<WorldgenEngine.Dimension | undefined>
}

export namespace WorldgenEngine {
    const INSTANCE = new WorldgenEngine262()
    export function getInstance(): WorldgenEngine{
        return INSTANCE
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
        getStructureSet(id: Identifier): WorldgenEngine.StructureSet | undefined
        getSpawnPoint(): [number, number]
    }

    export interface StructureSet {
        prepare(): void
        getPotentialStructureChunks(minChunkX: number, minChunkZ: number, maxChunkX: number, maxChunkZ: number): ChunkPos[]
        getStructureInChunk(chunkX: number, chunkZ: number): {id: Identifier, pos: BlockPos} | undefined
        getMinZoom(): number
    }
}