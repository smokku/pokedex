/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { PokemonV2PokemonshapeModel, PokemonV2PokemonshapeModelType } from "./PokemonV2PokemonshapeModel"
import { PokemonV2PokemonshapeModelSelector } from "./PokemonV2PokemonshapeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapenameBase
 * auto generated base class for the model PokemonV2PokemonshapenameModel.
 *
 * columns and relationships of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameModelBase = ModelBase
  .named('PokemonV2Pokemonshapename')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshapename"), "pokemon_v2_pokemonshapename"),
    awesome_name: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pokemon_shape_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageModel)),
    /** An object relationship */
    pokemon_v2_pokemonshape: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapenameModelSelector extends QueryBuilder {
  get awesome_name() { return this.__attr(`awesome_name`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_shape_id() { return this.__attr(`pokemon_shape_id`) }
  pokemon_v2_language(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`pokemon_v2_language`, PokemonV2LanguageModelSelector, builder) }
  pokemon_v2_pokemonshape(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`pokemon_v2_pokemonshape`, PokemonV2PokemonshapeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonshapename() {
  return new PokemonV2PokemonshapenameModelSelector()
}

export const pokemonV2PokemonshapenameModelPrimitives = selectFromPokemonV2Pokemonshapename().awesome_name.language_id.name.pokemon_shape_id
