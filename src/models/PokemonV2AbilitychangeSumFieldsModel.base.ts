/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeSumFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitychangeSumFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_sum_fields"), "pokemon_v2_abilitychange_sum_fields"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    version_group_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeSumFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get version_group_id() { return this.__attr(`version_group_id`) }
}
export function selectFromPokemonV2AbilitychangeSumFields() {
  return new PokemonV2AbilitychangeSumFieldsModelSelector()
}

export const pokemonV2AbilitychangeSumFieldsModelPrimitives = selectFromPokemonV2AbilitychangeSumFields().ability_id.version_group_id
