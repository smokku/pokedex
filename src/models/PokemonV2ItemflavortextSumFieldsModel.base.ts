/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflavortextSumFieldsBase
 * auto generated base class for the model PokemonV2ItemflavortextSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemflavortextSumFieldsModelBase = ModelBase
  .named('PokemonV2ItemflavortextSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflavortext_sum_fields"), "pokemon_v2_itemflavortext_sum_fields"),
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

export class PokemonV2ItemflavortextSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2ItemflavortextSumFields() {
  return new PokemonV2ItemflavortextSumFieldsModelSelector()
}

export const pokemonV2ItemflavortextSumFieldsModelPrimitives = selectFromPokemonV2ItemflavortextSumFields().item_id.language_id.version_group_id
