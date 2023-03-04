<script setup lang="ts">
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
import { useDatapackStore } from '../stores/useDatapackStore';

    const store = useDatapackStore()

</script>

<template>
    <div class="slider">
        <vue-slider 
            direction="btt"
            height="6rem"
            tooltip-placement="right"
            tooltip="hover"
            :process="false"
            v-model="store.y"
            :max="257"
            :min="-64"
            :tooltip-formatter="v => v === 257 ? 'Surface' : 'Y: ' + v" />
    </div>
</template>

<style scoped>
    .slider{
        background-color: rgba(0,0,0,0.5);
        padding: 1rem 0.3rem;
        border-radius: 0.6rem;
    }
</style>