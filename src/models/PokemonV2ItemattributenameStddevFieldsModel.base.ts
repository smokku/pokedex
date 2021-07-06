/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameStddevFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributenameStddevFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_stddev_fields"), "pokemon_v2_itemattributename_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameStddevFields() {
  return new PokemonV2ItemattributenameStddevFieldsModelSelector()
}

export const pokemonV2ItemattributenameStddevFieldsModelPrimitives = selectFromPokemonV2ItemattributenameStddevFields().item_attribute_id.language_id
