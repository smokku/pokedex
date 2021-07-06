/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodAvgFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2VersiongroupmovelearnmethodAvgFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_avg_fields"), "pokemon_v2_versiongroupmovelearnmethod_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodAvgFields() {
  return new PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodAvgFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodAvgFields().move_learn_method_id.version_group_id
