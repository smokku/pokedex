/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContestcomboMinFieldsBase
 * auto generated base class for the model PokemonV2ContestcomboMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ContestcomboMinFieldsModelBase = ModelBase
  .named('PokemonV2ContestcomboMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contestcombo_min_fields"), "pokemon_v2_contestcombo_min_fields"),
    first_move_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    second_move_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContestcomboMinFieldsModelSelector extends QueryBuilder {
  get first_move_id() { return this.__attr(`first_move_id`) }
  get id() { return this.__attr(`id`) }
  get second_move_id() { return this.__attr(`second_move_id`) }
}
export function selectFromPokemonV2ContestcomboMinFields() {
  return new PokemonV2ContestcomboMinFieldsModelSelector()
}

export const pokemonV2ContestcomboMinFieldsModelPrimitives = selectFromPokemonV2ContestcomboMinFields().first_move_id.second_move_id
