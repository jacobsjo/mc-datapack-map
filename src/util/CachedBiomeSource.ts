import { BiomeSource, Climate, Identifier } from "deepslate";


const CACHE_SIZE = 11
const CACHE_CENTER = 4

export class CachedBiomeSource implements BiomeSource {
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