/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformAggregateFieldsModel, PokemonV2PokemonformAggregateFieldsModelType } from "./PokemonV2PokemonformAggregateFieldsModel"
import { PokemonV2PokemonformAggregateFieldsModelSelector } from "./PokemonV2PokemonformAggregateFieldsModel.base"
import { PokemonV2PokemonformModel, PokemonV2PokemonformModelType } from "./PokemonV2PokemonformModel"
import { PokemonV2PokemonformModelSelector } from "./PokemonV2PokemonformModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformAggregateBase
 * auto generated base class for the model PokemonV2PokemonformAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformAggregateModelBase = ModelBase
  .named('PokemonV2PokemonformAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonform_aggregate"), "pokemon_v2_pokemonform_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonformAggregateFieldsModelSelector | ((selector: PokemonV2PokemonformAggregateFieldsModelSelector) => PokemonV2PokemonformAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonformAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonformModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformAggregate() {
  return new PokemonV2PokemonformAggregateModelSelector()
}

export const pokemonV2PokemonformAggregateModelPrimitives = selectFromPokemonV2PokemonformAggregate()
