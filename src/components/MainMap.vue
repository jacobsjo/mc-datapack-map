<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L, { control } from "leaflet";
import { BiomeLayer } from "../MapLayers/BiomeLayer";
import { onMounted, ref } from 'vue';
import BiomeTooltip from './BiomeTooltip.vue';
import { BlockPos, Chunk, ChunkPos, DensityFunction, Identifier, StructureSet, WorldgenContext, WorldgenStructure } from 'deepslate';
import YSlider from './YSlider.vue';
import { useSearchStore } from '../stores/useBiomeSearchStore';
import { useSettingsStore } from '../stores/useSettingsStore';
import { useLoadedDimensionStore } from '../stores/useLoadedDimensionStore'

const searchStore = useSearchStore()
const settingsStore = useSettingsStore()
const loadedDimensionStore = useLoadedDimensionStore()

let layer: BiomeLayer

const tooltip_left = ref(0)
const tooltip_top = ref(0)
const tooltip_biome = ref(Identifier.create("void"))
const tooltip_position = ref(BlockPos.ZERO)
const show_tooltip = ref(false)
const show_info = ref(false)

var map: L.Map
var markers: L.LayerGroup

const marker_map = new Map<string, { marker: Promise<{marker: L.Marker, structure: Identifier} | undefined>, pos: ChunkPos }>()

onMounted(() => {
    map = L.map("map", {
        zoom: 15,
        minZoom: 13,
        maxZoom: 20,
        center: [0, 0],
        zoomControl: false
    })

    L.control.zoom({
        position: "topright"
    }).addTo(map)

    layer = new BiomeLayer({
        tileSize: 256,
    },
    )

    map.options.crs!.scale(1.5)

    map.addLayer(layer)

    markers = L.layerGroup().addTo(map)

    addStructureMarkers(map.getBounds())

    map.addEventListener("mousemove", (evt: L.LeafletMouseEvent) => {
        //        await datapackStore.registered
        tooltip_left.value = evt.originalEvent.pageX + 10
        tooltip_top.value = evt.originalEvent.pageY + 10

        const pos = getPosition(map, evt.latlng)

        const biome = loadedDimensionStore.loaded_dimension.biome_source?.getBiome(pos[0] >> 2, pos[1] >> 2, pos[2] >> 2, loadedDimensionStore.sampler) ?? Identifier.create("plains")

        tooltip_biome.value = biome
        tooltip_position.value = pos
        show_tooltip.value = true
    })


    map.addEventListener("mouseout", (evt: L.LeafletMouseEvent) => {
        show_tooltip.value = false
    })

    map.addEventListener("contextmenu", async (evt: L.LeafletMouseEvent) => {
        const pos = getPosition(map, evt.latlng)
        navigator.clipboard.writeText(`/execute in ${settingsStore.dimension.toString()} run tp @s ${pos[0].toFixed(0)} ${(pos[1] + (settingsStore.y === "surface" ? 10 : 0)).toFixed(0)} ${pos[2].toFixed()}`)
        show_info.value = true
        setTimeout(() => show_info.value = false, 2000)
    })


    map.on("moveend", (evt) => {
        updateMarkers()
    })

    /*
    layer.on("tileunload", (evt) => {
        // @ts-expect-error: _tileCoordsToBounds does not exist
        const tileBounds = layer._tileCoordsToBounds(evt.coords);

    })*/

});

function getPosition(map: L.Map, latlng: L.LatLng) {
    const crs = map.options.crs!
    const pos = crs.project(latlng)
    pos.y *= -1

    const y: number = settingsStore.y === "surface" ? (loadedDimensionStore.surface_density_function).compute(DensityFunction.context((pos.x >> 2) << 2, 0, (pos.y >> 2) << 2)) : settingsStore.y
    return BlockPos.create(pos.x, y, pos.y)
}

function refresh() {
    layer.refresh()
}

