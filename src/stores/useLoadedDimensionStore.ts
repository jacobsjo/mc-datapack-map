import { 
    BiomeSource, 
    Climate, 
    DensityFunction, 
    Holder, 
    WorldgenRegistries, 
    Json, 
    NoiseGeneratorSettings, 
    RandomState, 
    LevelHeight 
} from "deepslate";
import { Identifier, ResourceLocation } from "mc-datapack-loader";
import { defineStore } from "pinia";
import { compile, computed, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { VANILLA_ITEMS } from "../BuildIn/VanillaItems.js";
import { getCustomDensityFunction, hashCode, versionMetadata } from "../util.js";
import { useDatapackStore } from "./useDatapackStore.js";
import { useSettingsStore } from "./useSettingsStore.js";

import messages from '@intlify/unplugin-vue-i18n/messages'
import { WorldgenEngine } from "../worldgenEngine/WorldgenEngine.js";

export type LoadedDimension = {
    level_height?: LevelHeight,
    noise_settings_id?: Identifier,
    noise_settings_json?: {[x: string]: unknown},
    biome_source_json?: {[x: string]: unknown},
}

export const useLoadedDimensionStore = defineStore('loaded_dimension', () => {

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()
    const i18n = useI18n()

    const loaded_dimension = reactive<LoadedDimension>({})
    var biome_source: BiomeSource | undefined = undefined

    var default_messages: {[key: string]: string} = {}

    datapackStore.$subscribe((mutation, state) => {
        reload()
    })

    watch(() => settingsStore.mc_version, reload)
    watch(() => settingsStore.world_preset, reload)
    watch(() => settingsStore.dimension, reload)
    watch(() => settingsStore.seed, reload)
    
    async function reload() {
        await datapackStore.reloadDatapack()

        const ld: LoadedDimension = {}

        default_messages = {}

        const langs = await datapackStore.composite_datapack.getIds(ResourceLocation.LANGUAGE)

        for (const locale of i18n.availableLocales){
            const minecraft_messages: {[key: string]: string} = {}
            const minecraft_locale = i18n.t('locale.minecraft_locale', 1, {locale: locale})
            for (const lang of langs.filter(l => l.path === minecraft_locale)){
                const json = await datapackStore.composite_datapack.get(ResourceLocation.LANGUAGE, lang) as any
                for (const key in json){
                    minecraft_messages[`minecraft.${key}`] = json[key]
                }
            }

            i18n.setLocaleMessage(locale, messages?.[locale] ?? {}) 
            if (locale === "en"){
                i18n.mergeLocaleMessage(locale, default_messages)
            }
            i18n.mergeLocaleMessage(locale, minecraft_messages)
        }

        var dimension_json: any

        if (await datapackStore.composite_datapack.has(ResourceLocation.DIMENSION, settingsStore.dimension)) {
            dimension_json = await datapackStore.composite_datapack.get(ResourceLocation.DIMENSION, settingsStore.dimension)
        } else {
            const world_preset_json = (await datapackStore.composite_datapack.get(ResourceLocation.WORLDGEN_WORLD_PRESET, settingsStore.world_preset)) as { dimensions: { [key: string]: any } }
            dimension_json = world_preset_json.dimensions[settingsStore.dimension.toString()]
        }

        const dimension_type_id = Identifier.parse(dimension_json.type)
        const dimension_type_json = await datapackStore.composite_datapack.get(ResourceLocation.DIMENSION_TYPE, dimension_type_id) as any
        ld.level_height = {minY: dimension_type_json.min_y, height: dimension_type_json.height}

        // get json of noise generator
        const generator = Json.readObject(dimension_json.generator) ?? {}
        if (generator?.type !== "minecraft:noise") {
            throw new Error("Dimension without noise generator")
        }

        // get Noise Settings json (from inline or from datapack)
        if (typeof generator.settings === "object") {
            ld.noise_settings_json = Json.readObject(generator.settings) ?? {}
            ld.noise_settings_id = Identifier.parse("inline:inline")
        } else if (typeof generator.settings === "string") {
            ld.noise_settings_id = Identifier.parse(Json.readString(generator.settings) ?? "")
            ld.noise_settings_json = Json.readObject(await datapackStore.composite_datapack.get(ResourceLocation.WORLDGEN_NOISE_SETTINGS, ld.noise_settings_id))
        } else {
            throw new Error("Malformed generator")
        }

        // if multi noise is using preset, fill in Build-In biome list
        ld.biome_source_json = Json.readObject(generator.biome_source) ?? {}
        if (ld.biome_source_json.type === "minecraft:multi_noise" && "preset" in ld.biome_source_json) {
            let preset = Json.readString(ld.biome_source_json.preset) ?? ""
            const preset_id = Identifier.parse(preset)
            if (await datapackStore.composite_datapack.has(ResourceLocation.WORLDGEN_MULTI_NOISE_BIOME_SOURCE_PRARAMETER_LIST, preset_id)) {
                const parameter_list = await datapackStore.composite_datapack.get(ResourceLocation.WORLDGEN_MULTI_NOISE_BIOME_SOURCE_PRARAMETER_LIST, preset_id) as { preset: string }
                preset = parameter_list.preset
            }

            const metadata = versionMetadata[settingsStore.mc_version];
            const response = await fetch(`biome_parameters/minecraft_${metadata.vanillaDatapack}/${Identifier.parse(preset).path}.json`)
            const json = await response.json()

            ld.biome_source_json.biomes = json.biomes
        }



        Object.assign(loaded_dimension, ld)
        biome_source = BiomeSource.fromJson(ld.biome_source_json)

    }

    const noise_generator_settings = computed(() => NoiseGeneratorSettings.fromJson(loaded_dimension.noise_settings_json))

    const random_state = computed(() => {
        return new RandomState(noise_generator_settings.value, settingsStore.seed)
    })

    const sampler = computed(() => {
        const router = (random_state.value).router
        return Climate.Sampler.fromRouter(router)
    })

    const surface_density_function = computed(() => {
        const surface_density_function_id = getCustomDensityFunction("snowcapped_surface", loaded_dimension.noise_settings_id ?? Identifier.create("empty"), settingsStore.dimension)
        if (surface_density_function_id !== undefined){
            return new DensityFunction.HolderHolder(Holder.reference(WorldgenRegistries.DENSITY_FUNCTION, surface_density_function_id)).mapAll((random_state.value).createVisitor((noise_generator_settings.value).noise, (noise_generator_settings.value).legacyRandomSource))
        } else {
            return undefined
        }
    })

    const terrain_density_function = computed(() => {
        const surface_density_function_id = getCustomDensityFunction("map_simple_terrain", loaded_dimension.noise_settings_id ?? Identifier.create("empty"), settingsStore.dimension)
        if (surface_density_function_id !== undefined){
            return new DensityFunction.HolderHolder(Holder.reference(WorldgenRegistries.DENSITY_FUNCTION, surface_density_function_id)).mapAll((random_state.value).createVisitor((noise_generator_settings.value).noise, (noise_generator_settings.value).legacyRandomSource))
        } else {
            return undefined
        }
    })    



    function getBiomeSource(){
        return biome_source
    }

    return { loaded_dimension, noise_generator_settings, sampler, surface_density_function, terrain_density_function, reload, getBiomeSource }
})

