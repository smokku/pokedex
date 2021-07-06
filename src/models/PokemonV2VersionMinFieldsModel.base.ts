/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionMinFieldsBase
 * auto generated base class for the model PokemonV2VersionMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2VersionMinFieldsModelBase = ModelBase
  .named('PokemonV2VersionMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_min_fields"), "pokemon_v2_version_min_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionMinFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionMinFields() {
  return new PokemonV2VersionMinFieldsModelSelector()
}

export const pokemonV2VersionMinFieldsModelPrimitives = selectFromPokemonV2VersionMinFields().name.version_group_id
