<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BiomeLayer } from "../BiomeLayer/BiomeLayer";
import { onMounted } from 'vue';
import { CompositeDatapack } from 'mc-datapack-loader';

const store = useDatapackStore();

let layer: BiomeLayer

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
});

store.$subscribe((mutation, state) => {
    layer.datapack = store.getCompositeDatapack()
    layer.dimension = state.dimension
    layer.refresh()
})
</script>
  
<template>
    <div id="map">
    </div>
</template>

<style>
    #map {
        width: 100%;
        flex-grow: 1;
    }
</style>