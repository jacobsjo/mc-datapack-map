<script setup lang="ts">
import DatapackEntry from './DatapackEntry.vue';
import { useDatapackStore } from '../stores/useDatapackStore';

const store = useDatapackStore();
</script>

<template>
    <div class="datapack_list">
        <Suspense>
            <DatapackEntry v-for="(datapack, index) in store.datapacks" :datapack="datapack.datapack" :key="datapack.key" @close="store.removeDatapack(index)"/>
        </Suspense>

    </div>
</template>

<style scoped>
.datapack_list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}


</style>
