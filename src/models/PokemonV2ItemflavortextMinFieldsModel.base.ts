/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflavortextMinFieldsBase
 * auto generated base class for the model PokemonV2ItemflavortextMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2ItemflavortextMinFieldsModelBase = ModelBase
  .named('PokemonV2ItemflavortextMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflavortext_min_fields"), "pokemon_v2_itemflavortext_min_fields"),
    flavor_text: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflavortextMinFieldsModelSelector extends QueryBuilder {
  get flavor_text() { return this.__attr(`flavor_text`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2ItemflavortextMinFields() {
  return new PokemonV2ItemflavortextMinFieldsModelSelector()
}

export const pokemonV2ItemflavortextMinFieldsModelPrimitives = selectFromPokemonV2ItemflavortextMinFields().flavor_text.item_id.language_id.version_group_id
