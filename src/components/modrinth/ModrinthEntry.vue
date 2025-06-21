<script setup lang="ts">
const props = defineProps({
    title: String,
    icon_url: String,
    description: String,
})

defineEmits(['click'])

</script>

<template>
    <div class="entry" dir="ltr" @click="$emit('click')" @keypress.enter="$emit('click')" tabindex="0">
        <img crossorigin="anonymous" :src="icon_url" />
        <div class="text">
            <span class="title">{{ title }}</span>
            <span class="description">{{ description }}</span>
        </div>
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
    height: 4rem;
    width: 4rem;
    image-rendering: crisp-edges;
    aspect-ratio: 1;
    border-radius: 0.5rem 0 0 0.5rem;
}

.text {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: bold;
}

.description {
    max-height: 2rem;
    overflow: hidden;
    line-height: 1rem;
}

</style>