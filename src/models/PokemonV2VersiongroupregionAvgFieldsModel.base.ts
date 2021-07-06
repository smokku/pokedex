/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionAvgFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2VersiongroupregionAvgFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_avg_fields"), "pokemon_v2_versiongroupregion_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionAvgFields() {
  return new PokemonV2VersiongroupregionAvgFieldsModelSelector()
}

export const pokemonV2VersiongroupregionAvgFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionAvgFields().region_id.version_group_id
