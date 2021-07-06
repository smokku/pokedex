/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodAggregateFieldsModel, PokemonV2EncountermethodAggregateFieldsModelType } from "./PokemonV2EncountermethodAggregateFieldsModel"
import { PokemonV2EncountermethodAggregateFieldsModelSelector } from "./PokemonV2EncountermethodAggregateFieldsModel.base"
import { PokemonV2EncountermethodModel, PokemonV2EncountermethodModelType } from "./PokemonV2EncountermethodModel"
import { PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodAggregateBase
 * auto generated base class for the model PokemonV2EncountermethodAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodAggregateModelBase = ModelBase
  .named('PokemonV2EncountermethodAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_aggregate"), "pokemon_v2_encountermethod_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncountermethodModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncountermethodAggregateFieldsModelSelector | ((selector: PokemonV2EncountermethodAggregateFieldsModelSelector) => PokemonV2EncountermethodAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncountermethodAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncountermethodModelSelector | ((selector: PokemonV2EncountermethodModelSelector) => PokemonV2EncountermethodModelSelector)) { return this.__child(`nodes`, PokemonV2EncountermethodModelSelector, builder) }
}
export function selectFromPokemonV2EncountermethodAggregate() {
  return new PokemonV2EncountermethodAggregateModelSelector()
}

export const pokemonV2EncountermethodAggregateModelPrimitives = selectFromPokemonV2EncountermethodAggregate()
