<script setup lang="ts">
import { useDatapackStore } from '../../stores/useDatapackStore';
import { Datapack, UNKOWN_PACK } from 'mc-datapack-loader';
import DropdownIconEntry from './DropdownIconEntry.vue';
import DropdownRecentsEntry from './DropdownRecentsEntry.vue';
import Dropdown from './Dropdown.vue';
import { computed, onMounted, ref } from 'vue';
import { useRecentStore, StoredDatapack } from '../../stores/useRecentStore';
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '../../stores/useSettingsStore';
import { versionMetadata } from '../../util';
import { EventTracker } from '../../util/EventTracker';
import { useUiStore } from '../../stores/useUiStore';
import Popup from '../Popup.vue';
import ModrinthMenu from '../modrinth/ModrinthMenu.vue';

type Preset = {id: string, image: string, message_key: string, url: string }

const i18n = useI18n()

const settingsStore = useSettingsStore()
const datapackStore = useDatapackStore();
const recentStore = useRecentStore();
const uiStore = useUiStore();
const emit = defineEmits(['close'])

const disabledRecents = ref<string[]>([])

const modrinthPopup = ref<any>(null)

async function loadRecent(recent: StoredDatapack) {
    if (recent.modrinthSlug !== undefined) {
        try {
            const datapack = await datapackStore.addModrinthDatapack(recent.modrinthSlug)

            recentStore.addRecentModrinth(datapack, recent.modrinthSlug, recent.text)
            EventTracker.track(`add_datapack/modrinth/from_recent`)
            EventTracker.track(`add_datapack/modrinth/${recent.modrinthSlug}`)
        } catch {
            disabledRecents.value.push(recent.modrinthSlug)
            return
        }
    } else if (recent.fileHandle !== undefined){
        const handle = recent.fileHandle
        if ('requestPermission' in handle){
            const permission = await handle.requestPermission({mode: 'read'})
            if (permission !== "granted"){
                emit('close')
                return;
            }
        }

        var datapack = undefined
        try {
            if (handle.kind === 'file') {
                const file = await (handle as FileSystemFileHandle).getFile()
                datapack = Datapack.fromZipFile(file, versionMetadata[settingsStore.mc_version].datapackFormat)
                // if old version stored local file system handle, store it in opfs now
                if (!recent.storedInOpfs){
                    EventTracker.track(`add_datapack/zip/from_recent/upgraded`)
                    recentStore.storeAndAddRecent(file, datapack)
                } else {
                    EventTracker.track(`add_datapack/zip/from_recent`)
                    recentStore.addRecentFileHandle(handle, datapack)
                }
            } else {
                datapack = Datapack.fromFileSystemDirectoryHandle(handle as FileSystemDirectoryHandle, versionMetadata[settingsStore.mc_version].datapackFormat)
                recentStore.addRecentFileHandle(handle, datapack)
                EventTracker.track(`add_datapack/folder/from_recent`)
            }
            datapackStore.addDatapack(datapack)
        } catch (e){
            if (e instanceof DOMException){
                if (recent.storedInOpfs){
                    EventTracker.track(`add_datapack/removed_from_recent/opfs`)
                } else {
                    EventTracker.track(`add_datapack/removed_from_recent/local`)
                }
                recentStore.removeRecentFileHandle(handle.name)
                alert(i18n.t('dropdown.add.recents.not_found'))
                return
            }
        }
    }

    emit('close')
}

async function loadPreset(preset: Preset) {
    EventTracker.track(`add_datapack/built_in/${preset.id}`)
    const datapack = Datapack.fromZipUrl(preset.url, versionMetadata[settingsStore.mc_version].datapackFormat)
    datapackStore.addDatapack(datapack)
    emit('close')
}


async function loadZip(event: MouseEvent) {
    async function addZipDatapack(file: File) {
        EventTracker.track(`add_datapack/zip`)
        const datapack = Datapack.fromZipFile(file, versionMetadata[settingsStore.mc_version].datapackFormat)
        datapackStore.addDatapack(datapack)
        return datapack
    }

    if ("showOpenFilePicker" in window) {
        let fileHandle
        try {
            [fileHandle] = await window.showOpenFilePicker({
                types: [
                    {
                        description: i18n.t('dropdown.add.picker.pack_and_mod'),
                        accept: {
                            "application/zip": [".zip"],
                            "application/java-archive": [".jar"]
                        }
                    },
                    {
                        description: i18n.t('dropdown.add.picker.pack'),
                        accept: {
                            "application/zip": [".zip"],
                        }
                    },
                    {
                        description: i18n.t('dropdown.add.picker.mod'),
                        accept: {
                            "application/java-archive": [".jar"]
                        }
                    }
                ]
            })
        } catch (e) {
        } finally {
            if (fileHandle !== undefined) {
                const file = await fileHandle.getFile()
                const datapack = await addZipDatapack(file)
                recentStore.storeAndAddRecent(file, datapack)
            }
        }
    } else {
        const input = document.createElement('input') as HTMLInputElement
        input.type = 'file'
        input.accept = '.zip,.jar'

        input.onchange = async (evt) => {
            const file = (evt.target as HTMLInputElement).files![0]
            const datapack = await addZipDatapack(file)
            recentStore.storeAndAddRecent(file, datapack)
        }

        input.click()
    }
    emit('close')
}

