<script setup lang="ts">
import DatapackSelection from './DatapackList.vue';
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
        min-width: 18rem;
        display: flex;
        flex-direction: column;

        background-color: rgb(3, 33, 58);
        color: white;
        
        overflow-y: scroll;

    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

</style>
