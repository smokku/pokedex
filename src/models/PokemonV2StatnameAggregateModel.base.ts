/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2StatnameAggregateFieldsModel, PokemonV2StatnameAggregateFieldsModelType } from "./PokemonV2StatnameAggregateFieldsModel"
import { PokemonV2StatnameAggregateFieldsModelSelector } from "./PokemonV2StatnameAggregateFieldsModel.base"
import { PokemonV2StatnameModel, PokemonV2StatnameModelType } from "./PokemonV2StatnameModel"
import { PokemonV2StatnameModelSelector } from "./PokemonV2StatnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameAggregateBase
 * auto generated base class for the model PokemonV2StatnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_statname"
 */
export const PokemonV2StatnameAggregateModelBase = ModelBase
  .named('PokemonV2StatnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_aggregate"), "pokemon_v2_statname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2StatnameAggregateFieldsModelSelector | ((selector: PokemonV2StatnameAggregateFieldsModelSelector) => PokemonV2StatnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2StatnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2StatnameModelSelector | ((selector: PokemonV2StatnameModelSelector) => PokemonV2StatnameModelSelector)) { return this.__child(`nodes`, PokemonV2StatnameModelSelector, builder) }
}
export function selectFromPokemonV2StatnameAggregate() {
  return new PokemonV2StatnameAggregateModelSelector()
}

export const pokemonV2StatnameAggregateModelPrimitives = selectFromPokemonV2StatnameAggregate()
