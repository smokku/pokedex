/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupStddevFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersiongroupStddevFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_stddev_fields"), "pokemon_v2_versiongroup_stddev_fields"),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    order: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupStddevFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupStddevFields() {
  return new PokemonV2VersiongroupStddevFieldsModelSelector()
}

export const pokemonV2VersiongroupStddevFieldsModelPrimitives = selectFromPokemonV2VersiongroupStddevFields().generation_id.order
