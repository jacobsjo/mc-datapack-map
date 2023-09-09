import { defineStore } from "pinia";

import { AnonymousDatapack, Datapack, DatapackList, DataType } from "mc-datapack-loader"
import { computed, reactive, ref, watch } from "vue";
import { DensityFunction, Holder, HolderSet, Identifier, NoiseParameters, StructureSet, WorldgenRegistries, WorldgenStructure, StructureTemplatePool, Structure, NbtFile, Registry } from "deepslate";
import { useSettingsStore } from "./useSettingsStore";
import { versionDatapackFormat, versionVanillaDatapack } from "../util";

const VANILLA_DATAVERSION = 15 // used independent of version

export const useDatapackStore = defineStore('datapacks', () => {
    const settingsStore = useSettingsStore()

    const vanillaDatapack = Datapack.fromZipUrl(`./vanilla_datapacks/vanilla_${versionVanillaDatapack[settingsStore.mc_version]}.zip`, VANILLA_DATAVERSION)

    let last_key = 0
    const datapacks = reactive([{ datapack: vanillaDatapack, key: 0 }])

    var last_version = settingsStore.mc_version
    settingsStore.$subscribe(() => {
        if (last_version === settingsStore.mc_version)
            return

        const vanillaDatapack = Datapack.fromZipUrl(`./vanilla_datapacks/vanilla_${versionVanillaDatapack[settingsStore.mc_version]}.zip`, VANILLA_DATAVERSION)
        datapacks[0].datapack = vanillaDatapack

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
        const world_preset_json = await composite_datapack.get("worldgen/world_preset", settingsStore.world_preset) as { dimensions: { [key: string]: unknown } }
        return (await composite_datapack.getIds("dimension")).concat(Object.keys(world_preset_json.dimensions).map(i => Identifier.parse(i))).filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.equals(value)
            ))
        )
    })

    const world_presets = computed(async () => {
        // TODO use deepslate HolderSet 
        const normal_world_preset_tag = await composite_datapack.get("tags/worldgen/world_preset", Identifier.create("normal")) as { values: string[] }
        return normal_world_preset_tag.values.map(id => Identifier.parse(id))
    })

    const registered = computed(reloadDatapack)

    async function registerType<T>(path: DataType.Path, registry: Registry<T>, loader: (json: any, id: Identifier) => (T | (() => T))): Promise<void>{
        registry.clear()
        await Promise.all((await composite_datapack.getIds(path)).map(id => new Promise<void>(async (resolve) => {
            try {
                const data = await composite_datapack.get(path, id)
                registry.register(id, loader(data, id))
            } catch (e) {
                console.warn(`Failed to load ${path}: ${id.toString()}: ${e}`)
            }
            resolve()
        })))
    }

    async function registerTag<T>(path: DataType.Path, registry: Registry<T>){
        await registerType(path, registry.getTagRegistry(), (json, id) => HolderSet.fromJson<T>(registry, json, id))
    }

    async function reloadDatapack() {
        const promises: Promise<void>[] = []
        promises.push(registerType("worldgen/density_function", WorldgenRegistries.DENSITY_FUNCTION, (json) => new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(json))))
        promises.push(registerType("worldgen/noise", WorldgenRegistries.NOISE, NoiseParameters.fromJson))
        promises.push(registerType("worldgen/structure_set", StructureSet.REGISTRY, StructureSet.fromJson))
        promises.push(registerType("worldgen/template_pool", StructureTemplatePool.REGISTRY, StructureTemplatePool.fromJson))
        promises.push(registerType("structures", Structure.REGISTRY, (arrayBuffer) => () => Structure.fromNbt(NbtFile.read(new Uint8Array(arrayBuffer)).root)))
        promises.push(registerTag("tags/worldgen/structure", WorldgenStructure.REGISTRY))
        promises.push(registerType("worldgen/biome", WorldgenRegistries.BIOME, () => {return {}}))
        promises.push(new Promise(async (resolve) => {
            await registerTag("tags/worldgen/biome", WorldgenRegistries.BIOME)
            registerType("worldgen/structure", WorldgenStructure.REGISTRY, WorldgenStructure.fromJson)
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