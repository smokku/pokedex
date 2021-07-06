/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemontypepastAggregateFieldsModel, PokemonV2PokemontypepastAggregateFieldsModelType } from "./PokemonV2PokemontypepastAggregateFieldsModel"
import { PokemonV2PokemontypepastAggregateFieldsModelSelector } from "./PokemonV2PokemontypepastAggregateFieldsModel.base"
import { PokemonV2PokemontypepastModel, PokemonV2PokemontypepastModelType } from "./PokemonV2PokemontypepastModel"
import { PokemonV2PokemontypepastModelSelector } from "./PokemonV2PokemontypepastModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastAggregateBase
 * auto generated base class for the model PokemonV2PokemontypepastAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastAggregateModelBase = ModelBase
  .named('PokemonV2PokemontypepastAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_aggregate"), "pokemon_v2_pokemontypepast_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypepastModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypepastAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemontypepastAggregateFieldsModelSelector | ((selector: PokemonV2PokemontypepastAggregateFieldsModelSelector) => PokemonV2PokemontypepastAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemontypepastAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`nodes`, PokemonV2PokemontypepastModelSelector, builder) }
}
export function selectFromPokemonV2PokemontypepastAggregate() {
  return new PokemonV2PokemontypepastAggregateModelSelector()
}

export const pokemonV2PokemontypepastAggregateModelPrimitives = selectFromPokemonV2PokemontypepastAggregate()
