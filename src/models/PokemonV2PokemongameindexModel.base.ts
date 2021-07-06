/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexBase
 * auto generated base class for the model PokemonV2PokemongameindexModel.
 *
 * columns and relationships of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexModelBase = ModelBase
  .named('PokemonV2Pokemongameindex')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex"), "pokemon_v2_pokemongameindex"),
    game_index: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Pokemongameindex() {
  return new PokemonV2PokemongameindexModelSelector()
}

export const pokemonV2PokemongameindexModelPrimitives = selectFromPokemonV2Pokemongameindex().game_index.pokemon_id.version_id
