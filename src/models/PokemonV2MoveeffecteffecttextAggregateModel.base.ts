/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffecteffecttextAggregateFieldsModel, PokemonV2MoveeffecteffecttextAggregateFieldsModelType } from "./PokemonV2MoveeffecteffecttextAggregateFieldsModel"
import { PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextAggregateFieldsModel.base"
import { PokemonV2MoveeffecteffecttextModel, PokemonV2MoveeffecteffecttextModelType } from "./PokemonV2MoveeffecteffecttextModel"
import { PokemonV2MoveeffecteffecttextModelSelector } from "./PokemonV2MoveeffecteffecttextModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextAggregateBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextAggregateModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_aggregate"), "pokemon_v2_moveeffecteffecttext_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveeffecteffecttextModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector) => PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveeffecteffecttextModelSelector | ((selector: PokemonV2MoveeffecteffecttextModelSelector) => PokemonV2MoveeffecteffecttextModelSelector)) { return this.__child(`nodes`, PokemonV2MoveeffecteffecttextModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffecteffecttextAggregate() {
  return new PokemonV2MoveeffecteffecttextAggregateModelSelector()
}

export const pokemonV2MoveeffecteffecttextAggregateModelPrimitives = selectFromPokemonV2MoveeffecteffecttextAggregate()
