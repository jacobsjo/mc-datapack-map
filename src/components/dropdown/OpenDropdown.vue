<script setup lang="ts">
import { useDatapackStore } from '../../stores/useDatapackStore';
import { Datapack, UNKOWN_PACK } from 'mc-datapack-loader';
import DropdownEntry from './DropdownEntry.vue';
import Dropdown from './Dropdown.vue';
import { computed, onMounted, ref } from 'vue';
import { useRecentStore } from '../../stores/useRecentStore';
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '../../stores/useSettingsStore';
import { versionMetadata } from '../../util';

const i18n = useI18n()

const settingsStore = useSettingsStore()
const datapackStore = useDatapackStore();
const recentStore = useRecentStore();
const emit = defineEmits(['close'])

async function loadHandle(handle: FileSystemHandle) {
    const permission = await handle.requestPermission({mode: 'read'})

    if (permission === "granted"){

        var datapack = undefined
        try {
            if (handle.kind === 'file') {
                const file = await (handle as FileSystemFileHandle).getFile()
                datapack = Datapack.fromZipFile(file, versionMetadata[settingsStore.mc_version].datapackFormat)
                recentStore.addRecent(handle, datapack)
            } else {
                datapack = Datapack.fromFileSystemDirectoryHandle(handle as FileSystemDirectoryHandle, versionMetadata[settingsStore.mc_version].datapackFormat)
                recentStore.addRecent(handle, datapack)
            }
            datapackStore.addDatapack(datapack)
        } catch (e){
            if (e instanceof DOMException){
                recentStore.removeRecent(handle.name)
                alert(i18n.t('dropdown.add.recents.not_found'))
                return
            }
        }
    }

    emit('close')
}

async function loadUrl(url: string) {
    const datapack = Datapack.fromZipUrl(url, versionMetadata[settingsStore.mc_version].datapackFormat)
    datapackStore.addDatapack(datapack)
    emit('close')
}


async function loadZip(event: MouseEvent) {
    async function addZipDatapack(file: File) {
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
                recentStore.addRecent(fileHandle, datapack)
            }
        }
    } else {
        const input = document.createElement('input') as HTMLInputElement
        input.type = 'file'
        input.accept = '.zip,.jar'

        input.onchange = async (evt) => {
            const file = (evt.target as HTMLInputElement).files![0]
            await addZipDatapack(file)
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
            recentStore.addRecent(handle, datapack)
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
        datapackStore.addDatapack(datapack)
    }
    emit('close')
}

const PRESET_DATAPACKS = computed(() => {
    const presets: {image: string, message_key: string, url: string }[] = []
    versionMetadata[settingsStore.mc_version].experimentalDatapacks.forEach(ed => {
        presets.push({ image: UNKOWN_PACK, message_key: ed.translation_key, url: `vanilla_datapacks/vanilla_${ed.url}`})
    })

    return presets
})

</script>

<template>
    <Dropdown>
        <DropdownEntry icon="fa-file-zipper" @click="loadZip" @keypress.enter="loadZip">{{ $t('dropdown.add.zip')
        }}</DropdownEntry>
        <DropdownEntry icon="fa-folder-open" @click="loadFolder" @keypress.enter="loadFolder"> {{
            $t('dropdown.add.folder') }} </DropdownEntry>
        <div class="spacer" v-if="PRESET_DATAPACKS.length > 0"></div>
        <div class="title" v-if="PRESET_DATAPACKS.length > 0">{{ $t('dropdown.add.built_in.title') }} </div>
        <DropdownEntry v-for="preset in PRESET_DATAPACKS" :image="preset.image" @click="loadUrl(preset.url);"
            @keypress.enter="loadUrl(preset.url)">{{ $t(preset.message_key) }}</DropdownEntry>
        <div class="spacer"></div>
        <div class="title">{{ $t('dropdown.add.recents.title') }}</div>
        <div class="enable" v-if="recentStore.avalible && !recentStore.enabled" @click="recentStore.enable()"
            @keypress.enter="recentStore.enable()" tabindex="0">
            {{ $t('dropdown.add.recents.enable') }}
            <div class="note">{{ $t('dropdown.add.recents.enable.note') }}</div>
        </div>
        <div class="empty" v-if="recentStore.avalible && recentStore.enabled && recentStore.recents.length === 0">--- {{
            $t('dropdown.add.recents.empty') }} ---</div>
        <div class="empty small" v-if="!recentStore.avalible">{{ $t('dropdown.add.recents.unavailable') }}</div>
        <DropdownEntry v-for="recent in recentStore.recents" :image="recent.img" :title="recent.fileHandle.name"
            @click="loadHandle(recent.fileHandle)"> {{ recent.text }} </DropdownEntry>
    </Dropdown>
</template>

<style scoped>
.spacer {
    width: 100%;
    height: 2px;
    background-color: rgb(97, 97, 97);
    align-self: center;
    margin-top: 0.2rem;
    margin-bottom: 0rem;
}

.title {
    color: rgb(53, 53, 53);
    text-align: left;
    width: 100%;
    margin-top: 0;
    font-size: smaller;
    padding-left: 1rem;
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
