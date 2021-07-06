/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MoveeffectchangeModel, PokemonV2MoveeffectchangeModelType } from "./PokemonV2MoveeffectchangeModel"
import { PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextModel.
 *
 * columns and relationships of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextModelBase = ModelBase
  .named('PokemonV2Moveeffectchangeeffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext"), "pokemon_v2_moveeffectchangeeffecttext"),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_effect_change_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_moveeffectchange: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_change_id() { return this.__attr(`move_effect_change_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_moveeffectchange(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`pokemon_v2_moveeffectchange`, PokemonV2MoveeffectchangeModelSelector, builder) }
}
export function selectFromPokemonV2Moveeffectchangeeffecttext() {
  return new PokemonV2MoveeffectchangeeffecttextModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextModelPrimitives = selectFromPokemonV2Moveeffectchangeeffecttext().effect.language_id.move_effect_change_id
