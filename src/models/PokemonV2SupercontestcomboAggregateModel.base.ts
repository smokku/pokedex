/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontestcomboAggregateFieldsModel, PokemonV2SupercontestcomboAggregateFieldsModelType } from "./PokemonV2SupercontestcomboAggregateFieldsModel"
import { PokemonV2SupercontestcomboAggregateFieldsModelSelector } from "./PokemonV2SupercontestcomboAggregateFieldsModel.base"
import { PokemonV2SupercontestcomboModel, PokemonV2SupercontestcomboModelType } from "./PokemonV2SupercontestcomboModel"
import { PokemonV2SupercontestcomboModelSelector } from "./PokemonV2SupercontestcomboModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontestcomboAggregateBase
 * auto generated base class for the model PokemonV2SupercontestcomboAggregateModel.
 *
 * aggregated selection of "pokemon_v2_supercontestcombo"
 */
export const PokemonV2SupercontestcomboAggregateModelBase = ModelBase
  .named('PokemonV2SupercontestcomboAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontestcombo_aggregate"), "pokemon_v2_supercontestcombo_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2SupercontestcomboModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontestcomboAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2SupercontestcomboAggregateFieldsModelSelector | ((selector: PokemonV2SupercontestcomboAggregateFieldsModelSelector) => PokemonV2SupercontestcomboAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2SupercontestcomboAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2SupercontestcomboModelSelector | ((selector: PokemonV2SupercontestcomboModelSelector) => PokemonV2SupercontestcomboModelSelector)) { return this.__child(`nodes`, PokemonV2SupercontestcomboModelSelector, builder) }
}
export function selectFromPokemonV2SupercontestcomboAggregate() {
  return new PokemonV2SupercontestcomboAggregateModelSelector()
}

export const pokemonV2SupercontestcomboAggregateModelPrimitives = selectFromPokemonV2SupercontestcomboAggregate()
