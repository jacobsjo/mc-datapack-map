<script setup lang="ts">
import { ref, watch } from 'vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { useDatapackStore } from '../stores/useDatapackStore';
import { useLoadedDimensionStore } from '../stores/useLoadedDimensionStore';
import { useSettingsStore } from '../stores/useSettingsStore';
import { useI18n } from 'vue-i18n';

const loadedDimensionStore = useLoadedDimensionStore()
const settingsStore = useSettingsStore()

const level_height = ref(await loadedDimensionStore.loaded_dimension.level_height)

loadedDimensionStore.$subscribe(async (mutation, state) => {
    level_height.value = await loadedDimensionStore.loaded_dimension.level_height
})

const props = defineProps({
    'y': Number
})

const i18n = useI18n()

defineEmits(['update:y'])

</script>

<template>
    <div class="slider">
        <vue-slider :dot-attrs="{'aria-label': i18n.t('map.yslider.aria-label')}" v-if="level_height !== undefined" direction="btt" height="18rem" :tooltip-placement="i18n.t('locale.text_direction') === 'rtl' ? 'right' : 'left'" tooltip="hover" :lazy="true" :process="false"
            v-bind:model-value="y"
            @change="y => $emit('update:y', y)"
            :max="level_height.minY + level_height.height" :min="level_height.minY"
            :tooltip-formatter="v => i18n.t('map.yslider.y-label', {y: v})" />
    </div>
</template>

<style scoped>
.slider {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 0.3rem;
    border-radius: 0.6rem;
}
</style>