/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemongameindexAggregateFieldsModel, PokemonV2PokemongameindexAggregateFieldsModelType } from "./PokemonV2PokemongameindexAggregateFieldsModel"
import { PokemonV2PokemongameindexAggregateFieldsModelSelector } from "./PokemonV2PokemongameindexAggregateFieldsModel.base"
import { PokemonV2PokemongameindexModel, PokemonV2PokemongameindexModelType } from "./PokemonV2PokemongameindexModel"
import { PokemonV2PokemongameindexModelSelector } from "./PokemonV2PokemongameindexModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexAggregateBase
 * auto generated base class for the model PokemonV2PokemongameindexAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexAggregateModelBase = ModelBase
  .named('PokemonV2PokemongameindexAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_aggregate"), "pokemon_v2_pokemongameindex_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemongameindexModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemongameindexAggregateFieldsModelSelector | ((selector: PokemonV2PokemongameindexAggregateFieldsModelSelector) => PokemonV2PokemongameindexAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemongameindexAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`nodes`, PokemonV2PokemongameindexModelSelector, builder) }
}
export function selectFromPokemonV2PokemongameindexAggregate() {
  return new PokemonV2PokemongameindexAggregateModelSelector()
}

export const pokemonV2PokemongameindexAggregateModelPrimitives = selectFromPokemonV2PokemongameindexAggregate()
