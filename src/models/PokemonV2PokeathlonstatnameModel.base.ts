/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PokeathlonstatModel, PokemonV2PokeathlonstatModelType } from "./PokemonV2PokeathlonstatModel"
import { PokemonV2PokeathlonstatModelSelector } from "./PokemonV2PokeathlonstatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameModel.
 *
 * columns and relationships of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameModelBase = ModelBase
  .named('PokemonV2Pokeathlonstatname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname"), "pokemon_v2_pokeathlonstatname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pokeathlon_stat_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_pokeathlonstat: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokeathlon_stat_id() { return this.__attr(`pokeathlon_stat_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_pokeathlonstat(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`pokemon_v2_pokeathlonstat`, PokemonV2PokeathlonstatModelSelector, builder) }
}
export function selectFromPokemonV2Pokeathlonstatname() {
  return new PokemonV2PokeathlonstatnameModelSelector()
}

export const pokemonV2PokeathlonstatnameModelPrimitives = selectFromPokemonV2Pokeathlonstatname().language_id.name.pokeathlon_stat_id
