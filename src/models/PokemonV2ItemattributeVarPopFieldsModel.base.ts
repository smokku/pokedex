/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeVarPopFieldsBase
 * auto generated base class for the model PokemonV2ItemattributeVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributeVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributeVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_var_pop_fields"), "pokemon_v2_itemattribute_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemattributeVarPopFields() {
  return new PokemonV2ItemattributeVarPopFieldsModelSelector()
}

export const pokemonV2ItemattributeVarPopFieldsModelPrimitives = selectFromPokemonV2ItemattributeVarPopFields()
