import { Identifier } from "mc-datapack-loader"
import { VANILLA_ITEMS } from "../BuildIn/VanillaItems"
import { hashCode } from "../util"

export class StructureIcons {
    #icons = new Map<string, Identifier>()
    #default_messages: {[key: string]: string} = {}

    constructor(namespace:string, json: {[key: string]: {item?: string, name?: string}}){
        for (const structure in json) {
            const structure_id = structure.indexOf(":") === -1 ? namespace + ":" + structure : structure

            const structure_config = json[structure]

            // legacy string handling
            if (typeof structure_config === 'string'){
                throw new Error("Legacy structure_icons.json format no longer supported")
            }
            // legacy hidden in structure file
            if ((structure_config as any).hidden){
                throw new Error("Legacy structure_icons.json format no longer supported")
            } else if (structure_config.item){
                this.#icons?.set(structure_id, Identifier.parse(structure_config.item))
            }

            if (structure_config.name){
                const [ns, path] = structure_id.split(':')
                this.#default_messages[`minecraft.structure.${ns}.${path.replace('/','.')}`] = structure_config.name
            }
        }
    }

    public get(id: Identifier){
        const item = this.#icons?.get(id.toString()) ?? Identifier.create(VANILLA_ITEMS[Math.abs(hashCode(id.toString())) % VANILLA_ITEMS.length]) 
        return `https://raw.githubusercontent.com/jacobsjo/mcicons/icons/item/${item.path}.png`
    }

    get default_messages() {
        return this.#default_messages
    }
}