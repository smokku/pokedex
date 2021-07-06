/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameMinFieldsBase
 * auto generated base class for the model PokemonV2RegionnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2RegionnameMinFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_min_fields"), "pokemon_v2_regionname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    region_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get region_id() { return this.__attr(`region_id`) }
}
export function selectFromPokemonV2RegionnameMinFields() {
  return new PokemonV2RegionnameMinFieldsModelSelector()
}

export const pokemonV2RegionnameMinFieldsModelPrimitives = selectFromPokemonV2RegionnameMinFields().language_id.name.region_id
