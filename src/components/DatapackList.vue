<script setup lang="ts">
import DatapackEntry from './DatapackEntry.vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import { Datapack, FileListDatapack, FileSystemDirectoryDatapack, PromiseDatapack, ZipDatapack } from 'mc-datapack-loader';

const store = useDatapackStore();



async function loadZip(event: MouseEvent) {
    function addZipDatapack(file: File) {
        const datapack = new PromiseDatapack(ZipDatapack.fromFile(file))
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
                addZipDatapack(file)
            }
        }
    } else {
        const input = document.createElement('input') as HTMLInputElement
        input.type = 'file'
        input.accept = '.zip'

        input.onchange = (evt) => {
            const file = (evt.target as HTMLInputElement).files![0]
            addZipDatapack(file)
        }

        input.click()
    }
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
}

function reload(event: MouseEvent){
    store.$patch({})
}

</script>

<template>
    <div class="datapack_list">
        <Suspense>
            <DatapackEntry v-for="(datapack, index) in store.datapacks" :datapack="datapack.datapack" :key="datapack.key" @close="store.removeDatapack(index)"/>
        </Suspense>
        <div class="buttons">
            <font-awesome-icon icon="fa-folder-open" class="button" title="Open Datapack Folder" @click="loadFolder" />
            <font-awesome-icon icon="fa-file-zipper" class="button" title="Open Datapack Zip File" @click="loadZip" />
            <div class="spacer"></div>
            <font-awesome-icon icon="fa-rotate-right" class="button" title="Reload Datapacks" @click="reload" />
        </div>

    </div>
</template>

<style scoped>
.datapack_list {
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: fit-content
}

.button {
    background-color: gray;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
}

.button:hover {
    background-color: rgb(177, 176, 176);
}

.spacer {
    width: 2rem;
}
</style>
