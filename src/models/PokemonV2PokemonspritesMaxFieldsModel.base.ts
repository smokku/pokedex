/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspritesMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_max_fields"), "pokemon_v2_pokemonsprites_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    sprites: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get sprites() { return this.__attr(`sprites`) }
}
export function selectFromPokemonV2PokemonspritesMaxFields() {
  return new PokemonV2PokemonspritesMaxFieldsModelSelector()
}

export const pokemonV2PokemonspritesMaxFieldsModelPrimitives = selectFromPokemonV2PokemonspritesMaxFields().pokemon_id.sprites
