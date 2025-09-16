<script setup lang="ts">
import { Datapack, PackMcmeta } from 'mc-datapack-loader';
import { TextComponent } from '../util/TextComponent';
import MinecraftText from './MinecraftText.vue';
import { useSettingsStore } from '../stores/useSettingsStore';
import { versionMetadata } from '../util';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

    const i18n = useI18n()

    const props = defineProps({
        datapack: Object,
        removable: Boolean
    })

    const settings = useSettingsStore()


    const datapack = (props.datapack as Datapack)!
    const image = await datapack.getImage()
    const mcMeta = await datapack.getMcmeta()
    const rawDescription = mcMeta?.pack.description
    const formatRange = mcMeta?.pack.supported_formats ?? mcMeta?.pack.pack_format ?? 0
    const supported = computed(() => PackMcmeta.MatchFormatRange(formatRange, versionMetadata[settings.mc_version].datapackFormat))
    const desciption = TextComponent.parse(rawDescription ?? "")

</script>

<template>
    <div class="datapack" :class="{ unsupported: !supported}">
        <img class="image" :src="image" alt="pack.png" />
        <div class="description">
            <MinecraftText :component="desciption" />
        </div>
        <font-awesome-icon v-if="removable" icon="fa-xmark" class="close_button" tabindex="0" :title="i18n.t('datapack_list.remove_datapack.title')" @click="$emit('close')" @keypress.enter="$emit('close')" />
    </div>
</template>

<style scoped>
    .datapack {
        width: 100%;
        height: 4rem;
        box-sizing: border-box;
        background-color: rgb(66, 66, 66);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        position: relative;
        padding-inline-end: 0.3rem;
        gap: 0.3rem;
    }

    .datapack.unsupported {
        background-color: rgb(75, 41, 41);
    }

    .image {
        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem 0 0 0.5rem;
        user-select: none;
    }

    .image:dir(rtl) {
        border-radius: 0 0.5rem 0.5rem 0;
    }

    .description {
        flex-grow: 1;
        text-align: center;
        overflow: hidden;
        max-height: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        font-family: sans-serif;
        font-size: 16px;
        line-height: 1.2rem;
    }

    .close_button {
        position: absolute;
        right: 1rem;
        background-color: rgb(48, 48, 48);
        padding: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.5rem;
        opacity: 0;
        transition: 0.1s;
        cursor: pointer;
    }

    .datapack:hover .close_button, .close_button:focus {
        opacity: 1;
    }

    .close_button:hover, .close_button:focus {
        background-color: rgb(158, 0, 0);
    }
</style>
