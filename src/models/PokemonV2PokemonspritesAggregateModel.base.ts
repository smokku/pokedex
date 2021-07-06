/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspritesAggregateFieldsModel, PokemonV2PokemonspritesAggregateFieldsModelType } from "./PokemonV2PokemonspritesAggregateFieldsModel"
import { PokemonV2PokemonspritesAggregateFieldsModelSelector } from "./PokemonV2PokemonspritesAggregateFieldsModel.base"
import { PokemonV2PokemonspritesModel, PokemonV2PokemonspritesModelType } from "./PokemonV2PokemonspritesModel"
import { PokemonV2PokemonspritesModelSelector } from "./PokemonV2PokemonspritesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesAggregateBase
 * auto generated base class for the model PokemonV2PokemonspritesAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesAggregateModelBase = ModelBase
  .named('PokemonV2PokemonspritesAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_aggregate"), "pokemon_v2_pokemonsprites_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspritesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonspritesAggregateFieldsModelSelector | ((selector: PokemonV2PokemonspritesAggregateFieldsModelSelector) => PokemonV2PokemonspritesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonspritesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonspritesModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspritesAggregate() {
  return new PokemonV2PokemonspritesAggregateModelSelector()
}

export const pokemonV2PokemonspritesAggregateModelPrimitives = selectFromPokemonV2PokemonspritesAggregate()
