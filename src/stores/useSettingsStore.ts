import { Identifier } from "deepslate";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useDatapackStore } from "./useDatapackStore";
import { EventTracker } from "../util/EventTracker";

export const useSettingsStore = defineStore('settings', () => {
    const i18n = useI18n()

    const collator = computed(() => new Intl.Collator(i18n.locale.value.replace('_','-')))
    
    const dev_mode = ref(false)
    const mc_version = ref('1_21')
    const world_preset = ref(Identifier.create("normal"))
    const dimension = ref(Identifier.create("overworld"))
    const seed = ref(BigInt(0))

    const datapackStore = useDatapackStore()

    watch(mc_version, (new_version) => {
        EventTracker.track(`change_version/${new_version}`)
    })

    watch(world_preset, () => {
        EventTracker.track(`change_world_preset`)
    })

    watch(dimension, () => {
        EventTracker.track(`change_dimension`)
    })

    watch(dev_mode, (new_dev_mode) => {
        EventTracker.track(`change_dev_mode/${new_dev_mode}`)
    })

    datapackStore.$subscribe(async () => {
        if ((await datapackStore.dimensions)?.findIndex((id) => id.equals(dimension.value)) === -1) {
            dimension.value = (await datapackStore.dimensions)[0]
        }

        if ((await datapackStore.world_presets)?.findIndex((id) => id.equals(world_preset.value)) === -1) {
            world_preset.value = (await datapackStore.world_presets)[0]
        }

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
