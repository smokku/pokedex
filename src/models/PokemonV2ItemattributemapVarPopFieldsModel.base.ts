/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributemapVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_var_pop_fields"), "pokemon_v2_itemattributemap_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get item_id() { return this.__attr(`item_id`) }
}
export function selectFromPokemonV2ItemattributemapVarPopFields() {
  return new PokemonV2ItemattributemapVarPopFieldsModelSelector()
}

export const pokemonV2ItemattributemapVarPopFieldsModelPrimitives = selectFromPokemonV2ItemattributemapVarPopFields().item_attribute_id.item_id
