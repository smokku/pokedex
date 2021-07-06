/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovebattlestylenameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_var_samp_fields"), "pokemon_v2_movebattlestylename_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_battle_style_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
}
export function selectFromPokemonV2MovebattlestylenameVarSampFields() {
  return new PokemonV2MovebattlestylenameVarSampFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameVarSampFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameVarSampFields().language_id.move_battle_style_id
