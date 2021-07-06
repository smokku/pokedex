/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkAggregateFieldsModel, PokemonV2PalparkAggregateFieldsModelType } from "./PokemonV2PalparkAggregateFieldsModel"
import { PokemonV2PalparkAggregateFieldsModelSelector } from "./PokemonV2PalparkAggregateFieldsModel.base"
import { PokemonV2PalparkModel, PokemonV2PalparkModelType } from "./PokemonV2PalparkModel"
import { PokemonV2PalparkModelSelector } from "./PokemonV2PalparkModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkAggregateBase
 * auto generated base class for the model PokemonV2PalparkAggregateModel.
 *
 * aggregated selection of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkAggregateModelBase = ModelBase
  .named('PokemonV2PalparkAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_aggregate"), "pokemon_v2_palpark_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PalparkAggregateFieldsModelSelector | ((selector: PokemonV2PalparkAggregateFieldsModelSelector) => PokemonV2PalparkAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PalparkAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PalparkModelSelector | ((selector: PokemonV2PalparkModelSelector) => PokemonV2PalparkModelSelector)) { return this.__child(`nodes`, PokemonV2PalparkModelSelector, builder) }
}
export function selectFromPokemonV2PalparkAggregate() {
  return new PokemonV2PalparkAggregateModelSelector()
}

export const pokemonV2PalparkAggregateModelPrimitives = selectFromPokemonV2PalparkAggregate()
