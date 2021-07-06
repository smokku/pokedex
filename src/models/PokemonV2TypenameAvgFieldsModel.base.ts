/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameAvgFieldsBase
 * auto generated base class for the model PokemonV2TypenameAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2TypenameAvgFieldsModelBase = ModelBase
  .named('PokemonV2TypenameAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_avg_fields"), "pokemon_v2_typename_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameAvgFields() {
  return new PokemonV2TypenameAvgFieldsModelSelector()
}

export const pokemonV2TypenameAvgFieldsModelPrimitives = selectFromPokemonV2TypenameAvgFields().language_id.type_id
