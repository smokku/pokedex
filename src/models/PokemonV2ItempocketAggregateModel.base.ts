/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItempocketAggregateFieldsModel, PokemonV2ItempocketAggregateFieldsModelType } from "./PokemonV2ItempocketAggregateFieldsModel"
import { PokemonV2ItempocketAggregateFieldsModelSelector } from "./PokemonV2ItempocketAggregateFieldsModel.base"
import { PokemonV2ItempocketModel, PokemonV2ItempocketModelType } from "./PokemonV2ItempocketModel"
import { PokemonV2ItempocketModelSelector } from "./PokemonV2ItempocketModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketAggregateBase
 * auto generated base class for the model PokemonV2ItempocketAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketAggregateModelBase = ModelBase
  .named('PokemonV2ItempocketAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_aggregate"), "pokemon_v2_itempocket_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItempocketModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItempocketAggregateFieldsModelSelector | ((selector: PokemonV2ItempocketAggregateFieldsModelSelector) => PokemonV2ItempocketAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItempocketAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItempocketModelSelector | ((selector: PokemonV2ItempocketModelSelector) => PokemonV2ItempocketModelSelector)) { return this.__child(`nodes`, PokemonV2ItempocketModelSelector, builder) }
}
export function selectFromPokemonV2ItempocketAggregate() {
  return new PokemonV2ItempocketAggregateModelSelector()
}

export const pokemonV2ItempocketAggregateModelPrimitives = selectFromPokemonV2ItempocketAggregate()
