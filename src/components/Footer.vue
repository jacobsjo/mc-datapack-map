<script setup lang="ts">
import { ref } from 'vue';
import LocaleChanger from './LocaleChanger.vue';

const show_more = ref(false)

</script>

<template>
    <div class="footer">
        <div class="smallprint">
            <p>Copyright © 2023 jacobsjo</p>
            <p id="note">{{  $t('footer.legel.note') }}</p>
            <a href="https://jacobsjo.eu/about.html" target="_blank">{{ $t('footer.about') }}</a>
            <a href="OTHER_LICENSES.txt" target="_blank">{{ $t('footer.licenses') }}</a>
            <a href="https://github.com/sponsors/jacobsjo" target="_blank">{{ $t('footer.sponsor') }}</a>
            <a @click="show_more = !show_more" :class="{'highlight': show_more}">{{  $t('footer.more') }} </a>
            <div v-if="show_more" class="more">
            <a href="https://github.com/jacobsjo/mc-datapack-map" target="_blank">{{ $t('footer.view_source') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map/issues" target="_blank">{{ $t('footer.report_issue') }}</a>
            <a href="https://weblate.catter.dev/projects/jacobsjo/mc-datapack-map/" target="_blank">{{ $t('footer.translate') }}</a>
            <a href="https://jacobsjo.eu" target="_blank">{{ $t('footer.other') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map/wiki" target="_blank">{{ $t('footer.wiki') }}</a>
            </div>
        </div>
        <LocaleChanger />
    </div>
</template>

<style scoped>
    .footer {
        margin-top: auto;
    }

    .smallprint, .smallprint .more {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        row-gap: 0rem;
    }

    a, p{
        color: rgb(179, 179, 179);
    }

    p {
        display: inline;
        padding: 0;
        margin: 0;
    }

    #note {
        font-size: 8pt;
    }

    a {
        text-decoration: underline;
        cursor: pointer;
    }


    a:hover {
        color: lightgray;
    }

    .highlight{
        color: rgb(243, 221, 122);
    }

    a.highlight:hover {
        color: rgb(255, 239, 21);
    }
</style>