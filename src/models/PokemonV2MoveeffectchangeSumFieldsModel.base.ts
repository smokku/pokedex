/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeSumFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffectchangeSumFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_sum_fields"), "pokemon_v2_moveeffectchange_sum_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveeffectchangeSumFields() {
  return new PokemonV2MoveeffectchangeSumFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeSumFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeSumFields().move_effect_id.version_group_id
