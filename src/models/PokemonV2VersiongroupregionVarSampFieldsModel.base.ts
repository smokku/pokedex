/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionVarSampFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersiongroupregionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_var_samp_fields"), "pokemon_v2_versiongroupregion_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    region_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get region_id() { return this.__attr(`region_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupregionVarSampFields() {
  return new PokemonV2VersiongroupregionVarSampFieldsModelSelector()
}

export const pokemonV2VersiongroupregionVarSampFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionVarSampFields().region_id.version_group_id
