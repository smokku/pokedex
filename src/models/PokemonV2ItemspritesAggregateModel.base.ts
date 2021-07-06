/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemspritesAggregateFieldsModel, PokemonV2ItemspritesAggregateFieldsModelType } from "./PokemonV2ItemspritesAggregateFieldsModel"
import { PokemonV2ItemspritesAggregateFieldsModelSelector } from "./PokemonV2ItemspritesAggregateFieldsModel.base"
import { PokemonV2ItemspritesModel, PokemonV2ItemspritesModelType } from "./PokemonV2ItemspritesModel"
import { PokemonV2ItemspritesModelSelector } from "./PokemonV2ItemspritesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesAggregateBase
 * auto generated base class for the model PokemonV2ItemspritesAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesAggregateModelBase = ModelBase
  .named('PokemonV2ItemspritesAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_aggregate"), "pokemon_v2_itemsprites_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemspritesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemspritesAggregateFieldsModelSelector | ((selector: PokemonV2ItemspritesAggregateFieldsModelSelector) => PokemonV2ItemspritesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemspritesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemspritesModelSelector | ((selector: PokemonV2ItemspritesModelSelector) => PokemonV2ItemspritesModelSelector)) { return this.__child(`nodes`, PokemonV2ItemspritesModelSelector, builder) }
}
export function selectFromPokemonV2ItemspritesAggregate() {
  return new PokemonV2ItemspritesAggregateModelSelector()
}

export const pokemonV2ItemspritesAggregateModelPrimitives = selectFromPokemonV2ItemspritesAggregate()
