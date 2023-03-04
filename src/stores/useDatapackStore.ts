import { defineStore } from "pinia";

import { CompositeDatapack, Datapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { ref } from "vue";
import { Identifier } from "deepslate";

export const useDatapackStore = defineStore('datapacks', () => {
    const vanillaDatapack = new PromiseDatapack(ZipDatapack.fromUrl('./vanilla_datapacks/data-1.19.3.zip'))

    let last_key = 0
    const datapacks = ref([{ datapack: vanillaDatapack, key: 0 }])
    const world_preset = ref(Identifier.create("normal"))
    const dimension = ref(Identifier.create("overworld"))
    const seed = ref(BigInt(0))
    const y = ref<number|"surface">(75)

    async function update() {
        const dimensions = await getDimensions()
        if (dimensions.findIndex((id) => id.equals(dimension.value)) === -1) {
            dimension.value = dimensions[0]
        }

        const world_presets = await getWorldPresets()
        if (world_presets.findIndex((id) => id.equals(world_preset.value)) === -1) {
            dimension.value = world_presets[0]
        }
    }

    async function getBiomeColors() {
        const biomeColors = new Map<string, { r: number, g: number, b: number }>()

        const compositeDatapack = getCompositeDatapack()

        const ids = await (compositeDatapack.getIds(""))
        for (const id of ids) {
            if (id.path !== "biome_colors") continue;

            const json = await compositeDatapack.get("", id) as { r: number, g: number, b: number }[]
            for (const biome in json) {
                const biome_id = biome.indexOf(":") === -1 ? id.namespace + ":" + biome : biome

                biomeColors.set(biome_id, json[biome])
            }
        }

        return biomeColors
    }

    async function getYLimits() {
        const compositeDatapack = getCompositeDatapack()
        dimension
    }

    async function getDimensions() {
        const compositeDatapack = getCompositeDatapack()
        const world_preset_json = await compositeDatapack.get("worldgen/world_preset", world_preset.value) as { dimensions: { [key: string]: unknown } }
        return (await compositeDatapack.getIds("dimension")).concat(Object.keys(world_preset_json.dimensions).map(i => Identifier.parse(i))).filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.equals(value)
            ))
        )
    }

    async function getWorldPresets() {
        const normal_world_preset_tag = await getCompositeDatapack().get("tags/worldgen/world_preset", Identifier.create("normal")) as {values: string[]}
        return normal_world_preset_tag.values.map(id => Identifier.parse(id))
    }

    function addDatapack(datapack: Datapack) {
        datapacks.value.push({ datapack: datapack, key: ++last_key })
        update()
    }

    async function removeDatapack(id: number) {
        datapacks.value.splice(id, 1)
        update()
    }

    function getCompositeDatapack() {
        return new CompositeDatapack(datapacks.value.map(d => d.datapack))
    }

    return { datapacks, world_preset, dimension, seed, y, addDatapack, getCompositeDatapack, removeDatapack, getBiomeColors, getDimensions, getWorldPresets }
})