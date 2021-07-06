/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetnameAggregateFieldsModel, PokemonV2MovetargetnameAggregateFieldsModelType } from "./PokemonV2MovetargetnameAggregateFieldsModel"
import { PokemonV2MovetargetnameAggregateFieldsModelSelector } from "./PokemonV2MovetargetnameAggregateFieldsModel.base"
import { PokemonV2MovetargetnameModel, PokemonV2MovetargetnameModelType } from "./PokemonV2MovetargetnameModel"
import { PokemonV2MovetargetnameModelSelector } from "./PokemonV2MovetargetnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetnameAggregateBase
 * auto generated base class for the model PokemonV2MovetargetnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movetargetname"
 */
export const PokemonV2MovetargetnameAggregateModelBase = ModelBase
  .named('PokemonV2MovetargetnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetargetname_aggregate"), "pokemon_v2_movetargetname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovetargetnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovetargetnameAggregateFieldsModelSelector | ((selector: PokemonV2MovetargetnameAggregateFieldsModelSelector) => PokemonV2MovetargetnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovetargetnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovetargetnameModelSelector | ((selector: PokemonV2MovetargetnameModelSelector) => PokemonV2MovetargetnameModelSelector)) { return this.__child(`nodes`, PokemonV2MovetargetnameModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetnameAggregate() {
  return new PokemonV2MovetargetnameAggregateModelSelector()
}

export const pokemonV2MovetargetnameAggregateModelPrimitives = selectFromPokemonV2MovetargetnameAggregate()
