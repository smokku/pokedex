/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterAggregateFieldsModel, PokemonV2EncounterAggregateFieldsModelType } from "./PokemonV2EncounterAggregateFieldsModel"
import { PokemonV2EncounterAggregateFieldsModelSelector } from "./PokemonV2EncounterAggregateFieldsModel.base"
import { PokemonV2EncounterModel, PokemonV2EncounterModelType } from "./PokemonV2EncounterModel"
import { PokemonV2EncounterModelSelector } from "./PokemonV2EncounterModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterAggregateBase
 * auto generated base class for the model PokemonV2EncounterAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterAggregateModelBase = ModelBase
  .named('PokemonV2EncounterAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounter_aggregate"), "pokemon_v2_encounter_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterAggregateFieldsModelSelector | ((selector: PokemonV2EncounterAggregateFieldsModelSelector) => PokemonV2EncounterAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterModelSelector, builder) }
}
export function selectFromPokemonV2EncounterAggregate() {
  return new PokemonV2EncounterAggregateModelSelector()
}

export const pokemonV2EncounterAggregateModelPrimitives = selectFromPokemonV2EncounterAggregate()
