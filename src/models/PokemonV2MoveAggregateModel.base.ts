/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveAggregateFieldsModel, PokemonV2MoveAggregateFieldsModelType } from "./PokemonV2MoveAggregateFieldsModel"
import { PokemonV2MoveAggregateFieldsModelSelector } from "./PokemonV2MoveAggregateFieldsModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveAggregateBase
 * auto generated base class for the model PokemonV2MoveAggregateModel.
 *
 * aggregated selection of "pokemon_v2_move"
 */
export const PokemonV2MoveAggregateModelBase = ModelBase
  .named('PokemonV2MoveAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_move_aggregate"), "pokemon_v2_move_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveAggregateFieldsModelSelector | ((selector: PokemonV2MoveAggregateFieldsModelSelector) => PokemonV2MoveAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`nodes`, PokemonV2MoveModelSelector, builder) }
}
export function selectFromPokemonV2MoveAggregate() {
  return new PokemonV2MoveAggregateModelSelector()
}

export const pokemonV2MoveAggregateModelPrimitives = selectFromPokemonV2MoveAggregate()
