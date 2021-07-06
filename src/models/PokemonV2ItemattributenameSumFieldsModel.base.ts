/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameSumFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributenameSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_sum_fields"), "pokemon_v2_itemattributename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameSumFields() {
  return new PokemonV2ItemattributenameSumFieldsModelSelector()
}

export const pokemonV2ItemattributenameSumFieldsModelPrimitives = selectFromPokemonV2ItemattributenameSumFields().item_attribute_id.language_id
