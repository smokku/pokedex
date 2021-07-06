/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersiongroupregionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_stddev_samp_fields"), "pokemon_v2_versiongroupregion_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionStddevSampFields() {
  return new PokemonV2VersiongroupregionStddevSampFieldsModelSelector()
}

export const pokemonV2VersiongroupregionStddevSampFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionStddevSampFields().region_id.version_group_id
