<script setup lang="ts">
import DatapackSelection from './DatapackList.vue';
import MenuButtons from './MenuButtons.vue';
import SettingsPanel from './SettingsPanel.vue';


</script>

<template>
    <div class="sidebar">
        <MenuButtons />
        <Suspense>
            <SettingsPanel />
        </Suspense>
        <DatapackSelection />
    </div>
</template>

<style scoped>
    .sidebar {
        height: 100%;
        min-width: 18rem;
        max-width: 18rem;
        display: flex;
        flex-direction: column;

        background-color: rgb(3, 33, 58);
        color: white;
        
        overflow-y: scroll;
        padding: 1rem;
        padding-top: 1.5rem;
        gap: 1.5rem;
        box-sizing: border-box;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

</style>
