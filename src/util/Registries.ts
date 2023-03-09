import { Identifier, Registry, StructureSet } from "deepslate"




export namespace Registries{
    export const STRUCTURE_SET = register('worldgen/structure_set', StructureSet.fromJson)

	function register<T>(name: string, parser?: (obj: unknown) => T) {
		const registry = new Registry<T>(Identifier.create(name), parser)
		Registry.REGISTRY.register(registry.key, registry)
		return registry
	}

}