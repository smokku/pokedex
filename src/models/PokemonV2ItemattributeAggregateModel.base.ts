/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributeAggregateFieldsModel, PokemonV2ItemattributeAggregateFieldsModelType } from "./PokemonV2ItemattributeAggregateFieldsModel"
import { PokemonV2ItemattributeAggregateFieldsModelSelector } from "./PokemonV2ItemattributeAggregateFieldsModel.base"
import { PokemonV2ItemattributeModel, PokemonV2ItemattributeModelType } from "./PokemonV2ItemattributeModel"
import { PokemonV2ItemattributeModelSelector } from "./PokemonV2ItemattributeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeAggregateBase
 * auto generated base class for the model PokemonV2ItemattributeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeAggregateModelBase = ModelBase
  .named('PokemonV2ItemattributeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute_aggregate"), "pokemon_v2_itemattribute_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemattributeAggregateFieldsModelSelector | ((selector: PokemonV2ItemattributeAggregateFieldsModelSelector) => PokemonV2ItemattributeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemattributeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemattributeModelSelector | ((selector: PokemonV2ItemattributeModelSelector) => PokemonV2ItemattributeModelSelector)) { return this.__child(`nodes`, PokemonV2ItemattributeModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributeAggregate() {
  return new PokemonV2ItemattributeAggregateModelSelector()
}

export const pokemonV2ItemattributeAggregateModelPrimitives = selectFromPokemonV2ItemattributeAggregate()
