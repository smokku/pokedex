/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributemapAggregateFieldsModel, PokemonV2ItemattributemapAggregateFieldsModelType } from "./PokemonV2ItemattributemapAggregateFieldsModel"
import { PokemonV2ItemattributemapAggregateFieldsModelSelector } from "./PokemonV2ItemattributemapAggregateFieldsModel.base"
import { PokemonV2ItemattributemapModel, PokemonV2ItemattributemapModelType } from "./PokemonV2ItemattributemapModel"
import { PokemonV2ItemattributemapModelSelector } from "./PokemonV2ItemattributemapModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapAggregateBase
 * auto generated base class for the model PokemonV2ItemattributemapAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapAggregateModelBase = ModelBase
  .named('PokemonV2ItemattributemapAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_aggregate"), "pokemon_v2_itemattributemap_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributemapModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemattributemapAggregateFieldsModelSelector | ((selector: PokemonV2ItemattributemapAggregateFieldsModelSelector) => PokemonV2ItemattributemapAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemattributemapAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`nodes`, PokemonV2ItemattributemapModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributemapAggregate() {
  return new PokemonV2ItemattributemapAggregateModelSelector()
}

export const pokemonV2ItemattributemapAggregateModelPrimitives = selectFromPokemonV2ItemattributemapAggregate()
