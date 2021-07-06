/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryMinFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemcategoryMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_min_fields"), "pokemon_v2_itemcategory_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemcategoryMinFields() {
  return new PokemonV2ItemcategoryMinFieldsModelSelector()
}

export const pokemonV2ItemcategoryMinFieldsModelPrimitives = selectFromPokemonV2ItemcategoryMinFields().item_pocket_id.name
