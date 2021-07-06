/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleSumFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MovebattlestyleSumFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_sum_fields"), "pokemon_v2_movebattlestyle_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovebattlestyleSumFields() {
  return new PokemonV2MovebattlestyleSumFieldsModelSelector()
}

export const pokemonV2MovebattlestyleSumFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleSumFields()
