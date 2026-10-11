import { Identifier } from "mc-datapack-loader";
import { defineStore } from "pinia";
import { useDatapackStore } from "./useDatapackStore.js";
import { useSettingsStore } from "./useSettingsStore.js";

import { WorldgenEngine } from "../worldgenEngine/WorldgenEngine.js";
import { reactive, ref, watch } from "vue";


export const useLoadedDimensionStore = defineStore('loaded_dimension', () => {

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()

    const version = ref<number>(0)

    const loaded_dimension = ref<WorldgenEngine.Dimension>(new class implements WorldgenEngine.Dimension{
        getBiome(x: number, y: number, z: number): Identifier {
            return Identifier.create("minecraft:plains")
        }
        getSurface(x: number, y: number, z: number): number | undefined {
            return undefined
        }
        getTerrain(x: number, y: number, z: number): number | undefined {
            return undefined
        }
        hasSurface(): boolean {
            return false
        }
        hasTerrain(): boolean {
            return false
        }
        getLevelHeight(): { minY: number; height: number; } {
            return {minY: 0, height: 256}
        }
        getSeaLevel(): number {
            return -1
        }
        getStructureSet(id: Identifier): WorldgenEngine.StructureSet | undefined {
            return undefined;
        }
        getSpawnPoint(): [number, number] {
            return [0, 0]
        }
    })

    datapackStore.$subscribe((mutation, state) => {
        reload()
    })

    watch(() => settingsStore.mc_version, reload)
    watch(() => settingsStore.world_preset, reload)
    watch(() => settingsStore.dimension, reload)
    watch(() => settingsStore.seed, reload)

    
    async function reload() {
        await datapackStore.registered
        console.info("loaded dimension reload")
        const newDimension = await WorldgenEngine.getInstance().getDimension(settingsStore.dimension, settingsStore.world_preset, settingsStore.seed)
        if (newDimension !== undefined){
            loaded_dimension.value = newDimension
            version.value ++
        }
    }

    return { loaded_dimension, reload, version }
})

