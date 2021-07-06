/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatStddevPopFieldsBase
 * auto generated base class for the model PokemonV2StatStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2StatStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2StatStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_stddev_pop_fields"), "pokemon_v2_stat_stddev_pop_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatStddevPopFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2StatStddevPopFields() {
  return new PokemonV2StatStddevPopFieldsModelSelector()
}

export const pokemonV2StatStddevPopFieldsModelPrimitives = selectFromPokemonV2StatStddevPopFields().game_index.move_damage_class_id
