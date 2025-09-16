import { Identifier } from "deepslate";
import { defineStore } from "pinia";
import { computed, ref, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useDatapackStore } from "./useDatapackStore.js";
import { EventTracker } from "../util/EventTracker.js";
import { parseSeed, updateUrlParam, versionMetadata } from "../util.js";

export const useSettingsStore = defineStore('settings', () => {
    const defaults = {
        mc_version: "1_21_7",
        world_preset: "minecraft:normal",
        dimension: "minecraft:overworld",
        seed: "0"
    }

    const uri = window.location.search.substring(1)
    const params = {...defaults, ...Object.fromEntries(new URLSearchParams(uri))}

    if (versionMetadata[params.mc_version] === undefined){
        params.mc_version = defaults.mc_version
        updateUrlParam('mc_version')
    }

    const i18n = useI18n()

    const collator = computed(() => new Intl.Collator(i18n.locale.value.replace('_','-')))
    
    const dev_mode = ref(false)
    const mc_version = ref(versionMetadata[params.mc_version] ? params.mc_version : defaults.mc_version)
    const world_preset = ref(Identifier.parse(params.world_preset))
    const dimension = ref(Identifier.parse(params.dimension))
    const seed = ref(parseSeed(params.seed))

    const datapackStore = useDatapackStore()

    watch(mc_version, (new_version) => {
        updateUrlParam('mc_version', new_version, defaults.mc_version)
        EventTracker.track(`change_version/${new_version}`)
    })

    watch(world_preset, (new_preset) => {
        updateUrlParam('world_preset', new_preset.toString(), defaults.world_preset)
        EventTracker.track(`change_world_preset`)
    })

    watch(dimension, (new_dimension) => {
        updateUrlParam('dimension', new_dimension.toString(), defaults.dimension)
        EventTracker.track(`change_dimension`)
    })

    watch(dev_mode, (new_dev_mode) => {
        EventTracker.track(`change_dev_mode/${new_dev_mode}`)
    })

    watch(seed, (new_seed) => {
        updateUrlParam('seed', `${new_seed}`)
    })

    datapackStore.$subscribe(async () => {
        if ((await datapackStore.world_presets)?.findIndex((id) => id.equals(world_preset.value)) === -1) {
            world_preset.value = (await datapackStore.world_presets)[0]
        }

        if ((await datapackStore.dimensions)?.findIndex((id) => id.equals(dimension.value)) === -1) {
            dimension.value = (await datapackStore.dimensions)[0]
        }
    })

    watchEffect(() => {
        document.dir = i18n.t('locale.text_direction','ltr')
        document.documentElement.lang = i18n.locale.value
    })

    function getLocalizedName(type: string, id: Identifier, path_only: boolean){
        const fallbackString = path_only ? id.path : id.toString()
        if (dev_mode.value){
            return fallbackString
        }
        return i18n.t(`minecraft.${type}.${id.namespace}.${id.path.replace('/','.')}`, fallbackString)
    }


    return {mc_version, world_preset, dimension, seed, collator, dev_mode, getLocalizedName}
})
