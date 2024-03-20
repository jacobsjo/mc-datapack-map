import { defineStore } from "pinia";

import { AnonymousDatapack, Datapack, DatapackList, ResourceLocation } from "mc-datapack-loader"
import { computed, reactive, ref, watch } from "vue";
import { DensityFunction, Holder, HolderSet, Identifier, NoiseParameters, StructureSet, WorldgenRegistries, WorldgenStructure, StructureTemplatePool, Structure, NbtFile, Registry } from "deepslate";
import { useSettingsStore } from "./useSettingsStore";
import { versionDatapackFormat, versionVanillaDatapack } from "../util";
import { I18nInjectionKey, useI18n } from "vue-i18n";


const VANILLA_DATAVERSION = 15 // used independent of version


export const useDatapackStore = defineStore('datapacks', () => {
    const i18n = useI18n()
    const settingsStore = useSettingsStore()

    const vanillaDatapack = Datapack.fromZipUrl(`./vanilla_datapacks/vanilla_${versionVanillaDatapack[settingsStore.mc_version]}.zip`, versionDatapackFormat[settingsStore.mc_version])

    let last_key = 0
    const datapacks = reactive([{ datapack: vanillaDatapack, key: 0 }])

    var last_version = settingsStore.mc_version
    settingsStore.$subscribe(() => {
        if (last_version === settingsStore.mc_version)
            return

        const vanillaDatapack = Datapack.fromZipUrl(`./vanilla_datapacks/vanilla_${versionVanillaDatapack[settingsStore.mc_version]}.zip`, versionDatapackFormat[settingsStore.mc_version])
        datapacks[0].datapack = vanillaDatapack
        datapacks[0].key = ++last_key

        const packVersion = versionDatapackFormat[settingsStore.mc_version]
        for (var i = 1; i < datapacks.length ; i++){
            datapacks[i].datapack.setPackVersion(packVersion)
        }

        console.log("updating mc version")

        last_version = settingsStore.mc_version
    })


    const composite_datapack = Datapack.compose(new class implements DatapackList{
        async getDatapacks(): Promise<AnonymousDatapack[]> {
            return datapacks.map(d => d.datapack)
        }
    })

    const dimensions = computed(async () => {
        const world_preset_json = await composite_datapack.get(ResourceLocation.WORLDGEN_WORLD_PRESET, settingsStore.world_preset) as { dimensions: { [key: string]: unknown } }
        return (await composite_datapack.getIds(ResourceLocation.DIMENSION)).concat(Object.keys(world_preset_json.dimensions).map(i => Identifier.parse(i))).filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.equals(value)
            ))
        )
    })

    const world_presets = computed(async () => {
        // TODO use deepslate HolderSet 
        const normal_world_preset_tag = await composite_datapack.get(ResourceLocation.WORLDGEN_WORLD_PRESET_TAG, Identifier.create("normal")) as { values: string[] }
        return normal_world_preset_tag.values.map(id => Identifier.parse(id))
    })

    const registered = computed(reloadDatapack)

    async function registerType<T>(location: ResourceLocation, registry: Registry<T>, loader: (json: any, id: Identifier) => (T | (() => T))): Promise<void>{
        registry.clear()
        await Promise.all((await composite_datapack.getIds(location)).map(id => new Promise<void>(async (resolve) => {
            try {
                const data = await composite_datapack.get(location, id)
                registry.register(id, loader(data, id))
            } catch (e) {
                console.warn(`Failed to load ${location}: ${id.toString()}: ${e}`)
            }
            resolve()
        })))
    }

    async function registerTag<T>(location: ResourceLocation, registry: Registry<T>){
        await registerType(location, registry.getTagRegistry(), (json, id) => HolderSet.fromJson<T>(registry, json, id))
    }

    async function reloadDatapack() {
        const promises: Promise<void>[] = []
        promises.push(registerType(ResourceLocation.WORLDGEN_DENSITY_FUNCTION, WorldgenRegistries.DENSITY_FUNCTION, (json) => new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(json))))
        promises.push(registerType(ResourceLocation.WORLDGEN_NOISE, WorldgenRegistries.NOISE, NoiseParameters.fromJson))
        promises.push(registerType(ResourceLocation.WORLDGEN_STRUCTURE_SET, StructureSet.REGISTRY, StructureSet.fromJson))
        promises.push(registerType(ResourceLocation.WORLDGEN_TEMPLATE_POOL, StructureTemplatePool.REGISTRY, StructureTemplatePool.fromJson))
        promises.push(registerType(ResourceLocation.STRUCTURE, Structure.REGISTRY, (arrayBuffer) => () => Structure.fromNbt(NbtFile.read(new Uint8Array(arrayBuffer)).root)))
        promises.push(new Promise(async (resolve) => {
            await registerType(ResourceLocation.WORLDGEN_BIOME, WorldgenRegistries.BIOME, () => {return {}})
            await registerTag(ResourceLocation.WORLDGEN_BIOME_TAG, WorldgenRegistries.BIOME)
            await registerType(ResourceLocation.WORLDGEN_STRUCTURE, WorldgenStructure.REGISTRY, WorldgenStructure.fromJson)
            await registerTag(ResourceLocation.WORLDGEN_STRUCTURE_TAG, WorldgenStructure.REGISTRY)
            resolve()
        }))
        await Promise.all(promises)


    }

    function addDatapack(datapack: Datapack) {
        datapacks.push({ datapack: datapack, key: ++last_key })
    }

    async function removeDatapack(id: number) {
        datapacks.splice(id, 1)
    }


    return { datapacks, composite_datapack, registered, reloadDatapack, addDatapack, removeDatapack, dimensions, world_presets }
})