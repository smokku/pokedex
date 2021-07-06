/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutionchainAggregateFieldsModel, PokemonV2EvolutionchainAggregateFieldsModelType } from "./PokemonV2EvolutionchainAggregateFieldsModel"
import { PokemonV2EvolutionchainAggregateFieldsModelSelector } from "./PokemonV2EvolutionchainAggregateFieldsModel.base"
import { PokemonV2EvolutionchainModel, PokemonV2EvolutionchainModelType } from "./PokemonV2EvolutionchainModel"
import { PokemonV2EvolutionchainModelSelector } from "./PokemonV2EvolutionchainModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutionchainAggregateBase
 * auto generated base class for the model PokemonV2EvolutionchainAggregateModel.
 *
 * aggregated selection of "pokemon_v2_evolutionchain"
 */
export const PokemonV2EvolutionchainAggregateModelBase = ModelBase
  .named('PokemonV2EvolutionchainAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutionchain_aggregate"), "pokemon_v2_evolutionchain_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutionchainAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutionchainModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutionchainAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EvolutionchainAggregateFieldsModelSelector | ((selector: PokemonV2EvolutionchainAggregateFieldsModelSelector) => PokemonV2EvolutionchainAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EvolutionchainAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EvolutionchainModelSelector | ((selector: PokemonV2EvolutionchainModelSelector) => PokemonV2EvolutionchainModelSelector)) { return this.__child(`nodes`, PokemonV2EvolutionchainModelSelector, builder) }
}
export function selectFromPokemonV2EvolutionchainAggregate() {
  return new PokemonV2EvolutionchainAggregateModelSelector()
}

export const pokemonV2EvolutionchainAggregateModelPrimitives = selectFromPokemonV2EvolutionchainAggregate()
