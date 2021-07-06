/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameAvgFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MovebattlestylenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_avg_fields"), "pokemon_v2_movebattlestylename_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_battle_style_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
}
export function selectFromPokemonV2MovebattlestylenameAvgFields() {
  return new PokemonV2MovebattlestylenameAvgFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameAvgFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameAvgFields().language_id.move_battle_style_id
