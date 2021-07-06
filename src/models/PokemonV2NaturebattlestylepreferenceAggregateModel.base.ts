/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturebattlestylepreferenceAggregateFieldsModel, PokemonV2NaturebattlestylepreferenceAggregateFieldsModelType } from "./PokemonV2NaturebattlestylepreferenceAggregateFieldsModel"
import { PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateFieldsModel.base"
import { PokemonV2NaturebattlestylepreferenceModel, PokemonV2NaturebattlestylepreferenceModelType } from "./PokemonV2NaturebattlestylepreferenceModel"
import { PokemonV2NaturebattlestylepreferenceModelSelector } from "./PokemonV2NaturebattlestylepreferenceModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturebattlestylepreferenceAggregateBase
 * auto generated base class for the model PokemonV2NaturebattlestylepreferenceAggregateModel.
 *
 * aggregated selection of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceAggregateModelBase = ModelBase
  .named('PokemonV2NaturebattlestylepreferenceAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturebattlestylepreference_aggregate"), "pokemon_v2_naturebattlestylepreference_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturebattlestylepreferenceAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturebattlestylepreferenceModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturebattlestylepreferenceAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector) => PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2NaturebattlestylepreferenceAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2NaturebattlestylepreferenceModelSelector | ((selector: PokemonV2NaturebattlestylepreferenceModelSelector) => PokemonV2NaturebattlestylepreferenceModelSelector)) { return this.__child(`nodes`, PokemonV2NaturebattlestylepreferenceModelSelector, builder) }
}
export function selectFromPokemonV2NaturebattlestylepreferenceAggregate() {
  return new PokemonV2NaturebattlestylepreferenceAggregateModelSelector()
}

export const pokemonV2NaturebattlestylepreferenceAggregateModelPrimitives = selectFromPokemonV2NaturebattlestylepreferenceAggregate()
