/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetAggregateFieldsModel, PokemonV2MovetargetAggregateFieldsModelType } from "./PokemonV2MovetargetAggregateFieldsModel"
import { PokemonV2MovetargetAggregateFieldsModelSelector } from "./PokemonV2MovetargetAggregateFieldsModel.base"
import { PokemonV2MovetargetModel, PokemonV2MovetargetModelType } from "./PokemonV2MovetargetModel"
import { PokemonV2MovetargetModelSelector } from "./PokemonV2MovetargetModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetAggregateBase
 * auto generated base class for the model PokemonV2MovetargetAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetAggregateModelBase = ModelBase
  .named('PokemonV2MovetargetAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_aggregate"), "pokemon_v2_movetarget_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovetargetAggregateFieldsModelSelector | ((selector: PokemonV2MovetargetAggregateFieldsModelSelector) => PokemonV2MovetargetAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovetargetAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovetargetModelSelector | ((selector: PokemonV2MovetargetModelSelector) => PokemonV2MovetargetModelSelector)) { return this.__child(`nodes`, PokemonV2MovetargetModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetAggregate() {
  return new PokemonV2MovetargetAggregateModelSelector()
}

export const pokemonV2MovetargetAggregateModelPrimitives = selectFromPokemonV2MovetargetAggregate()
