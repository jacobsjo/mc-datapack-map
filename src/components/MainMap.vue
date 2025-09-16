<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import L, { control } from "leaflet";
import { BiomeLayer } from "../MapLayers/BiomeLayer";
import { Graticule } from "../MapLayers/Graticule";
import { onMounted, ref, watch, watchEffect } from 'vue';
import BiomeTooltip from './BiomeTooltip.vue';
import { BlockPos, Chunk, ChunkPos, DensityFunction, Identifier, RandomState, Structure, StructurePlacement, StructureSet, WorldgenStructure } from 'deepslate';
import YSlider from './YSlider.vue';
import { useSearchStore } from '../stores/useBiomeSearchStore';
import { useSettingsStore } from '../stores/useSettingsStore';
import { useLoadedDimensionStore } from '../stores/useLoadedDimensionStore'
import { CachedBiomeSource } from '../util/CachedBiomeSource';
import MapButton from './MapButton.vue';
import { SpawnTarget } from '../util/SpawnTarget';
import { useI18n } from 'vue-i18n';
import { versionMetadata } from "../util";

const searchStore = useSearchStore()
const settingsStore = useSettingsStore()
const loadedDimensionStore = useLoadedDimensionStore()
const i18n = useI18n()

let biomeLayer: BiomeLayer
let graticule: Graticule

const tooltip_left = ref(0)
const tooltip_top = ref(0)
const tooltip_biome = ref(Identifier.create("void"))
const tooltip_position = ref(BlockPos.ZERO)
const show_tooltip = ref(false)
const show_info = ref(false)

const do_hillshade = ref(true)
const show_sealevel = ref(false)
const project_down = ref(true)

const y = ref(320)

const show_graticule = ref(false)

watch(show_graticule, (value) => {
    if (value) {
        map.addLayer(graticule)
    } else {
        map.removeLayer(graticule)
    }
})

var map: L.Map
var zoom: L.Control.Zoom
var markers: L.LayerGroup
var spawnMarker: L.Marker

var marker_map = new Map<string, { marker?: L.Marker, structure?: {id: Identifier, pos: BlockPos}}>()
var needs_zoom = ref(false)



onMounted(() => {
    map = L.map("map", {
        zoom: -2,
        minZoom: -6,
        maxZoom: 1,
        center: [0, 0],
        zoomControl: false,
        crs: L.CRS.Simple
    })

    zoom = L.control.zoom({
        position: i18n.t('locale.text_direction') === 'ltr' ? 'topright' : 'topleft'
    })
    zoom.addTo(map)

    biomeLayer = new BiomeLayer({
            tileSize: 256,
            minZoom: -100
        },
        do_hillshade,
        show_sealevel,
        project_down,
        y
    )

    map.addLayer(biomeLayer)

    spawnMarker = L.marker({lat: 0, lng: 0}, {
        icon: L.icon({
            iconUrl: "images/spawn_icon.png",
            iconAnchor: [16, 16],
            popupAnchor: [0, -10]
        }),
    }).bindPopup(L.popup())

    updateSpawnMarker()

    markers = L.layerGroup().addTo(map)

    map.addEventListener("mousemove", (evt: L.LeafletMouseEvent) => {
        //        await datapackStore.registered
        tooltip_left.value = evt.originalEvent.pageX-4
        tooltip_top.value = evt.originalEvent.pageY-4

        const pos = getPosition(map, evt.latlng)

        const biome = loadedDimensionStore.getBiomeSource()?.getBiome(pos[0] >> 2, pos[1] >> 2, pos[2] >> 2, loadedDimensionStore.sampler) ?? Identifier.create("plains")

        tooltip_biome.value = biome
        tooltip_position.value = pos
        show_tooltip.value = true
    })


    map.addEventListener("mouseout", (evt: L.LeafletMouseEvent) => {
        show_tooltip.value = false
    })

    map.addEventListener("contextmenu", async (evt: L.LeafletMouseEvent) => {
        const pos = getPosition(map, evt.latlng)
        navigator.clipboard.writeText(`/execute in ${settingsStore.dimension.toString()} run tp ${pos[0].toFixed(0)} ${(pos[1] + (project_down.value ? 10 : 0)).toFixed(0)} ${pos[2].toFixed()}`)
        show_info.value = true
        setTimeout(() => show_info.value = false, 2000)
    })


    map.on("moveend", (evt) => {
        setTimeout(updateMarkers, 5)
    })

    graticule = new Graticule()

    /*
    layer.on("tileunload", (evt) => {
        // @ts-expect-error: _tileCoordsToBounds does not exist
        const tileBounds = layer._tileCoordsToBounds(evt.coords);

    })*/

});

