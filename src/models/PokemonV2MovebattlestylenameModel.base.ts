/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MovebattlestyleModel, PokemonV2MovebattlestyleModelType } from "./PokemonV2MovebattlestyleModel"
import { PokemonV2MovebattlestyleModelSelector } from "./PokemonV2MovebattlestyleModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameBase
 * auto generated base class for the model PokemonV2MovebattlestylenameModel.
 *
 * columns and relationships of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameModelBase = ModelBase
  .named('PokemonV2Movebattlestylename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename"), "pokemon_v2_movebattlestylename"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_battle_style_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_movebattlestyle: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_movebattlestyle(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`pokemon_v2_movebattlestyle`, PokemonV2MovebattlestyleModelSelector, builder) }
}
export function selectFromPokemonV2Movebattlestylename() {
  return new PokemonV2MovebattlestylenameModelSelector()
}

export const pokemonV2MovebattlestylenameModelPrimitives = selectFromPokemonV2Movebattlestylename().language_id.move_battle_style_id.name
