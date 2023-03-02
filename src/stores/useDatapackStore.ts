import { defineStore } from "pinia";

import { CompositeDatapack, Datapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { ref } from "vue";
import { Identifier } from "deepslate";

export const useDatapackStore = defineStore('datapacks', () => {
    const vanillaDatapack = new PromiseDatapack(ZipDatapack.fromUrl('./vanilla_datapacks/data-1.19.3.zip'))

    let last_key = 0
    const datapacks = ref([{datapack: vanillaDatapack, key: 0}])
    const dimension = ref(Identifier.create("overworld"))

    function addDatapack(datapack: Datapack){
        datapacks.value.push({datapack: datapack, key: ++last_key})
    }

    async function removeDatapack(id: number){
        datapacks.value.splice(id, 1)
        const dimensions = (await getCompositeDatapack().getIds("dimension"))
        if (dimensions.findIndex((id) => id.equals(dimension.value)) === -1){
            dimension.value = dimensions[0]
        }
    }

    function getCompositeDatapack(){
        return new CompositeDatapack(datapacks.value.map(d => d.datapack))
    }

    return { datapacks, dimension, addDatapack, getCompositeDatapack, removeDatapack }
})