import { defineStore } from "pinia";

import { CompositeDatapack, Datapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { computed, reactive, ref, watch } from "vue";
import { DensityFunction, Holder, HolderSet, Identifier, NoiseParameters, WorldgenRegistries, WorldgenStructure } from "deepslate";
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

    async function reloadDimensions() {
        settingsStore.world_preset

    }

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

        // register biome tags
        WorldgenRegistries.BIOME.clear()
        for (const id of await composite_datapack.value.getIds("tags/worldgen/biome")) {
            const biomeTagJson = await composite_datapack.value.get("tags/worldgen/biome", id)
            const biomeTag = HolderSet.direct<unknown>(WorldgenRegistries.BIOME, biomeTagJson, true)
            WorldgenRegistries.BIOME.getTagRegistry().register(id, biomeTag)
        }

        // register (worldgen) structures
        WorldgenRegistries.STRUCTURE.clear()
        for (const id of await composite_datapack.value.getIds("worldgen/structure")) {
            const structureJson = await composite_datapack.value.get("worldgen/structure", id)
            const structure = WorldgenStructure.fromJson(structureJson)
            WorldgenRegistries.STRUCTURE.register(id, structure)
        }

        await reloadDimensions()

    }

    reloadDatapack()

    function addDatapack(datapack: Datapack) {
        datapacks.push({ datapack: datapack, key: ++last_key })
    }

    async function removeDatapack(id: number) {
        datapacks.splice(id, 1)
    }


    return { datapacks, composite_datapack, registered, addDatapack, removeDatapack, dimensions, world_presets }
})