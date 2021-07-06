/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameMinFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MovebattlestylenameMinFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_min_fields"), "pokemon_v2_movebattlestylename_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    move_battle_style_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovebattlestylenameMinFields() {
  return new PokemonV2MovebattlestylenameMinFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameMinFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameMinFields().language_id.move_battle_style_id.name