function updateMarkers() {
    if (map.getZoom() >= 15) {
        addStructureMarkers(map.getBounds())
        removeStructureMarkers(map.getBounds())
    } else {
        markers.clearLayers()
        marker_map.clear()
    }
}

function addStructureMarkers(bounds?: L.LatLngBounds) {

    if (loadedDimensionStore.loaded_dimension.biome_source === undefined) {
        return
    }


    const context = new WorldgenStructure.GenerationContext(() => 66, WorldgenContext.create(-64, 384), 63)

    bounds = bounds ?? map.getBounds()

    const crs = map.options.crs!
    const minPos = crs.project(bounds.getNorthWest())
    const maxPos = crs.project(bounds.getSouthEast())

    const minChunk = ChunkPos.create(minPos.x >> 4, -minPos.y >> 4)
    const maxChunk = ChunkPos.create(maxPos.x >> 4, -maxPos.y >> 4)

    for (const id of searchStore.structure_sets) {
        const set = StructureSet.REGISTRY.get(id)
        if (!set) continue
        const chunks: ChunkPos[] = set.placement.getPotentialStructureChunks(settingsStore.seed, minChunk[0], minChunk[1], maxChunk[0], maxChunk[1])

        for (const chunk of chunks) {
            if (!marker_map.has(`${id.toString()} ${chunk[0]},${chunk[1]}`)) {
                marker_map.set(`${id.toString()} ${chunk[0]},${chunk[1]}`, { marker: new Promise((resolve) => setTimeout(() => resolve(getMarker(set, chunk, context)), 1)), pos: chunk })
            }
        }
    }
}

function getMarker(set: StructureSet, chunk: ChunkPos, context: WorldgenStructure.GenerationContext) {
    const structureId = set.getStructureInChunk(settingsStore.seed, chunk[0], chunk[1], loadedDimensionStore.loaded_dimension.biome_source!, loadedDimensionStore.sampler, context)
    const crs = map.options.crs!
    if (structureId && searchStore.structures.has(structureId.toString())) {
        const pos = new L.Point(chunk[0] << 4, - chunk[1] << 4)
        const popup = L.popup().setContent(structureId.toString())
        const marker = L.marker(crs.unproject(pos))
        marker.bindPopup(popup).addTo(markers)
        return {structure: structureId, marker}
    } else {
        return undefined
    }
}

async function removeStructureMarkers(bounds: L.LatLngBounds) {
    const crs = map.options.crs!

    const minPos = crs.project(bounds.getNorthWest())
    const maxPos = crs.project(bounds.getSouthEast())

    const minChunk = ChunkPos.create(minPos.x >> 4, -minPos.y >> 4)
    const maxChunk = ChunkPos.create(maxPos.x >> 4, -maxPos.y >> 4)


    for (const [id, m] of marker_map) {
        setTimeout(async () => {
            if ((m.pos[0] < minChunk[0] - 20 || m.pos[0] > maxChunk[0] + 20 || m.pos[1] < minChunk[1] - 20 || m.pos[1] > maxChunk[1] + 20) || !searchStore.structures.has((await m.marker)?.structure.toString() ?? "")) {
                (await m.marker)?.marker.remove()
                marker_map.delete(id)
            }
        }, 1)
    }
}

loadedDimensionStore.$subscribe((mutation, state) => {
    refresh()
})

searchStore.$subscribe((mutation, state) => {
    layer.rerender()
    updateMarkers()
})


</script>
  
<template>
    <div id="map_container">
        <div id="map">
        </div>
        <Suspense>
            <YSlider class="slider" />
        </Suspense>
    </div>
    <BiomeTooltip id="tooltip" v-if="show_tooltip" :style="{ left: tooltip_left + 'px', top: tooltip_top + 'px' }"
        :biome="tooltip_biome" :pos="tooltip_position" />
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

#map.leaflet-drag-target {
    cursor: grab;
}

.slider {
    position: absolute;
    z-index: 600;
    top: 5rem;
    right: 0.85rem;
}

#tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 500;
}

.button:hover {
    background-color: rgb(177, 176, 176);
}

.info {
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