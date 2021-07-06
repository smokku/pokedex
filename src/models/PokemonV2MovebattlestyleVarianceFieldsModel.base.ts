/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleVarianceFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MovebattlestyleVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_variance_fields"), "pokemon_v2_movebattlestyle_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovebattlestyleVarianceFields() {
  return new PokemonV2MovebattlestyleVarianceFieldsModelSelector()
}

export const pokemonV2MovebattlestyleVarianceFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleVarianceFields()
