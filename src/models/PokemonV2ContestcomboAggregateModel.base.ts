/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContestcomboAggregateFieldsModel, PokemonV2ContestcomboAggregateFieldsModelType } from "./PokemonV2ContestcomboAggregateFieldsModel"
import { PokemonV2ContestcomboAggregateFieldsModelSelector } from "./PokemonV2ContestcomboAggregateFieldsModel.base"
import { PokemonV2ContestcomboModel, PokemonV2ContestcomboModelType } from "./PokemonV2ContestcomboModel"
import { PokemonV2ContestcomboModelSelector } from "./PokemonV2ContestcomboModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContestcomboAggregateBase
 * auto generated base class for the model PokemonV2ContestcomboAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboAggregateModelBase = ModelBase
  .named('PokemonV2ContestcomboAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contestcombo_aggregate"), "pokemon_v2_contestcombo_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContestcomboModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContestcomboAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContestcomboAggregateFieldsModelSelector | ((selector: PokemonV2ContestcomboAggregateFieldsModelSelector) => PokemonV2ContestcomboAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContestcomboAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContestcomboModelSelector | ((selector: PokemonV2ContestcomboModelSelector) => PokemonV2ContestcomboModelSelector)) { return this.__child(`nodes`, PokemonV2ContestcomboModelSelector, builder) }
}
export function selectFromPokemonV2ContestcomboAggregate() {
  return new PokemonV2ContestcomboAggregateModelSelector()
}

export const pokemonV2ContestcomboAggregateModelPrimitives = selectFromPokemonV2ContestcomboAggregate()
