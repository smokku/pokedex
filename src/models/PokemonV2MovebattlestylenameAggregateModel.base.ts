/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestylenameAggregateFieldsModel, PokemonV2MovebattlestylenameAggregateFieldsModelType } from "./PokemonV2MovebattlestylenameAggregateFieldsModel"
import { PokemonV2MovebattlestylenameAggregateFieldsModelSelector } from "./PokemonV2MovebattlestylenameAggregateFieldsModel.base"
import { PokemonV2MovebattlestylenameModel, PokemonV2MovebattlestylenameModelType } from "./PokemonV2MovebattlestylenameModel"
import { PokemonV2MovebattlestylenameModelSelector } from "./PokemonV2MovebattlestylenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameAggregateBase
 * auto generated base class for the model PokemonV2MovebattlestylenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameAggregateModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_aggregate"), "pokemon_v2_movebattlestylename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovebattlestylenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovebattlestylenameAggregateFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameAggregateFieldsModelSelector) => PokemonV2MovebattlestylenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovebattlestylenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovebattlestylenameModelSelector | ((selector: PokemonV2MovebattlestylenameModelSelector) => PokemonV2MovebattlestylenameModelSelector)) { return this.__child(`nodes`, PokemonV2MovebattlestylenameModelSelector, builder) }
}
export function selectFromPokemonV2MovebattlestylenameAggregate() {
  return new PokemonV2MovebattlestylenameAggregateModelSelector()
}

export const pokemonV2MovebattlestylenameAggregateModelPrimitives = selectFromPokemonV2MovebattlestylenameAggregate()
