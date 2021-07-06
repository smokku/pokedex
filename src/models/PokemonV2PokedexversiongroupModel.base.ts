/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexversiongroupBase
 * auto generated base class for the model PokemonV2PokedexversiongroupModel.
 *
 * columns and relationships of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupModelBase = ModelBase
  .named('PokemonV2Pokedexversiongroup')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexversiongroup"), "pokemon_v2_pokedexversiongroup"),
    id: types.union(types.undefined, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokedex: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexModel)),
    /** An object relationship */
    pokemon_v2_versiongroup: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupModel)),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexversiongroupModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
  pokemon_v2_pokedex(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex`, PokemonV2PokedexModelSelector, builder) }
  pokemon_v2_versiongroup(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`pokemon_v2_versiongroup`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2Pokedexversiongroup() {
  return new PokemonV2PokedexversiongroupModelSelector()
}

export const pokemonV2PokedexversiongroupModelPrimitives = selectFromPokemonV2Pokedexversiongroup().pokedex_id.version_group_id
