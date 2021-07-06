/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemcategoryVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_var_pop_fields"), "pokemon_v2_itemcategory_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
}
export function selectFromPokemonV2ItemcategoryVarPopFields() {
  return new PokemonV2ItemcategoryVarPopFieldsModelSelector()
}

export const pokemonV2ItemcategoryVarPopFieldsModelPrimitives = selectFromPokemonV2ItemcategoryVarPopFields().item_pocket_id
