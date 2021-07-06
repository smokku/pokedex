/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageSumFieldsBase
 * auto generated base class for the model PokemonV2LanguageSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2LanguageSumFieldsModelBase = ModelBase
  .named('PokemonV2LanguageSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_sum_fields"), "pokemon_v2_language_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageSumFields() {
  return new PokemonV2LanguageSumFieldsModelSelector()
}

export const pokemonV2LanguageSumFieldsModelPrimitives = selectFromPokemonV2LanguageSumFields().order
