
<script setup lang="ts">
import { useSearchStore } from '../../stores/useBiomeSearchStore'
import { Identifier, WorldgenStructure } from 'deepslate';
import ListDropdown from './ListDropdown.vue';
import { useLoadedDimensionStore } from '../../stores/useLoadedDimensionStore';

const searchStore = useSearchStore()
const loadedDimensionStore = useLoadedDimensionStore()

function toggleStructure(structure: Identifier){
    if (searchStore.structures.has(structure.toString())){
        searchStore.structures.delete(structure.toString())
    } else {
        searchStore.structures.add(structure.toString())
    }
    searchStore.$patch({}) // call $subscribe, not sure why this is necessary
}

function disableGroup(group: string){
    [...searchStore.structures].forEach(structure => {
        if (structure.startsWith(group + ":"))
            searchStore.structures.delete(structure)
    });
}


</script>

<template>
    <ListDropdown placeholder="Search Structure" :entries="WorldgenStructure.REGISTRY.keys()" :icons="loadedDimensionStore.getIcon" :selected="searchStore.structures" @toggle="toggleStructure" @disableGroup="disableGroup" />
</template>

<style scoped>

</style>