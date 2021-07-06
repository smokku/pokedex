/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item_var_samp_fields"), "pokemon_v2_item_var_samp_fields"),
    cost: types.union(types.undefined, types.null, types.number),
    fling_power: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemVarSampFieldsModelSelector extends QueryBuilder {
  get cost() { return this.__attr(`cost`) }
  get fling_power() { return this.__attr(`fling_power`) }
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
}
export function selectFromPokemonV2ItemVarSampFields() {
  return new PokemonV2ItemVarSampFieldsModelSelector()
}

export const pokemonV2ItemVarSampFieldsModelPrimitives = selectFromPokemonV2ItemVarSampFields().cost.fling_power.item_category_id.item_fling_effect_id
