import { BiomeSource, FixedBiomeSource, Identifier, StructureSet, Climate, DensityFunction, Holder, WorldgenRegistries, NoiseParameters, HolderSet, WorldgenStructure, Json, NoiseGeneratorSettings, RandomState } from "deepslate";
import { defineStore } from "pinia";
import { compile, computed, ref } from "vue";
import { PRESETS } from "../BuildIn/MultiNoiseBiomeParameterList";
import { getSurfaceDensityFunction } from "../util";
import { useDatapackStore } from "./useDatapackStore";
import { useSettingsStore } from "./useSettingsStore";


export const useLoadedDimensionStore = defineStore('loaded_dimension', () => {

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()

    const biome_colors = computed(async () => {
        const biomeColors = new Map<string, { r: number, g: number, b: number }>()

        const ids = await (datapackStore.composite_datapack.getIds(""))
        for (const id of ids) {
            if (id.path !== "biome_colors") continue;

            const json = await datapackStore.composite_datapack.get("", id) as { r: number, g: number, b: number }[]
            for (const biome in json) {
                const biome_id = biome.indexOf(":") === -1 ? id.namespace + ":" + biome : biome

                biomeColors.set(biome_id, json[biome])
            }
        }

        return biomeColors
    })

    var dimension_json = computed(async () => {

        //set dependencies
        settingsStore.dimension
        settingsStore.world_preset

        if (await datapackStore.composite_datapack.has("dimension", settingsStore.dimension)){
            return await datapackStore.composite_datapack.get("dimension", settingsStore.dimension) 
        } else {
            const world_preset_json = (await datapackStore.composite_datapack.get("worldgen/world_preset", settingsStore.world_preset)) as {dimensions: {[key: string]: any}}
            return world_preset_json.dimensions[settingsStore.dimension.toString()]
        }
    })
    
    const y_limits = computed(async () => {
        const dimension_type_id = Identifier.parse((await dimension_json.value).type)
        const dimension_type_json = await datapackStore.composite_datapack.get("dimension_type", dimension_type_id) as any
        return [dimension_type_json.min_y, dimension_type_json.min_y + dimension_type_json.height]
    })


    const generator = computed(async () => {
        // get json of noise generator
        const dimensionJson = await dimension_json.value
		const generator = Json.readObject(dimensionJson.generator) ?? {}
		if (generator?.type !== "minecraft:noise"){
			throw new Error("Dimension without noise generator")
		}
        return generator
    })

    const noise_settings = computed(async () => {
        // get Noise Settings json (from inline or from datapack)
		let noiseSettingsJson: unknown
		let noiseSettingsId: Identifier
		if (typeof (await generator.value).settings === "object"){
			noiseSettingsJson = (await generator.value).settings
			noiseSettingsId = Identifier.parse("inline:inline")
		} else if (typeof (await generator.value).settings === "string"){
			noiseSettingsId = Identifier.parse(Json.readString((await generator.value).settings) ?? "")
			noiseSettingsJson = await datapackStore.composite_datapack.get("worldgen/noise_settings", noiseSettingsId)
		} else {
			throw new Error("Malformed generator")
		}
        return {id: noiseSettingsId, json: noiseSettingsJson}
    })

    const biome_source_json = computed(async () => {
        // if multi noise is using preset, fill in Build-In biome list
		const biome_source = Json.readObject((await generator.value).biome_source) ?? {}
		if (biome_source.type === "minecraft:multi_noise" && "preset" in biome_source){
			let preset = Json.readString(biome_source.preset) ?? ""
			const preset_id = Identifier.parse(preset)
			if (await datapackStore.composite_datapack.has("worldgen/multi_noise_biome_source_parameter_list", preset_id)){
				const parameter_list = await datapackStore.composite_datapack.get("worldgen/multi_noise_biome_source_parameter_list", preset_id) as {preset: string}
				preset = parameter_list.preset
			}
			biome_source.biomes = PRESETS[preset]
		}

		return biome_source
    })

    const biome_source = computed(async () => {
        return BiomeSource.fromJson(await biome_source_json.value)
    })

    const structure_set = computed(async () => {
		return StructureSet.fromJson(await datapackStore.composite_datapack.get("worldgen/structure_set", Identifier.create("villages")))
    })

    const noise_generator_settings = computed(async () => NoiseGeneratorSettings.fromJson((await noise_settings.value).json))

    const random_state = computed(async () => {
        return new RandomState(await noise_generator_settings.value, settingsStore.seed)
    })

    const sampler = computed(async () => {
		const router = (await random_state.value).router
		return Climate.Sampler.fromRouter(router)
    })

    const surface_density_function = computed(async () => {
        return getSurfaceDensityFunction((await noise_settings.value).id, settingsStore.dimension).mapAll((await random_state.value).createVisitor((await noise_generator_settings.value).noise, (await noise_generator_settings.value).legacyRandomSource))
    })

    return {biome_colors, y_limits, biome_source, biome_source_json,  noise_generator_settings, noise_settings, structure_set, sampler, surface_density_function}
})
