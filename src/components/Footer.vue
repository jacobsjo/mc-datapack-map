<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue';


</script>

<template>
    <div class="footer">
        <LocaleChanger />
        <div class="smallprint">
            <p>Copyright © 2023 jacobsjo</p>
            <p id="note">{{  $t('footer.legel.note') }}</p>
            <a href="https://jacobsjo.eu/about.html" target="_blank">{{ $t('footer.about') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map" target="_blank">{{ $t('footer.view_source') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map/issues" target="_blank">{{ $t('footer.report_issue') }}</a>
            <a href="https://weblate.catter.dev/projects/jacobsjo/mc-datapack-map/" target="_blank">{{ $t('footer.translate') }}</a>
            <a href="https://jacobsjo.eu" target="_blank">{{ $t('footer.other') }}</a>
            <a href="OTHER_LICENSES.txt" target="_blank">{{ $t('footer.licenses') }}</a>
            <a href="https://github.com/sponsors/jacobsjo" class="highlight" target="_blank">{{ $t('footer.sponsor') }}</a>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        margin-top: auto;
    }

    .smallprint {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        row-gap: 0rem;
        height: 8rem;
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
        height: 2.8rem;
    }

    a {
        text-decoration: underline;
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