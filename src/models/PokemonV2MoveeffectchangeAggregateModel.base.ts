/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectchangeAggregateFieldsModel, PokemonV2MoveeffectchangeAggregateFieldsModelType } from "./PokemonV2MoveeffectchangeAggregateFieldsModel"
import { PokemonV2MoveeffectchangeAggregateFieldsModelSelector } from "./PokemonV2MoveeffectchangeAggregateFieldsModel.base"
import { PokemonV2MoveeffectchangeModel, PokemonV2MoveeffectchangeModelType } from "./PokemonV2MoveeffectchangeModel"
import { PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeAggregateBase
 * auto generated base class for the model PokemonV2MoveeffectchangeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeAggregateModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_aggregate"), "pokemon_v2_moveeffectchange_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveeffectchangeAggregateFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeAggregateFieldsModelSelector) => PokemonV2MoveeffectchangeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveeffectchangeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveeffectchangeModelSelector | ((selector: PokemonV2MoveeffectchangeModelSelector) => PokemonV2MoveeffectchangeModelSelector)) { return this.__child(`nodes`, PokemonV2MoveeffectchangeModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectchangeAggregate() {
  return new PokemonV2MoveeffectchangeAggregateModelSelector()
}

export const pokemonV2MoveeffectchangeAggregateModelPrimitives = selectFromPokemonV2MoveeffectchangeAggregate()
