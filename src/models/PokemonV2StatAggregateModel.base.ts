/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2StatAggregateFieldsModel, PokemonV2StatAggregateFieldsModelType } from "./PokemonV2StatAggregateFieldsModel"
import { PokemonV2StatAggregateFieldsModelSelector } from "./PokemonV2StatAggregateFieldsModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatAggregateBase
 * auto generated base class for the model PokemonV2StatAggregateModel.
 *
 * aggregated selection of "pokemon_v2_stat"
 */
export const PokemonV2StatAggregateModelBase = ModelBase
  .named('PokemonV2StatAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_aggregate"), "pokemon_v2_stat_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2StatAggregateFieldsModelSelector | ((selector: PokemonV2StatAggregateFieldsModelSelector) => PokemonV2StatAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2StatAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`nodes`, PokemonV2StatModelSelector, builder) }
}
export function selectFromPokemonV2StatAggregate() {
  return new PokemonV2StatAggregateModelSelector()
}

export const pokemonV2StatAggregateModelPrimitives = selectFromPokemonV2StatAggregate()
