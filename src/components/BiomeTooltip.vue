<script setup lang="ts">
    const props = defineProps({
        biome: Object
    })

</script>

<template>
    <div class="tooltip">
        {{ biome }}
    </div>
</template>

<style scoped>
    .tooltip {
        width: fit-content;
        height: 1.5rem;
        padding: 0.25rem;
        background-color: lightgray;
    }
</style>
