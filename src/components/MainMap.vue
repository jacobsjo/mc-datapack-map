<template>
    <div id="map">
    </div>
</template>
  
<script lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PromiseDatapack, ZipDatapack } from "mc-datapack-loader";
import { BiomeLayer } from "../BiomeLayer/BiomeLayer";



export default {
    mounted(){
        const map = L.map("map", {
            zoom: 15,
            minZoom: 13,
            maxZoom: 20,
            center: [0,0]
        })

        const layer = new BiomeLayer({
                tileSize: 256,
            },
            new PromiseDatapack(ZipDatapack.fromUrl('./vanilla_datapacks/data-1.19.3.zip'))
        )
        map.addLayer(layer)
    }
};
</script>
  
<style>
    #map {
        width: 100%;
        height: 100%;
    }
</style>