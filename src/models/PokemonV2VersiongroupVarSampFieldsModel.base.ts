/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupVarSampFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersiongroupVarSampFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_var_samp_fields"), "pokemon_v2_versiongroup_var_samp_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupVarSampFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupVarSampFields() {
  return new PokemonV2VersiongroupVarSampFieldsModelSelector()
}

export const pokemonV2VersiongroupVarSampFieldsModelPrimitives = selectFromPokemonV2VersiongroupVarSampFields().generation_id.order
