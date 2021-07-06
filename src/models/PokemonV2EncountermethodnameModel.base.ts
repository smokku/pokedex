/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodModel, PokemonV2EncountermethodModelType } from "./PokemonV2EncountermethodModel"
import { PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameBase
 * auto generated base class for the model PokemonV2EncountermethodnameModel.
 *
 * columns and relationships of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameModelBase = ModelBase
  .named('PokemonV2Encountermethodname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname"), "pokemon_v2_encountermethodname"),
    encounter_method_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_encountermethod: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameModelSelector extends QueryBuilder {
  get encounter_method_id() { return this.__attr(`encounter_method_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encountermethod(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`pokemon_v2_encountermethod`, PokemonV2EncountermethodModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Encountermethodname() {
  return new PokemonV2EncountermethodnameModelSelector()
}

export const pokemonV2EncountermethodnameModelPrimitives = selectFromPokemonV2Encountermethodname().encounter_method_id.language_id.name
