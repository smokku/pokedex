/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemcategoryAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_avg_fields"), "pokemon_v2_itemcategory_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryAvgFields() {
  return new PokemonV2ItemcategoryAvgFieldsModelSelector()
}

export const pokemonV2ItemcategoryAvgFieldsModelPrimitives = selectFromPokemonV2ItemcategoryAvgFields().item_pocket_id
