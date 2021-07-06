/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineMinFieldsBase
 * auto generated base class for the model PokemonV2MachineMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2MachineMinFieldsModelBase = ModelBase
  .named('PokemonV2MachineMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_min_fields"), "pokemon_v2_machine_min_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    item_id: types.union(types.undefined, types.null, types.integer),
    machine_number: types.union(types.undefined, types.null, types.integer),
    move_id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MachineMinFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get machine_number() { return this.__attr(`machine_number`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MachineMinFields() {
  return new PokemonV2MachineMinFieldsModelSelector()
}

export const pokemonV2MachineMinFieldsModelPrimitives = selectFromPokemonV2MachineMinFields().growth_rate_id.item_id.machine_number.move_id.version_group_id
