import { BlockDefinition, BlockModel, Identifier, ItemRenderer, Resources, TextureAtlas, upperPowerOfTwo } from "deepslate";

export namespace StructureIcons {
    const MCMETA = 'https://raw.githubusercontent.com/misode/mcmeta/'

    const itemCanvas = document.createElement('canvas') as HTMLCanvasElement
    itemCanvas.width = 64
    itemCanvas.height = 64

    const itemGl = itemCanvas.getContext('webgl', { preserveDrawingBuffer: true })!

    const itemRenderer = initalize(itemGl)

    const loadedItems = new Map<string, string>()

    async function initalize(itemGl: WebGLRenderingContext) {
        const [blockstates, models, uvMap, atlas] = await Promise.all([
            fetch(`${MCMETA}summary/assets/block_definition/data.min.json`).then(r => r.json()),
            fetch(`${MCMETA}summary/assets/model/data.min.json`).then(r => r.json()),
            fetch(`${MCMETA}atlas/all/data.min.json`).then(r => r.json()),
            new Promise<HTMLImageElement>(res => {
                const image = new Image()
                image.onload = () => res(image)
                image.crossOrigin = 'Anonymous'
                image.src = `${MCMETA}atlas/all/atlas.png`
            }),
        ])
        const blockDefinitions: Record<string, BlockDefinition> = {}
        Object.keys(blockstates).forEach(id => {
            blockDefinitions['minecraft:' + id] = BlockDefinition.fromJson(id, blockstates[id])
        })

        const blockModels: Record<string, BlockModel> = {}
        Object.keys(models).forEach(id => {
            blockModels['minecraft:' + id] = BlockModel.fromJson(id, models[id])
        })
        Object.values(blockModels).forEach((m: any) => m.flatten({ getBlockModel: (id: string) => blockModels[id] }))

        const atlasCanvas = document.createElement('canvas')
        const atlasSize = upperPowerOfTwo(Math.max(atlas.width, atlas.height))
        atlasCanvas.width = atlasSize
        atlasCanvas.height = atlasSize
        const atlasCtx = atlasCanvas.getContext('2d')!
        atlasCtx.drawImage(atlas, 0, 0)
        const atlasData = atlasCtx.getImageData(0, 0, atlasSize, atlasSize)
        const part = 16 / atlasData.width
        const idMap: { [key: string]: [number, number, number, number] } = {}
        Object.keys(uvMap).forEach(id => {
            const u = uvMap[id][0] / atlasSize
            const v = uvMap[id][1] / atlasSize
            idMap['minecraft:' + id] = [u, v, u + part, v + part]
        })
        const textureAtlas = new TextureAtlas(atlasData, idMap)

        const resources: Resources = {
            getBlockDefinition(id) { return blockDefinitions[id.toString()] },
            getBlockModel(id) { return blockModels[id.toString()] },
            getTextureUV(id) { return textureAtlas.getTextureUV(id) },
            getTextureAtlas() { return textureAtlas.getTextureAtlas() },
            getBlockFlags(id) { return { opaque: false } },
            getBlockProperties(id) { return null },
            getDefaultBlockProperties(id) { return null },
        }

        // === Item rendering ===

        return new ItemRenderer(itemGl, Identifier.parse('stone'), resources)
    }

    export async function getItemDataURL(item: Identifier): Promise<string> {
        if (loadedItems.has(item.toString())) {
            return loadedItems.get(item.toString())!
        }

        const iR = await itemRenderer

        itemGl.clear(itemGl.DEPTH_BUFFER_BIT | itemGl.COLOR_BUFFER_BIT)
        iR.setItem(item)
        iR.drawItem()

        const dataURL = itemCanvas.toDataURL()
        loadedItems.set(item.toString(), dataURL)

        return dataURL
    }
}