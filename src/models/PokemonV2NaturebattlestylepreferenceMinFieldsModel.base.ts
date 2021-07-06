/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceMinFieldsBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2NaturebattlestylepreferenceMinFieldsModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_min_fields"), "pokemon_v2_naturebattlestylepreference_min_fields"),
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

export class PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector extends QueryBuilder {
  get high_hp_preference() { return this.__attr(`high_hp_preference`) }
  get id() { return this.__attr(`id`) }
  get low_hp_preference() { return this.__attr(`low_hp_preference`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceMinFields() {
  return new PokemonV2NaturebattlestylepreferenceMinFieldsModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceMinFieldsModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceMinFields().high_hp_preference.low_hp_preference.move_battle_style_id.nature_id
