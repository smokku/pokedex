/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemSumFieldsBase
 * auto generated base class for the model PokemonV2ItemSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item_sum_fields"), "pokemon_v2_item_sum_fields"),
    cost: types.union(types.undefined, types.null, types.integer),
    fling_power: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemSumFieldsModelSelector extends QueryBuilder {
  get cost() { return this.__attr(`cost`) }
  get fling_power() { return this.__attr(`fling_power`) }
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
}
export function selectFromPokemonV2ItemSumFields() {
  return new PokemonV2ItemSumFieldsModelSelector()
}

export const pokemonV2ItemSumFieldsModelPrimitives = selectFromPokemonV2ItemSumFields().cost.fling_power.item_category_id.item_fling_effect_id
