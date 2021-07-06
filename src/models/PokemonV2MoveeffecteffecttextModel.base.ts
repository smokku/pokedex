/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2MoveeffectModel, PokemonV2MoveeffectModelType } from "./PokemonV2MoveeffectModel"
import { PokemonV2MoveeffectModelSelector } from "./PokemonV2MoveeffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextModel.
 *
 * columns and relationships of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextModelBase = ModelBase
  .named('PokemonV2Moveeffecteffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext"), "pokemon_v2_moveeffecteffecttext"),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_moveeffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectModel)),
    short_effect: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextModelSelector extends QueryBuilder {
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_moveeffect(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`pokemon_v2_moveeffect`, PokemonV2MoveeffectModelSelector, builder) }
}
export function selectFromPokemonV2Moveeffecteffecttext() {
  return new PokemonV2MoveeffecteffecttextModelSelector()
}

export const pokemonV2MoveeffecteffecttextModelPrimitives = selectFromPokemonV2Moveeffecteffecttext().effect.language_id.move_effect_id.short_effect
