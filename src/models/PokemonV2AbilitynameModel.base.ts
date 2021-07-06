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
 * PokemonV2AbilitynameBase
 * auto generated base class for the model PokemonV2AbilitynameModel.
 *
 * columns and relationships of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameModelBase = ModelBase
  .named('PokemonV2Abilityname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname"), "pokemon_v2_abilityname"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_ability: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Abilityname() {
  return new PokemonV2AbilitynameModelSelector()
}

export const pokemonV2AbilitynameModelPrimitives = selectFromPokemonV2Abilityname().ability_id.language_id.name
