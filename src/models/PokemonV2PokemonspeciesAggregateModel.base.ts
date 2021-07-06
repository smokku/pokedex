/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesAggregateFieldsModel, PokemonV2PokemonspeciesAggregateFieldsModelType } from "./PokemonV2PokemonspeciesAggregateFieldsModel"
import { PokemonV2PokemonspeciesAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesAggregateFieldsModel.base"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesAggregateBase
 * auto generated base class for the model PokemonV2PokemonspeciesAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesAggregateModelBase = ModelBase
  .named('PokemonV2PokemonspeciesAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspecies_aggregate"), "pokemon_v2_pokemonspecies_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonspeciesAggregateFieldsModelSelector | ((selector: PokemonV2PokemonspeciesAggregateFieldsModelSelector) => PokemonV2PokemonspeciesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonspeciesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonspeciesModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesAggregate() {
  return new PokemonV2PokemonspeciesAggregateModelSelector()
}

export const pokemonV2PokemonspeciesAggregateModelPrimitives = selectFromPokemonV2PokemonspeciesAggregate()
