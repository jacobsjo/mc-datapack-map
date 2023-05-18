<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue';


</script>

<template>
    <div class="footer">
        <LocaleChanger />
        <div class="smallprint">
            <p>Copyright © 2023 jacobsjo</p>
            <a href="https://jacobsjo.eu/about.html" target="_blank">{{ $t('footer.about') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map" target="_blank">{{ $t('footer.view_source') }}</a>
            <a href="https://github.com/jacobsjo/mc-datapack-map/issues" target="_blank">{{ $t('footer.report_issue') }}</a>
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
        height: 2.9rem;
        gap: 0.5rem;
        row-gap: 0rem;
    }

    a, p{
        color: rgb(179, 179, 179);
        height: 0rem;
    }

    p {
        display: inline;
        padding: 0;
        margin: 0;
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