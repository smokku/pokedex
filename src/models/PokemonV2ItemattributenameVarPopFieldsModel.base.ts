/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemattributenameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributenameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributenameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_var_pop_fields"), "pokemon_v2_itemattributename_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributenameVarPopFields() {
  return new PokemonV2ItemattributenameVarPopFieldsModelSelector()
}

export const pokemonV2ItemattributenameVarPopFieldsModelPrimitives = selectFromPokemonV2ItemattributenameVarPopFields().item_attribute_id.language_id
