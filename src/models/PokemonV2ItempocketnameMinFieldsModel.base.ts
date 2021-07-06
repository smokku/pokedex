/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameMinFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItempocketnameMinFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_min_fields"), "pokemon_v2_itempocketname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    item_pocket_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2ItempocketnameMinFields() {
  return new PokemonV2ItempocketnameMinFieldsModelSelector()
}

export const pokemonV2ItempocketnameMinFieldsModelPrimitives = selectFromPokemonV2ItempocketnameMinFields().item_pocket_id.language_id.name
