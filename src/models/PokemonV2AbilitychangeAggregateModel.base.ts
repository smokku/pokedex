/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeAggregateFieldsModel, PokemonV2AbilitychangeAggregateFieldsModelType } from "./PokemonV2AbilitychangeAggregateFieldsModel"
import { PokemonV2AbilitychangeAggregateFieldsModelSelector } from "./PokemonV2AbilitychangeAggregateFieldsModel.base"
import { PokemonV2AbilitychangeModel, PokemonV2AbilitychangeModelType } from "./PokemonV2AbilitychangeModel"
import { PokemonV2AbilitychangeModelSelector } from "./PokemonV2AbilitychangeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeAggregateBase
 * auto generated base class for the model PokemonV2AbilitychangeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeAggregateModelBase = ModelBase
  .named('PokemonV2AbilitychangeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychange_aggregate"), "pokemon_v2_abilitychange_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilitychangeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilitychangeAggregateFieldsModelSelector | ((selector: PokemonV2AbilitychangeAggregateFieldsModelSelector) => PokemonV2AbilitychangeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilitychangeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilitychangeModelSelector | ((selector: PokemonV2AbilitychangeModelSelector) => PokemonV2AbilitychangeModelSelector)) { return this.__child(`nodes`, PokemonV2AbilitychangeModelSelector, builder) }
}
export function selectFromPokemonV2AbilitychangeAggregate() {
  return new PokemonV2AbilitychangeAggregateModelSelector()
}

export const pokemonV2AbilitychangeAggregateModelPrimitives = selectFromPokemonV2AbilitychangeAggregate()
