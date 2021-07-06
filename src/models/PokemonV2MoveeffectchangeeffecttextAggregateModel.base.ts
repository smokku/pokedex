/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel, PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextModel, PokemonV2MoveeffectchangeeffecttextModelType } from "./PokemonV2MoveeffectchangeeffecttextModel"
import { PokemonV2MoveeffectchangeeffecttextModelSelector } from "./PokemonV2MoveeffectchangeeffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextAggregateBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextAggregateModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_aggregate"), "pokemon_v2_moveeffectchangeeffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffectchangeeffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveeffectchangeeffecttextModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextModelSelector) => PokemonV2MoveeffectchangeeffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2MoveeffectchangeeffecttextModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextAggregate() {
  return new PokemonV2MoveeffectchangeeffecttextAggregateModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextAggregateModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextAggregate()
