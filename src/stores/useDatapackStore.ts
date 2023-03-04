import { defineStore } from "pinia";

import { CompositeDatapack, Datapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { computed, ref } from "vue";
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
        if ((await dimensions.value).findIndex((id) => id.equals(dimension.value)) === -1) {
            dimension.value = (await dimensions.value)[0]
        }

        if ((await world_presets.value).findIndex((id) => id.equals(world_preset.value)) === -1) {
            dimension.value = (await world_presets.value)[0]
        }
    }

    const composite_datapack = computed(() => {
        return new CompositeDatapack(datapacks.value.map(d => d.datapack))
    })


    const biome_colors = computed(async () => {
        const biomeColors = new Map<string, { r: number, g: number, b: number }>()

        const ids = await (composite_datapack.value.getIds(""))
        for (const id of ids) {
            if (id.path !== "biome_colors") continue;

            const json = await composite_datapack.value.get("", id) as { r: number, g: number, b: number }[]
            for (const biome in json) {
                const biome_id = biome.indexOf(":") === -1 ? id.namespace + ":" + biome : biome

                biomeColors.set(biome_id, json[biome])
            }
        }

        return biomeColors
    })

    var dimension_json = computed(async () => {
        if (await composite_datapack.value.has("dimension", dimension.value)){
            return await composite_datapack.value.get("dimension", dimension.value) 
        } else {
            const world_preset_json = (await composite_datapack.value.get("worldgen/world_preset", world_preset.value)) as {dimensions: {[key: string]: any}}
            return world_preset_json.dimensions[dimension.value.toString()]
        }
    })
    
    const y_limits = computed(async () => {
        const dimension_type_id = Identifier.parse((await dimension_json.value).type)
        const dimension_type_json = await composite_datapack.value.get("dimension_type", dimension_type_id) as any
        return [dimension_type_json.min_y, dimension_type_json.min_y + dimension_type_json.height]
    })

    const dimensions = computed(async () => {
        const world_preset_json = await composite_datapack.value.get("worldgen/world_preset", world_preset.value) as { dimensions: { [key: string]: unknown } }
        return (await composite_datapack.value.getIds("dimension")).concat(Object.keys(world_preset_json.dimensions).map(i => Identifier.parse(i))).filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.equals(value)
            ))
        )
    })

    const world_presets = computed(async () => {
        const normal_world_preset_tag = await composite_datapack.value.get("tags/worldgen/world_preset", Identifier.create("normal")) as {values: string[]}
        return normal_world_preset_tag.values.map(id => Identifier.parse(id))
    })

    function addDatapack(datapack: Datapack) {
        datapacks.value.push({ datapack: datapack, key: ++last_key })
        update()
    }

    async function removeDatapack(id: number) {
        datapacks.value.splice(id, 1)
        update()
    }


    return { datapacks, world_preset, dimension, seed, addDatapack, composite_datapack, removeDatapack, biome_colors, dimensions, world_presets, dimension_json, y, y_limits }
})