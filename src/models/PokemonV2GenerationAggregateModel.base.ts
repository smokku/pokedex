/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationAggregateFieldsModel, PokemonV2GenerationAggregateFieldsModelType } from "./PokemonV2GenerationAggregateFieldsModel"
import { PokemonV2GenerationAggregateFieldsModelSelector } from "./PokemonV2GenerationAggregateFieldsModel.base"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationAggregateBase
 * auto generated base class for the model PokemonV2GenerationAggregateModel.
 *
 * aggregated selection of "pokemon_v2_generation"
 */
export const PokemonV2GenerationAggregateModelBase = ModelBase
  .named('PokemonV2GenerationAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_aggregate"), "pokemon_v2_generation_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2GenerationAggregateFieldsModelSelector | ((selector: PokemonV2GenerationAggregateFieldsModelSelector) => PokemonV2GenerationAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2GenerationAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`nodes`, PokemonV2GenerationModelSelector, builder) }
}
export function selectFromPokemonV2GenerationAggregate() {
  return new PokemonV2GenerationAggregateModelSelector()
}

export const pokemonV2GenerationAggregateModelPrimitives = selectFromPokemonV2GenerationAggregate()
