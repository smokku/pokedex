/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameMinFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2PokemoncolornameMinFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_min_fields"), "pokemon_v2_pokemoncolorname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    pokemon_color_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameMinFields() {
  return new PokemonV2PokemoncolornameMinFieldsModelSelector()
}

export const pokemonV2PokemoncolornameMinFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameMinFields().language_id.name.pokemon_color_id
