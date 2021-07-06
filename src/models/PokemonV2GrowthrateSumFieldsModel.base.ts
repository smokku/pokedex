/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateSumFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2GrowthrateSumFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_sum_fields"), "pokemon_v2_growthrate_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2GrowthrateSumFields() {
  return new PokemonV2GrowthrateSumFieldsModelSelector()
}

export const pokemonV2GrowthrateSumFieldsModelPrimitives = selectFromPokemonV2GrowthrateSumFields()
