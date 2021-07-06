/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameSumFieldsBase
 * auto generated base class for the model PokemonV2StatnameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2StatnameSumFieldsModelBase = ModelBase
  .named('PokemonV2StatnameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_sum_fields"), "pokemon_v2_statname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get stat_id() { return this.__attr(`stat_id`) }
}
export function selectFromPokemonV2StatnameSumFields() {
  return new PokemonV2StatnameSumFieldsModelSelector()
}

export const pokemonV2StatnameSumFieldsModelPrimitives = selectFromPokemonV2StatnameSumFields().language_id.stat_id
