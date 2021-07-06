/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesflavortextBase
 * auto generated base class for the model PokemonV2PokemonspeciesflavortextModel.
 *
 * columns and relationships of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextModelBase = ModelBase
  .named('PokemonV2Pokemonspeciesflavortext')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesflavortext"), "pokemon_v2_pokemonspeciesflavortext"),
    flavor_text: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** An object relationship */
    pokemon_v2_version: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionModel)),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesflavortextModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get version_id() { return this.__attr(`version_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_version(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`pokemon_v2_version`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonspeciesflavortext() {
  return new PokemonV2PokemonspeciesflavortextModelSelector()
}

export const pokemonV2PokemonspeciesflavortextModelPrimitives = selectFromPokemonV2Pokemonspeciesflavortext().flavor_text.language_id.pokemon_species_id.version_id
