/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameAvgFieldsBase
 * auto generated base class for the model PokemonV2LocationnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_avg_fields"), "pokemon_v2_locationname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    location_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get location_id() { return this.__attr(`location_id`) }
}
export function selectFromPokemonV2LocationnameAvgFields() {
  return new PokemonV2LocationnameAvgFieldsModelSelector()
}

export const pokemonV2LocationnameAvgFieldsModelPrimitives = selectFromPokemonV2LocationnameAvgFields().language_id.location_id
