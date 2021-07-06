/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupStddevPopFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersiongroupStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_stddev_pop_fields"), "pokemon_v2_versiongroup_stddev_pop_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupStddevPopFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupStddevPopFields() {
  return new PokemonV2VersiongroupStddevPopFieldsModelSelector()
}

export const pokemonV2VersiongroupStddevPopFieldsModelPrimitives = selectFromPokemonV2VersiongroupStddevPopFields().generation_id.order
