/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionStddevFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersiongroupregionStddevFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_stddev_fields"), "pokemon_v2_versiongroupregion_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionStddevFields() {
  return new PokemonV2VersiongroupregionStddevFieldsModelSelector()
}

export const pokemonV2VersiongroupregionStddevFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionStddevFields().region_id.version_group_id
