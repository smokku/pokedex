/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveMinFieldsBase
 * auto generated base class for the model PokemonV2MoveMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MoveMinFieldsModelBase = ModelBase
  .named('PokemonV2MoveMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_move_min_fields"), "pokemon_v2_move_min_fields"),
    accuracy: types.union(types.undefined, types.null, types.integer),
    contest_effect_id: types.union(types.undefined, types.null, types.integer),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    move_effect_chance: types.union(types.undefined, types.null, types.integer),
    move_effect_id: types.union(types.undefined, types.null, types.integer),
    move_target_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    power: types.union(types.undefined, types.null, types.integer),
    pp: types.union(types.undefined, types.null, types.integer),
    priority: types.union(types.undefined, types.null, types.integer),
    super_contest_effect_id: types.union(types.undefined, types.null, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveMinFieldsModelSelector extends QueryBuilder {
  get accuracy() { return this.__attr(`accuracy`) }
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get move_effect_chance() { return this.__attr(`move_effect_chance`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
  get name() { return this.__attr(`name`) }
  get power() { return this.__attr(`power`) }
  get pp() { return this.__attr(`pp`) }
  get priority() { return this.__attr(`priority`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2MoveMinFields() {
  return new PokemonV2MoveMinFieldsModelSelector()
}

export const pokemonV2MoveMinFieldsModelPrimitives = selectFromPokemonV2MoveMinFields().accuracy.contest_effect_id.contest_type_id.generation_id.move_damage_class_id.move_effect_chance.move_effect_id.move_target_id.name.power.pp.priority.super_contest_effect_id.type_id
