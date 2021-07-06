/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameMinFieldsBase
 * auto generated base class for the model PokemonV2TypenameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2TypenameMinFieldsModelBase = ModelBase
  .named('PokemonV2TypenameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_min_fields"), "pokemon_v2_typename_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2TypenameMinFields() {
  return new PokemonV2TypenameMinFieldsModelSelector()
}

export const pokemonV2TypenameMinFieldsModelPrimitives = selectFromPokemonV2TypenameMinFields().language_id.name.type_id
