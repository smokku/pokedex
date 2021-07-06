/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameMinFieldsBase
 * auto generated base class for the model PokemonV2VersionnameMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2VersionnameMinFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_min_fields"), "pokemon_v2_versionname_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    language_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    version_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2VersionnameMinFields() {
  return new PokemonV2VersionnameMinFieldsModelSelector()
}

export const pokemonV2VersionnameMinFieldsModelPrimitives = selectFromPokemonV2VersionnameMinFields().language_id.name.version_id
