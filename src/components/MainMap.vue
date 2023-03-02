<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BiomeLayer } from "../BiomeLayer/BiomeLayer";
import { onMounted, ref } from 'vue';
import { CompositeDatapack } from 'mc-datapack-loader';
import BiomeTooltip from './BiomeTooltip.vue';
import { Identifier } from 'deepslate';

const store = useDatapackStore();

let layer: BiomeLayer

const tooltip_left = ref(0)
const tooltip_top = ref(0)
const tooltip_biome = ref(Identifier.create("void"))
const show_tooltip = ref(false)

onMounted(() => {
    const map = L.map("map", {
        zoom: 15,
        minZoom: 13,
        maxZoom: 20,
        center: [0,0]
    })

    layer = new BiomeLayer({
            tileSize: 256,
        },
        store.getCompositeDatapack(),
        store.dimension   
    )
    map.addLayer(layer)

    map.addEventListener("mousemove", (evt: L.LeafletMouseEvent) => {
        tooltip_left.value = evt.originalEvent.pageX + 10
        tooltip_top.value = evt.originalEvent.pageY + 10
        console.log(tooltip_left.value)
        tooltip_biome.value = layer.getBiome(evt.latlng)
        show_tooltip.value = true
    })

    map.addEventListener("mouseout", (evt: L.LeafletMouseEvent) => {
        show_tooltip.value = false
    })
});

store.$subscribe((mutation, state) => {
    layer.datapack = store.getCompositeDatapack()
    layer.dimension = state.dimension
    layer.refresh()
})
</script>
  
<template>
    <div id="map_container">
        <div id="map">
        </div>
    </div>
    <BiomeTooltip id="tooltip" v-if="show_tooltip" :style="{left: tooltip_left+'px', top: tooltip_top+'px'}" :biome="tooltip_biome" />
</template>

<style scoped>
    #map_container {
        width: 100%;
        flex-grow: 1;
        position: relative;
    }

    #map {
        width: 100%;
        height: 100%;
        cursor: crosshair;
    }

    #map.leaflet-drag-target{
        cursor: grab;
    }

    #tooltip{
        position: absolute;
        pointer-events: none;
        z-index: 500;
    }

    .button:hover {
        background-color: rgb(177, 176, 176);
    }

</style>