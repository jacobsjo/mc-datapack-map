
<script setup lang="ts">
import { computed, ref } from 'vue';
import Dropdown from './Dropdown.vue';
import { Identifier } from 'deepslate';
import ListDropdownEntry from './ListDropdownEntry.vue';

const props = defineProps({
        placeholder: String,
        entries: Object,
        selected: Object,
        icons: Function
})

const search = ref("")
const filtered_entries = computed(() => {
    return props.entries?.filter((b: Identifier) => b.toString().includes(search.value)).sort()
})

</script>


<template>
    <Dropdown class="dropdown">
        <input id="search" :placeholder="props.placeholder" spellcheck="false" v-model="search" />
        <div class="entry_list">
            <ListDropdownEntry v-for="entry in filtered_entries" :entry="entry" :selected="selected?.has(entry.toString())" :icons="icons" @toggle="$emit('toggle', entry)" />
        </div>
    </Dropdown>
</template>

<style scoped>
    .dropdown {
        background-color: rgb(59, 59, 59);
        padding-bottom: 0;
        padding: 0;
    }

    input {
        background-color: rgb(59, 59, 59);
        color: white;
        padding: 0.5rem;
        width: 95%;
        box-sizing: border-box;
        border: 0;
        outline: 0;
    }

    .entry_list {
        height: 25rem;
        width: 100%;
        padding: 0rem;
        background-color: rgb(88, 88, 88);
        overflow-y: scroll;
        list-style-type: none;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow-x: visible;
    }


    .entry_list::-webkit-scrollbar {
        display: none;
    }

    .entry {
        background-color: rgb(88, 88, 88);
        transition: 0.3s;
        cursor: pointer;
        padding: 0.1rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        user-select: none;
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

</style>