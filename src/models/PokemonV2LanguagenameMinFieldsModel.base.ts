/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameMinFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2LanguagenameMinFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_min_fields"), "pokemon_v2_languagename_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    local_language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get local_language_id() { return this.__attr(`local_language_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonV2LanguagenameMinFields() {
  return new PokemonV2LanguagenameMinFieldsModelSelector()
}

export const pokemonV2LanguagenameMinFieldsModelPrimitives = selectFromPokemonV2LanguagenameMinFields().language_id.local_language_id.name
