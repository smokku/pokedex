/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameStddevFieldsBase
 * auto generated base class for the model PokemonV2VersionnameStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersionnameStddevFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_stddev_fields"), "pokemon_v2_versionname_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2VersionnameStddevFields() {
  return new PokemonV2VersionnameStddevFieldsModelSelector()
}

export const pokemonV2VersionnameStddevFieldsModelPrimitives = selectFromPokemonV2VersionnameStddevFields().language_id.version_id
