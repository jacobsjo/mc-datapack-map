<script setup lang="ts">
    defineProps({
        icon: String,
        image: String
    })
</script>

<template>
    <div class="dropdown-entry">
        <font-awesome-icon v-if="icon !== undefined" class="icon" :icon="icon"/>
        <img v-if="image !== undefined" :src="image" class="image"/>
        <div class="name"><slot></slot></div>
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
    }

    .dropdown-entry:hover{
        background-color: rgb(177, 176, 176);
    }

    .icon{
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }

    .image{
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
    }

</style>