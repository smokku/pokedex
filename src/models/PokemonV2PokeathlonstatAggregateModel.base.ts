/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokeathlonstatAggregateFieldsModel, PokemonV2PokeathlonstatAggregateFieldsModelType } from "./PokemonV2PokeathlonstatAggregateFieldsModel"
import { PokemonV2PokeathlonstatAggregateFieldsModelSelector } from "./PokemonV2PokeathlonstatAggregateFieldsModel.base"
import { PokemonV2PokeathlonstatModel, PokemonV2PokeathlonstatModelType } from "./PokemonV2PokeathlonstatModel"
import { PokemonV2PokeathlonstatModelSelector } from "./PokemonV2PokeathlonstatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatAggregateBase
 * auto generated base class for the model PokemonV2PokeathlonstatAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatAggregateModelBase = ModelBase
  .named('PokemonV2PokeathlonstatAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_aggregate"), "pokemon_v2_pokeathlonstat_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokeathlonstatModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokeathlonstatAggregateFieldsModelSelector | ((selector: PokemonV2PokeathlonstatAggregateFieldsModelSelector) => PokemonV2PokeathlonstatAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokeathlonstatAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokeathlonstatModelSelector | ((selector: PokemonV2PokeathlonstatModelSelector) => PokemonV2PokeathlonstatModelSelector)) { return this.__child(`nodes`, PokemonV2PokeathlonstatModelSelector, builder) }
}
export function selectFromPokemonV2PokeathlonstatAggregate() {
  return new PokemonV2PokeathlonstatAggregateModelSelector()
}

export const pokemonV2PokeathlonstatAggregateModelPrimitives = selectFromPokemonV2PokeathlonstatAggregate()
