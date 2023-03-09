
<script setup lang="ts">
import { reactive } from 'vue';
import { useDatapackStore } from '../../stores/useDatapackStore';
import { useSearchStore } from '../../stores/useBiomeSearchStore'
import { Identifier } from 'deepslate';
import ListDropdown from './ListDropdown.vue';

const datapackStore = useDatapackStore()
const searchStore = useSearchStore()

const structures = reactive(await datapackStore.composite_datapack.getIds("worldgen/structure"))

function toggleStructure(structure: Identifier){
    if (searchStore.structures.has(structure.toString())){
        searchStore.structures.delete(structure.toString())
    } else {
        searchStore.structures.add(structure.toString())
    }
    searchStore.$patch({}) // call $subscribe, not sure why this is necessary
}

</script>


<template>
    <ListDropdown placeholder="Search Structure" :entries="structures" :selected="searchStore.structures" @toggle="toggleStructure" />
</template>

<style scoped>

</style>