/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaSumFieldsBase
 * auto generated base class for the model PokemonV2LocationareaSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationareaSumFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_sum_fields"), "pokemon_v2_locationarea_sum_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaSumFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationareaSumFields() {
  return new PokemonV2LocationareaSumFieldsModelSelector()
}

export const pokemonV2LocationareaSumFieldsModelPrimitives = selectFromPokemonV2LocationareaSumFields().game_index.location_id
