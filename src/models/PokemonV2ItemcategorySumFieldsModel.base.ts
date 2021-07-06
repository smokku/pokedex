/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorySumFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorySumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemcategorySumFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorySumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_sum_fields"), "pokemon_v2_itemcategory_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorySumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategorySumFields() {
  return new PokemonV2ItemcategorySumFieldsModelSelector()
}

export const pokemonV2ItemcategorySumFieldsModelPrimitives = selectFromPokemonV2ItemcategorySumFields().item_pocket_id
