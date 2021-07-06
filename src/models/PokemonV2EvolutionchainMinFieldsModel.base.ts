/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainMinFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainMinFieldsModel.
 *
 * aggregate min on columns
 */
export const PokemonV2EvolutionchainMinFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainMinFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_min_fields"), "pokemon_v2_evolutionchain_min_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainMinFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainMinFields() {
  return new PokemonV2EvolutionchainMinFieldsModelSelector()
}

export const pokemonV2EvolutionchainMinFieldsModelPrimitives = selectFromPokemonV2EvolutionchainMinFields().baby_trigger_item_id
