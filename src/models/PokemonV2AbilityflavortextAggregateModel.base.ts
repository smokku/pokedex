/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityflavortextAggregateFieldsModel, PokemonV2AbilityflavortextAggregateFieldsModelType } from "./PokemonV2AbilityflavortextAggregateFieldsModel"
import { PokemonV2AbilityflavortextAggregateFieldsModelSelector } from "./PokemonV2AbilityflavortextAggregateFieldsModel.base"
import { PokemonV2AbilityflavortextModel, PokemonV2AbilityflavortextModelType } from "./PokemonV2AbilityflavortextModel"
import { PokemonV2AbilityflavortextModelSelector } from "./PokemonV2AbilityflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextAggregateBase
 * auto generated base class for the model PokemonV2AbilityflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextAggregateModelBase = ModelBase
  .named('PokemonV2AbilityflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_aggregate"), "pokemon_v2_abilityflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2AbilityflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2AbilityflavortextAggregateFieldsModelSelector | ((selector: PokemonV2AbilityflavortextAggregateFieldsModelSelector) => PokemonV2AbilityflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2AbilityflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2AbilityflavortextModelSelector | ((selector: PokemonV2AbilityflavortextModelSelector) => PokemonV2AbilityflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2AbilityflavortextModelSelector, builder) }
}
export function selectFromPokemonV2AbilityflavortextAggregate() {
  return new PokemonV2AbilityflavortextAggregateModelSelector()
}

export const pokemonV2AbilityflavortextAggregateModelPrimitives = selectFromPokemonV2AbilityflavortextAggregate()
