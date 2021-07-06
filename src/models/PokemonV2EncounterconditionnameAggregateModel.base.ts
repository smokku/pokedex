/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionnameAggregateFieldsModel, PokemonV2EncounterconditionnameAggregateFieldsModelType } from "./PokemonV2EncounterconditionnameAggregateFieldsModel"
import { PokemonV2EncounterconditionnameAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionnameAggregateFieldsModel.base"
import { PokemonV2EncounterconditionnameModel, PokemonV2EncounterconditionnameModelType } from "./PokemonV2EncounterconditionnameModel"
import { PokemonV2EncounterconditionnameModelSelector } from "./PokemonV2EncounterconditionnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionnameAggregateBase
 * auto generated base class for the model PokemonV2EncounterconditionnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameAggregateModelBase = ModelBase
  .named('PokemonV2EncounterconditionnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionname_aggregate"), "pokemon_v2_encounterconditionname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterconditionnameAggregateFieldsModelSelector | ((selector: PokemonV2EncounterconditionnameAggregateFieldsModelSelector) => PokemonV2EncounterconditionnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterconditionnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterconditionnameModelSelector | ((selector: PokemonV2EncounterconditionnameModelSelector) => PokemonV2EncounterconditionnameModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterconditionnameModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionnameAggregate() {
  return new PokemonV2EncounterconditionnameAggregateModelSelector()
}

export const pokemonV2EncounterconditionnameAggregateModelPrimitives = selectFromPokemonV2EncounterconditionnameAggregate()
