<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <p>Copyright © 2023 jacobsjo</p>
        <a href="#" @click="$emit('open_popup')">{{ $t('footer.about') }}</a>
        <a href="https://github.com/jacobsjo/mc-datapack-map" target="_blank">{{ $t('footer.view_source') }}</a>
        <a href="https://github.com/jacobsjo/mc-datapack-map/issues" target="_blank">{{ $t('footer.report_issue') }}</a>
        <a href="https://github.com/sponsors/jacobsjo" class="highlight" target="_blank">{{ $t('footer.sponsor') }}</a>
    </div>
</template>

<style scoped>
    .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: auto;
        gap: 0.5rem;
        row-gap: 0rem;
    }

    p {
        display: inline;
        padding: 0;
        margin: 0;
        color: rgb(179, 179, 179);
    }

    a {
        color: rgb(179, 179, 179);
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