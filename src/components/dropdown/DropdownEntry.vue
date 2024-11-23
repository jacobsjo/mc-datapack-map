<script setup lang="ts">
    defineProps({
        disabled: Boolean
    })
</script>

<template>
    <div class="dropdown-entry" :class="{disabled}" tabindex="0">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="name"><slot></slot></div>
        <div v-if="$slots.smallIcon" class="small-icon">
            <slot name="smallIcon"></slot>
        </div>
    </div>
</template>

<style scoped>
    .dropdown-entry{
        box-sizing: border-box;
        width: 100%;
        height: 2.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        border-radius: 1rem;
        padding: 0.5rem;
        transition: 0.3s;
        cursor: pointer;
        user-select: none;
        position: relative;
    }

    .dropdown-entry.disabled{
        cursor: default;
    }

    .dropdown-entry:not(.disabled):hover{
        background-color: rgb(177, 176, 176);
    }

    .icon{
        width: 2rem;
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .dropdown-entry.disabled .icon{
        filter: saturate(0.2);
    }

    .name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
    }

    .dropdown-entry.disabled .name{
        color: rgb(202, 202, 202);
    }

</style>