<script setup lang="ts">
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import FindBiomeDropdown from './dropdown/FindBiomeDropdown.vue';
import OpenDropdown from './dropdown/OpenDropdown.vue';
import { vOnClickOutside }from '@vueuse/components';
import { useBiomeSearchStore } from '../stores/useBiomeSearchStore';

const datapackStore = useDatapackStore();
const biomeSearchStore = useBiomeSearchStore();

const openDropdownOpen = ref(false)
const searchBiomeDropdownOpen = ref(false)

function reload(event: MouseEvent){
    datapackStore.$patch({})
}

function clearBiomeSearch(event: Event){
    biomeSearchStore.biomes.clear()
    biomeSearchStore.$patch({})
    searchBiomeDropdownOpen.value = false
    event.preventDefault()
}

</script>

<template>
    <div class="buttons">
        <font-awesome-icon icon="fa-plus" class="button" :class="{open: openDropdownOpen }" title="Add Datapack" @click="openDropdownOpen = true" />
        <Transition>
            <OpenDropdown v-if="openDropdownOpen" v-on-click-outside="() => {openDropdownOpen=false}" @close="openDropdownOpen=false" tabindex="-1"/>
        </Transition>
        <font-awesome-icon
            icon="fa-magnifying-glass"
            class="button"
            :class="{
                open: searchBiomeDropdownOpen,
                active: biomeSearchStore.biomes.size > 0
            }"
            title="Search Biome"
            @click="searchBiomeDropdownOpen = true"
            @contextmenu="clearBiomeSearch"    
            @dblclick="clearBiomeSearch"
        />
        <Transition>
            <Suspense>
                <FindBiomeDropdown v-if="searchBiomeDropdownOpen" v-on-click-outside="() => {searchBiomeDropdownOpen=false}" tabindex="-1"/>
            </Suspense>
        </Transition>
        <font-awesome-icon icon="fa-rotate-right" class="button" title="Reload Datapacks" @click="reload" />
    </div>
</template>

<style>
.buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
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
