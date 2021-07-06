/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameAvgFieldsBase
 * auto generated base class for the model PokemonV2RegionnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2RegionnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_avg_fields"), "pokemon_v2_regionname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameAvgFields() {
  return new PokemonV2RegionnameAvgFieldsModelSelector()
}

export const pokemonV2RegionnameAvgFieldsModelPrimitives = selectFromPokemonV2RegionnameAvgFields().language_id.region_id
