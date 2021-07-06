/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapMinFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributemapMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_min_fields"), "pokemon_v2_itemattributemap_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapMinFields() {
  return new PokemonV2ItemattributemapMinFieldsModelSelector()
}

export const pokemonV2ItemattributemapMinFieldsModelPrimitives = selectFromPokemonV2ItemattributemapMinFields().item_attribute_id.item_id
