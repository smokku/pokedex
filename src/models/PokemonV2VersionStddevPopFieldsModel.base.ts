/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionStddevPopFieldsBase
 * auto generated base class for the model PokemonV2VersionStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersionStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2VersionStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_stddev_pop_fields"), "pokemon_v2_version_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionStddevPopFields() {
  return new PokemonV2VersionStddevPopFieldsModelSelector()
}

export const pokemonV2VersionStddevPopFieldsModelPrimitives = selectFromPokemonV2VersionStddevPopFields().version_group_id
