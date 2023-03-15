<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    entry: Object,
    selected: Boolean,
    icons: Function,
    colors: Function
})

defineEmits(['toggle'])

const icon = await props.icons?.(props.entry)
const color = await props.colors?.(props.entry)
</script>

<template>
    <div class="entry"
        :class="{ selected }"
        @click="$emit('toggle')"
        @keypress="$event => {if ($event.key === 'Enter') $emit('toggle')}"
        @contextmenu="$event => {
            if (selected){
                $emit('toggle')
                $event.preventDefault()
            }
        }"    
        tabindex="0"
    >
        <img v-if="icon" :src="icon" />
        <div v-if="color" class="color_display" :style="{ 'background-color': color }"></div>
        <div class="text">{{ entry?.path }}</div>
    </div>
</template>

<style scoped>
.entry {
    background-color: rgb(88, 88, 88);
    transition: 0.3s;
    cursor: pointer;
    padding: 0.1rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    width: 100%;
    box-sizing: border-box;
    user-select: none;

    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.entry:hover {
    background-color: rgb(126, 126, 126);
}

.entry.selected {
    background-color: rgb(135, 156, 14);
}

.entry.selected:hover {
    background-color: rgb(168, 192, 30);
}

img {
    width: 2rem;
    height: 2rem;
}

.color_display {
    min-width: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
}

.text {
    height: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    width: 0;
}
</style>