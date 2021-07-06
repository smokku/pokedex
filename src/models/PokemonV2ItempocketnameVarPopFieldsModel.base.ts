/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketnameVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItempocketnameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItempocketnameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketnameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocketname_var_pop_fields"), "pokemon_v2_itempocketname_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_pocket_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketnameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_pocket_id() { return this.__attr(`item_pocket_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItempocketnameVarPopFields() {
  return new PokemonV2ItempocketnameVarPopFieldsModelSelector()
}

export const pokemonV2ItempocketnameVarPopFieldsModelPrimitives = selectFromPokemonV2ItempocketnameVarPopFields().item_pocket_id.language_id
