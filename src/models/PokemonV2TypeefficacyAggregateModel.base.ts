/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypeefficacyAggregateFieldsModel, PokemonV2TypeefficacyAggregateFieldsModelType } from "./PokemonV2TypeefficacyAggregateFieldsModel"
import { PokemonV2TypeefficacyAggregateFieldsModelSelector } from "./PokemonV2TypeefficacyAggregateFieldsModel.base"
import { PokemonV2TypeefficacyModel, PokemonV2TypeefficacyModelType } from "./PokemonV2TypeefficacyModel"
import { PokemonV2TypeefficacyModelSelector } from "./PokemonV2TypeefficacyModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyAggregateBase
 * auto generated base class for the model PokemonV2TypeefficacyAggregateModel.
 *
 * aggregated selection of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyAggregateModelBase = ModelBase
  .named('PokemonV2TypeefficacyAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy_aggregate"), "pokemon_v2_typeefficacy_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeefficacyModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeefficacyAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2TypeefficacyAggregateFieldsModelSelector | ((selector: PokemonV2TypeefficacyAggregateFieldsModelSelector) => PokemonV2TypeefficacyAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2TypeefficacyAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`nodes`, PokemonV2TypeefficacyModelSelector, builder) }
}
export function selectFromPokemonV2TypeefficacyAggregate() {
  return new PokemonV2TypeefficacyAggregateModelSelector()
}

export const pokemonV2TypeefficacyAggregateModelPrimitives = selectFromPokemonV2TypeefficacyAggregate()
