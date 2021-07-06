/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionSumFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2VersiongroupregionSumFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_sum_fields"), "pokemon_v2_versiongroupregion_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    region_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionSumFields() {
  return new PokemonV2VersiongroupregionSumFieldsModelSelector()
}

export const pokemonV2VersiongroupregionSumFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionSumFields().region_id.version_group_id
