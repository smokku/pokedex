/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorSumFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemoncolorSumFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_sum_fields"), "pokemon_v2_pokemoncolor_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemoncolorSumFields() {
  return new PokemonV2PokemoncolorSumFieldsModelSelector()
}

export const pokemonV2PokemoncolorSumFieldsModelPrimitives = selectFromPokemonV2PokemoncolorSumFields()
