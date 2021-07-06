/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameBase
 * auto generated base class for the model PokemonV2VersionnameModel.
 *
 * columns and relationships of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameModelBase = ModelBase
  .named('PokemonV2Versionname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname"), "pokemon_v2_versionname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Versionname() {
  return new PokemonV2VersionnameModelSelector()
}

export const pokemonV2VersionnameModelPrimitives = selectFromPokemonV2Versionname().language_id.name.version_id