watch(i18n.locale, () => {
    zoom.setPosition(i18n.t('locale.text_direction') === 'ltr' ? 'topright' : 'topleft')
})

function getPosition(map: L.Map, latlng: L.LatLng) {
    const crs = map.options.crs!
    const pos = crs.project(latlng)
    pos.y *= -1

    const surface = (loadedDimensionStore.surface_density_function)?.compute(DensityFunction.context((pos.x >> 2) << 2, y.value, (pos.y >> 2) << 2)) ?? Number.POSITIVE_INFINITY

    const pos_y: number = project_down.value ? Math.min(surface, y.value) : y.value
    return BlockPos.create(pos.x, pos_y, pos.y)
}

function isInBounds(pos: ChunkPos, min: ChunkPos, max: ChunkPos) {
    return (pos[0] >= min[0] && pos[0] <= max[0] && pos[1] >= min[1] && pos[1] <= max[1])
}


function updateMarkers() {
    const biomeSource = loadedDimensionStore.getBiomeSource()
    if (biomeSource === undefined) {
        return
    }

    const cachedBiomeSource = new CachedBiomeSource(biomeSource)
    const context = new WorldgenStructure.GenerationContext(settingsStore.seed, cachedBiomeSource, loadedDimensionStore.noise_generator_settings, loadedDimensionStore.loaded_dimension.level_height ?? {minY: 0, height: 256})

    const bounds = map.getBounds()

    const crs = map.options.crs!
    const minPos = crs.project(bounds.getNorthWest())
    const maxPos = crs.project(bounds.getSouthEast())

    const minChunk = ChunkPos.create(minPos.x >> 4, -minPos.y >> 4)
    const maxChunk = ChunkPos.create(maxPos.x >> 4, -maxPos.y >> 4)

    var _needs_zoom = false

    const keptMarkers: Set<string> = new Set()

    const scheduler = ('scheduler' in window) ? ((task: () => void) => (window as any).scheduler.postTask(task, {priority: "background"})) : ((task: () => void) => setTimeout(task, 1))

    for (const id of searchStore.structure_sets.sets) {
        const set = StructureSet.REGISTRY.get(id)
        if (!set) continue

        var minZoom = 2

        if (set.placement instanceof StructurePlacement.ConcentricRingsStructurePlacement){
            set.placement.prepare(biomeSource, loadedDimensionStore.sampler, settingsStore.seed)
            minZoom = -2
        } else if (set.placement instanceof StructurePlacement.RandomSpreadStructurePlacement) {
            const chunkFrequency = (set.placement.frequency) / (set.placement.spacing * set.placement.spacing)
            minZoom = -Math.log2(1/(chunkFrequency * 128))
        }

        if (map.getZoom() >= minZoom){
            const chunks: ChunkPos[] = set.placement.getPotentialStructureChunks(settingsStore.seed, minChunk[0], minChunk[1], maxChunk[0], maxChunk[1])

            for (const chunk of chunks) {
                const storage_id = `${id.toString()} ${chunk[0]},${chunk[1]}`
                const inBounds = isInBounds(chunk, minChunk, maxChunk)
                const stored = marker_map.get(storage_id)

                if (inBounds){
                    if (stored === undefined) {
                        const m: { marker?: L.Marker, structure?: {id: Identifier, pos: BlockPos} } = {}

                        marker_map.set(storage_id, m)


                        scheduler(() => {
                            if (marker_map.get(storage_id) !== m) return

                            cachedBiomeSource.setupCache(chunk[0] << 2, chunk[1] << 2)
                            const structure = set.getStructureInChunk(chunk[0], chunk[1], context)

                            const marker = structure && searchStore.structures.has(structure.id.toString()) ? getMarker(structure.id, structure.pos) : undefined
                            m.structure = structure
                            m.marker = marker
                        })
                    } else {
                        if (stored.structure){
                            const should_have_marker = searchStore.structures.has(stored.structure?.id.toString())
                            if (should_have_marker && stored.marker === undefined){
                                stored.marker = getMarker(stored.structure.id, stored.structure.pos)
                            } else if (!should_have_marker && stored.marker !== undefined){
                                stored.marker.remove()
                                stored.marker = undefined
                            }
                        }
                    }
                    keptMarkers.add(storage_id)
                }
            }
        } else {
            _needs_zoom = true
        }
    }

    for (const key of marker_map.keys()){
        if (!keptMarkers.has(key)){
            const marker = marker_map.get(key)
            marker?.marker?.remove()
            marker_map.delete(key)
        }
    }

    needs_zoom.value = _needs_zoom
}

