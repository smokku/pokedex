/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodnameAggregateFieldsModel, PokemonV2EncountermethodnameAggregateFieldsModelType } from "./PokemonV2EncountermethodnameAggregateFieldsModel"
import { PokemonV2EncountermethodnameAggregateFieldsModelSelector } from "./PokemonV2EncountermethodnameAggregateFieldsModel.base"
import { PokemonV2EncountermethodnameModel, PokemonV2EncountermethodnameModelType } from "./PokemonV2EncountermethodnameModel"
import { PokemonV2EncountermethodnameModelSelector } from "./PokemonV2EncountermethodnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodnameAggregateBase
 * auto generated base class for the model PokemonV2EncountermethodnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameAggregateModelBase = ModelBase
  .named('PokemonV2EncountermethodnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethodname_aggregate"), "pokemon_v2_encountermethodname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncountermethodnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncountermethodnameAggregateFieldsModelSelector | ((selector: PokemonV2EncountermethodnameAggregateFieldsModelSelector) => PokemonV2EncountermethodnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncountermethodnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncountermethodnameModelSelector | ((selector: PokemonV2EncountermethodnameModelSelector) => PokemonV2EncountermethodnameModelSelector)) { return this.__child(`nodes`, PokemonV2EncountermethodnameModelSelector, builder) }
}
export function selectFromPokemonV2EncountermethodnameAggregate() {
  return new PokemonV2EncountermethodnameAggregateModelSelector()
}

export const pokemonV2EncountermethodnameAggregateModelPrimitives = selectFromPokemonV2EncountermethodnameAggregate()
