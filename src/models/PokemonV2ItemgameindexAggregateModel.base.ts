/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemgameindexAggregateFieldsModel, PokemonV2ItemgameindexAggregateFieldsModelType } from "./PokemonV2ItemgameindexAggregateFieldsModel"
import { PokemonV2ItemgameindexAggregateFieldsModelSelector } from "./PokemonV2ItemgameindexAggregateFieldsModel.base"
import { PokemonV2ItemgameindexModel, PokemonV2ItemgameindexModelType } from "./PokemonV2ItemgameindexModel"
import { PokemonV2ItemgameindexModelSelector } from "./PokemonV2ItemgameindexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexAggregateBase
 * auto generated base class for the model PokemonV2ItemgameindexAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexAggregateModelBase = ModelBase
  .named('PokemonV2ItemgameindexAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex_aggregate"), "pokemon_v2_itemgameindex_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemgameindexModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemgameindexAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemgameindexAggregateFieldsModelSelector | ((selector: PokemonV2ItemgameindexAggregateFieldsModelSelector) => PokemonV2ItemgameindexAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemgameindexAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemgameindexModelSelector | ((selector: PokemonV2ItemgameindexModelSelector) => PokemonV2ItemgameindexModelSelector)) { return this.__child(`nodes`, PokemonV2ItemgameindexModelSelector, builder) }
}
export function selectFromPokemonV2ItemgameindexAggregate() {
  return new PokemonV2ItemgameindexAggregateModelSelector()
}

export const pokemonV2ItemgameindexAggregateModelPrimitives = selectFromPokemonV2ItemgameindexAggregate()
