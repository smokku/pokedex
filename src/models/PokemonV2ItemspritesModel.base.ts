/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesBase
 * auto generated base class for the model PokemonV2ItemspritesModel.
 *
 * columns and relationships of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesModelBase = ModelBase
  .named('PokemonV2Itemsprites')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites"), "pokemon_v2_itemsprites"),
    id: types.union(types.undefined, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_item: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemModel)),
    sprites: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get sprites() { return this.__attr(`sprites`) }
  pokemon_v2_item(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`pokemon_v2_item`, PokemonV2ItemModelSelector, builder) }
}
export function selectFromPokemonV2Itemsprites() {
  return new PokemonV2ItemspritesModelSelector()
}

export const pokemonV2ItemspritesModelPrimitives = selectFromPokemonV2Itemsprites().item_id.sprites
