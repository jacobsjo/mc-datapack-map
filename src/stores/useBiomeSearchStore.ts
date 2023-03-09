import { Identifier } from "deepslate";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { Registries } from "../util/Registries";



export const useSearchStore = defineStore('search', () => {
    const biomes = reactive<Set<string>>(new Set())
    const structures = reactive<Set<string>>(new Set())

    const structure_sets = computed(() => {
        const sets = []
        for (const id of Registries.STRUCTURE_SET.keys()){
            const set = Registries.STRUCTURE_SET.get(id)
            if (!set) continue

            for (const entry of set?.structures){
                if (structures.has(entry.structure.key()?.toString() ?? "<>")){
                    sets.push(id)
                }
            }
        }
        return sets
    })

    return {biomes, structures, structure_sets}
})
