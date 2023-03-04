<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <a href="#" @click="$emit('open_popup')">About</a>
        <a href="https://github.com/jacobsjo/mc-datapack-map" target="_blank">View Source</a>
        <a href="https://github.com/jacobsjo/mc-datapack-map/issues" target="_blank">Report Issue</a>
        <iframe src="https://github.com/sponsors/jacobsjo/button" title="Sponsor jacobsjo" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
    </div>
</template>

<style scoped>
    .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: auto;
        gap: 0.5rem;
        row-gap: 0.3rem;
    }

    a {
        color: gray;
        text-decoration: underline;
    }

    a:hover {
        color: lightgray;
    }
</style>