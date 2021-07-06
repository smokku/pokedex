/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodVarianceFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_variance_fields"), "pokemon_v2_versiongroupmovelearnmethod_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_learn_method_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_learn_method_id() { return this.__attr(`move_learn_method_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodVarianceFields() {
  return new PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodVarianceFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodVarianceFields().move_learn_method_id.version_group_id
