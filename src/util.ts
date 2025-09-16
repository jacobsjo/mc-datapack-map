import { Climate, DensityFunction, Identifier, lerp, NoiseRouter, NoiseSettings, WorldgenRegistries } from "deepslate"
import { ResourceLocation } from "mc-datapack-loader"
import { SpawnTarget } from "./util/SpawnTarget.js"

export function lerpClimate(a: Climate.TargetPoint, b: Climate.TargetPoint, c: number) {
	return new Climate.TargetPoint(
		lerp(c, a.temperature, b.temperature),
		lerp(c, a.humidity, b.humidity),
		lerp(c, a.continentalness, b.continentalness),
		lerp(c, a.erosion, b.erosion),
		lerp(c, a.depth, b.depth),
		lerp(c, a.weirdness, b.weirdness)
	)
}

export function lerp2Climate(a: Climate.TargetPoint, b: Climate.TargetPoint, c: Climate.TargetPoint, d: Climate.TargetPoint, e: number, f: number) {
	return lerpClimate(lerpClimate(a, b, e), lerpClimate(c, d, e), f)
}


function idIfExists(id: Identifier) {
	if (WorldgenRegistries.DENSITY_FUNCTION.has(id))
		return id
	return undefined
}

function getDimensionDensityFunction(name: string, noise_settings_id: Identifier, dimension_id: Identifier): Identifier {
	const dimensionName = dimension_id.path.split("/").reverse()[0]
	const noiseSettingsPath = noise_settings_id.path.split("/")
	noiseSettingsPath[noiseSettingsPath.length - 1] = `${dimensionName}_${noiseSettingsPath[noiseSettingsPath.length - 1]}`
	return new Identifier(noise_settings_id.namespace, noiseSettingsPath.join("/") + "/" + name)
}

export function getCustomDensityFunction(name: string, noise_settings_id: Identifier, dimension_id: Identifier): Identifier | undefined {
	return idIfExists(new Identifier(noise_settings_id.namespace, noise_settings_id.path + "/" + name))
		?? idIfExists(getDimensionDensityFunction(name, noise_settings_id, dimension_id))
		?? idIfExists(new Identifier(noise_settings_id.namespace, name))
		?? idIfExists(new Identifier("minecraft", name))
}

const zenith = 20.0 * Math.PI / 180.0;
const azimuth = 135.0 * Math.PI / 180.0;

export function calculateHillshade(slope_x: number, slope_z: number, scale: number): number {
	const slope = Math.atan(Math.sqrt(slope_x * slope_x + slope_z * slope_z) / (8 * scale));
	let aspect;
	if (slope_x == 0.0) {
		if (slope_z < 0.0) {
			aspect = Math.PI;
		} else {
			aspect = 0.0;
		}
	} else {
		aspect = Math.atan2(slope_z, -slope_x);
	}

	let hillshade = ((Math.cos(zenith) * Math.cos(slope)) + (Math.sin(zenith) * Math.sin(slope) * Math.cos(azimuth - aspect)));
	if (hillshade < 0.0)
		hillshade = 0.0;

	hillshade = hillshade * 0.7 + 0.3;
	return hillshade
}

