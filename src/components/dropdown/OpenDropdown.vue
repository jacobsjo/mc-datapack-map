<script setup lang="ts">
import { useDatapackStore } from '../../stores/useDatapackStore';
import { Datapack, FileListDatapack, FileSystemDirectoryDatapack, PromiseDatapack, UNKOWN_PACK, ZipDatapack } from 'mc-datapack-loader';
import DropdownEntry from './DropdownEntry.vue';
import Dropdown from './Dropdown.vue';
import { onMounted, ref } from 'vue';
import { useRecentStore } from '../../stores/useRecentStore';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

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
                datapack = await ZipDatapack.fromFile(file)
                recentStore.addRecent(handle, datapack)
            } else {
                datapack = new FileSystemDirectoryDatapack(handle as FileSystemDirectoryHandle)
                recentStore.addRecent(handle, datapack)
            }
            datapackStore.addDatapack(datapack)
        } catch (e){
            if (e instanceof DOMException){
                recentStore.removeRecent(handle.name)
                alert(i18n.t('datapack.add_datapack.recents.not_found'))
                return
            }
        }
    }

    emit('close')
}

async function loadUrl(url: string) {
    const datapack = new PromiseDatapack(ZipDatapack.fromUrl(url))
    datapackStore.addDatapack(datapack)
    emit('close')
}


async function loadZip(event: MouseEvent) {
    async function addZipDatapack(file: File) {
        const datapack = await ZipDatapack.fromFile(file)
        datapackStore.addDatapack(datapack)
        return datapack
    }

    if ("showOpenFilePicker" in window) {
        let fileHandle
        try {
            [fileHandle] = await window.showOpenFilePicker({
                types: [
                    {
                        description: "Zip files",
                        accept: {
                            "application/zip": [".zip"]
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
        input.accept = '.zip'

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
            datapack = new FileSystemDirectoryDatapack(handle)
            recentStore.addRecent(handle, datapack)
        } catch (e) {
        }
    } else {
        datapack = await new Promise<Datapack>((resolve) => {
            const input: any = document.createElement('input')
            input.type = 'file'
            input.webkitdirectory = true

            input.onchange = async () => {
                resolve(new FileListDatapack(Array.from(input.files)))
            }
            input.click()
        })
    }

    if (datapack !== undefined) {
        datapackStore.addDatapack(datapack)
    }
    emit('close')
}

const PRESET_DATAPACKS = [
    { image: UNKOWN_PACK, message_key: "dropdown.add_datapack.built_in.update_1_20", url: "vanilla_datapacks/update_1_20.zip" }
]

</script>

<template>
    <Dropdown>
        <DropdownEntry icon="fa-file-zipper" @click="loadZip" @keypress.enter="loadZip">{{ $t('dropdown.add_datapack.zip')
        }}</DropdownEntry>
        <DropdownEntry icon="fa-folder-open" @click="loadFolder" @keypress.enter="loadFolder"> {{
            $t('dropdown.add_datapack.folder') }} </DropdownEntry>
        <div class="spacer"></div>
        <div class="title">{{ $t('dropdown.add_datapack.built_in.title') }} </div>
        <DropdownEntry v-for="preset in PRESET_DATAPACKS" :image="preset.image" @click="loadUrl(preset.url);"
            @keypress.enter="loadUrl(preset.url)">{{ $t(preset.message_key) }}</DropdownEntry>
        <div class="spacer"></div>
        <div class="title">{{ $t('dropdown.add_datapack.recents.title') }}</div>
        <div class="enable" v-if="recentStore.avalible && !recentStore.enabled" @click="recentStore.enable()"
            @keypress.enter="recentStore.enable()" tabindex="0">
            {{ $t('dropdown.add_datapack.recents.enable') }}
            <div class="note">{{ $t('dropdown.add_datapack.recents.enable.note') }}</div>
        </div>
        <div class="empty" v-if="recentStore.avalible && recentStore.enabled && recentStore.recents.length === 0">--- {{ $t('dropdown.add_datapack.recents.empty')}} ---</div>
        <div class="empty small" v-if="!recentStore.avalible">{{ $t('dropdown.add_datapack.recents.unavailable')}}</div>
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

.title{
    color: rgb(53, 53, 53);
    text-align: left;
    width: 100%;
    margin-top: 0;
    font-size: smaller;
    padding-left: 1rem;
    margin-bottom: 0.2rem;
}

.enable{
    background-color: rgb(132, 171, 216);
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    width: calc(100% - 2rem);
    text-align: center;
}

.enable .note{
    font-size: smaller;
}

.enable:hover{
    background-color: rgb(178, 200, 226);
}

.empty {
    color: rgb(78, 78, 78);
}

.small {
    font-size: smaller;
}
</style>
