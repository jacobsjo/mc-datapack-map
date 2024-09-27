<script setup lang="ts">
import { ref, watch } from 'vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { useDatapackStore } from '../stores/useDatapackStore';
import { useLoadedDimensionStore } from '../stores/useLoadedDimensionStore';
import { useSettingsStore } from '../stores/useSettingsStore';

const loadedDimensionStore = useLoadedDimensionStore()
const settingsStore = useSettingsStore()

const y_limits = ref(await loadedDimensionStore.loaded_dimension.y_limits)

loadedDimensionStore.$subscribe(async (mutation, state) => {
    y_limits.value = await loadedDimensionStore.loaded_dimension.y_limits
})

const props = defineProps({
    'y': Number
})

defineEmits(['update:y'])

</script>

<template>
    <div class="slider">
        <vue-slider :dot-attrs="{'aria-label': $t('map.yslider.aria-label')}" v-if="y_limits !== undefined" direction="btt" height="18rem" tooltip-placement="left" tooltip="hover" :lazy="true" :process="false"
            v-bind:model-value="y"
            @change="y => $emit('update:y', y)"
            :max="y_limits[1]" :min="y_limits[0]"
            :tooltip-formatter="v => $t('map.yslider.y-label', {y: v})" />
    </div>
</template>

<style scoped>
.slider {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 0.3rem;
    border-radius: 0.6rem;
}
</style>