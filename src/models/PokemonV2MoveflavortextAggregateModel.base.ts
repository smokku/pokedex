/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveflavortextAggregateFieldsModel, PokemonV2MoveflavortextAggregateFieldsModelType } from "./PokemonV2MoveflavortextAggregateFieldsModel"
import { PokemonV2MoveflavortextAggregateFieldsModelSelector } from "./PokemonV2MoveflavortextAggregateFieldsModel.base"
import { PokemonV2MoveflavortextModel, PokemonV2MoveflavortextModelType } from "./PokemonV2MoveflavortextModel"
import { PokemonV2MoveflavortextModelSelector } from "./PokemonV2MoveflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextAggregateBase
 * auto generated base class for the model PokemonV2MoveflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextAggregateModelBase = ModelBase
  .named('PokemonV2MoveflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_aggregate"), "pokemon_v2_moveflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveflavortextAggregateFieldsModelSelector | ((selector: PokemonV2MoveflavortextAggregateFieldsModelSelector) => PokemonV2MoveflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveflavortextModelSelector | ((selector: PokemonV2MoveflavortextModelSelector) => PokemonV2MoveflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2MoveflavortextModelSelector, builder) }
}
export function selectFromPokemonV2MoveflavortextAggregate() {
  return new PokemonV2MoveflavortextAggregateModelSelector()
}

export const pokemonV2MoveflavortextAggregateModelPrimitives = selectFromPokemonV2MoveflavortextAggregate()
