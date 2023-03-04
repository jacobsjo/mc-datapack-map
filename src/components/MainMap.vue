<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BiomeLayer } from "../BiomeLayer/BiomeLayer";
import { onMounted, ref } from 'vue';
import { CompositeDatapack } from 'mc-datapack-loader';
import BiomeTooltip from './BiomeTooltip.vue';
import { BlockPos, Identifier } from 'deepslate';

const store = useDatapackStore();

let layer: BiomeLayer

const tooltip_left = ref(0)
const tooltip_top = ref(0)
const tooltip_biome = ref(Identifier.create("void"))
const tooltip_position = ref(BlockPos.ZERO)
const show_tooltip = ref(false)

onMounted(async () => {
    const map = L.map("map", {
        zoom: 15,
        minZoom: 13,
        maxZoom: 20,
        center: [0,0]
    })

    layer = new BiomeLayer({
            tileSize: 256,
        },
        store.composite_datapack,
        store.world_preset,
        store.dimension   
    )
    layer.biomeColors = await store.biome_colors

    map.addLayer(layer)

    map.addEventListener("mousemove", (evt: L.LeafletMouseEvent) => {
        tooltip_left.value = evt.originalEvent.pageX + 10
        tooltip_top.value = evt.originalEvent.pageY + 10
        const info = layer.getPositionInfo(evt.latlng)
        tooltip_biome.value = info.biome
        tooltip_position.value = info.pos
        show_tooltip.value = true
    })

    map.addEventListener("mouseout", (evt: L.LeafletMouseEvent) => {
        show_tooltip.value = false
    })
});

store.$subscribe(async (mutation, state) => {
    layer.datapack = store.composite_datapack
    layer.world_preset = state.world_preset
    layer.dimension = state.dimension
    layer.seed = state.seed
    layer.biomeColors = await store.biome_colors
    layer.refresh()
})
</script>
  
<template>
    <div id="map_container">
        <div id="map">
        </div>
    </div>
    <BiomeTooltip id="tooltip" v-if="show_tooltip" :style="{left: tooltip_left+'px', top: tooltip_top+'px'}" :biome="tooltip_biome" :pos="tooltip_position" />
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