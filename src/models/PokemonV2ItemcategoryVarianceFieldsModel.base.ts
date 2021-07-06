/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemcategoryVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_variance_fields"), "pokemon_v2_itemcategory_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryVarianceFields() {
  return new PokemonV2ItemcategoryVarianceFieldsModelSelector()
}

export const pokemonV2ItemcategoryVarianceFieldsModelPrimitives = selectFromPokemonV2ItemcategoryVarianceFields().item_pocket_id
