/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainSumFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutionchainSumFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainSumFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_sum_fields"), "pokemon_v2_evolutionchain_sum_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainSumFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainSumFields() {
  return new PokemonV2EvolutionchainSumFieldsModelSelector()
}

export const pokemonV2EvolutionchainSumFieldsModelPrimitives = selectFromPokemonV2EvolutionchainSumFields().baby_trigger_item_id
