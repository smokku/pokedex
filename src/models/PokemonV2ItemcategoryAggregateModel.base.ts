/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategoryAggregateFieldsModel, PokemonV2ItemcategoryAggregateFieldsModelType } from "./PokemonV2ItemcategoryAggregateFieldsModel"
import { PokemonV2ItemcategoryAggregateFieldsModelSelector } from "./PokemonV2ItemcategoryAggregateFieldsModel.base"
import { PokemonV2ItemcategoryModel, PokemonV2ItemcategoryModelType } from "./PokemonV2ItemcategoryModel"
import { PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryAggregateBase
 * auto generated base class for the model PokemonV2ItemcategoryAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryAggregateModelBase = ModelBase
  .named('PokemonV2ItemcategoryAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_aggregate"), "pokemon_v2_itemcategory_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemcategoryModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemcategoryAggregateFieldsModelSelector | ((selector: PokemonV2ItemcategoryAggregateFieldsModelSelector) => PokemonV2ItemcategoryAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemcategoryAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemcategoryModelSelector | ((selector: PokemonV2ItemcategoryModelSelector) => PokemonV2ItemcategoryModelSelector)) { return this.__child(`nodes`, PokemonV2ItemcategoryModelSelector, builder) }
}
export function selectFromPokemonV2ItemcategoryAggregate() {
  return new PokemonV2ItemcategoryAggregateModelSelector()
}

export const pokemonV2ItemcategoryAggregateModelPrimitives = selectFromPokemonV2ItemcategoryAggregate()
