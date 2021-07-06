/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemattributenameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_stddev_pop_fields"), "pokemon_v2_itemattributename_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameStddevPopFields() {
  return new PokemonV2ItemattributenameStddevPopFieldsModelSelector()
}

export const pokemonV2ItemattributenameStddevPopFieldsModelPrimitives = selectFromPokemonV2ItemattributenameStddevPopFields().item_attribute_id.language_id
