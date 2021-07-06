/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonitemAggregateFieldsModel, PokemonV2PokemonitemAggregateFieldsModelType } from "./PokemonV2PokemonitemAggregateFieldsModel"
import { PokemonV2PokemonitemAggregateFieldsModelSelector } from "./PokemonV2PokemonitemAggregateFieldsModel.base"
import { PokemonV2PokemonitemModel, PokemonV2PokemonitemModelType } from "./PokemonV2PokemonitemModel"
import { PokemonV2PokemonitemModelSelector } from "./PokemonV2PokemonitemModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemAggregateBase
 * auto generated base class for the model PokemonV2PokemonitemAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemAggregateModelBase = ModelBase
  .named('PokemonV2PokemonitemAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_aggregate"), "pokemon_v2_pokemonitem_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonitemModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonitemAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonitemAggregateFieldsModelSelector | ((selector: PokemonV2PokemonitemAggregateFieldsModelSelector) => PokemonV2PokemonitemAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonitemAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonitemModelSelector, builder) }
}
export function selectFromPokemonV2PokemonitemAggregate() {
  return new PokemonV2PokemonitemAggregateModelSelector()
}

export const pokemonV2PokemonitemAggregateModelPrimitives = selectFromPokemonV2PokemonitemAggregate()
