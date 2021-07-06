/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageStddevSampFieldsBase
 * auto generated base class for the model PokemonV2LanguageStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LanguageStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2LanguageStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_stddev_samp_fields"), "pokemon_v2_language_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageStddevSampFields() {
  return new PokemonV2LanguageStddevSampFieldsModelSelector()
}

export const pokemonV2LanguageStddevSampFieldsModelPrimitives = selectFromPokemonV2LanguageStddevSampFields().order
