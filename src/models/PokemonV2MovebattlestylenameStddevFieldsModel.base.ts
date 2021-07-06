/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameStddevFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovebattlestylenameStddevFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_stddev_fields"), "pokemon_v2_movebattlestylename_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    move_battle_style_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get move_battle_style_id() { return this.__attr(`move_battle_style_id`) }
}
export function selectFromPokemonV2MovebattlestylenameStddevFields() {
  return new PokemonV2MovebattlestylenameStddevFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameStddevFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameStddevFields().language_id.move_battle_style_id
