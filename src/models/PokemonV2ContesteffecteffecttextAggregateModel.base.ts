/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffecteffecttextAggregateFieldsModel, PokemonV2ContesteffecteffecttextAggregateFieldsModelType } from "./PokemonV2ContesteffecteffecttextAggregateFieldsModel"
import { PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextAggregateFieldsModel.base"
import { PokemonV2ContesteffecteffecttextModel, PokemonV2ContesteffecteffecttextModelType } from "./PokemonV2ContesteffecteffecttextModel"
import { PokemonV2ContesteffecteffecttextModelSelector } from "./PokemonV2ContesteffecteffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextAggregateBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextAggregateModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_aggregate"), "pokemon_v2_contesteffecteffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesteffecteffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector) => PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContesteffecteffecttextModelSelector | ((selector: PokemonV2ContesteffecteffecttextModelSelector) => PokemonV2ContesteffecteffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2ContesteffecteffecttextModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffecteffecttextAggregate() {
  return new PokemonV2ContesteffecteffecttextAggregateModelSelector()
}

export const pokemonV2ContesteffecteffecttextAggregateModelPrimitives = selectFromPokemonV2ContesteffecteffecttextAggregate()
