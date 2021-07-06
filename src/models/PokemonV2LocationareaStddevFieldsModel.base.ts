/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaStddevFieldsBase
 * auto generated base class for the model PokemonV2LocationareaStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationareaStddevFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_stddev_fields"), "pokemon_v2_locationarea_stddev_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaStddevFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationareaStddevFields() {
  return new PokemonV2LocationareaStddevFieldsModelSelector()
}

export const pokemonV2LocationareaStddevFieldsModelPrimitives = selectFromPokemonV2LocationareaStddevFields().game_index.location_id
