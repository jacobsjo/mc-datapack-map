import { Identifier, StructurePlacement, StructureSet, WorldgenStructure } from "deepslate";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";


export const useSearchStore = defineStore('search', () => {
    const biomes = reactive<Set<string>>(new Set())
    const structures = reactive<Set<string>>(new Set())

    const disabled = ref(false)

    const structure_sets = computed(() => {
        structures.size // make sure any change to structures triggers recomputation
        const sets: Identifier[] = []

        var has_invalid_set = false
        for (const id of StructureSet.REGISTRY.keys()){
            const set = StructureSet.REGISTRY.get(id)
            if (!set) continue

            var set_needed = false
            var set_invalid = false

            for (const entry of set?.structures){
                if (structures.has(entry.structure.key()?.toString() ?? "<>")){
                    set_needed = true
                    const s = entry.structure.value()
                    if (s instanceof WorldgenStructure.MineshaftStructure || s instanceof WorldgenStructure.NetherFossilStructure || s instanceof WorldgenStructure.OceanMonumentStructure || s instanceof WorldgenStructure.RuinedPortalStructure){
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
