/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameStddevPopFieldsBase
 * auto generated base class for the model PokemonV2VersionnameStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersionnameStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_stddev_pop_fields"), "pokemon_v2_versionname_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2VersionnameStddevPopFields() {
  return new PokemonV2VersionnameStddevPopFieldsModelSelector()
}

export const pokemonV2VersionnameStddevPopFieldsModelPrimitives = selectFromPokemonV2VersionnameStddevPopFields().language_id.version_id
