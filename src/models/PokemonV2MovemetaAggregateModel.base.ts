/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaAggregateFieldsModel, PokemonV2MovemetaAggregateFieldsModelType } from "./PokemonV2MovemetaAggregateFieldsModel"
import { PokemonV2MovemetaAggregateFieldsModelSelector } from "./PokemonV2MovemetaAggregateFieldsModel.base"
import { PokemonV2MovemetaModel, PokemonV2MovemetaModelType } from "./PokemonV2MovemetaModel"
import { PokemonV2MovemetaModelSelector } from "./PokemonV2MovemetaModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaAggregateBase
 * auto generated base class for the model PokemonV2MovemetaAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemeta"
 */
export const PokemonV2MovemetaAggregateModelBase = ModelBase
  .named('PokemonV2MovemetaAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemeta_aggregate"), "pokemon_v2_movemeta_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetaModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetaAggregateFieldsModelSelector | ((selector: PokemonV2MovemetaAggregateFieldsModelSelector) => PokemonV2MovemetaAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetaAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetaModelSelector | ((selector: PokemonV2MovemetaModelSelector) => PokemonV2MovemetaModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetaModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaAggregate() {
  return new PokemonV2MovemetaAggregateModelSelector()
}

export const pokemonV2MovemetaAggregateModelPrimitives = selectFromPokemonV2MovemetaAggregate()
