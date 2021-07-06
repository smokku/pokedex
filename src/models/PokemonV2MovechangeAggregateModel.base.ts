/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovechangeAggregateFieldsModel, PokemonV2MovechangeAggregateFieldsModelType } from "./PokemonV2MovechangeAggregateFieldsModel"
import { PokemonV2MovechangeAggregateFieldsModelSelector } from "./PokemonV2MovechangeAggregateFieldsModel.base"
import { PokemonV2MovechangeModel, PokemonV2MovechangeModelType } from "./PokemonV2MovechangeModel"
import { PokemonV2MovechangeModelSelector } from "./PokemonV2MovechangeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovechangeAggregateBase
 * auto generated base class for the model PokemonV2MovechangeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movechange"
 */
export const PokemonV2MovechangeAggregateModelBase = ModelBase
  .named('PokemonV2MovechangeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movechange_aggregate"), "pokemon_v2_movechange_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovechangeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovechangeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovechangeAggregateFieldsModelSelector | ((selector: PokemonV2MovechangeAggregateFieldsModelSelector) => PokemonV2MovechangeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovechangeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`nodes`, PokemonV2MovechangeModelSelector, builder) }
}
export function selectFromPokemonV2MovechangeAggregate() {
  return new PokemonV2MovechangeAggregateModelSelector()
}

export const pokemonV2MovechangeAggregateModelPrimitives = selectFromPokemonV2MovechangeAggregate()
