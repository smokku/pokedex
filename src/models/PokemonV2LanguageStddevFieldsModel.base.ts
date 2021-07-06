/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageStddevFieldsBase
 * auto generated base class for the model PokemonV2LanguageStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2LanguageStddevFieldsModelBase = ModelBase
  .named('PokemonV2LanguageStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_stddev_fields"), "pokemon_v2_language_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageStddevFields() {
  return new PokemonV2LanguageStddevFieldsModelSelector()
}

export const pokemonV2LanguageStddevFieldsModelPrimitives = selectFromPokemonV2LanguageStddevFields().order
