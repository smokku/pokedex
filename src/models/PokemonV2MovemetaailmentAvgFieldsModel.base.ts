/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentAvgFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetaailmentAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_avg_fields"), "pokemon_v2_movemetaailment_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2MovemetaailmentAvgFields() {
  return new PokemonV2MovemetaailmentAvgFieldsModelSelector()
}

export const pokemonV2MovemetaailmentAvgFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentAvgFields()
