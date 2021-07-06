/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameMinFieldsBase
 * auto generated base class for the model PokemonV2LocationareanameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LocationareanameMinFieldsModelBase = ModelBase
  .named('PokemonV2LocationareanameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_min_fields"), "pokemon_v2_locationareaname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_area_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_area_id() { return this.__attr(`location_area_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LocationareanameMinFields() {
  return new PokemonV2LocationareanameMinFieldsModelSelector()
}

export const pokemonV2LocationareanameMinFieldsModelPrimitives = selectFromPokemonV2LocationareanameMinFields().language_id.location_area_id.name
