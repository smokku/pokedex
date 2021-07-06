/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameMinFieldsBase
 * auto generated base class for the model PokemonV2LocationnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LocationnameMinFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_min_fields"), "pokemon_v2_locationname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    location_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LocationnameMinFields() {
  return new PokemonV2LocationnameMinFieldsModelSelector()
}

export const pokemonV2LocationnameMinFieldsModelPrimitives = selectFromPokemonV2LocationnameMinFields().language_id.location_id.name
