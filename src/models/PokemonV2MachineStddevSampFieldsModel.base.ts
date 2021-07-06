/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineStddevSampFieldsBase
 * auto generated base class for the model PokemonV2MachineStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MachineStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2MachineStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_stddev_samp_fields"), "pokemon_v2_machine_stddev_samp_fields"),
    growth_rate_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    item_id: types.union(types.undefined, types.null, types.number),
    machine_number: types.union(types.undefined, types.null, types.number),
    move_id: types.union(types.undefined, types.null, types.number),
    version_group_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MachineStddevSampFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get machine_number() { return this.__attr(`machine_number`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MachineStddevSampFields() {
  return new PokemonV2MachineStddevSampFieldsModelSelector()
}

export const pokemonV2MachineStddevSampFieldsModelPrimitives = selectFromPokemonV2MachineStddevSampFields().growth_rate_id.item_id.machine_number.move_id.version_group_id
