/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityAggregateFieldsModel, PokemonV2AbilityAggregateFieldsModelType } from "./PokemonV2AbilityAggregateFieldsModel"
import { PokemonV2AbilityAggregateFieldsModelSelector } from "./PokemonV2AbilityAggregateFieldsModel.base"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityAggregateBase
 * auto generated base class for the model PokemonV2AbilityAggregateModel.
 *
 * aggregated selection of "pokemon_v2_ability"
 */
export const PokemonV2AbilityAggregateModelBase = ModelBase
  .named('PokemonV2AbilityAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_ability_aggregate"), "pokemon_v2_ability_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilityAggregateFieldsModelSelector | ((selector: PokemonV2AbilityAggregateFieldsModelSelector) => PokemonV2AbilityAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilityAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`nodes`, PokemonV2AbilityModelSelector, builder) }
}
export function selectFromPokemonV2AbilityAggregate() {
  return new PokemonV2AbilityAggregateModelSelector()
}

export const pokemonV2AbilityAggregateModelPrimitives = selectFromPokemonV2AbilityAggregate()
