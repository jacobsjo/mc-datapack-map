import { BiomeSource, FixedBiomeSource, Identifier, StructureSet, Climate, DensityFunction, Holder, WorldgenRegistries, NoiseParameters, HolderSet, WorldgenStructure, Json, NoiseGeneratorSettings, RandomState, NoiseSettings } from "deepslate";
import { defineStore } from "pinia";
import { compile, computed, reactive, ref, watch } from "vue";
import { getPreset } from "../BuildIn/MultiNoiseBiomeParameterList";
import { VANILLA_ITEMS } from "../BuildIn/VanillaItems";
import { getSurfaceDensityFunction, hashCode } from "../util";
import { useDatapackStore } from "./useDatapackStore";
import { useSettingsStore } from "./useSettingsStore";

export type LoadedDimension = {
    structure_icons?: Map<string, Identifier>,
    hidden_structures?: Set<string>
    y_limits?: [number, number],
    noise_settings_id?: Identifier,
    noise_settings_json?: {[x: string]: unknown},
    biome_source_json?: {[x: string]: unknown},
}

export const useLoadedDimensionStore = defineStore('loaded_dimension', () => {

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()

    const loaded_dimension = reactive<LoadedDimension>({})
    var biome_source: BiomeSource | undefined = undefined
    var biome_colors: Map<string, { r: number, g: number, b: number } > = new Map<string, { r: number, g: number, b: number }>()

    datapackStore.$subscribe((mutation, state) => {
        reload()
    })

    settingsStore.$subscribe(() => {
        reload()
    })
    
    async function reload() {
        await datapackStore.registered

        const ld: LoadedDimension = {}

        biome_colors.clear()
        ld.structure_icons = new Map<string, Identifier>()
        ld.hidden_structures = new Set()

        const ids = await (datapackStore.composite_datapack.getIds(""))
        for (const id of ids) {
            if (id.path === "biome_colors"){
                const json = await datapackStore.composite_datapack.get("", id) as {[key: string]: { r: number, g: number, b: number }}
                for (const biome in json) {
                    const biome_id = biome.indexOf(":") === -1 ? id.namespace + ":" + biome : biome

                    biome_colors.set(biome_id, json[biome])
                }
            } else if (id.path === "structure_icons"){
                const json = await datapackStore.composite_datapack.get("", id) as {[key: string]: {item?: string, hidden?: boolean} | string}
                for (const structure in json) {
                    const structure_id = structure.indexOf(":") === -1 ? id.namespace + ":" + structure : structure

                    const structure_config = json[structure]
                    if (typeof structure_config === 'string'){
                        if (structure_config === 'hidden'){
                            ld.hidden_structures.add(structure_id)
                        } else {
                            ld.structure_icons.set(structure_id, Identifier.parse(structure_config))
                        }
                    } else if (structure_config.hidden){
                        ld.hidden_structures.add(structure_id)
                    } else if (structure_config.item){
                        ld.structure_icons.set(structure_id, Identifier.parse(structure_config.item))
                    }
                }
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
            ld.biome_source_json.biomes = getPreset(preset, settingsStore.mc_version)
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
        const surface_density_function_id = getSurfaceDensityFunction(loaded_dimension.noise_settings_id ?? Identifier.create("empty"), settingsStore.dimension)
        if (surface_density_function_id !== undefined){
            return new DensityFunction.HolderHolder(Holder.reference(WorldgenRegistries.DENSITY_FUNCTION, surface_density_function_id)).mapAll((random_state.value).createVisitor((noise_generator_settings.value).noise, (noise_generator_settings.value).legacyRandomSource))
        } else {
            return undefined
        }
    })

    function getIcon(id: Identifier){
        const item = loaded_dimension.structure_icons?.get(id.toString()) ?? Identifier.create(VANILLA_ITEMS[Math.abs(hashCode(id.toString())) % VANILLA_ITEMS.length]) 
        return `https://raw.githubusercontent.com/jacobsjo/mcicons/icons/item/${item.path}.png`
    }

    function getBiomeColor(id: string){
        var biomeColor = biome_colors.get(id)
        if (biomeColor === undefined) {
            const hash = hashCode(id)
            biomeColor = {
                r: (hash & 0xFF0000) >> 16,
                g: (hash & 0x00FF00) >> 8,
                b: hash & 0x0000FF
            }
        }
        return biomeColor
    }

    function getBiomeSource(){
        return biome_source
    }

    return { loaded_dimension, noise_generator_settings, sampler, surface_density_function, reload, getIcon, getBiomeColor, getBiomeSource }
})

