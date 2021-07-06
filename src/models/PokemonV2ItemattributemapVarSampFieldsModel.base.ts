/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributemapVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_var_samp_fields"), "pokemon_v2_itemattributemap_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapVarSampFields() {
  return new PokemonV2ItemattributemapVarSampFieldsModelSelector()
}

export const pokemonV2ItemattributemapVarSampFieldsModelPrimitives = selectFromPokemonV2ItemattributemapVarSampFields().item_attribute_id.item_id
