<script setup lang="ts">
import { Datapack } from 'mc-datapack-loader';
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import DatapackSelection from './DatapackList.vue';
import Footer from './Footer.vue';
import MenuButtons from './MenuButtons.vue';
import SettingsPanel from './SettingsPanel.vue';

    const store = useDatapackStore()

    const file_dragging = ref(false)

    async function dropHandler(ev: DragEvent){

        if (ev.dataTransfer === null){
            return
        }
        ev.preventDefault()
        file_dragging.value = false

        for (const item of ev.dataTransfer.items){
            if ("getAsFileSystemHandle" in item){
                const handle = await item.getAsFileSystemHandle()
                if (handle instanceof FileSystemDirectoryHandle){
                    store.addDatapack(Datapack.fromFileSystemDirectoryHandle(handle) )
                } else if (handle instanceof FileSystemFileHandle) {
                    console.log(handle)
                    store.addDatapack(await ZipDatapack.fromFile(await handle.getFile()))
                }
            } else {
                if ((item as DataTransferItem).type === "application/zip"){
                    const file = (item as DataTransferItem).getAsFile()
                    if (file){
                        store.addDatapack(await ZipDatapack.fromFile(file))
                    }
                }
            }
        }
    }

    function dragOverHandler(ev: DragEvent){

        ev.preventDefault()
    }


</script>

<template>
    <div class="sidebar"
        @drop="dropHandler"
        @dragover="dragOverHandler"
        @dragenter="file_dragging=true"
        @dragleave="file_dragging=false"
        :class="{file_dragging: file_dragging}"
    >
        <MenuButtons />
        <Suspense>
            <SettingsPanel />
        </Suspense>
        <DatapackSelection />
        <Footer @open_popup="$emit('open_popup')" />
    </div>
</template>

<style scoped>
    .sidebar {
        height: 100%;
        min-width: 19rem;
        max-width: 19rem;
        display: flex;
        flex-direction: column;

        background-color: rgb(3, 33, 58);
        color: white;
        
        overflow-y: scroll;
        padding: 1rem;
        padding-top: 1rem;
        gap: 1.5rem;
        box-sizing: border-box;

        transition: 0.3s;
    }

    .sidebar.file_dragging {
        background-color: rgb(7, 68, 78);
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

</style>
