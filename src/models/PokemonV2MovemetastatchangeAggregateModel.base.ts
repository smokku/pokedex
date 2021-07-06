/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetastatchangeAggregateFieldsModel, PokemonV2MovemetastatchangeAggregateFieldsModelType } from "./PokemonV2MovemetastatchangeAggregateFieldsModel"
import { PokemonV2MovemetastatchangeAggregateFieldsModelSelector } from "./PokemonV2MovemetastatchangeAggregateFieldsModel.base"
import { PokemonV2MovemetastatchangeModel, PokemonV2MovemetastatchangeModelType } from "./PokemonV2MovemetastatchangeModel"
import { PokemonV2MovemetastatchangeModelSelector } from "./PokemonV2MovemetastatchangeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeAggregateBase
 * auto generated base class for the model PokemonV2MovemetastatchangeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeAggregateModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_aggregate"), "pokemon_v2_movemetastatchange_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovemetastatchangeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetastatchangeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovemetastatchangeAggregateFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeAggregateFieldsModelSelector) => PokemonV2MovemetastatchangeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovemetastatchangeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovemetastatchangeModelSelector | ((selector: PokemonV2MovemetastatchangeModelSelector) => PokemonV2MovemetastatchangeModelSelector)) { return this.__child(`nodes`, PokemonV2MovemetastatchangeModelSelector, builder) }
}
export function selectFromPokemonV2MovemetastatchangeAggregate() {
  return new PokemonV2MovemetastatchangeAggregateModelSelector()
}

export const pokemonV2MovemetastatchangeAggregateModelPrimitives = selectFromPokemonV2MovemetastatchangeAggregate()
