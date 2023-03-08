import { BiomeSource, FixedBiomeSource, Identifier, StructureSet, Climate, DensityFunction, Holder, WorldgenRegistries, NoiseParameters, HolderSet, WorldgenStructure, Json, NoiseGeneratorSettings, RandomState, NoiseSettings } from "deepslate";
import { defineStore } from "pinia";
import { compile, computed, reactive, ref } from "vue";
import { PRESETS } from "../BuildIn/MultiNoiseBiomeParameterList";
import { getSurfaceDensityFunction } from "../util";
import { useDatapackStore } from "./useDatapackStore";
import { useSettingsStore } from "./useSettingsStore";

export type LoadedDimension = {
    biome_colors?: Map<string, { r: number, g: number, b: number } >,
    y_limits?: [number, number],
    noise_settings_id?: Identifier,
    noise_settings_json?: {[x: string]: unknown},
    biome_source_json?: {[x: string]: unknown},
    biome_source?: BiomeSource,
    structure_set?: StructureSet,
}

export const useLoadedDimensionStore = defineStore('loaded_dimension', () => {

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()

    const loaded_dimension = reactive<LoadedDimension>({})

    datapackStore.$subscribe((mutation, state) => {
        reload()
    })
    settingsStore.$subscribe(() => {
        reload()
    })

    
    async function reload() {
        await datapackStore.registered

        const ld: LoadedDimension = {}

        ld.biome_colors = new Map<string, { r: number, g: number, b: number }>()

        const ids = await (datapackStore.composite_datapack.getIds(""))
        for (const id of ids) {
            if (id.path !== "biome_colors") continue;

            const json = await datapackStore.composite_datapack.get("", id) as { r: number, g: number, b: number }[]
            for (const biome in json) {
                const biome_id = biome.indexOf(":") === -1 ? id.namespace + ":" + biome : biome

                ld.biome_colors.set(biome_id, json[biome])
            }
        }

        var dimension_json: any

        if (await datapackStore.composite_datapack.has("dimension", settingsStore.dimension)) {
            dimension_json = await datapackStore.composite_datapack.get("dimension", settingsStore.dimension)
        } else {
            const world_preset_json = (await datapackStore.composite_datapack.get("worldgen/world_preset", settingsStore.world_preset)) as { dimensions: { [key: string]: any } }
            dimension_json = world_preset_json.dimensions[settingsStore.dimension.toString()]
        }

        const dimension_type_id = Identifier.parse(dimension_json.type)
        const dimension_type_json = await datapackStore.composite_datapack.get("dimension_type", dimension_type_id) as any
        ld.y_limits = [dimension_type_json.min_y, dimension_type_json.min_y + dimension_type_json.height]


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
            ld.noise_settings_json = Json.readObject(await datapackStore.composite_datapack.get("worldgen/noise_settings", ld.noise_settings_id))
        } else {
            throw new Error("Malformed generator")
        }

        // if multi noise is using preset, fill in Build-In biome list
        ld.biome_source_json = Json.readObject(generator.biome_source) ?? {}
        if (ld.biome_source_json.type === "minecraft:multi_noise" && "preset" in ld.biome_source_json) {
            let preset = Json.readString(ld.biome_source_json.preset) ?? ""
            const preset_id = Identifier.parse(preset)
            if (await datapackStore.composite_datapack.has("worldgen/multi_noise_biome_source_parameter_list", preset_id)) {
                const parameter_list = await datapackStore.composite_datapack.get("worldgen/multi_noise_biome_source_parameter_list", preset_id) as { preset: string }
                preset = parameter_list.preset
            }
            ld.biome_source_json.biomes = PRESETS[preset]
        }


        ld.biome_source = BiomeSource.fromJson(ld.biome_source_json)

        ld.structure_set = StructureSet.fromJson(await datapackStore.composite_datapack.get("worldgen/structure_set", Identifier.create("villages")))

        Object.assign(loaded_dimension, ld)
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
        return getSurfaceDensityFunction(loaded_dimension.noise_settings_id ?? Identifier.create("empty"), settingsStore.dimension).mapAll((random_state.value).createVisitor((noise_generator_settings.value).noise, (noise_generator_settings.value).legacyRandomSource))
    })

    return { loaded_dimension, noise_generator_settings, sampler, surface_density_function, reload }
})

