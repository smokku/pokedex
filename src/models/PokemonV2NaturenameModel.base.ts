/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameBase
 * auto generated base class for the model PokemonV2NaturenameModel.
 *
 * columns and relationships of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameModelBase = ModelBase
  .named('PokemonV2Naturename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename"), "pokemon_v2_naturename"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    nature_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_nature: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get nature_id() { return this.__attr(`nature_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_nature(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_nature`, PokemonV2NatureModelSelector, builder) }
}
export function selectFromPokemonV2Naturename() {
  return new PokemonV2NaturenameModelSelector()
}

export const pokemonV2NaturenameModelPrimitives = selectFromPokemonV2Naturename().language_id.name.nature_id
