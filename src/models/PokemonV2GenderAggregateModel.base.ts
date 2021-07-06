/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenderAggregateFieldsModel, PokemonV2GenderAggregateFieldsModelType } from "./PokemonV2GenderAggregateFieldsModel"
import { PokemonV2GenderAggregateFieldsModelSelector } from "./PokemonV2GenderAggregateFieldsModel.base"
import { PokemonV2GenderModel, PokemonV2GenderModelType } from "./PokemonV2GenderModel"
import { PokemonV2GenderModelSelector } from "./PokemonV2GenderModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderAggregateBase
 * auto generated base class for the model PokemonV2GenderAggregateModel.
 *
 * aggregated selection of "pokemon_v2_gender"
 */
export const PokemonV2GenderAggregateModelBase = ModelBase
  .named('PokemonV2GenderAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_aggregate"), "pokemon_v2_gender_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenderModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2GenderAggregateFieldsModelSelector | ((selector: PokemonV2GenderAggregateFieldsModelSelector) => PokemonV2GenderAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2GenderAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2GenderModelSelector | ((selector: PokemonV2GenderModelSelector) => PokemonV2GenderModelSelector)) { return this.__child(`nodes`, PokemonV2GenderModelSelector, builder) }
}
export function selectFromPokemonV2GenderAggregate() {
  return new PokemonV2GenderAggregateModelSelector()
}

export const pokemonV2GenderAggregateModelPrimitives = selectFromPokemonV2GenderAggregate()
