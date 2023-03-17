
<script setup lang="ts">
import { computed, ref } from 'vue';
import Dropdown from './Dropdown.vue';
import { Identifier } from 'deepslate';
import ListDropdownEntry from './ListDropdownEntry.vue';
import ListDropdownGroup from './ListDropdownGroup.vue';

const props = defineProps({
        placeholder: String,
        tags: Object,
        entries: Object,
        selected: Object,
        icons: Function,
        colors: Function
})

defineEmits(['toggle', 'disableGroup'])

const search = ref("")

function group(entries: Identifier[]){
    return entries.filter((b: Identifier) => b.toString().includes(search.value)).sort().reduce((groups, entry) => {
        groups[entry.namespace] = groups[entry.namespace] ?? []
        groups[entry.namespace].push(entry)
        return groups
    }, {} as {[key: string]: Identifier[]})
}

const grouped_tags = computed<{[key: string]: Identifier[]}>(() => {
    return props.tags ? group(props.tags as Identifier[]) : {}
})

const grouped_entries = computed<{[key: string]: Identifier[]}>(() => {
    return props.entries ? group(props.entries as Identifier[]) : {}
})



</script>


<template>
    <Dropdown class="dropdown">
        <input id="search" :placeholder="props.placeholder" spellcheck="false" v-model="search" /> 
        <div class="entry_list">
            <ListDropdownGroup
                v-for="group in Object.entries(grouped_tags)"
                :entries="group[1]"
                :group_name="`#${group[0]}`"
                :selected="selected"
                @toggle="(entry: Identifier) => $emit('toggle', entry)" 
                @disableGroup="() => $emit('disableGroup', group[0])"
                />            
            <ListDropdownGroup
                v-for="group in Object.entries(grouped_entries)"
                :entries="group[1]"
                :group_name="group[0]"
                :selected="selected"
                :icons="icons"
                :colors="colors"
                @toggle="(entry: Identifier) => $emit('toggle', entry)" 
                @disableGroup="() => $emit('disableGroup', group[0])"
                />
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
        padding-bottom: 0.1rem;
        width: 95%;
        box-sizing: border-box;
        border: 0;
        outline: 0;
        margin-bottom: 0.4rem;
        border-bottom:  2px solid transparent;
    }

    input:hover {
        border-bottom-color: rgb(31, 98, 129);
    }

    input:focus {
        border-bottom-color: rgb(25, 156, 218);
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


</style>