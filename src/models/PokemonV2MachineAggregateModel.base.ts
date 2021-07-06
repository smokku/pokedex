/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MachineAggregateFieldsModel, PokemonV2MachineAggregateFieldsModelType } from "./PokemonV2MachineAggregateFieldsModel"
import { PokemonV2MachineAggregateFieldsModelSelector } from "./PokemonV2MachineAggregateFieldsModel.base"
import { PokemonV2MachineModel, PokemonV2MachineModelType } from "./PokemonV2MachineModel"
import { PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MachineAggregateBase
 * auto generated base class for the model PokemonV2MachineAggregateModel.
 *
 * aggregated selection of "pokemon_v2_machine"
 */
export const PokemonV2MachineAggregateModelBase = ModelBase
  .named('PokemonV2MachineAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_machine_aggregate"), "pokemon_v2_machine_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MachineAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MachineModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MachineAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MachineAggregateFieldsModelSelector | ((selector: PokemonV2MachineAggregateFieldsModelSelector) => PokemonV2MachineAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MachineAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MachineModelSelector | ((selector: PokemonV2MachineModelSelector) => PokemonV2MachineModelSelector)) { return this.__child(`nodes`, PokemonV2MachineModelSelector, builder) }
}
export function selectFromPokemonV2MachineAggregate() {
  return new PokemonV2MachineAggregateModelSelector()
}

export const pokemonV2MachineAggregateModelPrimitives = selectFromPokemonV2MachineAggregate()
