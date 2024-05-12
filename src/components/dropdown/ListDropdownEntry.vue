<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    entry: Object,
    selected: Boolean,
    icons: Function,
    colors: Function
})

defineEmits(['toggle'])

const icon = computed(() => props.icons?.(props.entry?.id))
const color = computed(() => props.colors?.(props.entry?.id))
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
        :title=" entry?.localized"
    >
        <img v-if="icon" :src="icon" crossorigin="anonymous" />
        <div v-if="color" class="color_display" :style="{ 'background-color': color }"></div>
        <div class="text"><div class="text_part" v-for="part in entry?.localized.split(/(?=\/)/g)">{{ part }}</div></div>
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
    flex-grow: 1;
    width: 0;
    display: flex;
    flex-direction: row;
    gap: 0rem;
}

.text_part {
    white-space: nowrap;
    flex-shrink: 10000;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 2rem;
}

.text :last-child.text_part {
    flex-shrink: 1;
}
</style>