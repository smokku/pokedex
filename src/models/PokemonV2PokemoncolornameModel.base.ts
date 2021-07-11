/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameBase
 * auto generated base class for the model PokemonV2PokemoncolornameModel.
 *
 * columns and relationships of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameModelBase = ModelBase
  .named('PokemonV2Pokemoncolorname')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname"), "pokemon_v2_pokemoncolorname"),
    id: types.union(types.undefined, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_language: types.union(types.undefined, types.null, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemoncolor: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
  pokemon_v2_pokemoncolor(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`pokemon_v2_pokemoncolor`, PokemonV2PokemoncolorModelSelector, builder) }
}
export function selectFromPokemonV2Pokemoncolorname() {
  return new PokemonV2PokemoncolornameModelSelector()
}

export const pokemonV2PokemoncolornameModelPrimitives = selectFromPokemonV2Pokemoncolorname().language_id.name.pokemon_color_id
