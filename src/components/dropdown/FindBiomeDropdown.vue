
<script setup lang="ts">
import { reactive } from 'vue';
import { useSearchStore } from '../../stores/useBiomeSearchStore'
import { Identifier, WorldgenRegistries } from 'deepslate';
import ListDropdown from './ListDropdown.vue';
import { useLoadedDimensionStore } from '../../stores/useLoadedDimensionStore';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const searchStore = useSearchStore()
const loadedDimensionStore = useLoadedDimensionStore()

function toggleBiome(biome: Identifier){
    if (searchStore.biomes.has(biome.toString())){
        searchStore.biomes.delete(biome.toString())
    } else {
        searchStore.biomes.add(biome.toString())
    }
    searchStore.$patch({disabled: false})
}

function disableGroup(group: string){
    [...searchStore.biomes].forEach(biome => {
        if (biome.startsWith(group + ":"))
            searchStore.biomes.delete(biome)
    });
    searchStore.$patch({disabled: false})
}

function getColorString(biome: Identifier){
    const color = loadedDimensionStore.getBiomeColor(biome.toString())
    return `rgb(${color.r}, ${color.g}, ${color.b})`
}

</script>


<template>
    <ListDropdown :type="'biome'" :placeholder="i18n.t('dropdown.search_biome.placeholder')" :entries="WorldgenRegistries.BIOME.keys()" :selected="searchStore.biomes" :colors="getColorString" @toggle="toggleBiome" @disableGroup="disableGroup" />
</template>

<style scoped>

</style>