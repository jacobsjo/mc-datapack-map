<script setup lang="ts">
    function updateUrlSearch(locale: string){
        const uri = window.location.search.substring(1)
        const params = new URLSearchParams(uri)
        params.set('lang', locale)
        history.replaceState({}, "", "?" + params.toString())
    }

</script>

<template>
    <div class="locale-changer">
        <font-awesome-icon icon="fa-earth-europe" class="icon" :title="$t('locale.change_locale.title')"/>
        <select v-model="$i18n.locale" @change="() => updateUrlSearch($i18n.locale)">
            <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
                {{ $t("locale.local_name", [] , {locale: lang}) }}
            </option>
        </select>
    </div>
</template>

<style scoped>
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
</style>