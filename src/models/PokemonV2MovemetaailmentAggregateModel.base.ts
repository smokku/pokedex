/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaailmentAggregateFieldsModel, PokemonV2MovemetaailmentAggregateFieldsModelType } from "./PokemonV2MovemetaailmentAggregateFieldsModel"
import { PokemonV2MovemetaailmentAggregateFieldsModelSelector } from "./PokemonV2MovemetaailmentAggregateFieldsModel.base"
import { PokemonV2MovemetaailmentModel, PokemonV2MovemetaailmentModelType } from "./PokemonV2MovemetaailmentModel"
import { PokemonV2MovemetaailmentModelSelector } from "./PokemonV2MovemetaailmentModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentAggregateBase
 * auto generated base class for the model PokemonV2MovemetaailmentAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentAggregateModelBase = ModelBase
  .named('PokemonV2MovemetaailmentAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_aggregate"), "pokemon_v2_movemetaailment_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaailmentModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetaailmentAggregateFieldsModelSelector | ((selector: PokemonV2MovemetaailmentAggregateFieldsModelSelector) => PokemonV2MovemetaailmentAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetaailmentAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetaailmentModelSelector | ((selector: PokemonV2MovemetaailmentModelSelector) => PokemonV2MovemetaailmentModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetaailmentModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaailmentAggregate() {
  return new PokemonV2MovemetaailmentAggregateModelSelector()
}

export const pokemonV2MovemetaailmentAggregateModelPrimitives = selectFromPokemonV2MovemetaailmentAggregate()
