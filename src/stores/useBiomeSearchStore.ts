import { Identifier } from "mc-datapack-loader";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { WorldgenEngine } from "../worldgenEngine/WorldgenEngine";


export const useSearchStore = defineStore('search', () => {
    const biomes = reactive<Set<string>>(new Set())
    const structures = reactive<Set<string>>(new Set())

    const disabled = ref(false)

    const structure_sets = computed(() => {
        const worldgenEngine = WorldgenEngine.getInstance()

        structures.size // make sure any change to structures triggers recomputation
        const sets: Identifier[] = []

        var has_invalid_set = false
        for (const id of worldgenEngine.getStructureSets()){
            const set = worldgenEngine.getStructureSet(id)
            if (!set) continue

            var set_needed = false
            var set_invalid = false

            for (const entry of set?.structures){
                if (structures.has(entry.structure.key()?.toString() ?? "<>")){
                    set_needed = true
                    const s = entry.structure.value()
                    if (worldgenEngine.isUnsupporedStructure(s)){
                        set_invalid = true
                    }
                }
            }
            if (set_needed){
                if (set_invalid){
                    has_invalid_set = true
                } else {
                    sets.push(id)
                }
            }
        }
        return {sets, has_invalid: has_invalid_set}
    })

    return {biomes, structures, structure_sets, disabled}
})
