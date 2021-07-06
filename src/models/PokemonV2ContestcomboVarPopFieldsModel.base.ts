/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContestcomboVarPopFieldsBase
 * auto generated base class for the model PokemonV2ContestcomboVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContestcomboVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ContestcomboVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contestcombo_var_pop_fields"), "pokemon_v2_contestcombo_var_pop_fields"),
    first_move_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    second_move_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContestcomboVarPopFieldsModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
}
export function selectFromPokemonV2ContestcomboVarPopFields() {
  return new PokemonV2ContestcomboVarPopFieldsModelSelector()
}

export const pokemonV2ContestcomboVarPopFieldsModelPrimitives = selectFromPokemonV2ContestcomboVarPopFields().first_move_id.second_move_id
