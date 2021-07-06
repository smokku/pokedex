/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemAggregateFieldsModel, PokemonV2ItemAggregateFieldsModelType } from "./PokemonV2ItemAggregateFieldsModel"
import { PokemonV2ItemAggregateFieldsModelSelector } from "./PokemonV2ItemAggregateFieldsModel.base"
import { PokemonV2ItemModel, PokemonV2ItemModelType } from "./PokemonV2ItemModel"
import { PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemAggregateBase
 * auto generated base class for the model PokemonV2ItemAggregateModel.
 *
 * aggregated selection of "pokemon_v2_item"
 */
export const PokemonV2ItemAggregateModelBase = ModelBase
  .named('PokemonV2ItemAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item_aggregate"), "pokemon_v2_item_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemAggregateFieldsModelSelector | ((selector: PokemonV2ItemAggregateFieldsModelSelector) => PokemonV2ItemAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemModelSelector | ((selector: PokemonV2ItemModelSelector) => PokemonV2ItemModelSelector)) { return this.__child(`nodes`, PokemonV2ItemModelSelector, builder) }
}
export function selectFromPokemonV2ItemAggregate() {
  return new PokemonV2ItemAggregateModelSelector()
}

export const pokemonV2ItemAggregateModelPrimitives = selectFromPokemonV2ItemAggregate()
