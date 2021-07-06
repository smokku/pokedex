/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodMaxFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupmovelearnmethodMaxFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_max_fields"), "pokemon_v2_versiongroupmovelearnmethod_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    move_learn_method_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodMaxFields() {
  return new PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodMaxFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodMaxFields().move_learn_method_id.version_group_id
