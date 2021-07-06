/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameMaxFieldsBase
 * auto generated base class for the model PokemonV2LocationnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2LocationnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_max_fields"), "pokemon_v2_locationname_max_fields"),
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

export class PokemonV2LocationnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LocationnameMaxFields() {
  return new PokemonV2LocationnameMaxFieldsModelSelector()
}

export const pokemonV2LocationnameMaxFieldsModelPrimitives = selectFromPokemonV2LocationnameMaxFields().language_id.location_id.name
