import { Identifier } from "mc-datapack-loader"
import { hashCode } from "../util"

export class BiomeColors {
    #colors = new Map<string, { r: number, g: number, b: number}>()
    #default_messages: {[key: string]: string} = {}

    constructor(namespace:string, json: {[key: string]: { r: number, g: number, b: number, name?: string }}){
        for (const biome in json) {
            const biome_id = biome.indexOf(":") === -1 ? namespace + ":" + biome : biome

            const entry = json[biome]
            this.#colors.set(biome_id, {r: entry.r, g: entry.g, b: entry.b})
            if (entry.name){
                const [ns, path] = biome_id.split(':')
                this.#default_messages[`minecraft.biome.${ns}.${path.replace('/','.')}`] = entry.name
            }
        }
    }

    public get(id: Identifier){
        var biomeColor = this.#colors.get(id.toString())
        if (biomeColor === undefined) {
            const hash = hashCode(id.toString())
            biomeColor = {
                r: (hash & 0xFF0000) >> 16,
                g: (hash & 0x00FF00) >> 8,
                b: hash & 0x0000FF
            }
        }
        return biomeColor
    }

    get default_messages() {
        return this.#default_messages
    }
}