/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvalueModel, PokemonV2EncounterconditionvalueModelType } from "./PokemonV2EncounterconditionvalueModel"
import { PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluenameBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluenameModel.
 *
 * columns and relationships of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameModelBase = ModelBase
  .named('PokemonV2Encounterconditionvaluename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluename"), "pokemon_v2_encounterconditionvaluename"),
    encounter_condition_value_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_encounterconditionvalue: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueModel)),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluenameModelSelector extends QueryBuilder {
  get encounter_condition_value_id() { return this.__attr(`encounter_condition_value_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_encounterconditionvalue(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`pokemon_v2_encounterconditionvalue`, PokemonV2EncounterconditionvalueModelSelector, builder) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2Encounterconditionvaluename() {
  return new PokemonV2EncounterconditionvaluenameModelSelector()
}

export const pokemonV2EncounterconditionvaluenameModelPrimitives = selectFromPokemonV2Encounterconditionvaluename().encounter_condition_value_id.language_id.name
