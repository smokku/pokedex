/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemgameindexVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemgameindexVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemgameindexVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex_var_pop_fields"), "pokemon_v2_itemgameindex_var_pop_fields"),
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

export class PokemonV2ItemgameindexVarPopFieldsModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemgameindexVarPopFields() {
  return new PokemonV2ItemgameindexVarPopFieldsModelSelector()
}

export const pokemonV2ItemgameindexVarPopFieldsModelPrimitives = selectFromPokemonV2ItemgameindexVarPopFields().game_index.generation_id.item_id
