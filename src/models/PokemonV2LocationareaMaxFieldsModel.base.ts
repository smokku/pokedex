/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaMaxFieldsBase
 * auto generated base class for the model PokemonV2LocationareaMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2LocationareaMaxFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_max_fields"), "pokemon_v2_locationarea_max_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaMaxFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LocationareaMaxFields() {
  return new PokemonV2LocationareaMaxFieldsModelSelector()
}

export const pokemonV2LocationareaMaxFieldsModelPrimitives = selectFromPokemonV2LocationareaMaxFields().game_index.location_id.name
