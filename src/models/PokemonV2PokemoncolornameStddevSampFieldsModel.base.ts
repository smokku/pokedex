/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemoncolornameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_stddev_samp_fields"), "pokemon_v2_pokemoncolorname_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    pokemon_color_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get pokemon_color_id() { return this.__attr(`pokemon_color_id`) }
}
export function selectFromPokemonV2PokemoncolornameStddevSampFields() {
  return new PokemonV2PokemoncolornameStddevSampFieldsModelSelector()
}

export const pokemonV2PokemoncolornameStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameStddevSampFields().language_id.pokemon_color_id
