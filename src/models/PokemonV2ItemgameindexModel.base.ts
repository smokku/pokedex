/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexBase
 * auto generated base class for the model PokemonV2ItemgameindexModel.
 *
 * columns and relationships of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexModelBase = ModelBase
  .named('PokemonV2Itemgameindex')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex"), "pokemon_v2_itemgameindex"),
    game_index: types.union(types.undefined, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemgameindexModelSelector extends QueryBuilder {
  get game_index() { return this.__attr(`game_index`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
}
export function selectFromPokemonV2Itemgameindex() {
  return new PokemonV2ItemgameindexModelSelector()
}

export const pokemonV2ItemgameindexModelPrimitives = selectFromPokemonV2Itemgameindex().game_index.generation_id.item_id
