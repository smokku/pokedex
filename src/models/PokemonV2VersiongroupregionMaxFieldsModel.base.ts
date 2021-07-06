/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionMaxFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupregionMaxFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_max_fields"), "pokemon_v2_versiongroupregion_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    region_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionMaxFields() {
  return new PokemonV2VersiongroupregionMaxFieldsModelSelector()
}

export const pokemonV2VersiongroupregionMaxFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionMaxFields().region_id.version_group_id
