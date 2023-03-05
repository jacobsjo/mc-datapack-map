import { Identifier } from "deepslate";
import { defineStore } from "pinia";



export const useBiomeSearchStore = defineStore('biomeSearch', () => {
    const biomes: Set<string> = new Set()

    return {biomes}
})
