/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemontypeAggregateFieldsModel, PokemonV2PokemontypeAggregateFieldsModelType } from "./PokemonV2PokemontypeAggregateFieldsModel"
import { PokemonV2PokemontypeAggregateFieldsModelSelector } from "./PokemonV2PokemontypeAggregateFieldsModel.base"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypeAggregateBase
 * auto generated base class for the model PokemonV2PokemontypeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeAggregateModelBase = ModelBase
  .named('PokemonV2PokemontypeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontype_aggregate"), "pokemon_v2_pokemontype_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemontypeAggregateFieldsModelSelector | ((selector: PokemonV2PokemontypeAggregateFieldsModelSelector) => PokemonV2PokemontypeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemontypeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`nodes`, PokemonV2PokemontypeModelSelector, builder) }
}
export function selectFromPokemonV2PokemontypeAggregate() {
  return new PokemonV2PokemontypeAggregateModelSelector()
}

export const pokemonV2PokemontypeAggregateModelPrimitives = selectFromPokemonV2PokemontypeAggregate()
