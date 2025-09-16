<script setup lang="ts">
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import FindBiomeDropdown from './dropdown/FindBiomeDropdown.vue';
import OpenDropdown from './dropdown/OpenDropdown.vue';
import { vOnClickOutside }from '@vueuse/components';
import { useSearchStore } from '../stores/useBiomeSearchStore';
import StructureDropdown from './dropdown/StructureDropdown.vue';
import { useSettingsStore } from '../stores/useSettingsStore';
import { EventTracker } from '../util/EventTracker';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const datapackStore = useDatapackStore()
const searchStore = useSearchStore()
const settingsStore = useSettingsStore()

const openDropdownOpen = ref(false)
const searchBiomeDropdownOpen = ref(false)
const structureDropdownOpen = ref(false)

function reload(event: MouseEvent){
    EventTracker.track("reload")
    datapackStore.$patch({})
}

function toggleBiomeSearch() {
    searchStore.disabled = !searchStore.disabled
    searchStore.$patch({})
}

function clearBiomeSearch() {
    searchStore.biomes.clear()
    searchStore.$patch({})
    searchBiomeDropdownOpen.value = false
}

function clearStructureSearch() {
    searchStore.structures.clear()
    searchStore.$patch({})
    structureDropdownOpen.value = false
}


</script>

<template>
    <div>
        <div class="buttons">
            <font-awesome-icon
                icon="fa-plus"
                class="button"
                tabindex="0"
                :class="{open: openDropdownOpen }"
                :title="i18n.t('menu.add.title')"
                @click="openDropdownOpen = true"
                @keypress.enter="openDropdownOpen = true"
            />
            <span class="group-button" :class="{active: !searchStore.disabled}">
                <font-awesome-icon
                    icon="fa-magnifying-glass"
                    class="button"
                    tabindex="0"
                    :class="{
                        open: searchBiomeDropdownOpen,
                        active: searchStore.biomes.size > 0
                    }"
                    :title="i18n.t('menu.search_biome.title')"
                    @click="searchBiomeDropdownOpen = true"
                    @keypress.enter="searchBiomeDropdownOpen = true"
                    @contextmenu.prevent="clearBiomeSearch"    
                    @dblclick.prevent="clearBiomeSearch"
                />
                <font-awesome-icon
                    v-if="searchStore.biomes.size > 0"
                    :icon="!searchStore.disabled ? 'fa-toggle-on' : 'fa-toggle-off'"
                    class="button transparent"
                    tabindex="0"
                    :title="i18n.t('menu.search_biome.toggle')"
                    @click.prevent="toggleBiomeSearch"
                />
            </span>
            <font-awesome-icon
                icon="fa-location-dot"
                class="button"
                tabindex="0"
                :class="{
                    open: structureDropdownOpen,
                active: searchStore.structures.size > 0
                }"
                :title="i18n.t('menu.structure_positions.title')"
                @click="structureDropdownOpen = true"
                @keypress.enter="structureDropdownOpen = true"
                @contextmenu.prevent="clearStructureSearch"    
                @dblclick.prevent="clearStructureSearch"
            />

            <font-awesome-icon v-if="settingsStore.dev_mode" icon="fa-rotate-right" class="button" tabindex="0" :title="i18n.t('menu.reload_datapacks.title')" @click="reload" @keypress.enter="reload" />
        </div>
        <div class="dropdowns">
            <Transition>
                <OpenDropdown v-if="openDropdownOpen" v-on-click-outside="() => {openDropdownOpen=false}" @close="openDropdownOpen=false" tabindex="-1"/>
            </Transition>
            <Transition>
                <Suspense>
                    <FindBiomeDropdown v-if="searchBiomeDropdownOpen" v-on-click-outside="() => {searchBiomeDropdownOpen=false}" tabindex="-1"/>
                </Suspense>
            </Transition>
            <Transition>
                <Suspense>
                    <StructureDropdown v-if="structureDropdownOpen" v-on-click-outside="() => {structureDropdownOpen=false}" tabindex="-1"/>
                </Suspense>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.buttons
{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: calc(100% - 2rem);
    justify-content: center;
    position: relative;
}

.dropdowns{
    height: 0;
    width: 100%;
    position: relative;
}

.button {
    background-color: gray;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
}

.button:hover,
.button.open {
    background-color: rgb(177, 176, 176);
}

.button.active {
    background-color: rgb(135, 156, 14);
}

.button.active:hover {
    background-color: rgb(168, 192, 30);
}

.button.transparent {
    background-color: transparent;
}

.button.transparent:hover {
    background-color: transparent;
}

.group-button {
    display: flex;
    flex-direction: row;
    border-radius: 0.5rem;
    background-color: rgb(88, 88, 88);
}

.group-button.active {
    background-color: rgb(77, 87, 23);
}

.spacer {
    width: 2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
