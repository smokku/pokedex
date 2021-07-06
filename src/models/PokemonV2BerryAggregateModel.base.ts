/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryAggregateFieldsModel, PokemonV2BerryAggregateFieldsModelType } from "./PokemonV2BerryAggregateFieldsModel"
import { PokemonV2BerryAggregateFieldsModelSelector } from "./PokemonV2BerryAggregateFieldsModel.base"
import { PokemonV2BerryModel, PokemonV2BerryModelType } from "./PokemonV2BerryModel"
import { PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryAggregateBase
 * auto generated base class for the model PokemonV2BerryAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berry"
 */
export const PokemonV2BerryAggregateModelBase = ModelBase
  .named('PokemonV2BerryAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berry_aggregate"), "pokemon_v2_berry_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryAggregateFieldsModelSelector | ((selector: PokemonV2BerryAggregateFieldsModelSelector) => PokemonV2BerryAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`nodes`, PokemonV2BerryModelSelector, builder) }
}
export function selectFromPokemonV2BerryAggregate() {
  return new PokemonV2BerryAggregateModelSelector()
}

export const pokemonV2BerryAggregateModelPrimitives = selectFromPokemonV2BerryAggregate()
