/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationgameindexAggregateFieldsModel, PokemonV2LocationgameindexAggregateFieldsModelType } from "./PokemonV2LocationgameindexAggregateFieldsModel"
import { PokemonV2LocationgameindexAggregateFieldsModelSelector } from "./PokemonV2LocationgameindexAggregateFieldsModel.base"
import { PokemonV2LocationgameindexModel, PokemonV2LocationgameindexModelType } from "./PokemonV2LocationgameindexModel"
import { PokemonV2LocationgameindexModelSelector } from "./PokemonV2LocationgameindexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexAggregateBase
 * auto generated base class for the model PokemonV2LocationgameindexAggregateModel.
 *
 * aggregated selection of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexAggregateModelBase = ModelBase
  .named('PokemonV2LocationgameindexAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex_aggregate"), "pokemon_v2_locationgameindex_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationgameindexModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationgameindexAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationgameindexAggregateFieldsModelSelector | ((selector: PokemonV2LocationgameindexAggregateFieldsModelSelector) => PokemonV2LocationgameindexAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationgameindexAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationgameindexModelSelector | ((selector: PokemonV2LocationgameindexModelSelector) => PokemonV2LocationgameindexModelSelector)) { return this.__child(`nodes`, PokemonV2LocationgameindexModelSelector, builder) }
}
export function selectFromPokemonV2LocationgameindexAggregate() {
  return new PokemonV2LocationgameindexAggregateModelSelector()
}

export const pokemonV2LocationgameindexAggregateModelPrimitives = selectFromPokemonV2LocationgameindexAggregate()
