/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributedescriptionMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_max_fields"), "pokemon_v2_itemattributedescription_max_fields"),
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

export class PokemonV2ItemattributedescriptionMaxFieldsModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributedescriptionMaxFields() {
  return new PokemonV2ItemattributedescriptionMaxFieldsModelSelector()
}

export const pokemonV2ItemattributedescriptionMaxFieldsModelPrimitives = selectFromPokemonV2ItemattributedescriptionMaxFields().description.item_attribute_id.language_id
