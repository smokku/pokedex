/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameBase
 * auto generated base class for the model PokemonV2StatnameModel.
 *
 * columns and relationships of "pokemon_v2_statname"
 */
export const PokemonV2StatnameModelBase = ModelBase
  .named('PokemonV2Statname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname"), "pokemon_v2_statname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_stat: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatModel)),
    stat_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get stat_id() { return this.__attr(`stat_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_stat(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stat`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2Statname() {
  return new PokemonV2StatnameModelSelector()
}

export const pokemonV2StatnameModelPrimitives = selectFromPokemonV2Statname().language_id.name.stat_id
