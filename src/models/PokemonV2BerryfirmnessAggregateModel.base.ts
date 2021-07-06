/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessAggregateFieldsModel, PokemonV2BerryfirmnessAggregateFieldsModelType } from "./PokemonV2BerryfirmnessAggregateFieldsModel"
import { PokemonV2BerryfirmnessAggregateFieldsModelSelector } from "./PokemonV2BerryfirmnessAggregateFieldsModel.base"
import { PokemonV2BerryfirmnessModel, PokemonV2BerryfirmnessModelType } from "./PokemonV2BerryfirmnessModel"
import { PokemonV2BerryfirmnessModelSelector } from "./PokemonV2BerryfirmnessModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessAggregateBase
 * auto generated base class for the model PokemonV2BerryfirmnessAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessAggregateModelBase = ModelBase
  .named('PokemonV2BerryfirmnessAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_aggregate"), "pokemon_v2_berryfirmness_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryfirmnessModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryfirmnessAggregateFieldsModelSelector | ((selector: PokemonV2BerryfirmnessAggregateFieldsModelSelector) => PokemonV2BerryfirmnessAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryfirmnessAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryfirmnessModelSelector | ((selector: PokemonV2BerryfirmnessModelSelector) => PokemonV2BerryfirmnessModelSelector)) { return this.__child(`nodes`, PokemonV2BerryfirmnessModelSelector, builder) }
}
export function selectFromPokemonV2BerryfirmnessAggregate() {
  return new PokemonV2BerryfirmnessAggregateModelSelector()
}

export const pokemonV2BerryfirmnessAggregateModelPrimitives = selectFromPokemonV2BerryfirmnessAggregate()
