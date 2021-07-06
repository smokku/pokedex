/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestyleAggregateFieldsModel, PokemonV2MovebattlestyleAggregateFieldsModelType } from "./PokemonV2MovebattlestyleAggregateFieldsModel"
import { PokemonV2MovebattlestyleAggregateFieldsModelSelector } from "./PokemonV2MovebattlestyleAggregateFieldsModel.base"
import { PokemonV2MovebattlestyleModel, PokemonV2MovebattlestyleModelType } from "./PokemonV2MovebattlestyleModel"
import { PokemonV2MovebattlestyleModelSelector } from "./PokemonV2MovebattlestyleModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleAggregateBase
 * auto generated base class for the model PokemonV2MovebattlestyleAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleAggregateModelBase = ModelBase
  .named('PokemonV2MovebattlestyleAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_aggregate"), "pokemon_v2_movebattlestyle_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovebattlestyleModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovebattlestyleAggregateFieldsModelSelector | ((selector: PokemonV2MovebattlestyleAggregateFieldsModelSelector) => PokemonV2MovebattlestyleAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovebattlestyleAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovebattlestyleModelSelector | ((selector: PokemonV2MovebattlestyleModelSelector) => PokemonV2MovebattlestyleModelSelector)) { return this.__child(`nodes`, PokemonV2MovebattlestyleModelSelector, builder) }
}
export function selectFromPokemonV2MovebattlestyleAggregate() {
  return new PokemonV2MovebattlestyleAggregateModelSelector()
}

export const pokemonV2MovebattlestyleAggregateModelPrimitives = selectFromPokemonV2MovebattlestyleAggregate()
