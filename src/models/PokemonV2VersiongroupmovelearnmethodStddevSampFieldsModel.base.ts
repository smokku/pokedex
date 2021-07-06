/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodStddevSampFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_stddev_samp_fields"), "pokemon_v2_versiongroupmovelearnmethod_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodStddevSampFields() {
  return new PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodStddevSampFields().move_learn_method_id.version_group_id
