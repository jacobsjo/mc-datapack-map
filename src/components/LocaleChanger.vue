<script setup lang="ts">
import { useSettingsStore } from '../stores/useSettingsStore';
import { EventTracker } from '../util/EventTracker';
import { updateUrlParam } from '../util';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const settingsStore = useSettingsStore()

function updateUrlSearch(locale: string) {
    updateUrlParam('lang', locale)
    EventTracker.track(`change_locale/${locale}`)
}

</script>

<template>
    <div class="locale-info">
        <a v-bind:href="`https://weblate.catter.dev/projects/jacobsjo/mc-datapack-map/${i18n.locale.value}`" target="_blank">
            <img v-bind:src="`https://weblate.catter.dev/widget/jacobsjo/mc-datapack-map/${i18n.locale.value}/svg-badge.svg`" alt="Translation status" />
        </a>
    </div>
    <div class="locale-changer">
        <font-awesome-icon icon="fa-earth-europe" class="icon" :title="i18n.t('locale.change_locale.title')" />
        <select v-model="i18n.locale.value" @change="() => updateUrlSearch(i18n.locale.value)">
            <option v-for="lang in i18n.availableLocales" :key="lang" :value="lang" :dir="i18n.t('locale.text_direction', [], { locale: lang })">
                {{ i18n.t("locale.local_name", [], { locale: lang }) }}
            </option>
        </select>
    </div>
    <div class="setting">
        <div class="title">{{ i18n.t('settings.dev_mode.label') }}</div>
        <input type="checkbox" :aria-label="i18n.t('settings.dev_mode.aria-label')" v-model="settingsStore.dev_mode">
    </div>
</template>

<style scoped>
    .locale-info {
        text-align: right;
    }

    .locale-changer {
        width: 100%;
        display: flex;
        gap: 0.2rem;
    }

    .icon {
        width: 1.4rem;
        height: 1.4rem;
        padding: 0.3rem;
    }

    select {
        box-sizing: border-box;
        height: 2rem;
        background-color: lightgray;
        width: 0;
        flex-grow: 1;
        color: black;
        border-radius: 0.3rem;
        border: 2px solid rgb(55, 120, 173);
    }

    .setting {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        box-sizing: border-box;
        justify-content: center;
        flex-grow: 1;
    }

    .setting .title {
        white-space: nowrap;
    }

</style>