/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexStddevSampFieldsBase
 * auto generated base class for the model PokemonV2TypegameindexStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypegameindexStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2TypegameindexStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_stddev_samp_fields"), "pokemon_v2_typegameindex_stddev_samp_fields"),
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

export class PokemonV2TypegameindexStddevSampFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypegameindexStddevSampFields() {
  return new PokemonV2TypegameindexStddevSampFieldsModelSelector()
}

export const pokemonV2TypegameindexStddevSampFieldsModelPrimitives = selectFromPokemonV2TypegameindexStddevSampFields().game_index.generation_id.type_id
