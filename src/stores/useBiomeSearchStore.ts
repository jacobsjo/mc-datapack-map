import { Identifier, StructureSet } from "deepslate";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";


export const useSearchStore = defineStore('search', () => {
    const biomes = reactive<Set<string>>(new Set())
    const structures = reactive<Set<string>>(new Set())

    const structure_sets = computed(() => {
        const sets = []
        sets:
        for (const id of StructureSet.REGISTRY.keys()){
            const set = StructureSet.REGISTRY.get(id)
            if (!set) continue

            for (const entry of set?.structures){
                if (structures.has(entry.structure.key()?.toString() ?? "<>")){
                    sets.push(id)
                    continue sets
                }
            }
        }
        return sets
    })

    return {biomes, structures, structure_sets}
})
