/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemongameindexAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_avg_fields"), "pokemon_v2_pokemongameindex_avg_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexAvgFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2PokemongameindexAvgFields() {
  return new PokemonV2PokemongameindexAvgFieldsModelSelector()
}

export const pokemonV2PokemongameindexAvgFieldsModelPrimitives = selectFromPokemonV2PokemongameindexAvgFields().game_index.pokemon_id.version_id
