/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainAvgFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutionchainAvgFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainAvgFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_avg_fields"), "pokemon_v2_evolutionchain_avg_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainAvgFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainAvgFields() {
  return new PokemonV2EvolutionchainAvgFieldsModelSelector()
}

export const pokemonV2EvolutionchainAvgFieldsModelPrimitives = selectFromPokemonV2EvolutionchainAvgFields().baby_trigger_item_id
