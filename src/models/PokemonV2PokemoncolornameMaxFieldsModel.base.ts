/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameMaxFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2PokemoncolornameMaxFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_max_fields"), "pokemon_v2_pokemoncolorname_max_fields"),
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

export class PokemonV2PokemoncolornameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameMaxFields() {
  return new PokemonV2PokemoncolornameMaxFieldsModelSelector()
}

export const pokemonV2PokemoncolornameMaxFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameMaxFields().language_id.name.pokemon_color_id
