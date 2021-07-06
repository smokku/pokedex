/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LanguageAggregateFieldsModel, PokemonV2LanguageAggregateFieldsModelType } from "./PokemonV2LanguageAggregateFieldsModel"
import { PokemonV2LanguageAggregateFieldsModelSelector } from "./PokemonV2LanguageAggregateFieldsModel.base"
import { PokemonV2LanguageModel, PokemonV2LanguageModelType } from "./PokemonV2LanguageModel"
import { PokemonV2LanguageModelSelector } from "./PokemonV2LanguageModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LanguageAggregateBase
 * auto generated base class for the model PokemonV2LanguageAggregateModel.
 *
 * aggregated selection of "pokemon_v2_language"
 */
export const PokemonV2LanguageAggregateModelBase = ModelBase
  .named('PokemonV2LanguageAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_language_aggregate"), "pokemon_v2_language_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LanguageAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LanguageModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LanguageAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LanguageAggregateFieldsModelSelector | ((selector: PokemonV2LanguageAggregateFieldsModelSelector) => PokemonV2LanguageAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LanguageAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LanguageModelSelector | ((selector: PokemonV2LanguageModelSelector) => PokemonV2LanguageModelSelector)) { return this.__child(`nodes`, PokemonV2LanguageModelSelector, builder) }
}
export function selectFromPokemonV2LanguageAggregate() {
  return new PokemonV2LanguageAggregateModelSelector()
}

export const pokemonV2LanguageAggregateModelPrimitives = selectFromPokemonV2LanguageAggregate()
