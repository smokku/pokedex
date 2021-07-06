/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatSumFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokeathlonstatSumFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_sum_fields"), "pokemon_v2_pokeathlonstat_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatSumFields() {
  return new PokemonV2PokeathlonstatSumFieldsModelSelector()
}

export const pokemonV2PokeathlonstatSumFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatSumFields()
