<script setup lang="ts">
import { useDatapackStore } from '../../stores/useDatapackStore';
import { Datapack, FileListDatapack, FileSystemDirectoryDatapack, PromiseDatapack, UNKOWN_PACK, ZipDatapack } from 'mc-datapack-loader';
import DropdownEntry from './DropdownEntry.vue';
import Dropdown from './Dropdown.vue';
import { onMounted, ref } from 'vue';

const store = useDatapackStore();
const emit = defineEmits(['close'])


async function loadUrl(url: string) {
    const datapack = new PromiseDatapack(ZipDatapack.fromUrl(url))
    store.addDatapack(datapack)
    emit('close')
}

async function loadZip(event: MouseEvent) {
    async function addZipDatapack(file: File) {
        const datapack = await ZipDatapack.fromFile(file)
        store.addDatapack(datapack)
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
            if (fileHandle !== undefined){
                const file = await fileHandle.getFile()
                await addZipDatapack(file)
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
            datapack = new FileSystemDirectoryDatapack(await window.showDirectoryPicker()) 
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

    if (datapack !== undefined){
        store.addDatapack(datapack)
    }
    emit('close')
}

const PRESET_DATAPACKS = [
    {image: UNKOWN_PACK, name:"Update 1.20", url: "vanilla_datapacks/update_1_20.zip"}
]

</script>

<template>
    <Dropdown>
        <DropdownEntry icon="fa-file-zipper" @click="loadZip">Open Datapack.zip</DropdownEntry>
        <DropdownEntry icon="fa-folder-open" @click="loadFolder">Open Datapack Folder</DropdownEntry>
        <div class="spacer"></div>
        <DropdownEntry v-for="preset in PRESET_DATAPACKS" :image="preset.image" @click="loadUrl(preset.url)">{{preset.name}}</DropdownEntry>
    </Dropdown>
</template>

<style scoped>

.spacer {
    width: 100%;
    height: 2px;
    background-color: rgb(97, 97, 97);
    align-self: center;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
}

</style>
