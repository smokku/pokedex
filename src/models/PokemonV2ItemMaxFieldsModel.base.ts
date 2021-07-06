/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item_max_fields"), "pokemon_v2_item_max_fields"),
    cost: types.union(types.undefined, types.null, types.integer),
    fling_power: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    item_fling_effect_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemMaxFieldsModelSelector extends QueryBuilder {
  get cost() { return this.__attr(`cost`) }
  get fling_power() { return this.__attr(`fling_power`) }
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemMaxFields() {
  return new PokemonV2ItemMaxFieldsModelSelector()
}

export const pokemonV2ItemMaxFieldsModelPrimitives = selectFromPokemonV2ItemMaxFields().cost.fling_power.item_category_id.item_fling_effect_id.name
