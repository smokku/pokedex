/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffectAggregateFieldsModel, PokemonV2ContesteffectAggregateFieldsModelType } from "./PokemonV2ContesteffectAggregateFieldsModel"
import { PokemonV2ContesteffectAggregateFieldsModelSelector } from "./PokemonV2ContesteffectAggregateFieldsModel.base"
import { PokemonV2ContesteffectModel, PokemonV2ContesteffectModelType } from "./PokemonV2ContesteffectModel"
import { PokemonV2ContesteffectModelSelector } from "./PokemonV2ContesteffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectAggregateBase
 * auto generated base class for the model PokemonV2ContesteffectAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectAggregateModelBase = ModelBase
  .named('PokemonV2ContesteffectAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_aggregate"), "pokemon_v2_contesteffect_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContesteffectAggregateFieldsModelSelector | ((selector: PokemonV2ContesteffectAggregateFieldsModelSelector) => PokemonV2ContesteffectAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContesteffectAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContesteffectModelSelector | ((selector: PokemonV2ContesteffectModelSelector) => PokemonV2ContesteffectModelSelector)) { return this.__child(`nodes`, PokemonV2ContesteffectModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffectAggregate() {
  return new PokemonV2ContesteffectAggregateModelSelector()
}

export const pokemonV2ContesteffectAggregateModelPrimitives = selectFromPokemonV2ContesteffectAggregate()
