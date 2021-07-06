/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodMinFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2VersiongroupmovelearnmethodMinFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_min_fields"), "pokemon_v2_versiongroupmovelearnmethod_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodMinFields() {
  return new PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodMinFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodMinFields().move_learn_method_id.version_group_id
