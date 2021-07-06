/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PokedexModel, PokemonV2PokedexModelType } from "./PokemonV2PokedexModel"
import { PokemonV2PokedexModelSelector } from "./PokemonV2PokedexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokedexdescriptionBase
 * auto generated base class for the model PokemonV2PokedexdescriptionModel.
 *
 * columns and relationships of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionModelBase = ModelBase
  .named('PokemonV2Pokedexdescription')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokedexdescription"), "pokemon_v2_pokedexdescription"),
    description: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    pokedex_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_pokedex: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokedexModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokedexdescriptionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokedex_id() { return this.__attr(`pokedex_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_pokedex(builder?: string | PokemonV2PokedexModelSelector | ((selector: PokemonV2PokedexModelSelector) => PokemonV2PokedexModelSelector)) { return this.__child(`pokemon_v2_pokedex`, PokemonV2PokedexModelSelector, builder) }
}
export function selectFromPokemonV2Pokedexdescription() {
  return new PokemonV2PokedexdescriptionModelSelector()
}

export const pokemonV2PokedexdescriptionModelPrimitives = selectFromPokemonV2Pokedexdescription().description.language_id.pokedex_id
