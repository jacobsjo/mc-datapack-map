<script setup lang="ts">
import { useDatapackStore } from '../stores/useDatapackStore';
import "leaflet/dist/leaflet.css";
import L, { control } from "leaflet";
import { BiomeLayer } from "../MapLayers/BiomeLayer";
import { onMounted, ref } from 'vue';
import BiomeTooltip from './BiomeTooltip.vue';
import { BlockPos, Chunk, ChunkPos, DensityFunction, Identifier, StructurePlacement, StructureSet, WorldgenContext, WorldgenStructure } from 'deepslate';
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

var marker_map = new Map<string, { marker: Promise<{ marker: L.Marker, structure: Identifier } | undefined>, pos: ChunkPos }>()
var needs_zoom = ref(false)

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

    map.on("zoomend", () => {
        console.log(map.getZoom())
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

function isInBounds(pos: ChunkPos, min: ChunkPos, max: ChunkPos) {
    return (pos[0] >= min[0] && pos[0] <= max[0] && pos[1] >= min[1] && pos[1] <= max[1])
}

function updateMarkers() {

    if (loadedDimensionStore.loaded_dimension.biome_source === undefined) {
        return
    }

    const context = new WorldgenStructure.GenerationContext(() => 66, WorldgenContext.create(-64, 384), 63)

    const bounds = map.getBounds()

    const crs = map.options.crs!
    const minPos = crs.project(bounds.getNorthWest())
    const maxPos = crs.project(bounds.getSouthEast())

    const minChunk = ChunkPos.create(minPos.x >> 4, -minPos.y >> 4)
    const maxChunk = ChunkPos.create(maxPos.x >> 4, -maxPos.y >> 4)

    const new_markers = new Map<string, { marker: Promise<{ marker: L.Marker, structure: Identifier } | undefined>, pos: ChunkPos }>()

    var _needs_zoom = false

    for (const id of searchStore.structure_sets) {
        const set = StructureSet.REGISTRY.get(id)
        if (!set) continue

        var minZoom = 15
        if (set.placement instanceof StructurePlacement.RandomSpreadStructurePlacement) {
            const chunkFrequency = (set.placement.frequency) / (set.placement.spacing * set.placement.spacing)
            minZoom = 18 - Math.log2(0.01/chunkFrequency)
        }

        if (map.getZoom() >= minZoom){
            const chunks: ChunkPos[] = set.placement.getPotentialStructureChunks(settingsStore.seed, minChunk[0], minChunk[1], maxChunk[0], maxChunk[1])

            for (const chunk of chunks) {

                if (!isInBounds(chunk, minChunk, maxChunk)) {
                    continue
                }
                const storage_id = `${id.toString()} ${chunk[0]},${chunk[1]}`
                const marker = marker_map.get(storage_id) ?? {
                    marker: new Promise((resolve) => setTimeout(async () => {
                        if (!isInBounds(chunk, minChunk, maxChunk)) {
                            resolve(undefined)
                        } else {
                            resolve(await getMarker(set, chunk, context))
                        }
                    }, 1)), pos: chunk
                }
                marker_map.delete(storage_id)
                new_markers.set(storage_id, marker)
            }
        } else {
            _needs_zoom = true
        }
    }
    for (const marker of marker_map.values()){
        marker.marker.then(m => m?.marker.remove())
    }

    needs_zoom.value = _needs_zoom

    marker_map.clear()
    for (const marker of new_markers){
        marker_map.set(marker[0], marker[1])
    }
}

async function getMarker(set: StructureSet, chunk: ChunkPos, context: WorldgenStructure.GenerationContext) {
    const structureId = set.getStructureInChunk(settingsStore.seed, chunk[0], chunk[1], loadedDimensionStore.loaded_dimension.biome_source!, loadedDimensionStore.sampler, context)
    const crs = map.options.crs!
    if (structureId && searchStore.structures.has(structureId.toString())) {
        const pos = new L.Point(chunk[0] << 4, - chunk[1] << 4)
        const popup = L.popup().setContent(structureId.toString())
        const marker = L.marker(crs.unproject(pos), {
            icon: L.icon({
                iconUrl: await loadedDimensionStore.getIcon(structureId),
                iconSize: [32, 32],
                iconAnchor: [16, 16],
                shadowUrl: 'shadow.png',
                shadowSize: [40, 40],
                shadowAnchor: [20, 20],
                popupAnchor: [0, -10]
            })
        })
        marker.bindPopup(popup).addTo(markers)
        return { structure: structureId, marker }
    } else {
        return undefined
    }
}

loadedDimensionStore.$subscribe((mutation, state) => {
    refresh()
    for (const marker of marker_map.values()){
        marker.marker.then(m => m?.marker.remove())
    }
    marker_map.clear()
    updateMarkers()
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
        <div class="info zoom" v-if="needs_zoom">
            Some structures are hidden. &ThickSpace; Zoom in to see more.
        </div>
    </Transition>
    <Transition>
        <div class="info teleport" v-if="show_info">
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
    z-index: 500;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 1rem;
    background-color: rgb(3, 33, 58);
    color: rgb(189, 189, 189);
    user-select: none;
}

.info.teleport {
    bottom: 0.5rem;
}

.info.zoom {
    border: 2px solid black;
    color: white;
    font-weight: 600;
    top: 0.5rem;
}
</style>