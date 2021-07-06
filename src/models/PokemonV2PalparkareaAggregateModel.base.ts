/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkareaAggregateFieldsModel, PokemonV2PalparkareaAggregateFieldsModelType } from "./PokemonV2PalparkareaAggregateFieldsModel"
import { PokemonV2PalparkareaAggregateFieldsModelSelector } from "./PokemonV2PalparkareaAggregateFieldsModel.base"
import { PokemonV2PalparkareaModel, PokemonV2PalparkareaModelType } from "./PokemonV2PalparkareaModel"
import { PokemonV2PalparkareaModelSelector } from "./PokemonV2PalparkareaModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaAggregateBase
 * auto generated base class for the model PokemonV2PalparkareaAggregateModel.
 *
 * aggregated selection of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaAggregateModelBase = ModelBase
  .named('PokemonV2PalparkareaAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_aggregate"), "pokemon_v2_palparkarea_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PalparkareaModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PalparkareaAggregateFieldsModelSelector | ((selector: PokemonV2PalparkareaAggregateFieldsModelSelector) => PokemonV2PalparkareaAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PalparkareaAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PalparkareaModelSelector | ((selector: PokemonV2PalparkareaModelSelector) => PokemonV2PalparkareaModelSelector)) { return this.__child(`nodes`, PokemonV2PalparkareaModelSelector, builder) }
}
export function selectFromPokemonV2PalparkareaAggregate() {
  return new PokemonV2PalparkareaAggregateModelSelector()
}

export const pokemonV2PalparkareaAggregateModelPrimitives = selectFromPokemonV2PalparkareaAggregate()
