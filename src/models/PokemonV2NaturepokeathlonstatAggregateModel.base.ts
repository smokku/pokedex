/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturepokeathlonstatAggregateFieldsModel, PokemonV2NaturepokeathlonstatAggregateFieldsModelType } from "./PokemonV2NaturepokeathlonstatAggregateFieldsModel"
import { PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateFieldsModel.base"
import { PokemonV2NaturepokeathlonstatModel, PokemonV2NaturepokeathlonstatModelType } from "./PokemonV2NaturepokeathlonstatModel"
import { PokemonV2NaturepokeathlonstatModelSelector } from "./PokemonV2NaturepokeathlonstatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatAggregateBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatAggregateModel.
 *
 * aggregated selection of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatAggregateModelBase = ModelBase
  .named('PokemonV2NaturepokeathlonstatAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat_aggregate"), "pokemon_v2_naturepokeathlonstat_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturepokeathlonstatModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector) => PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2NaturepokeathlonstatModelSelector | ((selector: PokemonV2NaturepokeathlonstatModelSelector) => PokemonV2NaturepokeathlonstatModelSelector)) { return this.__child(`nodes`, PokemonV2NaturepokeathlonstatModelSelector, builder) }
}
export function selectFromPokemonV2NaturepokeathlonstatAggregate() {
  return new PokemonV2NaturepokeathlonstatAggregateModelSelector()
}

export const pokemonV2NaturepokeathlonstatAggregateModelPrimitives = selectFromPokemonV2NaturepokeathlonstatAggregate()
