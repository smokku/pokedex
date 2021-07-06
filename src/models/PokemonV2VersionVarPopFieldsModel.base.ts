/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionVarPopFieldsBase
 * auto generated base class for the model PokemonV2VersionVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersionVarPopFieldsModelBase = ModelBase
  .named('PokemonV2VersionVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_var_pop_fields"), "pokemon_v2_version_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersionVarPopFields() {
  return new PokemonV2VersionVarPopFieldsModelSelector()
}

export const pokemonV2VersionVarPopFieldsModelPrimitives = selectFromPokemonV2VersionVarPopFields().version_group_id
