/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderSumFieldsBase
 * auto generated base class for the model PokemonV2GenderSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2GenderSumFieldsModelBase = ModelBase
  .named('PokemonV2GenderSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_sum_fields"), "pokemon_v2_gender_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GenderSumFields() {
  return new PokemonV2GenderSumFieldsModelSelector()
}

export const pokemonV2GenderSumFieldsModelPrimitives = selectFromPokemonV2GenderSumFields()
