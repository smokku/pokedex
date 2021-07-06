/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguagenameAvgFieldsBase
 * auto generated base class for the model PokemonV2LanguagenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2LanguagenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2LanguagenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_languagename_avg_fields"), "pokemon_v2_languagename_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    local_language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguagenameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get local_language_id() { return this.__attr(`local_language_id`) }
}
export function selectFromPokemonV2LanguagenameAvgFields() {
  return new PokemonV2LanguagenameAvgFieldsModelSelector()
}

export const pokemonV2LanguagenameAvgFieldsModelPrimitives = selectFromPokemonV2LanguagenameAvgFields().language_id.local_language_id
