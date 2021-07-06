/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexMinFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemongameindexMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_min_fields"), "pokemon_v2_pokemongameindex_min_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemongameindexMinFields() {
  return new PokemonV2PokemongameindexMinFieldsModelSelector()
}

export const pokemonV2PokemongameindexMinFieldsModelPrimitives = selectFromPokemonV2PokemongameindexMinFields().game_index.pokemon_id.version_id
