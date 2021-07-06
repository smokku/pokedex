/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleAvgFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovebattlestyleAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_avg_fields"), "pokemon_v2_movebattlestyle_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovebattlestyleAvgFields() {
  return new PokemonV2MovebattlestyleAvgFieldsModelSelector()
}

export const pokemonV2MovebattlestyleAvgFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleAvgFields()
