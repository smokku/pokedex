/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemcategorynameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_stddev_pop_fields"), "pokemon_v2_itemcategoryname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameStddevPopFields() {
  return new PokemonV2ItemcategorynameStddevPopFieldsModelSelector()
}

export const pokemonV2ItemcategorynameStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameStddevPopFields().item_category_id.language_id
