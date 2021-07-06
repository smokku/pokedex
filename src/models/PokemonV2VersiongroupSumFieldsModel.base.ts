/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupSumFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2VersiongroupSumFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_sum_fields"), "pokemon_v2_versiongroup_sum_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupSumFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupSumFields() {
  return new PokemonV2VersiongroupSumFieldsModelSelector()
}

export const pokemonV2VersiongroupSumFieldsModelPrimitives = selectFromPokemonV2VersiongroupSumFields().generation_id.order
