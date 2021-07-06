/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveStddevPopFieldsBase
 * auto generated base class for the model PokemonV2MoveStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveStddevPopFieldsModelBase = ModelBase
  .named('PokemonV2MoveStddevPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_move_stddev_pop_fields"), "pokemon_v2_move_stddev_pop_fields"),
    accuracy: types.union(types.undefined, types.null, types.number),
    contest_effect_id: types.union(types.undefined, types.null, types.number),
    contest_type_id: types.union(types.undefined, types.null, types.number),
    generation_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    move_damage_class_id: types.union(types.undefined, types.null, types.number),
    move_effect_chance: types.union(types.undefined, types.null, types.number),
    move_effect_id: types.union(types.undefined, types.null, types.number),
    move_target_id: types.union(types.undefined, types.null, types.number),
    power: types.union(types.undefined, types.null, types.number),
    pp: types.union(types.undefined, types.null, types.number),
    priority: types.union(types.undefined, types.null, types.number),
    super_contest_effect_id: types.union(types.undefined, types.null, types.number),
    type_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveStddevPopFieldsModelSelector extends QueryBuilder {
  get accuracy() { return this.__attr(`accuracy`) }
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get move_effect_chance() { return this.__attr(`move_effect_chance`) }
  get move_effect_id() { return this.__attr(`move_effect_id`) }
  get move_target_id() { return this.__attr(`move_target_id`) }
  get power() { return this.__attr(`power`) }
  get pp() { return this.__attr(`pp`) }
  get priority() { return this.__attr(`priority`) }
  get super_contest_effect_id() { return this.__attr(`super_contest_effect_id`) }
  get type_id() { return this.__attr(`type_id`) }
}
export function selectFromPokemonV2MoveStddevPopFields() {
  return new PokemonV2MoveStddevPopFieldsModelSelector()
}

export const pokemonV2MoveStddevPopFieldsModelPrimitives = selectFromPokemonV2MoveStddevPopFields().accuracy.contest_effect_id.contest_type_id.generation_id.move_damage_class_id.move_effect_chance.move_effect_id.move_target_id.power.pp.priority.super_contest_effect_id.type_id
