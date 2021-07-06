/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffectflavortextAggregateFieldsModel, PokemonV2ContesteffectflavortextAggregateFieldsModelType } from "./PokemonV2ContesteffectflavortextAggregateFieldsModel"
import { PokemonV2ContesteffectflavortextAggregateFieldsModelSelector } from "./PokemonV2ContesteffectflavortextAggregateFieldsModel.base"
import { PokemonV2ContesteffectflavortextModel, PokemonV2ContesteffectflavortextModelType } from "./PokemonV2ContesteffectflavortextModel"
import { PokemonV2ContesteffectflavortextModelSelector } from "./PokemonV2ContesteffectflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextAggregateBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contesteffectflavortext"
 */
export const PokemonV2ContesteffectflavortextAggregateModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_aggregate"), "pokemon_v2_contesteffectflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffectflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContesteffectflavortextAggregateFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextAggregateFieldsModelSelector) => PokemonV2ContesteffectflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContesteffectflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContesteffectflavortextModelSelector | ((selector: PokemonV2ContesteffectflavortextModelSelector) => PokemonV2ContesteffectflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2ContesteffectflavortextModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffectflavortextAggregate() {
  return new PokemonV2ContesteffectflavortextAggregateModelSelector()
}

export const pokemonV2ContesteffectflavortextAggregateModelPrimitives = selectFromPokemonV2ContesteffectflavortextAggregate()
