/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformspritesAggregateFieldsModel, PokemonV2PokemonformspritesAggregateFieldsModelType } from "./PokemonV2PokemonformspritesAggregateFieldsModel"
import { PokemonV2PokemonformspritesAggregateFieldsModelSelector } from "./PokemonV2PokemonformspritesAggregateFieldsModel.base"
import { PokemonV2PokemonformspritesModel, PokemonV2PokemonformspritesModelType } from "./PokemonV2PokemonformspritesModel"
import { PokemonV2PokemonformspritesModelSelector } from "./PokemonV2PokemonformspritesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesAggregateBase
 * auto generated base class for the model PokemonV2PokemonformspritesAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesAggregateModelBase = ModelBase
  .named('PokemonV2PokemonformspritesAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_aggregate"), "pokemon_v2_pokemonformsprites_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformspritesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonformspritesAggregateFieldsModelSelector | ((selector: PokemonV2PokemonformspritesAggregateFieldsModelSelector) => PokemonV2PokemonformspritesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonformspritesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonformspritesModelSelector | ((selector: PokemonV2PokemonformspritesModelSelector) => PokemonV2PokemonformspritesModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonformspritesModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformspritesAggregate() {
  return new PokemonV2PokemonformspritesAggregateModelSelector()
}

export const pokemonV2PokemonformspritesAggregateModelPrimitives = selectFromPokemonV2PokemonformspritesAggregate()
