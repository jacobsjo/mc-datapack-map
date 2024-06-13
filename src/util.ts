import { Climate, DensityFunction, Identifier, lerp, NoiseRouter, NoiseSettings, WorldgenRegistries } from "deepslate"
import { ResourceLocation } from "mc-datapack-loader"

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

function getDimensionDensityFunction(noise_settings_id: Identifier, dimension_id: Identifier): Identifier {
	const dimensionName = dimension_id.path.split("/").reverse()[0]
	const noiseSettingsPath = noise_settings_id.path.split("/")
	noiseSettingsPath[noiseSettingsPath.length - 1] = `${dimensionName}_${noiseSettingsPath[noiseSettingsPath.length - 1]}`
	return new Identifier(noise_settings_id.namespace, noiseSettingsPath.join("/") + "/snowcapped_surface")
}

export function getSurfaceDensityFunction(noise_settings_id: Identifier, dimension_id: Identifier): Identifier | undefined {
	return idIfExists(new Identifier(noise_settings_id.namespace, noise_settings_id.path + "/snowcapped_surface"))
		?? idIfExists(getDimensionDensityFunction(noise_settings_id, dimension_id))
		?? idIfExists(new Identifier(noise_settings_id.namespace, "snowcapped_surface"))
		?? idIfExists(new Identifier("minecraft", "snowcapped_surface"))
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

type Metadata = {
	vanillaDatapack: string,
	datapackFormat: number,
	resourceLocations: {
		structure: ResourceLocation
	},
	experimentalDatapacks: {
		url: string,
		translation_key: string
	}[]
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
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		}
	},
	"1_20": {
		vanillaDatapack: "1_20",
		experimentalDatapacks: [],
		datapackFormat: 15,
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		}
	},
	"1_20_2": {
		vanillaDatapack: "1_20_2",
		experimentalDatapacks: [],
		datapackFormat: 18,
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		}
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
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		}
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
		resourceLocations: {
			structure: ResourceLocation.LEGACY_STRUCTURE
		}
	},
	"1_21": {
		vanillaDatapack: "1_21",
		experimentalDatapacks: [],
		datapackFormat: 48,
		resourceLocations: {
			structure: ResourceLocation.STRUCTURE
		}
	},
}