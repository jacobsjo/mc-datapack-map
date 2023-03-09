
<script setup lang="ts">
import { reactive } from 'vue';
import { useDatapackStore } from '../../stores/useDatapackStore';
import { useSearchStore } from '../../stores/useBiomeSearchStore'
import { Identifier } from 'deepslate';
import ListDropdown from './ListDropdown.vue';

const datapackStore = useDatapackStore()
const biomeSearchStore = useSearchStore()

const biomes = reactive(await datapackStore.composite_datapack.getIds("worldgen/biome"))

function toggleBiome(biome: Identifier){
    if (biomeSearchStore.biomes.has(biome.toString())){
        biomeSearchStore.biomes.delete(biome.toString())
    } else {
        biomeSearchStore.biomes.add(biome.toString())
    }
    biomeSearchStore.$patch({}) // call $subscribe, not sure why this is necessary
}

</script>


<template>
    <ListDropdown placeholder="Search Biome" :entries="biomes" :selected="biomeSearchStore.biomes" @toggle="toggleBiome" />
</template>

<style scoped>

</style>