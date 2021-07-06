/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionAvgFieldsBase
 * auto generated base class for the model PokemonV2VersionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2VersionAvgFieldsModelBase = ModelBase
  .named('PokemonV2VersionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_avg_fields"), "pokemon_v2_version_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionAvgFields() {
  return new PokemonV2VersionAvgFieldsModelSelector()
}

export const pokemonV2VersionAvgFieldsModelPrimitives = selectFromPokemonV2VersionAvgFields().version_group_id
