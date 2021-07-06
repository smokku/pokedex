/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2RegionAggregateFieldsModel, PokemonV2RegionAggregateFieldsModelType } from "./PokemonV2RegionAggregateFieldsModel"
import { PokemonV2RegionAggregateFieldsModelSelector } from "./PokemonV2RegionAggregateFieldsModel.base"
import { PokemonV2RegionModel, PokemonV2RegionModelType } from "./PokemonV2RegionModel"
import { PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionAggregateBase
 * auto generated base class for the model PokemonV2RegionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_region"
 */
export const PokemonV2RegionAggregateModelBase = ModelBase
  .named('PokemonV2RegionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_aggregate"), "pokemon_v2_region_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2RegionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2RegionAggregateFieldsModelSelector | ((selector: PokemonV2RegionAggregateFieldsModelSelector) => PokemonV2RegionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2RegionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2RegionModelSelector | ((selector: PokemonV2RegionModelSelector) => PokemonV2RegionModelSelector)) { return this.__child(`nodes`, PokemonV2RegionModelSelector, builder) }
}
export function selectFromPokemonV2RegionAggregate() {
  return new PokemonV2RegionAggregateModelSelector()
}

export const pokemonV2RegionAggregateModelPrimitives = selectFromPokemonV2RegionAggregate()
