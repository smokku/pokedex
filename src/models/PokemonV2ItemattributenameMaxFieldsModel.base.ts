/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameMaxFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributenameMaxFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_max_fields"), "pokemon_v2_itemattributename_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_attribute_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemattributenameMaxFields() {
  return new PokemonV2ItemattributenameMaxFieldsModelSelector()
}

export const pokemonV2ItemattributenameMaxFieldsModelPrimitives = selectFromPokemonV2ItemattributenameMaxFields().item_attribute_id.language_id.name
