/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffectModel, PokemonV2ContesteffectModelType } from "./PokemonV2ContesteffectModel"
import { PokemonV2ContesteffectModelSelector } from "./PokemonV2ContesteffectModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextModel.
 *
 * columns and relationships of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextModelBase = ModelBase
  .named('PokemonV2Contesteffecteffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext"), "pokemon_v2_contesteffecteffecttext"),
    contest_effect_id: types.union(types.undefined, types.null, types.integer),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_contesteffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_contesteffect(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`pokemon_v2_contesteffect`, PokemonV2ContesteffectModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Contesteffecteffecttext() {
  return new PokemonV2ContesteffecteffecttextModelSelector()
}

export const pokemonV2ContesteffecteffecttextModelPrimitives = selectFromPokemonV2Contesteffecteffecttext().contest_effect_id.effect.language_id
