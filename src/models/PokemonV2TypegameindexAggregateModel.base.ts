/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypegameindexAggregateFieldsModel, PokemonV2TypegameindexAggregateFieldsModelType } from "./PokemonV2TypegameindexAggregateFieldsModel"
import { PokemonV2TypegameindexAggregateFieldsModelSelector } from "./PokemonV2TypegameindexAggregateFieldsModel.base"
import { PokemonV2TypegameindexModel, PokemonV2TypegameindexModelType } from "./PokemonV2TypegameindexModel"
import { PokemonV2TypegameindexModelSelector } from "./PokemonV2TypegameindexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexAggregateBase
 * auto generated base class for the model PokemonV2TypegameindexAggregateModel.
 *
 * aggregated selection of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexAggregateModelBase = ModelBase
  .named('PokemonV2TypegameindexAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_aggregate"), "pokemon_v2_typegameindex_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypegameindexModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypegameindexAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2TypegameindexAggregateFieldsModelSelector | ((selector: PokemonV2TypegameindexAggregateFieldsModelSelector) => PokemonV2TypegameindexAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2TypegameindexAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`nodes`, PokemonV2TypegameindexModelSelector, builder) }
}
export function selectFromPokemonV2TypegameindexAggregate() {
  return new PokemonV2TypegameindexAggregateModelSelector()
}

export const pokemonV2TypegameindexAggregateModelPrimitives = selectFromPokemonV2TypegameindexAggregate()
