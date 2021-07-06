/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveeffectchangeStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_stddev_pop_fields"), "pokemon_v2_moveeffectchange_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveeffectchangeStddevPopFields() {
  return new PokemonV2MoveeffectchangeStddevPopFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeStddevPopFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeStddevPopFields().move_effect_id.version_group_id