async function loadFolder(event: MouseEvent) {
    var datapack: Datapack | undefined = undefined

    if ("showDirectoryPicker" in window) {
        try {
            const handle = await window.showDirectoryPicker()
            datapack = Datapack.fromFileSystemDirectoryHandle(handle, versionMetadata[settingsStore.mc_version].datapackFormat)
            recentStore.addRecentFileHandle(handle, datapack)
        } catch (e) {
        }
    } else {
        datapack = await new Promise<Datapack>((resolve) => {
            const input: any = document.createElement('input')
            input.type = 'file'
            input.webkitdirectory = true

            input.onchange = async () => {
                resolve(Datapack.fromFileList(Array.from(input.files), versionMetadata[settingsStore.mc_version].datapackFormat))
            }
            input.click()
        })
    }

    if (datapack !== undefined) {
        EventTracker.track(`add_datapack/folder`)
        datapackStore.addDatapack(datapack)
    }
    emit('close')
}

function openModrinth() {
    modrinthPopup.value.show()
    uiStore.modrinthMenuOpen = true
}

const PRESET_DATAPACKS = computed(() => {
    const presets: Preset[] = []
    versionMetadata[settingsStore.mc_version].experimentalDatapacks.forEach(ed => {
        presets.push({id: ed.url, image: UNKOWN_PACK, message_key: ed.translation_key, url: `vanilla_datapacks/vanilla_${ed.url}.zip`})
    })

    return presets
})

</script>

<template>
    <Dropdown>
        <DropdownIconEntry icon="fa-file-zipper" @click="loadZip" @keypress.enter="loadZip">{{ i18n.t('dropdown.add.zip')
        }}</DropdownIconEntry>
        <DropdownIconEntry icon="fa-folder-open" @click="loadFolder" @keypress.enter="loadFolder"> {{
            i18n.t('dropdown.add.folder') }} </DropdownIconEntry>
        <DropdownIconEntry image="/images/modrinth.svg" @click="openModrinth" @keypress.enter="openModrinth"> {{
            i18n.t('dropdown.add.modrinth') }} </DropdownIconEntry>
        <Popup ref="modrinthPopup" :title="i18n.t('modrinth.title')" v-slot="slotProps">
            <ModrinthMenu @close="slotProps.close()"/>
        </Popup>
        <div class="spacer" v-if="PRESET_DATAPACKS.length > 0"></div>
        <div class="title" v-if="PRESET_DATAPACKS.length > 0">{{ i18n.t('dropdown.add.built_in.title') }} </div>
        <DropdownRecentsEntry v-for="preset in PRESET_DATAPACKS" :image="preset.image" @click="loadPreset(preset);"
            @keypress.enter="loadPreset(preset)">{{ i18n.t(preset.message_key) }}</DropdownRecentsEntry>
        <div class="spacer"></div>
        <div class="title">{{ i18n.t('dropdown.add.recents.title') }}</div>
        <div class="enable" v-if="recentStore.avalible && !recentStore.enabled" @click="recentStore.enable()"
            @keypress.enter="recentStore.enable()" tabindex="0">
            {{ i18n.t('dropdown.add.recents.enable') }}
            <div class="note">{{ i18n.t('dropdown.add.recents.enable.note') }}</div>
        </div>
        <div class="empty" v-if="recentStore.avalible && recentStore.enabled && recentStore.recents.length === 0">--- {{
            i18n.t('dropdown.add.recents.empty') }} ---</div>
        <div class="empty small" v-if="!recentStore.avalible">{{ i18n.t('dropdown.add.recents.unavailable') }}</div>
        <DropdownRecentsEntry v-for="recent in recentStore.recents" :image="recent.img" :title="recent.fileHandle?.name ?? recent.modrinthSlug" :type="recent.modrinthSlug ? 'modrinth' : recent.fileHandle?.kind"
            @click="loadRecent(recent)" @keypress.enter="loadRecent(recent)" :disabled="recent.modrinthSlug !== undefined && disabledRecents.includes(recent.modrinthSlug)"> {{ recent.text }} </DropdownRecentsEntry>
    </Dropdown>
</template>

<style scoped>
.spacer {
    width: 100%;
    height: 2px;
    min-height: 2px;
    background-color: rgb(97, 97, 97);
    align-self: center;
    margin-top: 0.2rem;
    margin-bottom: 0rem;
}

.title {
    color: rgb(53, 53, 53);
    text-align: initial;
    width: 100%;
    box-sizing: border-box;
    margin-top: 0;
    font-size: smaller;
    padding-inline-start: 1rem;
    margin-bottom: 0.2rem;
}

.enable {
    background-color: rgb(132, 171, 216);
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    width: calc(100% - 2rem);
    text-align: center;
}

.enable .note {
    font-size: smaller;
}

.enable:hover {
    background-color: rgb(178, 200, 226);
}

.empty {
    color: rgb(78, 78, 78);
}

.small {
    font-size: smaller;
}
</style>
