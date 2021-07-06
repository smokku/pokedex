/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineMaxFieldsBase
 * auto generated base class for the model PokemonV2MachineMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2MachineMaxFieldsModelBase = ModelBase
  .named('PokemonV2MachineMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_max_fields"), "pokemon_v2_machine_max_fields"),
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

export class PokemonV2MachineMaxFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get machine_number() { return this.__attr(`machine_number`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MachineMaxFields() {
  return new PokemonV2MachineMaxFieldsModelSelector()
}

export const pokemonV2MachineMaxFieldsModelPrimitives = selectFromPokemonV2MachineMaxFields().growth_rate_id.item_id.machine_number.move_id.version_group_id
