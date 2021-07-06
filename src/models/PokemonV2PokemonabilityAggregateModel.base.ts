/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonabilityAggregateFieldsModel, PokemonV2PokemonabilityAggregateFieldsModelType } from "./PokemonV2PokemonabilityAggregateFieldsModel"
import { PokemonV2PokemonabilityAggregateFieldsModelSelector } from "./PokemonV2PokemonabilityAggregateFieldsModel.base"
import { PokemonV2PokemonabilityModel, PokemonV2PokemonabilityModelType } from "./PokemonV2PokemonabilityModel"
import { PokemonV2PokemonabilityModelSelector } from "./PokemonV2PokemonabilityModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilityAggregateBase
 * auto generated base class for the model PokemonV2PokemonabilityAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityAggregateModelBase = ModelBase
  .named('PokemonV2PokemonabilityAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability_aggregate"), "pokemon_v2_pokemonability_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonabilityAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonabilityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonabilityAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonabilityAggregateFieldsModelSelector | ((selector: PokemonV2PokemonabilityAggregateFieldsModelSelector) => PokemonV2PokemonabilityAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonabilityAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonabilityModelSelector, builder) }
}
export function selectFromPokemonV2PokemonabilityAggregate() {
  return new PokemonV2PokemonabilityAggregateModelSelector()
}

export const pokemonV2PokemonabilityAggregateModelPrimitives = selectFromPokemonV2PokemonabilityAggregate()
