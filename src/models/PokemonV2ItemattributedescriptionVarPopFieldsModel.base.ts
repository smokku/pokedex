/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributedescriptionVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemattributedescriptionVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributedescriptionVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributedescriptionVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributedescription_var_pop_fields"), "pokemon_v2_itemattributedescription_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_attribute_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributedescriptionVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_attribute_id() { return this.__attr(`item_attribute_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemattributedescriptionVarPopFields() {
  return new PokemonV2ItemattributedescriptionVarPopFieldsModelSelector()
}

export const pokemonV2ItemattributedescriptionVarPopFieldsModelPrimitives = selectFromPokemonV2ItemattributedescriptionVarPopFields().item_attribute_id.language_id
