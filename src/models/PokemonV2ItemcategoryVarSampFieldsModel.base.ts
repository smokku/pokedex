/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemcategoryVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_var_samp_fields"), "pokemon_v2_itemcategory_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryVarSampFields() {
  return new PokemonV2ItemcategoryVarSampFieldsModelSelector()
}

export const pokemonV2ItemcategoryVarSampFieldsModelPrimitives = selectFromPokemonV2ItemcategoryVarSampFields().item_pocket_id
