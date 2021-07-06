/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageVarPopFieldsBase
 * auto generated base class for the model PokemonV2LanguageVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LanguageVarPopFieldsModelBase = ModelBase
  .named('PokemonV2LanguageVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_var_pop_fields"), "pokemon_v2_language_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageVarPopFields() {
  return new PokemonV2LanguageVarPopFieldsModelSelector()
}

export const pokemonV2LanguageVarPopFieldsModelPrimitives = selectFromPokemonV2LanguageVarPopFields().order
