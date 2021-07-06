/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemcategorynameMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_max_fields"), "pokemon_v2_itemcategoryname_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_category_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_category_id() { return this.__attr(`item_category_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemcategorynameMaxFields() {
  return new PokemonV2ItemcategorynameMaxFieldsModelSelector()
}

export const pokemonV2ItemcategorynameMaxFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameMaxFields().item_category_id.language_id.name
