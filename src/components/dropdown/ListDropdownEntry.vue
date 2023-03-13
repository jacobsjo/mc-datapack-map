<script setup lang="ts">import { ref } from 'vue';

    const props = defineProps({
        entry: Object,
        selected: Boolean,
        icons: Function
    })

    const icon = await props.icons?.(props.entry)
</script>

<template>
    <div class="entry"
        :class="{selected}"
        @click="$emit('toggle')">
        <img v-if="icon" :src="icon" />
        <div class="text">{{ entry?.toString() }}</div>
    </div>
</template>

<style scoped>
    .entry {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    .text {
        height: fit-content;
    }


</style>