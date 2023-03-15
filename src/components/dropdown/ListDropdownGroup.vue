<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import ListDropdownEntry from './ListDropdownEntry.vue';


const props = defineProps({
        entries: Object,
        selected: Object,
        icons: Function,
        colors: Function,
        group_name: String
})

defineEmits(['toggle', 'disableGroup'])


const shown = ref(true)

function isGroupSelected (selected: any, group_name: any) {
    if (!selected) return false
    return [...selected].findIndex((p: string) => p.startsWith(group_name + ":")) >= 0
}

</script>

<template>
    <div class="header"
        :class="{selected: isGroupSelected(selected, group_name)}"
        @click="shown = !shown"
        @keypress="$event => {
            if ($event.key === 'Enter')
                shown = !shown
        }"
        @contextmenu="$event => {
            if (isGroupSelected(selected, group_name)){
                $emit('disableGroup')
                $event.preventDefault()   
            }
        }"
        tabindex="0"
    >
        <font-awesome-icon class="open_icon" :icon="shown ? 'fa-angle-down' : 'fa-angle-right'"/>
        {{ group_name }}
    </div>
    <div class="group" v-if="shown">
        <ListDropdownEntry v-for="entry in entries" :key="entry.toString()" :entry="entry" :selected="selected?.has(entry.toString())" :icons="icons" :colors="colors" @toggle="$emit('toggle', entry)" />
    </div>
</template>

<style scoped>
.header {
    background-color: rgb(78, 78, 78);
    padding: 0.5rem;
    cursor: pointer;
    user-select: none;
}

.header:hover {
    background-color: rgb(105, 105, 105);
}

.header.selected {
    background-color: rgb(102, 116, 23);
}

.header.selected:hover {
    background-color: rgb(129, 146, 35);
}


.open_icon {
    width: 1rem;
}

</style>