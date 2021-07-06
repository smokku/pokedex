/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexMinFieldsBase
 * auto generated base class for the model PokemonV2ItemgameindexMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemgameindexMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemgameindexMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex_min_fields"), "pokemon_v2_itemgameindex_min_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemgameindexMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemgameindexMinFields() {
  return new PokemonV2ItemgameindexMinFieldsModelSelector()
}

export const pokemonV2ItemgameindexMinFieldsModelPrimitives = selectFromPokemonV2ItemgameindexMinFields().game_index.generation_id.item_id
