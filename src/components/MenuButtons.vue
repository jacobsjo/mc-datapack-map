<script setup lang="ts">
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import FindBiomeDropdown from './dropdown/FindBiomeDropdown.vue';
import OpenDropdown from './dropdown/OpenDropdown.vue';
import { vOnClickOutside }from '@vueuse/components';
import { useSearchStore } from '../stores/useBiomeSearchStore';
import StructureDropdown from './dropdown/StructureDropdown.vue';

const datapackStore = useDatapackStore();
const searchStore = useSearchStore();

const openDropdownOpen = ref(false)
const searchBiomeDropdownOpen = ref(false)
const structureDropdownOpen = ref(false)

function reload(event: MouseEvent){
    datapackStore.$patch({})
}

function clearBiomeSearch(event: Event){
    searchStore.biomes.clear()
    searchStore.$patch({})
    searchBiomeDropdownOpen.value = false
    event.preventDefault()
}

function clearStructureSearch(event: Event){
    searchStore.structures.clear()
    searchStore.$patch({})
    structureDropdownOpen.value = false
    event.preventDefault()
}


</script>

<template>
    <div class="buttons">
        <font-awesome-icon
            icon="fa-plus"
            class="button"
            tabindex="0"
            :class="{open: openDropdownOpen }"
            :title="$t('menu.add_datapack.title')"
            @click="openDropdownOpen = true"
            @keypress.enter="openDropdownOpen = true"
        />
        <Transition>
            <OpenDropdown v-if="openDropdownOpen" v-on-click-outside="() => {openDropdownOpen=false}" @close="openDropdownOpen=false" tabindex="-1"/>
        </Transition>
        <font-awesome-icon
            icon="fa-magnifying-glass"
            class="button"
            tabindex="0"
            :class="{
                open: searchBiomeDropdownOpen,
                active: searchStore.biomes.size > 0
            }"
            :title="$t('menu.search_biome.title')"
            @click="searchBiomeDropdownOpen = true"
            @keypress.enter="searchBiomeDropdownOpen = true"
            @contextmenu="clearBiomeSearch"    
            @dblclick="clearBiomeSearch"
        />
        <Transition>
            <Suspense>
                <FindBiomeDropdown v-if="searchBiomeDropdownOpen" v-on-click-outside="() => {searchBiomeDropdownOpen=false}" tabindex="-1"/>
            </Suspense>
        </Transition>
        <font-awesome-icon
            icon="fa-location-dot"
            class="button"
            tabindex="0"
            :class="{
                open: structureDropdownOpen,
               active: searchStore.structures.size > 0
            }"
            :title="$t('menu.structure_positions.title')"
            @click="structureDropdownOpen = true"
            @keypress.enter="structureDropdownOpen = true"
            @contextmenu="clearStructureSearch"    
            @dblclick="clearStructureSearch"
        />
        <Transition>
            <Suspense>
                <StructureDropdown v-if="structureDropdownOpen" v-on-click-outside="() => {structureDropdownOpen=false}" tabindex="-1"/>
            </Suspense>
        </Transition>

        <font-awesome-icon icon="fa-rotate-right" class="button" tabindex="0" :title="$t('menu.reload_datapacks.title')" @click="reload" @keypress.enter="reload" />
    </div>
</template>

<style>
.buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    justify-content: left;
    position: relative;
}

.button:first-child{
    margin-left: 1.7rem;
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
