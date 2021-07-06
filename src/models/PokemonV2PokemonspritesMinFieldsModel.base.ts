/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspritesMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_min_fields"), "pokemon_v2_pokemonsprites_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    sprites: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get sprites() { return this.__attr(`sprites`) }
}
export function selectFromPokemonV2PokemonspritesMinFields() {
  return new PokemonV2PokemonspritesMinFieldsModelSelector()
}

export const pokemonV2PokemonspritesMinFieldsModelPrimitives = selectFromPokemonV2PokemonspritesMinFields().pokemon_id.sprites
