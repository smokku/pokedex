/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectSumFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffectSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_sum_fields"), "pokemon_v2_moveeffect_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MoveeffectSumFields() {
  return new PokemonV2MoveeffectSumFieldsModelSelector()
}

export const pokemonV2MoveeffectSumFieldsModelPrimitives = selectFromPokemonV2MoveeffectSumFields()
