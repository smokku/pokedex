/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesStddevSampFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspritesStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_stddev_samp_fields"), "pokemon_v2_pokemonsprites_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesStddevSampFields() {
  return new PokemonV2PokemonspritesStddevSampFieldsModelSelector()
}

export const pokemonV2PokemonspritesStddevSampFieldsModelPrimitives = selectFromPokemonV2PokemonspritesStddevSampFields().pokemon_id
