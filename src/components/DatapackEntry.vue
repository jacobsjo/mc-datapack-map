<script setup lang="ts">
    import { Datapack } from 'mc-datapack-loader';
import { TextComponent } from '../util/TextComponent';
import MinecraftText from './MinecraftText.vue';

    const props = defineProps({
        datapack: Object
    })
    
    const image = await (props.datapack as Datapack)?.getImage()
    const datapack = (props.datapack as Datapack)!
    const rawDescription = (await datapack.getMcmeta())?.pack.description
    const desciption = TextComponent.parse(rawDescription ?? "")

</script>

<template>
    <div class="datapack">
        <img class="image" :src="image" alt="pack.png" />
        <div class="description">
            <MinecraftText :component="desciption" />
        </div>
        <font-awesome-icon icon="fa-xmark" class="close_button" tabindex="0" :title="$t('datapack_list.remove_datapack.title')" @click="$emit('close')" @keypress.enter="$emit('close')" />
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
        padding-right: 0.3rem;
        gap: 0.3rem;
    }

    .image {
        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem 0 0 0.5rem;
        user-select: none;
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
