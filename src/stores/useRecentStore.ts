import { Json } from "deepslate";
import { Datapack } from "mc-datapack-loader";
import { defineStore } from "pinia";
import { ref } from "vue";
import { get, set } from 'idb-keyval'
import { TextComponent } from "../util/TextComponent";


type StoredDatapack = { img: string, text: string, fileHandle: FileSystemHandle }

export const useRecentStore = defineStore('recents', () => {

    const avalible = "showDirectoryPicker" in window
    const enabled = ref(false)
    const recents = ref<StoredDatapack[]>([])

    get('recent-datapacks-meta').then((metas: StoredDatapack[]) => {
        if (metas) {
            get('recent-datapacks-handle').then(h => {
                for (var i = 0 ; i < metas.length ; i++){
                    metas[i].fileHandle = h[i]
                }
                recents.value = metas
                enabled.value = true
            })
        }
    })


    function enable() {
        enabled.value = true
        set('recent-datapacks-meta', [])
        set('recent-datapacks-handle', [])
    }

    async function addRecent(fileHandle: FileSystemHandle, datapack: Datapack) {
        if (!enabled.value){
            return
        } 

        const mcmeta = Json.readObject((await datapack.getMcmeta())) ?? {}
        const pack = Json.readObject(mcmeta.pack) ?? {}

        const old_id = recents.value.findIndex(r => r.fileHandle.name === fileHandle.name)
        console.log(old_id)
        if (old_id >= 0) {
            recents.value.splice(old_id, 1)
        }

        if (recents.value.length >= 10) {
            recents.value.pop()
        }

        recents.value.unshift({
            img: await datapack.getImage(),
            text: TextComponent.parse(pack.description).toString().split('\n')[0],
            fileHandle: fileHandle
        })

        set('recent-datapacks-meta', recents.value.map(v => {
            return {img: v.img, text: v.text}
        }))

        set('recent-datapacks-handle', recents.value.map(v => {
            return v.fileHandle
        }))

    }

    function removeRecent(name: string){
        const recent = recents.value.findIndex(r => r.fileHandle.name === name)
        if (recent >= 0){
            recents.value.splice(recent, 1)
        }
    }

    return { avalible, enabled, recents, enable, addRecent, removeRecent }
})