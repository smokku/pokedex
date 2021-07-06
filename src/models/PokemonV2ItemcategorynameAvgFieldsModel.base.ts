/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemcategorynameAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_avg_fields"), "pokemon_v2_itemcategoryname_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameAvgFields() {
  return new PokemonV2ItemcategorynameAvgFieldsModelSelector()
}

export const pokemonV2ItemcategorynameAvgFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameAvgFields().item_category_id.language_id
