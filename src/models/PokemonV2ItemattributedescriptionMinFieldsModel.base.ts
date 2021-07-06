/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionMinFieldsBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributedescriptionMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_min_fields"), "pokemon_v2_itemattributedescription_min_fields"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributedescriptionMinFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributedescriptionMinFields() {
  return new PokemonV2ItemattributedescriptionMinFieldsModelSelector()
}

export const pokemonV2ItemattributedescriptionMinFieldsModelPrimitives = selectFromPokemonV2ItemattributedescriptionMinFields().description.item_attribute_id.language_id
