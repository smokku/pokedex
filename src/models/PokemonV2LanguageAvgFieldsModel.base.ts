/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageAvgFieldsBase
 * auto generated base class for the model PokemonV2LanguageAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2LanguageAvgFieldsModelBase = ModelBase
  .named('PokemonV2LanguageAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_avg_fields"), "pokemon_v2_language_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageAvgFields() {
  return new PokemonV2LanguageAvgFieldsModelSelector()
}

export const pokemonV2LanguageAvgFieldsModelPrimitives = selectFromPokemonV2LanguageAvgFields().order
