/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspritesAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_avg_fields"), "pokemon_v2_pokemonsprites_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    pokemon_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
}
export function selectFromPokemonV2PokemonspritesAvgFields() {
  return new PokemonV2PokemonspritesAvgFieldsModelSelector()
}

export const pokemonV2PokemonspritesAvgFieldsModelPrimitives = selectFromPokemonV2PokemonspritesAvgFields().pokemon_id
