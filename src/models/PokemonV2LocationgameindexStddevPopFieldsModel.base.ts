/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexStddevPopFieldsBase
 * auto generated base class for the model PokemonV2LocationgameindexStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationgameindexStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2LocationgameindexStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex_stddev_pop_fields"), "pokemon_v2_locationgameindex_stddev_pop_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationgameindexStddevPopFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationgameindexStddevPopFields() {
  return new PokemonV2LocationgameindexStddevPopFieldsModelSelector()
}

export const pokemonV2LocationgameindexStddevPopFieldsModelPrimitives = selectFromPokemonV2LocationgameindexStddevPopFields().game_index.generation_id.location_id
