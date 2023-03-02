<script setup lang="ts">
    import { useDatapackStore } from '../stores/useDatapackStore';

    const store = useDatapackStore();
    var datapacks = await store.datapack.getIds('dimension')
</script>

<template>
    <div class="dimension">
        <div class="title">Dimension:</div>
        <select v-model="store.dimension">
            <option v-for="(datapack, index) in datapacks" :value="datapack">{{ datapack }}</option>
        </select>
    </div>
</template>

<style scoped>
    .dimension {
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .title {
        text-align: center;
        font-size: larger;
    }

    select {
        box-sizing: border-box;
        width: 100%;
    }
</style>
