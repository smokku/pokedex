/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameMaxFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovebattlestylenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_max_fields"), "pokemon_v2_movebattlestylename_max_fields"),
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

export class PokemonV2MovebattlestylenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2MovebattlestylenameMaxFields() {
  return new PokemonV2MovebattlestylenameMaxFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameMaxFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameMaxFields().language_id.move_battle_style_id.name
