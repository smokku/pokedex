/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2RegionnameAggregateFieldsModel, PokemonV2RegionnameAggregateFieldsModelType } from "./PokemonV2RegionnameAggregateFieldsModel"
import { PokemonV2RegionnameAggregateFieldsModelSelector } from "./PokemonV2RegionnameAggregateFieldsModel.base"
import { PokemonV2RegionnameModel, PokemonV2RegionnameModelType } from "./PokemonV2RegionnameModel"
import { PokemonV2RegionnameModelSelector } from "./PokemonV2RegionnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameAggregateBase
 * auto generated base class for the model PokemonV2RegionnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameAggregateModelBase = ModelBase
  .named('PokemonV2RegionnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_aggregate"), "pokemon_v2_regionname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2RegionnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2RegionnameAggregateFieldsModelSelector | ((selector: PokemonV2RegionnameAggregateFieldsModelSelector) => PokemonV2RegionnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2RegionnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2RegionnameModelSelector | ((selector: PokemonV2RegionnameModelSelector) => PokemonV2RegionnameModelSelector)) { return this.__child(`nodes`, PokemonV2RegionnameModelSelector, builder) }
}
export function selectFromPokemonV2RegionnameAggregate() {
  return new PokemonV2RegionnameAggregateModelSelector()
}

export const pokemonV2RegionnameAggregateModelPrimitives = selectFromPokemonV2RegionnameAggregate()
