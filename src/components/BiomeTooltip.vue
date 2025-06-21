<script setup lang="ts">
import { Identifier } from 'deepslate';
import { useSettingsStore } from '../stores/useSettingsStore';
import { useI18n } from 'vue-i18n';

const settingsStore = useSettingsStore()

const props = defineProps({
    biome: Object,
    pos: Object
})

const i18n = useI18n()

</script>

<template>
    <div class="tooltip">
        <div class="content">
            <div class="biome">
                {{ settingsStore.getLocalizedName('biome', biome as Identifier, false) }}
            </div>
            <i18n-t keypath="map.coords.xyz" tag="div" class="position">
                <template v-slot:x>
                    <div class="coordinate">{{ pos?.[0].toFixed(0) }}</div>
                </template>
                <template v-slot:y>
                    <div class="coordinate">{{ pos?.[1].toFixed(0) }}</div>
                </template>
                <template v-slot:z>
                    <div class="coordinate">{{ pos?.[2].toFixed(0) }}</div>
                </template>
            </i18n-t>
        </div>
    </div>
</template>

<style scoped>
    .tooltip {
        width: 0;
        padding: 0.25rem;
        color: black;
        white-space: nowrap;
    }

    .content {
        margin: 10px;
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
