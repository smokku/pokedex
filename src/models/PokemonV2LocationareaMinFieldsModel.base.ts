/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaMinFieldsBase
 * auto generated base class for the model PokemonV2LocationareaMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareaMinFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_min_fields"), "pokemon_v2_locationarea_min_fields"),
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

export class PokemonV2LocationareaMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LocationareaMinFields() {
  return new PokemonV2LocationareaMinFieldsModelSelector()
}

export const pokemonV2LocationareaMinFieldsModelPrimitives = selectFromPokemonV2LocationareaMinFields().game_index.location_id.name
