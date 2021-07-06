/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentSumFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetaailmentSumFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_sum_fields"), "pokemon_v2_movemetaailment_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentSumFields() {
  return new PokemonV2MovemetaailmentSumFieldsModelSelector()
}

export const pokemonV2MovemetaailmentSumFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentSumFields()
