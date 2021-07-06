/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypeAggregateFieldsModel, PokemonV2TypeAggregateFieldsModelType } from "./PokemonV2TypeAggregateFieldsModel"
import { PokemonV2TypeAggregateFieldsModelSelector } from "./PokemonV2TypeAggregateFieldsModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeAggregateBase
 * auto generated base class for the model PokemonV2TypeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_type"
 */
export const PokemonV2TypeAggregateModelBase = ModelBase
  .named('PokemonV2TypeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_aggregate"), "pokemon_v2_type_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2TypeAggregateFieldsModelSelector | ((selector: PokemonV2TypeAggregateFieldsModelSelector) => PokemonV2TypeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2TypeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`nodes`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2TypeAggregate() {
  return new PokemonV2TypeAggregateModelSelector()
}

export const pokemonV2TypeAggregateModelPrimitives = selectFromPokemonV2TypeAggregate()
