<script setup lang="ts">
import DropdownEntry from './DropdownEntry.vue';

defineProps({
    image: String,
    disabled: Boolean,
    type: String,
})
</script>

<template>
    <DropdownEntry :disabled="disabled">
        <template #icon>
            <img v-if="image !== undefined" :src="image" class="icon" />
        </template>
        <template #smallIcon>
            <font-awesome-icon v-if="type==='file'" class="smallIcon" icon="fa-file-zipper" :title="$t('dropdown.add.recents.type.zip')" />
            <font-awesome-icon v-if="type==='directory'" class="smallIcon" icon="fa-folder-open" :title="$t('dropdown.add.recents.type.folder')"/>
            <img v-if="type==='modrinth'" src="/images/modrinth.svg" class="smallIcon" :title="$t('dropdown.add.recents.type.modrinth')"/>
        </template>
        <div class="main">
            <slot></slot>
            <div class="unavailable" v-if="disabled">
                {{ $t('dropdown.add.recents.wrong_version') }}
            </div>
        </div>
    </DropdownEntry>
</template>

<style scoped>
.icon {
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
}

.smallIcon {
    width: 1rem;
    height: 1rem;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 0px;
}

.unavailable {
    font-size: 13px;
}
</style>