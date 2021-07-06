/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonstatAggregateFieldsModel, PokemonV2PokemonstatAggregateFieldsModelType } from "./PokemonV2PokemonstatAggregateFieldsModel"
import { PokemonV2PokemonstatAggregateFieldsModelSelector } from "./PokemonV2PokemonstatAggregateFieldsModel.base"
import { PokemonV2PokemonstatModel, PokemonV2PokemonstatModelType } from "./PokemonV2PokemonstatModel"
import { PokemonV2PokemonstatModelSelector } from "./PokemonV2PokemonstatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatAggregateBase
 * auto generated base class for the model PokemonV2PokemonstatAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatAggregateModelBase = ModelBase
  .named('PokemonV2PokemonstatAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_aggregate"), "pokemon_v2_pokemonstat_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonstatModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonstatAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonstatAggregateFieldsModelSelector | ((selector: PokemonV2PokemonstatAggregateFieldsModelSelector) => PokemonV2PokemonstatAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonstatAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonstatModelSelector, builder) }
}
export function selectFromPokemonV2PokemonstatAggregate() {
  return new PokemonV2PokemonstatAggregateModelSelector()
}

export const pokemonV2PokemonstatAggregateModelPrimitives = selectFromPokemonV2PokemonstatAggregate()
