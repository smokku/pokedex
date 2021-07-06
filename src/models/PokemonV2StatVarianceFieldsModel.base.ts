/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatVarianceFieldsBase
 * auto generated base class for the model PokemonV2StatVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2StatVarianceFieldsModelBase = ModelBase
  .named('PokemonV2StatVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_variance_fields"), "pokemon_v2_stat_variance_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatVarianceFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2StatVarianceFields() {
  return new PokemonV2StatVarianceFieldsModelSelector()
}

export const pokemonV2StatVarianceFieldsModelPrimitives = selectFromPokemonV2StatVarianceFields().game_index.move_damage_class_id
