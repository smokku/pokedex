/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesMinFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformspritesMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_min_fields"), "pokemon_v2_pokemonformsprites_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    sprites: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get sprites() { return this.__attr(`sprites`) }
}
export function selectFromPokemonV2PokemonformspritesMinFields() {
  return new PokemonV2PokemonformspritesMinFieldsModelSelector()
}

export const pokemonV2PokemonformspritesMinFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesMinFields().pokemon_form_id.sprites
