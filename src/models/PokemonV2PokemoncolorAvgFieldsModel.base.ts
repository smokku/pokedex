/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorAvgFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemoncolorAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_avg_fields"), "pokemon_v2_pokemoncolor_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokemoncolorAvgFields() {
  return new PokemonV2PokemoncolorAvgFieldsModelSelector()
}

export const pokemonV2PokemoncolorAvgFieldsModelPrimitives = selectFromPokemonV2PokemoncolorAvgFields()
