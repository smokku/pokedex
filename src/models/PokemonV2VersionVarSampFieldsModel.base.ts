/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionVarSampFieldsBase
 * auto generated base class for the model PokemonV2VersionVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersionVarSampFieldsModelBase = ModelBase
  .named('PokemonV2VersionVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_var_samp_fields"), "pokemon_v2_version_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionVarSampFields() {
  return new PokemonV2VersionVarSampFieldsModelSelector()
}

export const pokemonV2VersionVarSampFieldsModelPrimitives = selectFromPokemonV2VersionVarSampFields().version_group_id
