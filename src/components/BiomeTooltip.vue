<script setup lang="ts">
import { Identifier } from 'deepslate';
import { useSettingsStore } from '../stores/useSettingsStore';

const settingsStore = useSettingsStore()

const props = defineProps({
    biome: Object,
    pos: Object
})

</script>

<template>
    <div class="tooltip">
        <div class="biome">
            {{ settingsStore.getLocalizedName('biome', biome as Identifier, false) }}
        </div>
        <div class="position">
            <div class="coordinate">{{ pos?.[0].toFixed(0) }}</div>,
            <div class="coordinate">{{ pos?.[1].toFixed(0) }}</div>,
            <div class="coordinate">{{ pos?.[2].toFixed(0) }}</div>
        </div>
    </div>
</template>

<style scoped>
    .tooltip {
        width: fit-content;
        padding: 0.25rem;
        color: black;
    }

    .biome {
        background-color: lightgray;
        width: fit-content;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }

    .position {
        background-color: lightgray;
        width: fit-content;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        display: flex;
        flex-direction: row;
    }

    .coordinate {
        min-width: 2.8rem;
        text-align: center;
    }
</style>
