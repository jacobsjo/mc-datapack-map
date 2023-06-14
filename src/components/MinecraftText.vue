<script setup lang="ts">
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import { TextComponent } from '../util/TextComponent';

    const props = defineProps({
        component: Object,
        parentStyle: Object
    })

    const component: TextComponent = props.component as TextComponent

    const formatting = {...props.parentStyle, ...component.formatting}

 
</script>

<template>
    <span 
        class="mc-text"
        :style="{
            color: formatting.color,
            textDecorationLine: (formatting.underlined || formatting.strikethrough) ?
                (formatting.underlined ? 'underline' : '')
            + (formatting.strikethrough ? ' line-through' : '' )
            : 'none',
            fontStyle: formatting.italic ? 'italic' : 'normal',
            fontWeight: formatting.bold ? 'bold' : `normal`
        }"
    >
        {{ component.translate ? $t("minecraft." + component.text ?? "") : component.text ?? "" }}
    </span>
    <MinecraftText v-for="c in component.extra" :component="c" :parent-style="formatting" />
</template>

<style scoped>
    .mc-text{
        display: inline;
        white-space: pre-line;
    }
</style>