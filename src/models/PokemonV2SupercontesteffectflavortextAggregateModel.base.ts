/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontesteffectflavortextAggregateFieldsModel, PokemonV2SupercontesteffectflavortextAggregateFieldsModelType } from "./PokemonV2SupercontesteffectflavortextAggregateFieldsModel"
import { PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextAggregateFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextModel, PokemonV2SupercontesteffectflavortextModelType } from "./PokemonV2SupercontesteffectflavortextModel"
import { PokemonV2SupercontesteffectflavortextModelSelector } from "./PokemonV2SupercontesteffectflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextAggregateBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextAggregateModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_aggregate"), "pokemon_v2_supercontesteffectflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontesteffectflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector) => PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2SupercontesteffectflavortextModelSelector | ((selector: PokemonV2SupercontesteffectflavortextModelSelector) => PokemonV2SupercontesteffectflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2SupercontesteffectflavortextModelSelector, builder) }
}
export function selectFromPokemonV2SupercontesteffectflavortextAggregate() {
  return new PokemonV2SupercontesteffectflavortextAggregateModelSelector()
}

export const pokemonV2SupercontesteffectflavortextAggregateModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextAggregate()
