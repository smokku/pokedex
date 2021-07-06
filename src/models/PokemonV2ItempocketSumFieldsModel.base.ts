/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketSumFieldsBase
 * auto generated base class for the model PokemonV2ItempocketSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItempocketSumFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_sum_fields"), "pokemon_v2_itempocket_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItempocketSumFields() {
  return new PokemonV2ItempocketSumFieldsModelSelector()
}

export const pokemonV2ItempocketSumFieldsModelPrimitives = selectFromPokemonV2ItempocketSumFields()
