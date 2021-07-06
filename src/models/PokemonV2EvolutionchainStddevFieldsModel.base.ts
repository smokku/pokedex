/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainStddevFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutionchainStddevFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainStddevFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_stddev_fields"), "pokemon_v2_evolutionchain_stddev_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainStddevFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainStddevFields() {
  return new PokemonV2EvolutionchainStddevFieldsModelSelector()
}

export const pokemonV2EvolutionchainStddevFieldsModelPrimitives = selectFromPokemonV2EvolutionchainStddevFields().baby_trigger_item_id
