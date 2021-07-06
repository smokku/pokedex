/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexStddevFieldsBase
 * auto generated base class for the model PokemonV2TypegameindexStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2TypegameindexStddevFieldsModelBase = ModelBase
  .named('PokemonV2TypegameindexStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_stddev_fields"), "pokemon_v2_typegameindex_stddev_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypegameindexStddevFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypegameindexStddevFields() {
  return new PokemonV2TypegameindexStddevFieldsModelSelector()
}

export const pokemonV2TypegameindexStddevFieldsModelPrimitives = selectFromPokemonV2TypegameindexStddevFields().game_index.generation_id.type_id
