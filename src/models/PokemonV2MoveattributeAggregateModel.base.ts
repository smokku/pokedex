/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributeAggregateFieldsModel, PokemonV2MoveattributeAggregateFieldsModelType } from "./PokemonV2MoveattributeAggregateFieldsModel"
import { PokemonV2MoveattributeAggregateFieldsModelSelector } from "./PokemonV2MoveattributeAggregateFieldsModel.base"
import { PokemonV2MoveattributeModel, PokemonV2MoveattributeModelType } from "./PokemonV2MoveattributeModel"
import { PokemonV2MoveattributeModelSelector } from "./PokemonV2MoveattributeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributeAggregateBase
 * auto generated base class for the model PokemonV2MoveattributeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeAggregateModelBase = ModelBase
  .named('PokemonV2MoveattributeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattribute_aggregate"), "pokemon_v2_moveattribute_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveattributeAggregateFieldsModelSelector | ((selector: PokemonV2MoveattributeAggregateFieldsModelSelector) => PokemonV2MoveattributeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveattributeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveattributeModelSelector | ((selector: PokemonV2MoveattributeModelSelector) => PokemonV2MoveattributeModelSelector)) { return this.__child(`nodes`, PokemonV2MoveattributeModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributeAggregate() {
  return new PokemonV2MoveattributeAggregateModelSelector()
}

export const pokemonV2MoveattributeAggregateModelPrimitives = selectFromPokemonV2MoveattributeAggregate()
