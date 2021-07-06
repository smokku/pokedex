/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceVarPopFieldsBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2NaturebattlestylepreferenceVarPopFieldsModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_var_pop_fields"), "pokemon_v2_naturebattlestylepreference_var_pop_fields"),
    high_hp_preference: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    low_hp_preference: types.union(types.undefined, types.null, types.number),
    move_battle_style_id: types.union(types.undefined, types.null, types.number),
    nature_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector extends QueryBuilder {
  get high_hp_preference() { return this.__attr(`high_hp_preference`) }
  get id() { return this.__attr(`id`) }
  get low_hp_preference() { return this.__attr(`low_hp_preference`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceVarPopFields() {
  return new PokemonV2NaturebattlestylepreferenceVarPopFieldsModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceVarPopFieldsModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceVarPopFields().high_hp_preference.low_hp_preference.move_battle_style_id.nature_id
