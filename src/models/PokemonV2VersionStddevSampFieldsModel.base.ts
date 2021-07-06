/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionStddevSampFieldsBase
 * auto generated base class for the model PokemonV2VersionStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersionStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2VersionStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_stddev_samp_fields"), "pokemon_v2_version_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionStddevSampFields() {
  return new PokemonV2VersionStddevSampFieldsModelSelector()
}

export const pokemonV2VersionStddevSampFieldsModelPrimitives = selectFromPokemonV2VersionStddevSampFields().version_group_id
