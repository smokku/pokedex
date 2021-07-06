/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesMinFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemspritesMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_min_fields"), "pokemon_v2_itemsprites_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    sprites: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get sprites() { return this.__attr(`sprites`) }
}
export function selectFromPokemonV2ItemspritesMinFields() {
  return new PokemonV2ItemspritesMinFieldsModelSelector()
}

export const pokemonV2ItemspritesMinFieldsModelPrimitives = selectFromPokemonV2ItemspritesMinFields().item_id.sprites
