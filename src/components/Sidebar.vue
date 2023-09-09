<script setup lang="ts">
import { Datapack } from 'mc-datapack-loader';
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import { useRecentStore } from '../stores/useRecentStore';
import { useSettingsStore } from '../stores/useSettingsStore';
import { versionDatapackFormat } from '../util';
import DatapackSelection from './DatapackList.vue';
import Footer from './Footer.vue';
import MenuButtons from './MenuButtons.vue';
import SettingsPanel from './SettingsPanel.vue';

    const datapackStore = useDatapackStore()
    const settingsStore = useSettingsStore()
    const recentStore = useRecentStore();

    const file_dragging = ref(false)

    async function dropHandler(ev: DragEvent){

        if (ev.dataTransfer === null){
            return
        }
        ev.preventDefault()
        file_dragging.value = false

        const datapackVersion = versionDatapackFormat[settingsStore.mc_version]

        for (const item of ev.dataTransfer.items){
            if ("getAsFileSystemHandle" in item){
                const handle = await item.getAsFileSystemHandle()
                var datapack: Datapack
                if (handle instanceof FileSystemDirectoryHandle){
                    datapack = Datapack.fromFileSystemDirectoryHandle(handle, datapackVersion)
                } else if (handle instanceof FileSystemFileHandle) {
                    datapack = Datapack.fromZipFile(await handle.getFile(), datapackVersion)
                } else {
                    continue
                }
                datapackStore.addDatapack(datapack)
                recentStore.addRecent(handle, datapack)
            } else {
                if ((item as DataTransferItem).type === "application/zip"){
                    const file = (item as DataTransferItem).getAsFile()
                    if (file){
                        datapackStore.addDatapack(Datapack.fromZipFile(file, datapackVersion))
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
