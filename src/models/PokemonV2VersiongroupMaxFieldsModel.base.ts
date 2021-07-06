/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupMaxFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupMaxFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_max_fields"), "pokemon_v2_versiongroup_max_fields"),
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

export class PokemonV2VersiongroupMaxFieldsModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
}
export function selectFromPokemonV2VersiongroupMaxFields() {
  return new PokemonV2VersiongroupMaxFieldsModelSelector()
}

export const pokemonV2VersiongroupMaxFieldsModelPrimitives = selectFromPokemonV2VersiongroupMaxFields().generation_id.name.order
