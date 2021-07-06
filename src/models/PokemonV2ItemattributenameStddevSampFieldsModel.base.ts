/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemattributenameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_stddev_samp_fields"), "pokemon_v2_itemattributename_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameStddevSampFields() {
  return new PokemonV2ItemattributenameStddevSampFieldsModelSelector()
}

export const pokemonV2ItemattributenameStddevSampFieldsModelPrimitives = selectFromPokemonV2ItemattributenameStddevSampFields().item_attribute_id.language_id
