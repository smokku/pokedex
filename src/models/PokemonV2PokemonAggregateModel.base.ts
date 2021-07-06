/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonAggregateFieldsModel, PokemonV2PokemonAggregateFieldsModelType } from "./PokemonV2PokemonAggregateFieldsModel"
import { PokemonV2PokemonAggregateFieldsModelSelector } from "./PokemonV2PokemonAggregateFieldsModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonAggregateBase
 * auto generated base class for the model PokemonV2PokemonAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonAggregateModelBase = ModelBase
  .named('PokemonV2PokemonAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemon_aggregate"), "pokemon_v2_pokemon_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonAggregateFieldsModelSelector | ((selector: PokemonV2PokemonAggregateFieldsModelSelector) => PokemonV2PokemonAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonModelSelector, builder) }
}
export function selectFromPokemonV2PokemonAggregate() {
  return new PokemonV2PokemonAggregateModelSelector()
}

export const pokemonV2PokemonAggregateModelPrimitives = selectFromPokemonV2PokemonAggregate()
