/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceStddevFieldsBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2NaturebattlestylepreferenceStddevFieldsModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_stddev_fields"), "pokemon_v2_naturebattlestylepreference_stddev_fields"),
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

export class PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector extends QueryBuilder {
  get high_hp_preference() { return this.__attr(`high_hp_preference`) }
  get id() { return this.__attr(`id`) }
  get low_hp_preference() { return this.__attr(`low_hp_preference`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceStddevFields() {
  return new PokemonV2NaturebattlestylepreferenceStddevFieldsModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceStddevFieldsModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceStddevFields().high_hp_preference.low_hp_preference.move_battle_style_id.nature_id
