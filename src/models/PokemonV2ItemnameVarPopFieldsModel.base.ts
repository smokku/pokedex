/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_var_pop_fields"), "pokemon_v2_itemname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemnameVarPopFields() {
  return new PokemonV2ItemnameVarPopFieldsModelSelector()
}

export const pokemonV2ItemnameVarPopFieldsModelPrimitives = selectFromPokemonV2ItemnameVarPopFields().item_id.language_id
