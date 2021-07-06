/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionAvgFieldsBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemattributedescriptionAvgFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_avg_fields"), "pokemon_v2_itemattributedescription_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributedescriptionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributedescriptionAvgFields() {
  return new PokemonV2ItemattributedescriptionAvgFieldsModelSelector()
}

export const pokemonV2ItemattributedescriptionAvgFieldsModelPrimitives = selectFromPokemonV2ItemattributedescriptionAvgFields().item_attribute_id.language_id
