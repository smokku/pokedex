/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavorAggregateFieldsModel, PokemonV2BerryflavorAggregateFieldsModelType } from "./PokemonV2BerryflavorAggregateFieldsModel"
import { PokemonV2BerryflavorAggregateFieldsModelSelector } from "./PokemonV2BerryflavorAggregateFieldsModel.base"
import { PokemonV2BerryflavorModel, PokemonV2BerryflavorModelType } from "./PokemonV2BerryflavorModel"
import { PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorAggregateBase
 * auto generated base class for the model PokemonV2BerryflavorAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorAggregateModelBase = ModelBase
  .named('PokemonV2BerryflavorAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_aggregate"), "pokemon_v2_berryflavor_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryflavorAggregateFieldsModelSelector | ((selector: PokemonV2BerryflavorAggregateFieldsModelSelector) => PokemonV2BerryflavorAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryflavorAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryflavorModelSelector | ((selector: PokemonV2BerryflavorModelSelector) => PokemonV2BerryflavorModelSelector)) { return this.__child(`nodes`, PokemonV2BerryflavorModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavorAggregate() {
  return new PokemonV2BerryflavorAggregateModelSelector()
}

export const pokemonV2BerryflavorAggregateModelPrimitives = selectFromPokemonV2BerryflavorAggregate()
