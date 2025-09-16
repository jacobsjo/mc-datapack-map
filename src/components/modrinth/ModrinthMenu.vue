<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useSettingsStore } from '../../stores/useSettingsStore.js';
import { versionMetadata } from '../../util.js';
import ModrinthEntry from './ModrinthEntry.vue';
import Faq from '../Faq.vue';
import { useDatapackStore } from '../../stores/useDatapackStore.js';
import { useRecentStore } from '../../stores/useRecentStore.js';
import { EventTracker } from '../../util/EventTracker.js';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['close'])

const {t, locale} = useI18n()

const settingsStore = useSettingsStore()
const queryString = ref("")
const includeMods = ref(false)
const ignoreVersion = ref(false)

type SearchResult = {slug: string, title: string, icon_url: string, description: string}

const searchResult = ref<SearchResult[]>([])
const datapackStore = useDatapackStore();
const recentStore = useRecentStore();

onBeforeMount(async () => {
    await runSearch()
})

async function runSearch(){
    const versionsFacet = ignoreVersion.value ? '' : `,[${versionMetadata[settingsStore.mc_version].canonicalNames.map(v => `"versions:${v}"`).join(',')}]`
    const searchUrl = `https://api.modrinth.com/v2/search?query=${encodeURIComponent(queryString.value)}&facets=[${includeMods.value ? '' : '["categories:datapack"],'}["categories:worldgen"],["categories!=library"],["categories!=optimization"]${versionsFacet}]&limit=15`
    const searchResponse = await (await fetch(searchUrl)).json()
    searchResult.value = searchResponse.hits.map((response: any) => {
        return {slug: response.slug, title: response.title, icon_url: response.icon_url, description: response.description}
    });
}

async function addDatapack(slug: string, title: string){
    const datapack = await datapackStore.addModrinthDatapack(slug)
    if (datapack === undefined) {
        return
    }

    EventTracker.track(`add_datapack/modrinth/${slug}`)

    recentStore.addRecentModrinth(datapack, slug, title)
    emit('close')
}

</script>

<template>
    <div class="modrinth_menu">
        <input class="search" autofocus :aria-label="t('modrinth.search.aria-label')" v-model="queryString" type="text" :placeholder="t('modrinth.search.placeholder')" @change="runSearch"/>
        <div class="settings">
            <div class="setting">
                <input type="checkbox" id="include-mods" :aria-label="t('modrinth.include-mods.aria-label')" v-model="includeMods" @change="runSearch" />
                <label for="include-mods">{{t('modrinth.include-mods')}}</label>
                <Faq class="faq">{{t('modrinth.include-mods.notice')}}</Faq>
            </div>
            <div class="setting">
                <input type="checkbox" id="ignore-version" :aria-label="t('modrinth.ignore-version.aria-label')" v-model="ignoreVersion" @change="runSearch" />
                <label for="ignore-version">{{t('modrinth.ignore-version')}}</label>
                <Faq class="faq">{{t('modrinth.ignore-version.notice')}}</Faq>
            </div>
        </div>
        <div class="results" tabindex="-1">
            <ModrinthEntry v-for="result in searchResult" :title="result.title" :icon_url="result.icon_url" :description="result.description" @click="addDatapack(result.slug, result.title)"/>
        </div>
    </div>
</template>

<style scoped>

.modrinth_menu {
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: calc(100vh - 8rem);
    box-sizing: border-box;
    max-height: 45rem;
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

.settings {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.setting {
    color: white;
}

.faq {
    margin-left: 0.3rem;
}

.results {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.8rem;
    padding: 0.5rem;
    background-color: rgb(1, 16, 27);
    border-radius: 0.5rem;
    height: 0;
    overflow-y: scroll;
    flex-grow: 1;

}

</style>