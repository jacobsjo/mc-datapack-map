
<script setup lang="ts">
import { reactive } from 'vue';
import { useSearchStore } from '../../stores/useBiomeSearchStore'
import { Identifier, WorldgenRegistries } from 'deepslate';
import ListDropdown from './ListDropdown.vue';
import { useLoadedDimensionStore } from '../../stores/useLoadedDimensionStore';

const searchStore = useSearchStore()
const loadedDimensionStore = useLoadedDimensionStore()

function toggleBiome(biome: Identifier){
    if (searchStore.biomes.has(biome.toString())){
        searchStore.biomes.delete(biome.toString())
    } else {
        searchStore.biomes.add(biome.toString())
    }
    searchStore.$patch({}) // call $subscribe, not sure why this is necessary
}

function disableGroup(group: string){
    [...searchStore.biomes].forEach(biome => {
        if (biome.startsWith(group + ":"))
            searchStore.biomes.delete(biome)
    });
}

function getColorString(biome: Identifier){
    const color = loadedDimensionStore.getBiomeColor(biome.toString())
    return `rgb(${color.r}, ${color.g}, ${color.b})`
}

</script>


<template>
    <ListDropdown placeholder="Search Biome" :entries="WorldgenRegistries.BIOME.keys()" :selected="searchStore.biomes" :colors="getColorString" @toggle="toggleBiome" @disableGroup="disableGroup" />
</template>

<style scoped>

</style>