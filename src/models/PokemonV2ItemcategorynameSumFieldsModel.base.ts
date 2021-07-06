/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameSumFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemcategorynameSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_sum_fields"), "pokemon_v2_itemcategoryname_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameSumFields() {
  return new PokemonV2ItemcategorynameSumFieldsModelSelector()
}

export const pokemonV2ItemcategorynameSumFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameSumFields().item_category_id.language_id
