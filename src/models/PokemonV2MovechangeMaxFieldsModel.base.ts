/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovechangeMaxFieldsBase
 * auto generated base class for the model PokemonV2MovechangeMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MovechangeMaxFieldsModelBase = ModelBase
  .named('PokemonV2MovechangeMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movechange_max_fields"), "pokemon_v2_movechange_max_fields"),
    accuracy: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_effect_chance: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    power: types.union(types.undefined, types.null, types.integer),
    pp: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovechangeMaxFieldsModelSelector extends QueryBuilder {
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
export function selectFromPokemonV2MovechangeMaxFields() {
  return new PokemonV2MovechangeMaxFieldsModelSelector()
}

export const pokemonV2MovechangeMaxFieldsModelPrimitives = selectFromPokemonV2MovechangeMaxFields().accuracy.move_effect_chance.move_effect_id.move_id.power.pp.type_id.version_group_id
