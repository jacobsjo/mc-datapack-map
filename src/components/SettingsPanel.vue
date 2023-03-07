<script setup lang="ts">
    import { Identifier } from 'deepslate';
import { ref } from 'vue';
    import { useDatapackStore } from '../stores/useDatapackStore';
import { useSettingsStore } from '../stores/useSettingsStore';

    const datapackStore = useDatapackStore();
    const settingsStore = useSettingsStore()
    const dimensions = ref( await datapackStore.dimensions)
    const world_presets = ref( await datapackStore.world_presets)

    datapackStore.$subscribe(async (mutation, state) => {
        world_presets.value = await datapackStore.world_presets
        dimensions.value = await datapackStore.dimensions
    })
</script>

<template>
    <div class="settings">
        <div class="setting">
            <div class="title">World Preset:</div>
            <select v-model="settingsStore.world_preset">
                <option v-for="(world_preset, index) in world_presets" :value="world_preset">{{ world_preset }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title">Dimension:</div>
            <select v-model="settingsStore.dimension">
                <option v-for="(dimension, index) in dimensions" :value="dimension">{{ dimension }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title">Seed:</div>
            <input :value="settingsStore.seed" @change="event => {
                try {
                    settingsStore.seed = BigInt((event.target as HTMLInputElement).value)
                } catch {
                    (event.target as HTMLInputElement).value = settingsStore.seed.toString()
                }
            }" type="text"/>
        </div>
    </div>
</template>

<style scoped>
    .settings{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-sizing: border-box;
    }
    .setting {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .title{
        height: fit-content;
        width: 6.3rem;
    }

    select, input {
        box-sizing: border-box;
        height: 2rem;
        background-color: lightgray;
        flex-grow: 1;
        width: 0rem;
        color: black;
    }
</style>
