/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemoncolornameAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_avg_fields"), "pokemon_v2_pokemoncolorname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_color_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameAvgFields() {
  return new PokemonV2PokemoncolornameAvgFieldsModelSelector()
}

export const pokemonV2PokemoncolornameAvgFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameAvgFields().language_id.pokemon_color_id
