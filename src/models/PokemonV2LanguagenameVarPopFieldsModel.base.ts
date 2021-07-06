/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameVarPopFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LanguagenameVarPopFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_var_pop_fields"), "pokemon_v2_languagename_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    local_language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get local_language_id() { return this.__attr(`local_language_id`) }
}
export function selectFromPokemonV2LanguagenameVarPopFields() {
  return new PokemonV2LanguagenameVarPopFieldsModelSelector()
}

export const pokemonV2LanguagenameVarPopFieldsModelPrimitives = selectFromPokemonV2LanguagenameVarPopFields().language_id.local_language_id
