/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameMaxFieldsBase
 * auto generated base class for the model PokemonV2VersionnameMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2VersionnameMaxFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_max_fields"), "pokemon_v2_versionname_max_fields"),
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

export class PokemonV2VersionnameMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get name() { return this.__attr(`name`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2VersionnameMaxFields() {
  return new PokemonV2VersionnameMaxFieldsModelSelector()
}

export const pokemonV2VersionnameMaxFieldsModelPrimitives = selectFromPokemonV2VersionnameMaxFields().language_id.name.version_id
