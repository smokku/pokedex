/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleVarPopFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovebattlestyleVarPopFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_var_pop_fields"), "pokemon_v2_movebattlestyle_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovebattlestyleVarPopFields() {
  return new PokemonV2MovebattlestyleVarPopFieldsModelSelector()
}

export const pokemonV2MovebattlestyleVarPopFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleVarPopFields()
