/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationAggregateFieldsModel, PokemonV2LocationAggregateFieldsModelType } from "./PokemonV2LocationAggregateFieldsModel"
import { PokemonV2LocationAggregateFieldsModelSelector } from "./PokemonV2LocationAggregateFieldsModel.base"
import { PokemonV2LocationModel, PokemonV2LocationModelType } from "./PokemonV2LocationModel"
import { PokemonV2LocationModelSelector } from "./PokemonV2LocationModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationAggregateBase
 * auto generated base class for the model PokemonV2LocationAggregateModel.
 *
 * aggregated selection of "pokemon_v2_location"
 */
export const PokemonV2LocationAggregateModelBase = ModelBase
  .named('PokemonV2LocationAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_aggregate"), "pokemon_v2_location_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationAggregateFieldsModelSelector | ((selector: PokemonV2LocationAggregateFieldsModelSelector) => PokemonV2LocationAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationModelSelector | ((selector: PokemonV2LocationModelSelector) => PokemonV2LocationModelSelector)) { return this.__child(`nodes`, PokemonV2LocationModelSelector, builder) }
}
export function selectFromPokemonV2LocationAggregate() {
  return new PokemonV2LocationAggregateModelSelector()
}

export const pokemonV2LocationAggregateModelPrimitives = selectFromPokemonV2LocationAggregate()
