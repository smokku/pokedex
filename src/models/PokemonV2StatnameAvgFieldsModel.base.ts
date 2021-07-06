/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameAvgFieldsBase
 * auto generated base class for the model PokemonV2StatnameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2StatnameAvgFieldsModelBase = ModelBase
  .named('PokemonV2StatnameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_avg_fields"), "pokemon_v2_statname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    stat_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2StatnameAvgFields() {
  return new PokemonV2StatnameAvgFieldsModelSelector()
}

export const pokemonV2StatnameAvgFieldsModelPrimitives = selectFromPokemonV2StatnameAvgFields().language_id.stat_id
