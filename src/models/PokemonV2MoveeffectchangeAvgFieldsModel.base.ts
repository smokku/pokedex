/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeAvgFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffectchangeAvgFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_avg_fields"), "pokemon_v2_moveeffectchange_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveeffectchangeAvgFields() {
  return new PokemonV2MoveeffectchangeAvgFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeAvgFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeAvgFields().move_effect_id.version_group_id
