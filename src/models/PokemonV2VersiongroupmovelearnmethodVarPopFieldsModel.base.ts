/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodVarPopFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_var_pop_fields"), "pokemon_v2_versiongroupmovelearnmethod_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodVarPopFields() {
  return new PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodVarPopFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodVarPopFields().move_learn_method_id.version_group_id
