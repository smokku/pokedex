/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageMinFieldsBase
 * auto generated base class for the model PokemonV2LanguageMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LanguageMinFieldsModelBase = ModelBase
  .named('PokemonV2LanguageMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_min_fields"), "pokemon_v2_language_min_fields"),
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

export class PokemonV2LanguageMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get iso3166() { return this.__attr(`iso3166`) }
  get iso639() { return this.__attr(`iso639`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2LanguageMinFields() {
  return new PokemonV2LanguageMinFieldsModelSelector()
}

export const pokemonV2LanguageMinFieldsModelPrimitives = selectFromPokemonV2LanguageMinFields().iso3166.iso639.name.order
