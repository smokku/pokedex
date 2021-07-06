/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonevolutionAggregateFieldsModel, PokemonV2PokemonevolutionAggregateFieldsModelType } from "./PokemonV2PokemonevolutionAggregateFieldsModel"
import { PokemonV2PokemonevolutionAggregateFieldsModelSelector } from "./PokemonV2PokemonevolutionAggregateFieldsModel.base"
import { PokemonV2PokemonevolutionModel, PokemonV2PokemonevolutionModelType } from "./PokemonV2PokemonevolutionModel"
import { PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonevolutionAggregateBase
 * auto generated base class for the model PokemonV2PokemonevolutionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionAggregateModelBase = ModelBase
  .named('PokemonV2PokemonevolutionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonevolution_aggregate"), "pokemon_v2_pokemonevolution_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonevolutionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonevolutionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonevolutionAggregateFieldsModelSelector | ((selector: PokemonV2PokemonevolutionAggregateFieldsModelSelector) => PokemonV2PokemonevolutionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonevolutionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonevolutionModelSelector, builder) }
}
export function selectFromPokemonV2PokemonevolutionAggregate() {
  return new PokemonV2PokemonevolutionAggregateModelSelector()
}

export const pokemonV2PokemonevolutionAggregateModelPrimitives = selectFromPokemonV2PokemonevolutionAggregate()
