/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethodAggregateFieldsModel, PokemonV2MovelearnmethodAggregateFieldsModelType } from "./PokemonV2MovelearnmethodAggregateFieldsModel"
import { PokemonV2MovelearnmethodAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethodAggregateFieldsModel.base"
import { PokemonV2MovelearnmethodModel, PokemonV2MovelearnmethodModelType } from "./PokemonV2MovelearnmethodModel"
import { PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodAggregateBase
 * auto generated base class for the model PokemonV2MovelearnmethodAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodAggregateModelBase = ModelBase
  .named('PokemonV2MovelearnmethodAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_aggregate"), "pokemon_v2_movelearnmethod_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethodModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovelearnmethodAggregateFieldsModelSelector | ((selector: PokemonV2MovelearnmethodAggregateFieldsModelSelector) => PokemonV2MovelearnmethodAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovelearnmethodAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovelearnmethodModelSelector | ((selector: PokemonV2MovelearnmethodModelSelector) => PokemonV2MovelearnmethodModelSelector)) { return this.__child(`nodes`, PokemonV2MovelearnmethodModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethodAggregate() {
  return new PokemonV2MovelearnmethodAggregateModelSelector()
}

export const pokemonV2MovelearnmethodAggregateModelPrimitives = selectFromPokemonV2MovelearnmethodAggregate()
