<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const i18n = useI18n()
</script>

<template>
    <div class="tip_message">
        <p> {{ i18n.t('tip_message.message') }} </p>
        <a href="https://ko-fi.com/jacobsjo" target="_blank" class="kofi">
            <img src="../assets/kofi.svg" />
            {{ i18n.t('tip_message.kofi') }}
        </a>
        <a href="https://github.com/sponsors/jacobsjo" target="_blank" class="github">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-1 v-align-middle color-fg-sponsors anim-pulse-in">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
            {{ i18n.t('tip_message.github') }}
        </a>
        <div class="closing_x" tabindex="0" @click="$emit('close')" @keypress.enter="$emit('close')"
            :title="i18n.t('tip_message.close')">&times;</div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext');

.tip_message {
    border: 1px solid orange;
    border-radius: 0.4rem;
    padding: 0.5rem;
    background-color: rgb(43, 43, 43);
    position: relative;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
}

.tip_message p {
    padding: 0 0.3rem;
    margin: 0;
}

a {
    display: block;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 10rem;
    font-family: 'Lato', Helvetica, Century Gothic, sans-serif;
    text-decoration: none;
    text-shadow: none;
    font-weight: 1000;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    transition: 0.2s;
}

a.kofi {
    background-color: #FF5E5B;
}

a.kofi:hover {
    background-color: #ff8b89;
}

a.github {
    background-color: rgb(26, 26, 26);
    border: 1px solid rgb(88, 88, 88);
}

a.github:hover {
    background-color: rgb(53, 53, 53);
}


a img{
    height: 13px;
    width: 20px;
    padding-inline-end: 0.3rem;
}

a svg {
    height: 16px;
    width: 20px;
    padding-inline-end: 0.3rem;
    margin-bottom: -0.1rem;
}

a svg path {
    fill: pink;
}

.closing_x {
    position: absolute;
    text-align: center;
    right: -0.5rem;
    top: -0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    color: rgb(167, 167, 167);
    cursor: pointer;
}

.closing_x:hover {
    color: white;
}
</style>