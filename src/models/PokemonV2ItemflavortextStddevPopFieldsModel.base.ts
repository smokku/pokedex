/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflavortextStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemflavortextStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemflavortextStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemflavortextStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflavortext_stddev_pop_fields"), "pokemon_v2_itemflavortext_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflavortextStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2ItemflavortextStddevPopFields() {
  return new PokemonV2ItemflavortextStddevPopFieldsModelSelector()
}

export const pokemonV2ItemflavortextStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemflavortextStddevPopFields().item_id.language_id.version_group_id
