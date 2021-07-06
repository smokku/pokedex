/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionVarianceFieldsBase
 * auto generated base class for the model PokemonV2VersionVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2VersionVarianceFieldsModelBase = ModelBase
  .named('PokemonV2VersionVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_variance_fields"), "pokemon_v2_version_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionVarianceFields() {
  return new PokemonV2VersionVarianceFieldsModelSelector()
}

export const pokemonV2VersionVarianceFieldsModelPrimitives = selectFromPokemonV2VersionVarianceFields().version_group_id
