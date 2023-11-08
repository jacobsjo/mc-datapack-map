<script setup lang="ts">
import { useSettingsStore } from '../stores/useSettingsStore';

const settingsStore = useSettingsStore()

function updateUrlSearch(locale: string) {
    const uri = window.location.search.substring(1)
    const params = new URLSearchParams(uri)
    params.set('lang', locale)
    history.replaceState({}, "", "?" + params.toString())
}

</script>

<template>
    <div class="locale-info">
        <a v-bind:href="`https://weblate.catter.dev/projects/jacobsjo/mc-datapack-map/${$i18n.locale}`" target="_blank">
            <img v-bind:src="`https://weblate.catter.dev/widget/jacobsjo/mc-datapack-map/${$i18n.locale}/svg-badge.svg`" alt="Translation status" />
        </a>
    </div>
    <div class="locale-changer">
        <font-awesome-icon icon="fa-earth-europe" class="icon" :title="$t('locale.change_locale.title')" />
        <select v-model="$i18n.locale" @change="() => updateUrlSearch($i18n.locale)">
            <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
                {{ $t("locale.local_name", [], { locale: lang }) }}
            </option>
        </select>
    </div>
    <div class="setting">
        <div class="title">{{ $t('settings.dev_mode.label') }}</div>
        <input type="checkbox" :aria-label="$t('settings.dev_mode.aria-label')" v-model="settingsStore.dev_mode">
    </div>
</template>

<style scoped>
    .locale-info {
        width: 100%;
        text-align: right;
    }

    .locale-changer {
        width: 100%;
        padding-bottom: 0.5rem;
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
        padding-bottom: 0.7rem;
    }

</style>