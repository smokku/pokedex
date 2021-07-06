/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeMaxFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectchangeMaxFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_max_fields"), "pokemon_v2_moveeffectchange_max_fields"),
    id: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeMaxFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveeffectchangeMaxFields() {
  return new PokemonV2MoveeffectchangeMaxFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeMaxFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeMaxFields().move_effect_id.version_group_id
