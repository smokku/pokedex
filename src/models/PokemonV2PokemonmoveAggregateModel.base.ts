/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonmoveAggregateFieldsModel, PokemonV2PokemonmoveAggregateFieldsModelType } from "./PokemonV2PokemonmoveAggregateFieldsModel"
import { PokemonV2PokemonmoveAggregateFieldsModelSelector } from "./PokemonV2PokemonmoveAggregateFieldsModel.base"
import { PokemonV2PokemonmoveModel, PokemonV2PokemonmoveModelType } from "./PokemonV2PokemonmoveModel"
import { PokemonV2PokemonmoveModelSelector } from "./PokemonV2PokemonmoveModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonmoveAggregateBase
 * auto generated base class for the model PokemonV2PokemonmoveAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveAggregateModelBase = ModelBase
  .named('PokemonV2PokemonmoveAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonmove_aggregate"), "pokemon_v2_pokemonmove_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonmoveModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonmoveAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonmoveAggregateFieldsModelSelector | ((selector: PokemonV2PokemonmoveAggregateFieldsModelSelector) => PokemonV2PokemonmoveAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonmoveAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonmoveModelSelector, builder) }
}
export function selectFromPokemonV2PokemonmoveAggregate() {
  return new PokemonV2PokemonmoveAggregateModelSelector()
}

export const pokemonV2PokemonmoveAggregateModelPrimitives = selectFromPokemonV2PokemonmoveAggregate()
