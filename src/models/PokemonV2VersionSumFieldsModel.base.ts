/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionSumFieldsBase
 * auto generated base class for the model PokemonV2VersionSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2VersionSumFieldsModelBase = ModelBase
  .named('PokemonV2VersionSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_sum_fields"), "pokemon_v2_version_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionSumFields() {
  return new PokemonV2VersionSumFieldsModelSelector()
}

export const pokemonV2VersionSumFieldsModelPrimitives = selectFromPokemonV2VersionSumFields().version_group_id
