/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexMinFieldsBase
 * auto generated base class for the model PokemonV2TypegameindexMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2TypegameindexMinFieldsModelBase = ModelBase
  .named('PokemonV2TypegameindexMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_min_fields"), "pokemon_v2_typegameindex_min_fields"),
    game_index: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypegameindexMinFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypegameindexMinFields() {
  return new PokemonV2TypegameindexMinFieldsModelSelector()
}

export const pokemonV2TypegameindexMinFieldsModelPrimitives = selectFromPokemonV2TypegameindexMinFields().game_index.generation_id.type_id
