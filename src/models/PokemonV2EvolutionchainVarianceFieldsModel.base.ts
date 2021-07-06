/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainVarianceFieldsBase
 * auto generated base class for the model PokemonV2EvolutionchainVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EvolutionchainVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EvolutionchainVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_variance_fields"), "pokemon_v2_evolutionchain_variance_fields"),
    baby_trigger_item_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainVarianceFieldsModelSelector extends QueryBuilder {
  get baby_trigger_item_id() { return this.__attr(`baby_trigger_item_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EvolutionchainVarianceFields() {
  return new PokemonV2EvolutionchainVarianceFieldsModelSelector()
}

export const pokemonV2EvolutionchainVarianceFieldsModelPrimitives = selectFromPokemonV2EvolutionchainVarianceFields().baby_trigger_item_id