export function hashCode(str: string) {
	let hash = 0;
	for (let i = 0, len = str.length; i < len; i++) {
		let chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

const MAX_LONG = BigInt("0x8000000000000000") // 2^63

export function parseSeed(input: string): bigint {
    if (/^[+-]?\d+$/.test(input)) {
        const value = BigInt(input)
        if (value >= -MAX_LONG && value < MAX_LONG) {
            return value
        }
    }   
    //String hashCode() function from Java
    //https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    var hash = 0, i, chr;
    if (input.length === 0) return BigInt(0);
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return BigInt(hash);
}

export function updateUrlParam(param: string, value?: string, default_value?: string) {
    const uri = window.location.search.substring(1)
    const params = new URLSearchParams(uri)
	if (value && value !== default_value) {
		params.set(param, value)
	} else {
		params.delete(param)
	}
    history.replaceState({}, "", "?" + decodeURIComponent(params.toString()))
}


type Metadata = {
	vanillaDatapack: string,
	datapackFormat: number,
	canonicalNames: string[],
	resourceLocations: {
		structure: ResourceLocation
	},
	biomes: {
		cherry_grove: string,
		pale_garden_1: string,
		pale_garden_2: string
	}
	experimentalDatapacks: {
		url: string,
		translation_key: string
	}[],
	spawnAlgorithm: SpawnTarget.Algorithm,
	dimensionPaddingEnabled: boolean
}

export const versionMetadata: { [version: string]: Metadata } = {
	"1_19": {
		vanillaDatapack: "1_19",
		experimentalDatapacks: [
			{
				url: "1_19_update_1_20",
				translation_key: "dropdown.add.built_in.update_1_20"
			}
		],
		datapackFormat: 12,
		canonicalNames: ["1.19", "1.19.1", "1.19.2", "1.19.3", "1.19.4"],
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:meadow",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_20": {
		vanillaDatapack: "1_20",
		experimentalDatapacks: [],
		datapackFormat: 15,
		canonicalNames: ["1.20", "1.20.1"],
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_20_2": {
		vanillaDatapack: "1_20_2",
		experimentalDatapacks: [],
		datapackFormat: 18,
		canonicalNames: ["1.20.2"],
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_20_4": {
		vanillaDatapack: "1_20_4",
		experimentalDatapacks: [
			{
				url: "1_20_4_update_1_21",
				translation_key: "dropdown.add.built_in.update_1_21"
			}
		],
		datapackFormat: 26,
		canonicalNames: ["1.20.3", "1.20.4"],
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_20_6": {
		vanillaDatapack: "1_20_6",
		experimentalDatapacks: [
			{
				url: "1_20_6_update_1_21",
				translation_key: "dropdown.add.built_in.update_1_21"
			}
		],
		datapackFormat: 41,
		canonicalNames: ["1.20.5", "1.20.6"],
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_21_1": {
		vanillaDatapack: "1_21",
		experimentalDatapacks: [],
		datapackFormat: 48,
		canonicalNames: ["1.21", "1.21.1"],
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.LEGACY_ZERO_BIASED,
		dimensionPaddingEnabled: false
	},
	"1_21_3": {
		vanillaDatapack: "1_21_3",
		experimentalDatapacks: [
			{
				"url": "1_21_3_winter_drop",
				"translation_key": "dropdown.add.built_in.winter_drop"
			}
		],
		datapackFormat: 57,
		canonicalNames: ["1.21.2", "1.21.3"],
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:dark_forest",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.BEST_CLIMATE,
		dimensionPaddingEnabled: false
	},
	"1_21_4": {
		vanillaDatapack: "1_21_4",
		experimentalDatapacks: [],
		datapackFormat: 61,
		canonicalNames: ["1.21.4"],
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:pale_garden",
			pale_garden_2: "minecraft:dark_forest"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.BEST_CLIMATE,
		dimensionPaddingEnabled: true
	},
	"1_21_5": {
		vanillaDatapack: "1_21_5",
		experimentalDatapacks: [],
		datapackFormat: 71,
		canonicalNames: ["1.21.5"],
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:pale_garden",
			pale_garden_2: "minecraft:pale_garden"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.BEST_CLIMATE,
		dimensionPaddingEnabled: true
	},
	"1_21_7": {
		vanillaDatapack: "1_21_7",
		experimentalDatapacks: [],
		datapackFormat: 81,
		canonicalNames: ["1.21.6", "1.21.7"],
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		},
		biomes: {
			cherry_grove: "minecraft:cherry_grove",
			pale_garden_1: "minecraft:pale_garden",
			pale_garden_2: "minecraft:pale_garden"
		},
		spawnAlgorithm: SpawnTarget.Algorithm.BEST_CLIMATE,
		dimensionPaddingEnabled: true
	},
}