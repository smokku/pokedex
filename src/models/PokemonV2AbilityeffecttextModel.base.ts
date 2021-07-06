/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextBase
 * auto generated base class for the model PokemonV2AbilityeffecttextModel.
 *
 * columns and relationships of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextModelBase = ModelBase
  .named('PokemonV2Abilityeffecttext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext"), "pokemon_v2_abilityeffecttext"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    effect: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_ability: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    short_effect: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get effect() { return this.__attr(`effect`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get short_effect() { return this.__attr(`short_effect`) }
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Abilityeffecttext() {
  return new PokemonV2AbilityeffecttextModelSelector()
}

export const pokemonV2AbilityeffecttextModelPrimitives = selectFromPokemonV2Abilityeffecttext().ability_id.effect.language_id.short_effect
