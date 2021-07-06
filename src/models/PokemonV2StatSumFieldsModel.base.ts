/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatSumFieldsBase
 * auto generated base class for the model PokemonV2StatSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2StatSumFieldsModelBase = ModelBase
  .named('PokemonV2StatSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_sum_fields"), "pokemon_v2_stat_sum_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatSumFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2StatSumFields() {
  return new PokemonV2StatSumFieldsModelSelector()
}

export const pokemonV2StatSumFieldsModelPrimitives = selectFromPokemonV2StatSumFields().game_index.move_damage_class_id
