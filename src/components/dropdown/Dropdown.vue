
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dropdown = ref<HTMLDivElement|null>(null)

onMounted(() => {
    dropdown.value?.focus()
})
</script>

<template>
    <div ref="dropdown" class="dropdown">
        <slot></slot>
    </div>
</template>

<style scoped>
.dropdown {
    position: absolute;
    width: calc(100% - 2rem);
    max-height: calc(100vh - 7rem);
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 0.25rem);
    background-color: gray;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
    padding: 0.5rem;
    outline: none;
    align-items: center;
    overflow: hidden;
    z-index: 50;
    border: 3px solid rgb(80, 80, 80);
}
</style>