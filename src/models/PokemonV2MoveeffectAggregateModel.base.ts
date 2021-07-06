/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectAggregateFieldsModel, PokemonV2MoveeffectAggregateFieldsModelType } from "./PokemonV2MoveeffectAggregateFieldsModel"
import { PokemonV2MoveeffectAggregateFieldsModelSelector } from "./PokemonV2MoveeffectAggregateFieldsModel.base"
import { PokemonV2MoveeffectModel, PokemonV2MoveeffectModelType } from "./PokemonV2MoveeffectModel"
import { PokemonV2MoveeffectModelSelector } from "./PokemonV2MoveeffectModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectAggregateBase
 * auto generated base class for the model PokemonV2MoveeffectAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectAggregateModelBase = ModelBase
  .named('PokemonV2MoveeffectAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_aggregate"), "pokemon_v2_moveeffect_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveeffectAggregateFieldsModelSelector | ((selector: PokemonV2MoveeffectAggregateFieldsModelSelector) => PokemonV2MoveeffectAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveeffectAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveeffectModelSelector | ((selector: PokemonV2MoveeffectModelSelector) => PokemonV2MoveeffectModelSelector)) { return this.__child(`nodes`, PokemonV2MoveeffectModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectAggregate() {
  return new PokemonV2MoveeffectAggregateModelSelector()
}

export const pokemonV2MoveeffectAggregateModelPrimitives = selectFromPokemonV2MoveeffectAggregate()
