/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexSumFieldsBase
 * auto generated base class for the model PokemonV2TypegameindexSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2TypegameindexSumFieldsModelBase = ModelBase
  .named('PokemonV2TypegameindexSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_sum_fields"), "pokemon_v2_typegameindex_sum_fields"),
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

export class PokemonV2TypegameindexSumFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypegameindexSumFields() {
  return new PokemonV2TypegameindexSumFieldsModelSelector()
}

export const pokemonV2TypegameindexSumFieldsModelPrimitives = selectFromPokemonV2TypegameindexSumFields().game_index.generation_id.type_id
