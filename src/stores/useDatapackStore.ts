import { defineStore } from "pinia";

import { CompositeDatapack, Datapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { computed, reactive, ref, watch } from "vue";
import { DensityFunction, Holder, HolderSet, Identifier, NoiseParameters, StructureSet, WorldgenRegistries, WorldgenStructure, StructureTemplatePool, Structure, NbtFile } from "deepslate";
import { useSettingsStore } from "./useSettingsStore";

export const useDatapackStore = defineStore('datapacks', () => {
    const vanillaDatapack = new PromiseDatapack(ZipDatapack.fromUrl('./vanilla_datapacks/data-1.19.3.zip'))

    let last_key = 0
    const datapacks = reactive([{ datapack: vanillaDatapack, key: 0 }])
    const settingsStore = useSettingsStore()

    const composite_datapack = computed(() => {
        return new CompositeDatapack(datapacks.map(d => d.datapack))
    })

    const dimensions = computed(async () => {
        const world_preset_json = await composite_datapack.value.get("worldgen/world_preset", settingsStore.world_preset) as { dimensions: { [key: string]: unknown } }
        return (await composite_datapack.value.getIds("dimension")).concat(Object.keys(world_preset_json.dimensions).map(i => Identifier.parse(i))).filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.equals(value)
            ))
        )
    })

    const world_presets = computed(async () => {
        // TODO use deepslate HolderSet 
        const normal_world_preset_tag = await composite_datapack.value.get("tags/worldgen/world_preset", Identifier.create("normal")) as { values: string[] }
        return normal_world_preset_tag.values.map(id => Identifier.parse(id))
    })

    const registered = computed(reloadDatapack)

    async function reloadDatapack() {
        composite_datapack.value

        // register density functions
        WorldgenRegistries.DENSITY_FUNCTION.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/density_function")) {
            const dfJson = await composite_datapack.value.get("worldgen/density_function", id)

            const df = new DensityFunction.HolderHolder(Holder.parser(WorldgenRegistries.DENSITY_FUNCTION, DensityFunction.fromJson)(dfJson))
            WorldgenRegistries.DENSITY_FUNCTION.register(id, df)
        }

        // register noises
        WorldgenRegistries.NOISE.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/noise")) {
            const noiseJson = await composite_datapack.value.get("worldgen/noise", id)

            const noise = NoiseParameters.fromJson(noiseJson)
            WorldgenRegistries.NOISE.register(id, noise)
        }

        // register biome ids
        WorldgenRegistries.BIOME.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/biome")) {
            WorldgenRegistries.BIOME.register(id, {})
        }

        // register biome tags
        for (const id of await composite_datapack.value.getIds("tags/worldgen/biome")) {
            const biomeTagJson = await composite_datapack.value.get("tags/worldgen/biome", id)
            const biomeTag = HolderSet.fromJson<{}>(WorldgenRegistries.BIOME, biomeTagJson, id)
            WorldgenRegistries.BIOME.getTagRegistry().register(id, biomeTag)
        }

        // register (worldgen) structures
        WorldgenStructure.REGISTRY.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/structure")) {
            const structureJson = await composite_datapack.value.get("worldgen/structure", id)
            const structure = WorldgenStructure.fromJson(structureJson)
            WorldgenStructure.REGISTRY.register(id, structure)
        }

        // register structure_sets
        StructureSet.REGISTRY.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/structure_set")) {
            const structureSetJson = await composite_datapack.value.get("worldgen/structure_set", id)
            const structureSet = StructureSet.fromJson(structureSetJson)
            StructureSet.REGISTRY.register(id, structureSet)
        }
        
        // register template pools
        StructureTemplatePool.REGISTRY.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/template_pool")) {
            const templatePoolJson = await composite_datapack.value.get("worldgen/template_pool", id)
            const templatePool = StructureTemplatePool.fromJson(templatePoolJson)
            StructureTemplatePool.REGISTRY.register(id, templatePool)
        }

        // register structure nbt
        Structure.REGISTRY.clear()
        for (const id of await composite_datapack.value.getIds("structures")) {
            try {
                const arrayBuffer = await composite_datapack.value.get("structures", id) as ArrayBuffer
                Structure.REGISTRY.register(id, () => {
                    const nbt = NbtFile.read(new Uint8Array(arrayBuffer));
                    return Structure.fromNbt(nbt.root)
                })
            } catch (e) {
                console.warn(`Failed to load structure ${id.toString()}: ${e}`)
            }
        }
    }

    //reloadDatapack()

    function addDatapack(datapack: Datapack) {
        datapacks.push({ datapack: datapack, key: ++last_key })
    }

    async function removeDatapack(id: number) {
        datapacks.splice(id, 1)
    }


    return { datapacks, composite_datapack, registered, addDatapack, removeDatapack, dimensions, world_presets }
})