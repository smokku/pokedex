/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformtypeAggregateFieldsModel, PokemonV2PokemonformtypeAggregateFieldsModelType } from "./PokemonV2PokemonformtypeAggregateFieldsModel"
import { PokemonV2PokemonformtypeAggregateFieldsModelSelector } from "./PokemonV2PokemonformtypeAggregateFieldsModel.base"
import { PokemonV2PokemonformtypeModel, PokemonV2PokemonformtypeModelType } from "./PokemonV2PokemonformtypeModel"
import { PokemonV2PokemonformtypeModelSelector } from "./PokemonV2PokemonformtypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeAggregateBase
 * auto generated base class for the model PokemonV2PokemonformtypeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeAggregateModelBase = ModelBase
  .named('PokemonV2PokemonformtypeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype_aggregate"), "pokemon_v2_pokemonformtype_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformtypeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformtypeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonformtypeAggregateFieldsModelSelector | ((selector: PokemonV2PokemonformtypeAggregateFieldsModelSelector) => PokemonV2PokemonformtypeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonformtypeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonformtypeModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformtypeAggregate() {
  return new PokemonV2PokemonformtypeAggregateModelSelector()
}

export const pokemonV2PokemonformtypeAggregateModelPrimitives = selectFromPokemonV2PokemonformtypeAggregate()
