/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemondexnumberAggregateFieldsModel, PokemonV2PokemondexnumberAggregateFieldsModelType } from "./PokemonV2PokemondexnumberAggregateFieldsModel"
import { PokemonV2PokemondexnumberAggregateFieldsModelSelector } from "./PokemonV2PokemondexnumberAggregateFieldsModel.base"
import { PokemonV2PokemondexnumberModel, PokemonV2PokemondexnumberModelType } from "./PokemonV2PokemondexnumberModel"
import { PokemonV2PokemondexnumberModelSelector } from "./PokemonV2PokemondexnumberModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberAggregateBase
 * auto generated base class for the model PokemonV2PokemondexnumberAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberAggregateModelBase = ModelBase
  .named('PokemonV2PokemondexnumberAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_aggregate"), "pokemon_v2_pokemondexnumber_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemondexnumberModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemondexnumberAggregateFieldsModelSelector | ((selector: PokemonV2PokemondexnumberAggregateFieldsModelSelector) => PokemonV2PokemondexnumberAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemondexnumberAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemondexnumberModelSelector | ((selector: PokemonV2PokemondexnumberModelSelector) => PokemonV2PokemondexnumberModelSelector)) { return this.__child(`nodes`, PokemonV2PokemondexnumberModelSelector, builder) }
}
export function selectFromPokemonV2PokemondexnumberAggregate() {
  return new PokemonV2PokemondexnumberAggregateModelSelector()
}

export const pokemonV2PokemondexnumberAggregateModelPrimitives = selectFromPokemonV2PokemondexnumberAggregate()
