/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexMaxFieldsBase
 * auto generated base class for the model PokemonV2LocationgameindexMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2LocationgameindexMaxFieldsModelBase = ModelBase
  .named('PokemonV2LocationgameindexMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex_max_fields"), "pokemon_v2_locationgameindex_max_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationgameindexMaxFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationgameindexMaxFields() {
  return new PokemonV2LocationgameindexMaxFieldsModelSelector()
}

export const pokemonV2LocationgameindexMaxFieldsModelPrimitives = selectFromPokemonV2LocationgameindexMaxFields().game_index.generation_id.location_id
