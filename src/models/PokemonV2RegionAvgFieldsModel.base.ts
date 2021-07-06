/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionAvgFieldsBase
 * auto generated base class for the model PokemonV2RegionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2RegionAvgFieldsModelBase = ModelBase
  .named('PokemonV2RegionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_avg_fields"), "pokemon_v2_region_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2RegionAvgFields() {
  return new PokemonV2RegionAvgFieldsModelSelector()
}

export const pokemonV2RegionAvgFieldsModelPrimitives = selectFromPokemonV2RegionAvgFields()
