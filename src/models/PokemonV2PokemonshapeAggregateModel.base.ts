/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonshapeAggregateFieldsModel, PokemonV2PokemonshapeAggregateFieldsModelType } from "./PokemonV2PokemonshapeAggregateFieldsModel"
import { PokemonV2PokemonshapeAggregateFieldsModelSelector } from "./PokemonV2PokemonshapeAggregateFieldsModel.base"
import { PokemonV2PokemonshapeModel, PokemonV2PokemonshapeModelType } from "./PokemonV2PokemonshapeModel"
import { PokemonV2PokemonshapeModelSelector } from "./PokemonV2PokemonshapeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonshapeAggregateBase
 * auto generated base class for the model PokemonV2PokemonshapeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeAggregateModelBase = ModelBase
  .named('PokemonV2PokemonshapeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonshape_aggregate"), "pokemon_v2_pokemonshape_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonshapeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonshapeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonshapeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonshapeAggregateFieldsModelSelector | ((selector: PokemonV2PokemonshapeAggregateFieldsModelSelector) => PokemonV2PokemonshapeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonshapeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonshapeModelSelector | ((selector: PokemonV2PokemonshapeModelSelector) => PokemonV2PokemonshapeModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonshapeModelSelector, builder) }
}
export function selectFromPokemonV2PokemonshapeAggregate() {
  return new PokemonV2PokemonshapeAggregateModelSelector()
}

export const pokemonV2PokemonshapeAggregateModelPrimitives = selectFromPokemonV2PokemonshapeAggregate()
