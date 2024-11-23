<script setup lang="ts">
import DatapackEntry from './DatapackEntry.vue';
import { useDatapackStore } from '../stores/useDatapackStore';

const store = useDatapackStore();
</script>

<template>
    <div class="datapack_list">
        <Suspense>
            <DatapackEntry v-for="(datapack, index) in store.datapacks" :datapack="datapack.datapack" :key="datapack.key" :removable="index > 0" @close="store.removeDatapack(index)"/>
        </Suspense>

    </div>
</template>

<style scoped>
.datapack_list {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
}


</style>
