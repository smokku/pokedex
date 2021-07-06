/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthrateAggregateFieldsModel, PokemonV2GrowthrateAggregateFieldsModelType } from "./PokemonV2GrowthrateAggregateFieldsModel"
import { PokemonV2GrowthrateAggregateFieldsModelSelector } from "./PokemonV2GrowthrateAggregateFieldsModel.base"
import { PokemonV2GrowthrateModel, PokemonV2GrowthrateModelType } from "./PokemonV2GrowthrateModel"
import { PokemonV2GrowthrateModelSelector } from "./PokemonV2GrowthrateModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateAggregateBase
 * auto generated base class for the model PokemonV2GrowthrateAggregateModel.
 *
 * aggregated selection of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateAggregateModelBase = ModelBase
  .named('PokemonV2GrowthrateAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_aggregate"), "pokemon_v2_growthrate_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2GrowthrateModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2GrowthrateAggregateFieldsModelSelector | ((selector: PokemonV2GrowthrateAggregateFieldsModelSelector) => PokemonV2GrowthrateAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2GrowthrateAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2GrowthrateModelSelector | ((selector: PokemonV2GrowthrateModelSelector) => PokemonV2GrowthrateModelSelector)) { return this.__child(`nodes`, PokemonV2GrowthrateModelSelector, builder) }
}
export function selectFromPokemonV2GrowthrateAggregate() {
  return new PokemonV2GrowthrateAggregateModelSelector()
}

export const pokemonV2GrowthrateAggregateModelPrimitives = selectFromPokemonV2GrowthrateAggregate()
