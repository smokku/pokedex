/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeModel, PokemonV2AbilitychangeModelType } from "./PokemonV2AbilitychangeModel"
import { PokemonV2AbilitychangeModelSelector } from "./PokemonV2AbilitychangeModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextModel.
 *
 * columns and relationships of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextModelBase = ModelBase
  .named('PokemonV2Abilitychangeeffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext"), "pokemon_v2_abilitychangeeffecttext"),
    ability_change_id: types.union(types.undefined, types.null, types.integer),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_abilitychange: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextModelSelector extends QueryBuilder {
  get ability_change_id() { return this.__attr(`ability_change_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  pokemon_v2_abilitychange(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`pokemon_v2_abilitychange`, PokemonV2AbilitychangeModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Abilitychangeeffecttext() {
  return new PokemonV2AbilitychangeeffecttextModelSelector()
}

export const pokemonV2AbilitychangeeffecttextModelPrimitives = selectFromPokemonV2Abilitychangeeffecttext().ability_change_id.effect.language_id
