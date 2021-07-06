/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformgenerationAggregateFieldsModel, PokemonV2PokemonformgenerationAggregateFieldsModelType } from "./PokemonV2PokemonformgenerationAggregateFieldsModel"
import { PokemonV2PokemonformgenerationAggregateFieldsModelSelector } from "./PokemonV2PokemonformgenerationAggregateFieldsModel.base"
import { PokemonV2PokemonformgenerationModel, PokemonV2PokemonformgenerationModelType } from "./PokemonV2PokemonformgenerationModel"
import { PokemonV2PokemonformgenerationModelSelector } from "./PokemonV2PokemonformgenerationModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformgenerationAggregateBase
 * auto generated base class for the model PokemonV2PokemonformgenerationAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationAggregateModelBase = ModelBase
  .named('PokemonV2PokemonformgenerationAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformgeneration_aggregate"), "pokemon_v2_pokemonformgeneration_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformgenerationModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformgenerationAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonformgenerationAggregateFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationAggregateFieldsModelSelector) => PokemonV2PokemonformgenerationAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonformgenerationAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonformgenerationModelSelector | ((selector: PokemonV2PokemonformgenerationModelSelector) => PokemonV2PokemonformgenerationModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonformgenerationModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformgenerationAggregate() {
  return new PokemonV2PokemonformgenerationAggregateModelSelector()
}

export const pokemonV2PokemonformgenerationAggregateModelPrimitives = selectFromPokemonV2PokemonformgenerationAggregate()
