<script setup lang="ts">
import DatapackSelection from './DatapackSelection.vue';
import DimensionSelection from './DimensionSelection.vue';


</script>

<template>
    <div class="sidebar">
        <Suspense>
            <DimensionSelection />
        </Suspense>
        <DatapackSelection />
</div>
</template>

<style scoped>
    .sidebar {
        height: 100%;
        width: 25rem;
        display: flex;
        flex-direction: column;

        background-color: rgb(3, 33, 58);
        color: white;
    }
</style>
