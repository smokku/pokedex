/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterslotAggregateFieldsModel, PokemonV2EncounterslotAggregateFieldsModelType } from "./PokemonV2EncounterslotAggregateFieldsModel"
import { PokemonV2EncounterslotAggregateFieldsModelSelector } from "./PokemonV2EncounterslotAggregateFieldsModel.base"
import { PokemonV2EncounterslotModel, PokemonV2EncounterslotModelType } from "./PokemonV2EncounterslotModel"
import { PokemonV2EncounterslotModelSelector } from "./PokemonV2EncounterslotModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterslotAggregateBase
 * auto generated base class for the model PokemonV2EncounterslotAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotAggregateModelBase = ModelBase
  .named('PokemonV2EncounterslotAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterslot_aggregate"), "pokemon_v2_encounterslot_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterslotModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterslotAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterslotAggregateFieldsModelSelector | ((selector: PokemonV2EncounterslotAggregateFieldsModelSelector) => PokemonV2EncounterslotAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterslotAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterslotModelSelector | ((selector: PokemonV2EncounterslotModelSelector) => PokemonV2EncounterslotModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterslotModelSelector, builder) }
}
export function selectFromPokemonV2EncounterslotAggregate() {
  return new PokemonV2EncounterslotAggregateModelSelector()
}

export const pokemonV2EncounterslotAggregateModelPrimitives = selectFromPokemonV2EncounterslotAggregate()
