import { Climate, Json } from "deepslate";


export class SpawnTarget{

    constructor(
        private paramPoints: Climate.ParamPoint[],
        private algorithm: SpawnTarget.Algorithm
    ){

    }

    public static fromJson(obj: unknown, algorithm: SpawnTarget.Algorithm){
        return new SpawnTarget(Json.readArray(obj, Climate.ParamPoint.fromJson) ?? [], algorithm)
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
                case SpawnTarget.Algorithm.LEGACY_ZERO_BIASED:
                    const distanceFitness = Math.pow((x * x + z * z) / (2500 * 2500),2);
                    return distanceFitness + climateFitness
                case SpawnTarget.Algorithm.BEST_CLIMATE:
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

export namespace SpawnTarget {
    export enum Algorithm {
        LEGACY_ZERO_BIASED,
        BEST_CLIMATE
    }
}

    


