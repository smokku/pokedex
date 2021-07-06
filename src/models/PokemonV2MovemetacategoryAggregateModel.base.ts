/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetacategoryAggregateFieldsModel, PokemonV2MovemetacategoryAggregateFieldsModelType } from "./PokemonV2MovemetacategoryAggregateFieldsModel"
import { PokemonV2MovemetacategoryAggregateFieldsModelSelector } from "./PokemonV2MovemetacategoryAggregateFieldsModel.base"
import { PokemonV2MovemetacategoryModel, PokemonV2MovemetacategoryModelType } from "./PokemonV2MovemetacategoryModel"
import { PokemonV2MovemetacategoryModelSelector } from "./PokemonV2MovemetacategoryModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryAggregateBase
 * auto generated base class for the model PokemonV2MovemetacategoryAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryAggregateModelBase = ModelBase
  .named('PokemonV2MovemetacategoryAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_aggregate"), "pokemon_v2_movemetacategory_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetacategoryModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetacategoryAggregateFieldsModelSelector | ((selector: PokemonV2MovemetacategoryAggregateFieldsModelSelector) => PokemonV2MovemetacategoryAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetacategoryAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetacategoryModelSelector | ((selector: PokemonV2MovemetacategoryModelSelector) => PokemonV2MovemetacategoryModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetacategoryModelSelector, builder) }
}
export function selectFromPokemonV2MovemetacategoryAggregate() {
  return new PokemonV2MovemetacategoryAggregateModelSelector()
}

export const pokemonV2MovemetacategoryAggregateModelPrimitives = selectFromPokemonV2MovemetacategoryAggregate()
