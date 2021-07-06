/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionStddevFieldsBase
 * auto generated base class for the model PokemonV2VersionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersionStddevFieldsModelBase = ModelBase
  .named('PokemonV2VersionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_stddev_fields"), "pokemon_v2_version_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionStddevFields() {
  return new PokemonV2VersionStddevFieldsModelSelector()
}

export const pokemonV2VersionStddevFieldsModelPrimitives = selectFromPokemonV2VersionStddevFields().version_group_id
