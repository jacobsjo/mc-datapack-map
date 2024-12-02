<script setup lang="ts">
import DropdownEntry from './DropdownEntry.vue';

defineProps({
    icon: String,
    image: String,
})
</script>

<template>
    <DropdownEntry>
        <template #icon>
            <font-awesome-icon v-if="icon !== undefined" class="icon" :icon="icon" />
            <img v-if="image !== undefined" :src="image" class="icon" />
        </template>
        <slot></slot>
    </DropdownEntry>
</template>

<style scoped>
.icon {
    width: 1.5rem;
    height: 1.5rem;
}
</style>