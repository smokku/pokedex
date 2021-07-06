/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicAggregateFieldsModel, PokemonV2CharacteristicAggregateFieldsModelType } from "./PokemonV2CharacteristicAggregateFieldsModel"
import { PokemonV2CharacteristicAggregateFieldsModelSelector } from "./PokemonV2CharacteristicAggregateFieldsModel.base"
import { PokemonV2CharacteristicModel, PokemonV2CharacteristicModelType } from "./PokemonV2CharacteristicModel"
import { PokemonV2CharacteristicModelSelector } from "./PokemonV2CharacteristicModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicAggregateBase
 * auto generated base class for the model PokemonV2CharacteristicAggregateModel.
 *
 * aggregated selection of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicAggregateModelBase = ModelBase
  .named('PokemonV2CharacteristicAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_aggregate"), "pokemon_v2_characteristic_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2CharacteristicModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2CharacteristicAggregateFieldsModelSelector | ((selector: PokemonV2CharacteristicAggregateFieldsModelSelector) => PokemonV2CharacteristicAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2CharacteristicAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2CharacteristicModelSelector | ((selector: PokemonV2CharacteristicModelSelector) => PokemonV2CharacteristicModelSelector)) { return this.__child(`nodes`, PokemonV2CharacteristicModelSelector, builder) }
}
export function selectFromPokemonV2CharacteristicAggregate() {
  return new PokemonV2CharacteristicAggregateModelSelector()
}

export const pokemonV2CharacteristicAggregateModelPrimitives = selectFromPokemonV2CharacteristicAggregate()
