/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatMinFieldsBase
 * auto generated base class for the model PokemonV2StatMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2StatMinFieldsModelBase = ModelBase
  .named('PokemonV2StatMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_min_fields"), "pokemon_v2_stat_min_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2StatMinFields() {
  return new PokemonV2StatMinFieldsModelSelector()
}

export const pokemonV2StatMinFieldsModelPrimitives = selectFromPokemonV2StatMinFields().game_index.move_damage_class_id.name
