/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationnameAggregateFieldsModel, PokemonV2GenerationnameAggregateFieldsModelType } from "./PokemonV2GenerationnameAggregateFieldsModel"
import { PokemonV2GenerationnameAggregateFieldsModelSelector } from "./PokemonV2GenerationnameAggregateFieldsModel.base"
import { PokemonV2GenerationnameModel, PokemonV2GenerationnameModelType } from "./PokemonV2GenerationnameModel"
import { PokemonV2GenerationnameModelSelector } from "./PokemonV2GenerationnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationnameAggregateBase
 * auto generated base class for the model PokemonV2GenerationnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_generationname"
 */
export const PokemonV2GenerationnameAggregateModelBase = ModelBase
  .named('PokemonV2GenerationnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generationname_aggregate"), "pokemon_v2_generationname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2GenerationnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2GenerationnameAggregateFieldsModelSelector | ((selector: PokemonV2GenerationnameAggregateFieldsModelSelector) => PokemonV2GenerationnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2GenerationnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2GenerationnameModelSelector | ((selector: PokemonV2GenerationnameModelSelector) => PokemonV2GenerationnameModelSelector)) { return this.__child(`nodes`, PokemonV2GenerationnameModelSelector, builder) }
}
export function selectFromPokemonV2GenerationnameAggregate() {
  return new PokemonV2GenerationnameAggregateModelSelector()
}

export const pokemonV2GenerationnameAggregateModelPrimitives = selectFromPokemonV2GenerationnameAggregate()
