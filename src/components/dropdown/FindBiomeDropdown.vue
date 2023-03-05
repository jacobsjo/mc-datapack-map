
<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useDatapackStore } from '../../stores/useDatapackStore';
import { useBiomeSearchStore } from '../../stores/useBiomeSearchStore'
import Dropdown from './Dropdown.vue';
import { Identifier } from 'deepslate';

const datapackStore = useDatapackStore()
const biomeSearchStore = useBiomeSearchStore()

const biomes = reactive(await datapackStore.composite_datapack.getIds("worldgen/biome"))
const search = ref("")
const filtered_biomes = computed(() => {
    return biomes.filter(b => b.toString().includes(search.value))
})

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
    <Dropdown class="dropdown">
        <input id="search" placeholder="Search Biome" spellcheck="false" v-model="search" />
        <div class="biome_list">
            <div class="biome"
                v-for="biome in filtered_biomes"
                :class="{selected: biomeSearchStore.biomes.has(biome.toString())}"
                @click="toggleBiome(biome)">
                {{ biome.toString() }}
            </div>
        </div>
    </Dropdown>
</template>

<style scoped>
    .dropdown {
        background-color: rgb(59, 59, 59);
        padding-bottom: 0;
        padding: 0;
    }

    input {
        background-color: rgb(59, 59, 59);
        color: white;
        padding: 0.5rem;
        width: 95%;
        box-sizing: border-box;
        border: 0;
        outline: 0;
    }

    .biome_list {
        height: 25rem;
        width: 100%;
        padding: 0rem;
        background-color: rgb(88, 88, 88);
        overflow-y: scroll;
        list-style-type: none;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }


    .biome_list::-webkit-scrollbar {
        display: none;
    }

    .biome {
        background-color: rgb(88, 88, 88);
        transition: 0.3s;
        cursor: pointer;
        padding: 0.1rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        user-select: none;
    }

    .biome:hover {
        background-color: rgb(126, 126, 126)
    }

    .biome.selected {
        background-color: rgb(135, 156, 14);
    }

    .biome.selected:hover {
        background-color: rgb(168, 192, 30);
    }

</style>