function getMarker(structureId: Identifier, pos: BlockPos) {
    const crs = map.options.crs!
    const mapPos = new L.Point(pos[0], -pos[2])
    const popup = L.popup().setContent(() => `${settingsStore.getLocalizedName("structure", structureId, false)}<br />${i18n.t("map.coords.xyz", {x: pos[0], y: pos[1], z: pos[2]})}`)
    const marker = L.marker(crs.unproject(mapPos))
    marker.bindPopup(popup).addTo(markers)
    const iconUrl = loadedDimensionStore.getIcon(structureId)
    marker.setIcon(L.icon({
        iconUrl: iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        shadowUrl: 'shadow.png',
        shadowSize: [40, 40],
        shadowAnchor: [20, 20],
        popupAnchor: [0, -10]
    }))
    return marker
}

function updateSpawnMarker(){
    if (settingsStore.dimension.equals(Identifier.create("overworld"))){
        const crs = map.options.crs!
        const spawnTarget = SpawnTarget.fromJson(loadedDimensionStore.loaded_dimension.noise_settings_json?.spawn_target, versionMetadata[settingsStore.mc_version].spawnAlgorithm)
        const spawn = spawnTarget.getSpawnPoint(loadedDimensionStore.sampler)
        const pos = new L.Point(spawn[0] + 7, - spawn[1] - 7)
        spawnMarker.setLatLng(crs.unproject(pos))
        spawnMarker.bindPopup(L.popup().setContent(() => `${i18n.t("map.tooltip.spawn")}<br />${i18n.t("map.coords.xz", {x: spawn[0] + 7, z: spawn[1] + 7})}`))
        spawnMarker.addTo(map)
    } else {
        spawnMarker.removeFrom(map)
    }

}

loadedDimensionStore.$subscribe((mutation, state) => {
    for (const marker of marker_map.values()){
        marker.marker?.remove()
    }
    marker_map.clear()
    updateMarkers()
    updateSpawnMarker()

    const level_height = loadedDimensionStore.loaded_dimension.level_height
    if (level_height){
        if (project_down.value && loadedDimensionStore.surface_density_function !== undefined){
            y.value = level_height.minY + level_height.height || y.value
        } else {
            y.value = Math.max(Math.min(y.value, level_height.minY + level_height.height), level_height.minY)
        }
    } 
})

watch(searchStore.structures, () => {
    updateMarkers()
})

</script>
  
<template>
    <div id="map_container">
        <div id="map">
        </div>
        <div class="map_options">
            <Suspense>
                <YSlider class="slider" v-model:y="y" />
            </Suspense>
            <MapButton icon="fa-arrows-down-to-line" :disabled="loadedDimensionStore.surface_density_function === undefined" v-model="project_down" :title="i18n.t('map.setting.project')" />
            <MapButton icon="fa-mountain-sun" :disabled="(!project_down || loadedDimensionStore.surface_density_function === undefined) && ! loadedDimensionStore.terrain_density_function" v-model="do_hillshade"  :title="i18n.t('map.setting.hillshade')" />
            <MapButton icon="fa-water" :disabled="loadedDimensionStore.surface_density_function === undefined" v-model="show_sealevel" :title="i18n.t('map.setting.sealevel')" />
            <MapButton icon="fa-table-cells" v-model="show_graticule" :title="i18n.t('map.setting.graticule')" />
        </div>
    </div>
    <BiomeTooltip id="tooltip" v-if="show_tooltip" :style="{ left: tooltip_left + 'px', top: tooltip_top + 'px' }"
        :biome="tooltip_biome" :pos="tooltip_position" />
    <div class="top">
        <Transition>
            <div class="info zoom" v-if="needs_zoom">
                {{ i18n.t('map.info.structures_hidden') }}
            </div>
        </Transition>
        <Transition>
            <div class="info unsupported" v-if="searchStore.structure_sets.has_invalid">
                {{ i18n.t('map.error.structures_unsupported') }}
            </div>
        </Transition>
    </div>
    <Transition>
        <div class="info bottom teleport" v-if="show_info">
            {{ i18n.t('map.info.teleport_command_copied') }}
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

.map_options {
    position: absolute;
    z-index: 600;
    top: 5rem;
    right: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.5rem;
}

.map_options:dir(rtl) {
    right: unset;
    left: 0.85rem;
}

#tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 500;
}


.top{
    position: absolute;
    z-index: 500;
    left: 50%;
    transform: translateX(-50%);
    top: 0.5rem;
}

.bottom {
    position: absolute;
    z-index: 500;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
}

.info {
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 1rem;
    background-color: rgb(3, 33, 58);
    color: rgb(255, 255, 255);
    user-select: none;
    margin: 0.2rem;
}

.teleport {
    color: rgb(189, 189, 189);
}

.unsupported {
    background-color: rgb(165, 33, 33);
    border: 2px solid white
}


</style>