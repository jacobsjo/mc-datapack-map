export class TextComponent{
    private constructor(
        readonly text?: string,
        readonly translate: boolean = false,
        public extra?: TextComponent[],
        readonly formatting?: {
            color?: string,
            bold?: boolean,
            italic?: boolean,
            underlined?: boolean,
            strikethrough?: boolean,
            obfuscated?: boolean
        }
    ){

    }

    public toString(): string{
        return (this.text ?? "") + (this.extra?.map(e => e.toString()).join("") ?? "")
    }

    public static parse(json: any): TextComponent{
        if (typeof(json) === "boolean" || typeof(json) === "number" || typeof(json) === "string"){
            return new TextComponent(json.toString())
        } else if (Array.isArray(json)){
            const component = TextComponent.parse(json.shift())

            if (component.extra === undefined)
                component.extra = []

            component.extra.push(...json.map(j => TextComponent.parse(j)))
            return component
        } else {
            const formatting = {
                ...(json.color && {color: TextComponent.parseColor(json.color)}),
                ...(json.bold !== undefined && {bold: json.bold}),
                ...(json.italic !== undefined&& {italic: json.italic}),
                ...(json.underlined !== undefined&& {underlined: json.underlined}),
                ...(json.strikethrough !== undefined&& {strikethrough: json.strikethrough}),
                ...(json.obfuscated !== undefined && {obfuscated: json.obfuscated}),
            }

            if (json.text !== undefined){
                return new TextComponent(json.text, false, json.extra?.map((j: any) => TextComponent.parse(j)), formatting)
            } else if (json.translate) {
                return new TextComponent(json.translate, true, json.extra?.map((j: any) => TextComponent.parse(j)), formatting)
            } else {
                return new TextComponent(json.score ?? json.selector ?? json.keybind ?? json.nbt, false, json.extra?.map((j: any) => TextComponent.parse(j)), formatting)
            }
        }
    }

    private static parseColor(color: string){
        switch (color) {
            case "black": return "#000000"
            case "dark_blue": return "#0000AA"
            case "dark_green": return "#00AA00"
            case "dark_aqua": return "#00AAAA"
            case "dark_red": return "#AA0000"
            case "cark_purple": return "#AA00AA"
            case "gold": return "#FFAA00"
            case "gray": return "#AAAAAA"
            case "dark_gray": return "#555555"
            case "blue": return "#5555FF"
            case "green": return "#55FF55"
            case "aqua": return "#55FFFF"
            case "red": return "#FF5555"
            case "light_purple": return "#FF55FF"
            case "yellow": return "#FFFF55"
            case "white": return "#FFFFFF"
            default:
                if (color.match(/^#[0-9A-Fa-f]{6}$/g)) return color
                return undefined

        }                
    }
}