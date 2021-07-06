/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontesteffectAggregateFieldsModel, PokemonV2SupercontesteffectAggregateFieldsModelType } from "./PokemonV2SupercontesteffectAggregateFieldsModel"
import { PokemonV2SupercontesteffectAggregateFieldsModelSelector } from "./PokemonV2SupercontesteffectAggregateFieldsModel.base"
import { PokemonV2SupercontesteffectModel, PokemonV2SupercontesteffectModelType } from "./PokemonV2SupercontesteffectModel"
import { PokemonV2SupercontesteffectModelSelector } from "./PokemonV2SupercontesteffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectAggregateBase
 * auto generated base class for the model PokemonV2SupercontesteffectAggregateModel.
 *
 * aggregated selection of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectAggregateModelBase = ModelBase
  .named('PokemonV2SupercontesteffectAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_aggregate"), "pokemon_v2_supercontesteffect_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontesteffectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2SupercontesteffectAggregateFieldsModelSelector | ((selector: PokemonV2SupercontesteffectAggregateFieldsModelSelector) => PokemonV2SupercontesteffectAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2SupercontesteffectAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2SupercontesteffectModelSelector | ((selector: PokemonV2SupercontesteffectModelSelector) => PokemonV2SupercontesteffectModelSelector)) { return this.__child(`nodes`, PokemonV2SupercontesteffectModelSelector, builder) }
}
export function selectFromPokemonV2SupercontesteffectAggregate() {
  return new PokemonV2SupercontesteffectAggregateModelSelector()
}

export const pokemonV2SupercontesteffectAggregateModelPrimitives = selectFromPokemonV2SupercontesteffectAggregate()
