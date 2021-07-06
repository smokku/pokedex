/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemcategorynameStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_stddev_fields"), "pokemon_v2_itemcategoryname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_category_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemcategorynameStddevFields() {
  return new PokemonV2ItemcategorynameStddevFieldsModelSelector()
}

export const pokemonV2ItemcategorynameStddevFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameStddevFields().item_category_id.language_id
