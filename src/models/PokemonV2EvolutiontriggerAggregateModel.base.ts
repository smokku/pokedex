/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggerAggregateFieldsModel, PokemonV2EvolutiontriggerAggregateFieldsModelType } from "./PokemonV2EvolutiontriggerAggregateFieldsModel"
import { PokemonV2EvolutiontriggerAggregateFieldsModelSelector } from "./PokemonV2EvolutiontriggerAggregateFieldsModel.base"
import { PokemonV2EvolutiontriggerModel, PokemonV2EvolutiontriggerModelType } from "./PokemonV2EvolutiontriggerModel"
import { PokemonV2EvolutiontriggerModelSelector } from "./PokemonV2EvolutiontriggerModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerAggregateBase
 * auto generated base class for the model PokemonV2EvolutiontriggerAggregateModel.
 *
 * aggregated selection of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerAggregateModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_aggregate"), "pokemon_v2_evolutiontrigger_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EvolutiontriggerModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EvolutiontriggerAggregateFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerAggregateFieldsModelSelector) => PokemonV2EvolutiontriggerAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EvolutiontriggerAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EvolutiontriggerModelSelector | ((selector: PokemonV2EvolutiontriggerModelSelector) => PokemonV2EvolutiontriggerModelSelector)) { return this.__child(`nodes`, PokemonV2EvolutiontriggerModelSelector, builder) }
}
export function selectFromPokemonV2EvolutiontriggerAggregate() {
  return new PokemonV2EvolutiontriggerAggregateModelSelector()
}

export const pokemonV2EvolutiontriggerAggregateModelPrimitives = selectFromPokemonV2EvolutiontriggerAggregate()
