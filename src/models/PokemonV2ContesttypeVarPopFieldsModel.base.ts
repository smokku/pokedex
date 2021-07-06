/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeVarPopFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesttypeVarPopFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_var_pop_fields"), "pokemon_v2_contesttype_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ContesttypeVarPopFields() {
  return new PokemonV2ContesttypeVarPopFieldsModelSelector()
}

export const pokemonV2ContesttypeVarPopFieldsModelPrimitives = selectFromPokemonV2ContesttypeVarPopFields()
