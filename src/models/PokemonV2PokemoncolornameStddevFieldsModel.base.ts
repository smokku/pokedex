/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameStddevFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemoncolornameStddevFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_stddev_fields"), "pokemon_v2_pokemoncolorname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_color_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameStddevFields() {
  return new PokemonV2PokemoncolornameStddevFieldsModelSelector()
}

export const pokemonV2PokemoncolornameStddevFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameStddevFields().language_id.pokemon_color_id
