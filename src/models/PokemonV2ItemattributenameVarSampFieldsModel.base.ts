/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributenameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_var_samp_fields"), "pokemon_v2_itemattributename_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameVarSampFields() {
  return new PokemonV2ItemattributenameVarSampFieldsModelSelector()
}

export const pokemonV2ItemattributenameVarSampFieldsModelPrimitives = selectFromPokemonV2ItemattributenameVarSampFields().item_attribute_id.language_id
