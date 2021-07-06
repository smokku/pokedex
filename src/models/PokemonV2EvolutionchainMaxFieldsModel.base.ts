/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainMaxFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2EvolutionchainMaxFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_max_fields"), "pokemon_v2_evolutionchain_max_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainMaxFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainMaxFields() {
  return new PokemonV2EvolutionchainMaxFieldsModelSelector()
}

export const pokemonV2EvolutionchainMaxFieldsModelPrimitives = selectFromPokemonV2EvolutionchainMaxFields().baby_trigger_item_id
