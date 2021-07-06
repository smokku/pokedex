/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatAvgFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2PokeathlonstatAvgFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_avg_fields"), "pokemon_v2_pokeathlonstat_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2PokeathlonstatAvgFields() {
  return new PokemonV2PokeathlonstatAvgFieldsModelSelector()
}

export const pokemonV2PokeathlonstatAvgFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatAvgFields()
