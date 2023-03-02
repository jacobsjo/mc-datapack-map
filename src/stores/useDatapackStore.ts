import { defineStore } from "pinia";

import { CompositeDatapack, PromiseDatapack, ZipDatapack } from "mc-datapack-loader"
import { ref } from "vue";
import { Identifier } from "deepslate";

export const useDatapackStore = defineStore('datapacks', () => {
    const vanillaDatapack = new PromiseDatapack(ZipDatapack.fromUrl('./vanilla_datapacks/data-1.19.3.zip'))

    const datapack = ref(new CompositeDatapack([vanillaDatapack]))
    const dimension = ref(Identifier.create("overworld"))

    return { datapack, dimension }
})