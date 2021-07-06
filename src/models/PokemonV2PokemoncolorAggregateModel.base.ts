/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolorAggregateFieldsModel, PokemonV2PokemoncolorAggregateFieldsModelType } from "./PokemonV2PokemoncolorAggregateFieldsModel"
import { PokemonV2PokemoncolorAggregateFieldsModelSelector } from "./PokemonV2PokemoncolorAggregateFieldsModel.base"
import { PokemonV2PokemoncolorModel, PokemonV2PokemoncolorModelType } from "./PokemonV2PokemoncolorModel"
import { PokemonV2PokemoncolorModelSelector } from "./PokemonV2PokemoncolorModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorAggregateBase
 * auto generated base class for the model PokemonV2PokemoncolorAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorAggregateModelBase = ModelBase
  .named('PokemonV2PokemoncolorAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_aggregate"), "pokemon_v2_pokemoncolor_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemoncolorAggregateFieldsModelSelector | ((selector: PokemonV2PokemoncolorAggregateFieldsModelSelector) => PokemonV2PokemoncolorAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemoncolorAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemoncolorModelSelector | ((selector: PokemonV2PokemoncolorModelSelector) => PokemonV2PokemoncolorModelSelector)) { return this.__child(`nodes`, PokemonV2PokemoncolorModelSelector, builder) }
}
export function selectFromPokemonV2PokemoncolorAggregate() {
  return new PokemonV2PokemoncolorAggregateModelSelector()
}

export const pokemonV2PokemoncolorAggregateModelPrimitives = selectFromPokemonV2PokemoncolorAggregate()
