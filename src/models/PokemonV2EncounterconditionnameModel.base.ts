/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionModel, PokemonV2EncounterconditionModelType } from "./PokemonV2EncounterconditionModel"
import { PokemonV2EncounterconditionModelSelector } from "./PokemonV2EncounterconditionModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameBase
 * auto generated base class for the model PokemonV2EncounterconditionnameModel.
 *
 * columns and relationships of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameModelBase = ModelBase
  .named('PokemonV2Encounterconditionname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname"), "pokemon_v2_encounterconditionname"),
    encounter_condition_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_encountercondition: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encountercondition(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`pokemon_v2_encountercondition`, PokemonV2EncounterconditionModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Encounterconditionname() {
  return new PokemonV2EncounterconditionnameModelSelector()
}

export const pokemonV2EncounterconditionnameModelPrimitives = selectFromPokemonV2Encounterconditionname().encounter_condition_id.language_id.name
