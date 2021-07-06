/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureMinFieldsBase
 * auto generated base class for the model PokemonV2NatureMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2NatureMinFieldsModelBase = ModelBase
  .named('PokemonV2NatureMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature_min_fields"), "pokemon_v2_nature_min_fields"),
    decreased_stat_id: types.union(types.undefined, types.null, types.integer),
    game_index: types.union(types.undefined, types.null, types.integer),
    hates_flavor_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    increased_stat_id: types.union(types.undefined, types.null, types.integer),
    likes_flavor_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NatureMinFieldsModelSelector extends QueryBuilder {
  get decreased_stat_id() { return this.__attr(`decreased_stat_id`) }
  get game_index() { return this.__attr(`game_index`) }
  get hates_flavor_id() { return this.__attr(`hates_flavor_id`) }
  get id() { return this.__attr(`id`) }
  get increased_stat_id() { return this.__attr(`increased_stat_id`) }
  get likes_flavor_id() { return this.__attr(`likes_flavor_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2NatureMinFields() {
  return new PokemonV2NatureMinFieldsModelSelector()
}

export const pokemonV2NatureMinFieldsModelPrimitives = selectFromPokemonV2NatureMinFields().decreased_stat_id.game_index.hates_flavor_id.increased_stat_id.likes_flavor_id.name
