/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovechangeVarSampFieldsBase
 * auto generated base class for the model PokemonV2MovechangeVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovechangeVarSampFieldsModelBase = ModelBase
  .named('PokemonV2MovechangeVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movechange_var_samp_fields"), "pokemon_v2_movechange_var_samp_fields"),
    accuracy: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_effect_chance: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    power: types.union(types.undefined, types.null, types.number),
    pp: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovechangeVarSampFieldsModelSelector extends QueryBuilder {
  get accuracy() { return this.__attr(`accuracy`) }
  get id() { return this.__attr(`id`) }
  get move_effect_chance() { return this.__attr(`move_effect_chance`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get move_id() { return this.__attr(`move_id`) }
  get power() { return this.__attr(`power`) }
  get pp() { return this.__attr(`pp`) }
  get type_id() { return this.__attr(`type_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MovechangeVarSampFields() {
  return new PokemonV2MovechangeVarSampFieldsModelSelector()
}

export const pokemonV2MovechangeVarSampFieldsModelPrimitives = selectFromPokemonV2MovechangeVarSampFields().accuracy.move_effect_chance.move_effect_id.move_id.power.pp.type_id.version_group_id
