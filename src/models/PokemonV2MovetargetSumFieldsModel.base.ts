/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetSumFieldsBase
 * auto generated base class for the model PokemonV2MovetargetSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovetargetSumFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_sum_fields"), "pokemon_v2_movetarget_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovetargetSumFields() {
  return new PokemonV2MovetargetSumFieldsModelSelector()
}

export const pokemonV2MovetargetSumFieldsModelPrimitives = selectFromPokemonV2MovetargetSumFields()
