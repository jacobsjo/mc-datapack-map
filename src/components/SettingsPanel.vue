<script setup lang="ts">
    import { Identifier } from 'deepslate';
import { ref } from 'vue';
    import { useDatapackStore } from '../stores/useDatapackStore';

    const store = useDatapackStore();
    const compositeDatapack = store.getCompositeDatapack()
    let dimensions = ref( await store.getDimensions())
    const normal_world_preset_tag = await compositeDatapack.get("tags/worldgen/world_preset", Identifier.create("normal")) as {values: string[]}
    console.log(normal_world_preset_tag)
    const world_presets = ref( normal_world_preset_tag.values.map(id => Identifier.parse(id)))

    store.$subscribe(async (mutation, state) => {
        const compositeDatapack = store.getCompositeDatapack()
        const normal_world_preset_tag = await compositeDatapack.get("tags/worldgen/world_preset", Identifier.create("normal")) as {values: string[]}
        world_presets.value = normal_world_preset_tag.values.map(id => Identifier.parse(id))

        dimensions.value = await store.getDimensions()
    })
</script>

<template>
    <div class="settings">
        <div class="setting">
            <div class="title">World Preset:</div>
            <select v-model="store.world_preset">
                <option v-for="(world_preset, index) in world_presets" :value="world_preset">{{ world_preset }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title">Dimension:</div>
            <select v-model="store.dimension">
                <option v-for="(dimension, index) in dimensions" :value="dimension">{{ dimension }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title">Seed:</div>
            <input :value="store.seed" @change="event => {
                try {
                    store.seed = BigInt((event.target as HTMLInputElement).value)
                } catch {
                    (event.target as HTMLInputElement).value = store.seed.toString()
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
        padding: 1rem;
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
