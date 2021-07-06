/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemnameVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemnameVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_var_samp_fields"), "pokemon_v2_itemname_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameVarSampFields() {
  return new PokemonV2ItemnameVarSampFieldsModelSelector()
}

export const pokemonV2ItemnameVarSampFieldsModelPrimitives = selectFromPokemonV2ItemnameVarSampFields().item_id.language_id
