/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceSumFieldsBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2NaturebattlestylepreferenceSumFieldsModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_sum_fields"), "pokemon_v2_naturebattlestylepreference_sum_fields"),
    high_hp_preference: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    low_hp_preference: types.union(types.undefined, types.null, types.integer),
    move_battle_style_id: types.union(types.undefined, types.null, types.integer),
    nature_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector extends QueryBuilder {
  get high_hp_preference() { return this.__attr(`high_hp_preference`) }
  get id() { return this.__attr(`id`) }
  get low_hp_preference() { return this.__attr(`low_hp_preference`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceSumFields() {
  return new PokemonV2NaturebattlestylepreferenceSumFieldsModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceSumFieldsModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceSumFields().high_hp_preference.low_hp_preference.move_battle_style_id.nature_id
