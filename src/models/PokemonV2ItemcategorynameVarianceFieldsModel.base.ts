/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameVarianceFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemcategorynameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_variance_fields"), "pokemon_v2_itemcategoryname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameVarianceFields() {
  return new PokemonV2ItemcategorynameVarianceFieldsModelSelector()
}

export const pokemonV2ItemcategorynameVarianceFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameVarianceFields().item_category_id.language_id
