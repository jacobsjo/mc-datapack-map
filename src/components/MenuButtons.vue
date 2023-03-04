<script setup lang="ts">
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import OpenDropdown from './OpenDropdown.vue';

const store = useDatapackStore();

const openDropdownOpen = ref(false)

function reload(event: MouseEvent){
    store.$patch({})
}

</script>

<template>
    <div class="buttons">
        <font-awesome-icon icon="fa-plus" class="button" :class="openDropdownOpen ? 'open' : ''" title="Add Datapack" @click="openDropdownOpen = true" />
        <Transition>
            <OpenDropdown v-if="openDropdownOpen" @focusout="openDropdownOpen=false" tabindex="-1"/>
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
