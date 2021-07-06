/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LocationgameindexStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationgameindexStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LocationgameindexStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex_stddev_samp_fields"), "pokemon_v2_locationgameindex_stddev_samp_fields"),
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

export class PokemonV2LocationgameindexStddevSampFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationgameindexStddevSampFields() {
  return new PokemonV2LocationgameindexStddevSampFieldsModelSelector()
}

export const pokemonV2LocationgameindexStddevSampFieldsModelPrimitives = selectFromPokemonV2LocationgameindexStddevSampFields().game_index.generation_id.location_id
