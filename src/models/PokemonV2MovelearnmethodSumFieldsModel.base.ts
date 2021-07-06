/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodSumFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethodSumFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_sum_fields"), "pokemon_v2_movelearnmethod_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovelearnmethodSumFields() {
  return new PokemonV2MovelearnmethodSumFieldsModelSelector()
}

export const pokemonV2MovelearnmethodSumFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodSumFields()
