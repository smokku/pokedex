/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflavortextAggregateFieldsModel, PokemonV2ItemflavortextAggregateFieldsModelType } from "./PokemonV2ItemflavortextAggregateFieldsModel"
import { PokemonV2ItemflavortextAggregateFieldsModelSelector } from "./PokemonV2ItemflavortextAggregateFieldsModel.base"
import { PokemonV2ItemflavortextModel, PokemonV2ItemflavortextModelType } from "./PokemonV2ItemflavortextModel"
import { PokemonV2ItemflavortextModelSelector } from "./PokemonV2ItemflavortextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflavortextAggregateBase
 * auto generated base class for the model PokemonV2ItemflavortextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemflavortext"
 */
export const PokemonV2ItemflavortextAggregateModelBase = ModelBase
  .named('PokemonV2ItemflavortextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflavortext_aggregate"), "pokemon_v2_itemflavortext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemflavortextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflavortextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemflavortextAggregateFieldsModelSelector | ((selector: PokemonV2ItemflavortextAggregateFieldsModelSelector) => PokemonV2ItemflavortextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemflavortextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemflavortextModelSelector | ((selector: PokemonV2ItemflavortextModelSelector) => PokemonV2ItemflavortextModelSelector)) { return this.__child(`nodes`, PokemonV2ItemflavortextModelSelector, builder) }
}
export function selectFromPokemonV2ItemflavortextAggregate() {
  return new PokemonV2ItemflavortextAggregateModelSelector()
}

export const pokemonV2ItemflavortextAggregateModelPrimitives = selectFromPokemonV2ItemflavortextAggregate()
