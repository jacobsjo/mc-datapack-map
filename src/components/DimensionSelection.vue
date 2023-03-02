<script setup lang="ts">
    import { CompositeDatapack } from 'mc-datapack-loader';
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';

    const store = useDatapackStore();
    const compositeDatapack = store.getCompositeDatapack()
    let dimensions = ref( await compositeDatapack.getIds('dimension'))

    store.$subscribe(async (mutation, state) => {
        const compositeDatapack = store.getCompositeDatapack()
        dimensions.value = await compositeDatapack.getIds('dimension')
        console.log(dimensions)
    })
</script>

<template>
    <div class="dimension">
        <div class="title">Dimension:</div>
        <select v-model="store.dimension">
            <option v-for="(dimension, index) in dimensions" :value="dimension">{{ dimension }}</option>
        </select>
    </div>
</template>

<style scoped>
    .dimension {
        width: 100%;
        max-width: 100%;
        padding: 1rem; 
        box-sizing: border-box;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .title{
        height: fit-content;
    }

    select {
        box-sizing: border-box;
        height: 2rem;
        background-color: lightgray;
        flex-grow: 1;
        width: 0rem;
    }
</style>
