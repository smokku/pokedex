/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavormapAggregateFieldsModel, PokemonV2BerryflavormapAggregateFieldsModelType } from "./PokemonV2BerryflavormapAggregateFieldsModel"
import { PokemonV2BerryflavormapAggregateFieldsModelSelector } from "./PokemonV2BerryflavormapAggregateFieldsModel.base"
import { PokemonV2BerryflavormapModel, PokemonV2BerryflavormapModelType } from "./PokemonV2BerryflavormapModel"
import { PokemonV2BerryflavormapModelSelector } from "./PokemonV2BerryflavormapModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapAggregateBase
 * auto generated base class for the model PokemonV2BerryflavormapAggregateModel.
 *
 * aggregated selection of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapAggregateModelBase = ModelBase
  .named('PokemonV2BerryflavormapAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_aggregate"), "pokemon_v2_berryflavormap_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavormapModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2BerryflavormapAggregateFieldsModelSelector | ((selector: PokemonV2BerryflavormapAggregateFieldsModelSelector) => PokemonV2BerryflavormapAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2BerryflavormapAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`nodes`, PokemonV2BerryflavormapModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavormapAggregate() {
  return new PokemonV2BerryflavormapAggregateModelSelector()
}

export const pokemonV2BerryflavormapAggregateModelPrimitives = selectFromPokemonV2BerryflavormapAggregate()
