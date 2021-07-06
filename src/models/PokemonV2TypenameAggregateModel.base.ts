/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypenameAggregateFieldsModel, PokemonV2TypenameAggregateFieldsModelType } from "./PokemonV2TypenameAggregateFieldsModel"
import { PokemonV2TypenameAggregateFieldsModelSelector } from "./PokemonV2TypenameAggregateFieldsModel.base"
import { PokemonV2TypenameModel, PokemonV2TypenameModelType } from "./PokemonV2TypenameModel"
import { PokemonV2TypenameModelSelector } from "./PokemonV2TypenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameAggregateBase
 * auto generated base class for the model PokemonV2TypenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_typename"
 */
export const PokemonV2TypenameAggregateModelBase = ModelBase
  .named('PokemonV2TypenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_aggregate"), "pokemon_v2_typename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2TypenameAggregateFieldsModelSelector | ((selector: PokemonV2TypenameAggregateFieldsModelSelector) => PokemonV2TypenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2TypenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`nodes`, PokemonV2TypenameModelSelector, builder) }
}
export function selectFromPokemonV2TypenameAggregate() {
  return new PokemonV2TypenameAggregateModelSelector()
}

export const pokemonV2TypenameAggregateModelPrimitives = selectFromPokemonV2TypenameAggregate()
