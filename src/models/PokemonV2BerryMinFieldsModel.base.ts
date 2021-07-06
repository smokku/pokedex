/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryMinFieldsBase
 * auto generated base class for the model PokemonV2BerryMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2BerryMinFieldsModelBase = ModelBase
  .named('PokemonV2BerryMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berry_min_fields"), "pokemon_v2_berry_min_fields"),
    berry_firmness_id: types.union(types.undefined, types.null, types.integer),
    growth_time: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    max_harvest: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    natural_gift_power: types.union(types.undefined, types.null, types.integer),
    natural_gift_type_id: types.union(types.undefined, types.null, types.integer),
    size: types.union(types.undefined, types.null, types.integer),
    smoothness: types.union(types.undefined, types.null, types.integer),
    soil_dryness: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryMinFieldsModelSelector extends QueryBuilder {
  get berry_firmness_id() { return this.__attr(`berry_firmness_id`) }
  get growth_time() { return this.__attr(`growth_time`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get max_harvest() { return this.__attr(`max_harvest`) }
  get name() { return this.__attr(`name`) }
  get natural_gift_power() { return this.__attr(`natural_gift_power`) }
  get natural_gift_type_id() { return this.__attr(`natural_gift_type_id`) }
  get size() { return this.__attr(`size`) }
  get smoothness() { return this.__attr(`smoothness`) }
  get soil_dryness() { return this.__attr(`soil_dryness`) }
}
export function selectFromPokemonV2BerryMinFields() {
  return new PokemonV2BerryMinFieldsModelSelector()
}

export const pokemonV2BerryMinFieldsModelPrimitives = selectFromPokemonV2BerryMinFields().berry_firmness_id.growth_time.item_id.max_harvest.name.natural_gift_power.natural_gift_type_id.size.smoothness.soil_dryness
