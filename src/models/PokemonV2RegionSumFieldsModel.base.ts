/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionSumFieldsBase
 * auto generated base class for the model PokemonV2RegionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2RegionSumFieldsModelBase = ModelBase
  .named('PokemonV2RegionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_sum_fields"), "pokemon_v2_region_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2RegionSumFields() {
  return new PokemonV2RegionSumFieldsModelSelector()
}

export const pokemonV2RegionSumFieldsModelPrimitives = selectFromPokemonV2RegionSumFields()
