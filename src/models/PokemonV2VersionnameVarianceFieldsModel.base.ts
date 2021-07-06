/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameVarianceFieldsBase
 * auto generated base class for the model PokemonV2VersionnameVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2VersionnameVarianceFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_variance_fields"), "pokemon_v2_versionname_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
    version_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
  get version_id() { return this.__attr(`version_id`) }
}
export function selectFromPokemonV2VersionnameVarianceFields() {
  return new PokemonV2VersionnameVarianceFieldsModelSelector()
}

export const pokemonV2VersionnameVarianceFieldsModelPrimitives = selectFromPokemonV2VersionnameVarianceFields().language_id.version_id
