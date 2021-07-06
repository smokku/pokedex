/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameSumFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LanguagenameSumFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_sum_fields"), "pokemon_v2_languagename_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    local_language_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get local_language_id() { return this.__attr(`local_language_id`) }
}
export function selectFromPokemonV2LanguagenameSumFields() {
  return new PokemonV2LanguagenameSumFieldsModelSelector()
}

export const pokemonV2LanguagenameSumFieldsModelPrimitives = selectFromPokemonV2LanguagenameSumFields().language_id.local_language_id
