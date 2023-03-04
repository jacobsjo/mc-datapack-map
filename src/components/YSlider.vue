<script setup lang="ts">
    import { ref, watch } from 'vue';
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
    import { useDatapackStore } from '../stores/useDatapackStore';

    const store = useDatapackStore()

    const y_limits = ref(await store.y_limits)

    store.$subscribe(async (mutation, state) => {
        y_limits.value = await store.y_limits
    })

</script>

<template>
    <div class="slider">
        <vue-slider 
            direction="btt"
            height="6rem"
            tooltip-placement="left"
            tooltip="hover"
            :lazy="true"
            :process="false"
            :modelValue="store.y === 'surface' ? y_limits[1] + 1 : store.y"
            @update:model-value="(value) => store.y = (value === y_limits[1] +1 ? 'surface' : value)"
            :max="y_limits[1] + 1"
            :min="y_limits[0]"
            :tooltip-formatter="v => v === y_limits[1] + 1 ? 'Surface' : 'Y: ' + v" />
    </div>
</template>

<style scoped>
    .slider{
        background-color: rgba(0,0,0,0.5);
        padding: 1rem 0.3rem;
        border-radius: 0.6rem;
    }
</style>