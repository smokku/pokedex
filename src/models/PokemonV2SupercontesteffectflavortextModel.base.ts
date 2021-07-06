/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2SupercontesteffectModel, PokemonV2SupercontesteffectModelType } from "./PokemonV2SupercontesteffectModel"
import { PokemonV2SupercontesteffectModelSelector } from "./PokemonV2SupercontesteffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextModel.
 *
 * columns and relationships of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextModelBase = ModelBase
  .named('PokemonV2Supercontesteffectflavortext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext"), "pokemon_v2_supercontesteffectflavortext"),
    flavor_text: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_supercontesteffect: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectModel)),
    super_contest_effect_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_supercontesteffect(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`pokemon_v2_supercontesteffect`, PokemonV2SupercontesteffectModelSelector, builder) }
}
export function selectFromPokemonV2Supercontesteffectflavortext() {
  return new PokemonV2SupercontesteffectflavortextModelSelector()
}

export const pokemonV2SupercontesteffectflavortextModelPrimitives = selectFromPokemonV2Supercontesteffectflavortext().flavor_text.language_id.super_contest_effect_id
