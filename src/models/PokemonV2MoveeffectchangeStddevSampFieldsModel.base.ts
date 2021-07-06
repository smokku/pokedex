/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffectchangeStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_stddev_samp_fields"), "pokemon_v2_moveeffectchange_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MoveeffectchangeStddevSampFields() {
  return new PokemonV2MoveeffectchangeStddevSampFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeStddevSampFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeStddevSampFields().move_effect_id.version_group_id
