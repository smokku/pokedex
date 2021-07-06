/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineVarianceFieldsBase
 * auto generated base class for the model PokemonV2MachineVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2MachineVarianceFieldsModelBase = ModelBase
  .named('PokemonV2MachineVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_variance_fields"), "pokemon_v2_machine_variance_fields"),
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

export class PokemonV2MachineVarianceFieldsModelSelector extends QueryBuilder {
  get growth_rate_id() { return this.__attr(`growth_rate_id`) }
  get id() { return this.__attr(`id`) }
  get item_id() { return this.__attr(`item_id`) }
  get machine_number() { return this.__attr(`machine_number`) }
  get move_id() { return this.__attr(`move_id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2MachineVarianceFields() {
  return new PokemonV2MachineVarianceFieldsModelSelector()
}

export const pokemonV2MachineVarianceFieldsModelPrimitives = selectFromPokemonV2MachineVarianceFields().growth_rate_id.item_id.machine_number.move_id.version_group_id
