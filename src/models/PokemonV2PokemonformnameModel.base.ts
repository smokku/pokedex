/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameBase
 * auto generated base class for the model PokemonV2PokemonformnameModel.
 *
 * columns and relationships of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameModelBase = ModelBase
  .named('PokemonV2Pokemonformname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname"), "pokemon_v2_pokemonformname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    pokemon_name: types.union(types.undefined, types.string),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_pokemonform: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get pokemon_name() { return this.__attr(`pokemon_name`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_pokemonform(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonform`, PokemonV2PokemonformModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonformname() {
  return new PokemonV2PokemonformnameModelSelector()
}

export const pokemonV2PokemonformnameModelPrimitives = selectFromPokemonV2Pokemonformname().language_id.name.pokemon_form_id.pokemon_name
