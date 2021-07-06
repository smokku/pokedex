/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatVarSampFieldsBase
 * auto generated base class for the model PokemonV2StatVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2StatVarSampFieldsModelBase = ModelBase
  .named('PokemonV2StatVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_var_samp_fields"), "pokemon_v2_stat_var_samp_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatVarSampFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
}
export function selectFromPokemonV2StatVarSampFields() {
  return new PokemonV2StatVarSampFieldsModelSelector()
}

export const pokemonV2StatVarSampFieldsModelPrimitives = selectFromPokemonV2StatVarSampFields().game_index.move_damage_class_id
