/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestyleModel, PokemonV2MovebattlestyleModelType } from "./PokemonV2MovebattlestyleModel"
import { PokemonV2MovebattlestyleModelSelector } from "./PokemonV2MovebattlestyleModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceModel.
 *
 * columns and relationships of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceModelBase = ModelBase
  .named('PokemonV2Naturebattlestylepreference')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference"), "pokemon_v2_naturebattlestylepreference"),
    high_hp_preference: types.union(types.undefined, types.integer),
    id: types.union(types.undefined, types.integer),
    low_hp_preference: types.union(types.undefined, types.integer),
    move_battle_style_id: types.union(types.undefined, types.null, types.integer),
    nature_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_movebattlestyle: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleModel)),
    /** An object relationship */
    pokemon_v2_nature: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturebattlestylepreferenceModelSelector extends QueryBuilder {
  get high_hp_preference() { return this.__attr(`high_hp_preference`) }
  get id() { return this.__attr(`id`) }
  get low_hp_preference() { return this.__attr(`low_hp_preference`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get nature_id() { return this.__attr(`nature_id`) }
  pokemon_v2_movebattlestyle(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle`, PokemonV2MovebattlestyleModelSelector, builder) }
  pokemon_v2_nature(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature`, PokemonV2NatureModelSelector, builder) }
}
export function selectFromPokemonV2Naturebattlestylepreference() {
  return new PokemonV2NaturebattlestylepreferenceModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceModelPrimitives = selectFromPokemonV2Naturebattlestylepreference().high_hp_preference.low_hp_preference.move_battle_style_id.nature_id
