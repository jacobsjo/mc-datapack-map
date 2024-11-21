<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useSettingsStore } from '../../stores/useSettingsStore';
import { versionMetadata } from '../../util';
import ModrinthEntry from './ModrinthEntry.vue';
import { Datapack } from 'mc-datapack-loader';
import { useDatapackStore } from '../../stores/useDatapackStore';
import { useRecentStore } from '../../stores/useRecentStore';

const emit = defineEmits(['close'])

const settingsStore = useSettingsStore()
const queryString = ref("")

type SearchResult = {slug: string, title: string, icon_url: string}

const searchResult = ref<SearchResult[]>([])
const datapackStore = useDatapackStore();
const recentStore = useRecentStore();

onBeforeMount(async () => {
    await runSearch()
})

async function runSearch(){
    const versionsFacet = versionMetadata[settingsStore.mc_version].canonicalNames.map(v => `"versions:${v}"`).join(',')
    const searchUrl = `https://api.modrinth.com/v2/search?query=${encodeURIComponent(queryString.value)}&facets=[["categories:datapack"],["categories:worldgen"],[${versionsFacet}]]`
    const searchResponse = await (await fetch(searchUrl)).json()
    searchResult.value = searchResponse.hits.map((response: any) => {
        return {slug: response.slug, title: response.title, icon_url: response.icon_url}
    });
}

async function addDatapack(slug: string){
    const datapack = await datapackStore.addModrinthDatapack(slug)
    if (datapack === undefined) {
        return
    }

    recentStore.addRecentModrinth(datapack, slug)
    emit('close')
}

</script>

<template>
    <div class="modrinth_menu">
        <input class="search" :aria-label="$t('modrinth.search.aria-label')" v-model="queryString" type="text" :placeholder="$t('modrinth.search.placeholder')" @change="runSearch"/>
        <div class="results">
            <ModrinthEntry v-for="result in searchResult" :title="result.title" :icon_url="result.icon_url" @click="addDatapack(result.slug)"/>
        </div>
    </div>
</template>

<style scoped>

.modrinth_menu {
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 40rem;
    box-sizing: border-box;
    max-height: 100%;
    max-width: calc(100vw - 5rem);
}

.search {
    width: 100%;
    box-sizing: border-box;
    height: 2rem;
    background-color: lightgray;
    color: black;
    border-radius: 0.3rem;
    border: 2px solid rgb(55, 120, 173);

}

.results {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: rgb(1, 16, 27);
    border-radius: 0.5rem;
    height: 0;
    overflow-y: scroll;
    flex-grow: 1;

}

</style>