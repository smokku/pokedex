/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageMaxFieldsBase
 * auto generated base class for the model PokemonV2LanguageMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2LanguageMaxFieldsModelBase = ModelBase
  .named('PokemonV2LanguageMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_max_fields"), "pokemon_v2_language_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    iso3166: types.union(types.undefined, types.null, types.string),
    iso639: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get iso3166() { return this.__attr(`iso3166`) }
  get iso639() { return this.__attr(`iso639`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageMaxFields() {
  return new PokemonV2LanguageMaxFieldsModelSelector()
}

export const pokemonV2LanguageMaxFieldsModelPrimitives = selectFromPokemonV2LanguageMaxFields().iso3166.iso639.name.order
