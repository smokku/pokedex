/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupMinFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2VersiongroupMinFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_min_fields"), "pokemon_v2_versiongroup_min_fields"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    order: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupMinFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupMinFields() {
  return new PokemonV2VersiongroupMinFieldsModelSelector()
}

export const pokemonV2VersiongroupMinFieldsModelPrimitives = selectFromPokemonV2VersiongroupMinFields().generation_id.name.order
