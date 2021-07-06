/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageStddevPopFieldsBase
 * auto generated base class for the model PokemonV2LanguageStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LanguageStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2LanguageStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_stddev_pop_fields"), "pokemon_v2_language_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageStddevPopFields() {
  return new PokemonV2LanguageStddevPopFieldsModelSelector()
}

export const pokemonV2LanguageStddevPopFieldsModelPrimitives = selectFromPokemonV2LanguageStddevPopFields().order
