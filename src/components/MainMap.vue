<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L, { control } from "leaflet";
import { BiomeLayer } from "../BiomeLayer/BiomeLayer";
import { onMounted, ref } from 'vue';
import { CompositeDatapack } from 'mc-datapack-loader';
import BiomeTooltip from './BiomeTooltip.vue';
import { BlockPos, Identifier } from 'deepslate';
import YSlider from './YSlider.vue';
import { useBiomeSearchStore } from '../stores/useBiomeSearchStore';

const datapackStore = useDatapackStore();
const biomeSearchStore = useBiomeSearchStore();

let layer: BiomeLayer

const tooltip_left = ref(0)
const tooltip_top = ref(0)
const tooltip_biome = ref(Identifier.create("void"))
const tooltip_position = ref(BlockPos.ZERO)
const show_tooltip = ref(false)
const show_info = ref(false)

onMounted(async () => {
    const map = L.map("map", {
        zoom: 15,
        minZoom: 13,
        maxZoom: 20,
        center: [0,0],
        zoomControl: false
    })

    L.control.zoom({
        position: "topright"
    }).addTo(map)

    layer = new BiomeLayer({
            tileSize: 256,
        },
        datapackStore.composite_datapack,
        datapackStore.world_preset,
        datapackStore.dimension,
        await datapackStore.dimension_json
    )

    layer.biomeColors = await datapackStore.biome_colors

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

    map.addEventListener("contextmenu", (evt: L.LeafletMouseEvent) => {
        const info = layer.getPositionInfo(evt.latlng)
        navigator.clipboard.writeText(`/execute in ${datapackStore.dimension.toString()} run tp @s ${info.pos[0].toFixed(0)} ${(info.pos[1] + (datapackStore.y === "surface" ? 10 : 0) ).toFixed(0)} ${info.pos[2].toFixed()}`)
        show_info.value = true
        setTimeout(() => show_info.value = false, 2000)
    })
    
});

datapackStore.$subscribe(async (mutation, state) => {
    layer.datapack = datapackStore.composite_datapack
    layer.world_preset = datapackStore.world_preset
    layer.dimension_id = datapackStore.dimension
    layer.dimension_json = await datapackStore.dimension_json
    layer.seed = datapackStore.seed
    layer.biomeColors = await datapackStore.biome_colors
    layer.y = datapackStore.y
    layer.refresh()
})

biomeSearchStore.$subscribe((mutation, state) => {
    layer.show_biomes = biomeSearchStore.biomes
    layer.rerender()
})


</script>
  
<template>
    <div id="map_container">
        <div id="map" >
        </div>
        <Suspense>
            <YSlider class="slider" />
        </Suspense>
    </div>
    <BiomeTooltip id="tooltip" v-if="show_tooltip" :style="{left: tooltip_left+'px', top: tooltip_top+'px'}" :biome="tooltip_biome" :pos="tooltip_position" />
    <Transition>
        <div class="info" v-if="show_info">
            Teleport Command Copied    
        </div>
    </Transition>
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
        background: white url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill-opacity=".25" ><rect x="20" width="20" height="20" /><rect y="20" width="20" height="20" /></svg>');
        background-size: 25px 25px;
    }

    #map.leaflet-drag-target{
        cursor: grab;
    }

    .slider{
        position: absolute;
        z-index: 600;
        top: 5rem;
        right: 0.85rem;
    }

    #tooltip{
        position: absolute;
        pointer-events: none;
        z-index: 500;
    }

    .button:hover {
        background-color: rgb(177, 176, 176);
    }

    .info{
        position: absolute;
        background-color: rgb(3, 33, 58);
        z-index: 500;
        left: 50%;
        bottom: 0.5rem;
        transform: translateX(-50%);
        color: rgb(189, 189, 189);
        padding: 0.3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 1rem;
        user-select: none;
    }

</style>