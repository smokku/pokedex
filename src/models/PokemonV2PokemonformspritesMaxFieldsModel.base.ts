/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformspritesMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_max_fields"), "pokemon_v2_pokemonformsprites_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    pokemon_form_id: types.union(types.undefined, types.null, types.integer),
    sprites: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_form_id() { return this.__attr(`pokemon_form_id`) }
  get sprites() { return this.__attr(`sprites`) }
}
export function selectFromPokemonV2PokemonformspritesMaxFields() {
  return new PokemonV2PokemonformspritesMaxFieldsModelSelector()
}

export const pokemonV2PokemonformspritesMaxFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesMaxFields().pokemon_form_id.sprites
