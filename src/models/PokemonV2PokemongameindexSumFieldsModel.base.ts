/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexSumFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemongameindexSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_sum_fields"), "pokemon_v2_pokemongameindex_sum_fields"),
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

export class PokemonV2PokemongameindexSumFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemongameindexSumFields() {
  return new PokemonV2PokemongameindexSumFieldsModelSelector()
}

export const pokemonV2PokemongameindexSumFieldsModelPrimitives = selectFromPokemonV2PokemongameindexSumFields().game_index.pokemon_id.version_id
