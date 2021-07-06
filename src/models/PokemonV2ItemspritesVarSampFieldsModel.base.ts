/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemspritesVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_var_samp_fields"), "pokemon_v2_itemsprites_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemspritesVarSampFields() {
  return new PokemonV2ItemspritesVarSampFieldsModelSelector()
}

export const pokemonV2ItemspritesVarSampFieldsModelPrimitives = selectFromPokemonV2ItemspritesVarSampFields().item_id
