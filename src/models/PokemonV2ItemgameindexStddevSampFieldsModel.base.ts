/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemgameindexStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemgameindexStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemgameindexStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex_stddev_samp_fields"), "pokemon_v2_itemgameindex_stddev_samp_fields"),
    game_index: types.union(types.undefined, types.null, types.number),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemgameindexStddevSampFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemgameindexStddevSampFields() {
  return new PokemonV2ItemgameindexStddevSampFieldsModelSelector()
}

export const pokemonV2ItemgameindexStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemgameindexStddevSampFields().game_index.generation_id.item_id
