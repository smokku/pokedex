/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameMinFieldsBase
 * auto generated base class for the model PokemonV2ItemnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemnameMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_min_fields"), "pokemon_v2_itemname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItemnameMinFields() {
  return new PokemonV2ItemnameMinFieldsModelSelector()
}

export const pokemonV2ItemnameMinFieldsModelPrimitives = selectFromPokemonV2ItemnameMinFields().item_id.language_id.name
