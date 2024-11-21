<script setup lang="ts">
const props = defineProps({
    title: String,
    icon_url: String
})

defineEmits(['click'])

</script>

<template>
    <div class="entry" @click="$emit('click')">
        <img crossorigin="anonymous" :src="icon_url" />
        <span class="title">{{ title }}</span>
    </div>
</template>

<style scoped>
.entry {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    background-color: gray;
    border-radius: 0.5rem;
    user-select: none;
    cursor: pointer;
}

.entry:hover {
    background-color: lightgray;
}

.entry img {
    max-height: 4rem;
    max-width: 4rem;
    aspect-ratio: 1;
    border-radius: 0.5rem 0 0 0.5rem;
}

</style>