/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesttypeAggregateFieldsModel, PokemonV2ContesttypeAggregateFieldsModelType } from "./PokemonV2ContesttypeAggregateFieldsModel"
import { PokemonV2ContesttypeAggregateFieldsModelSelector } from "./PokemonV2ContesttypeAggregateFieldsModel.base"
import { PokemonV2ContesttypeModel, PokemonV2ContesttypeModelType } from "./PokemonV2ContesttypeModel"
import { PokemonV2ContesttypeModelSelector } from "./PokemonV2ContesttypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeAggregateBase
 * auto generated base class for the model PokemonV2ContesttypeAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeAggregateModelBase = ModelBase
  .named('PokemonV2ContesttypeAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_aggregate"), "pokemon_v2_contesttype_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesttypeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContesttypeAggregateFieldsModelSelector | ((selector: PokemonV2ContesttypeAggregateFieldsModelSelector) => PokemonV2ContesttypeAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContesttypeAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`nodes`, PokemonV2ContesttypeModelSelector, builder) }
}
export function selectFromPokemonV2ContesttypeAggregate() {
  return new PokemonV2ContesttypeAggregateModelSelector()
}

export const pokemonV2ContesttypeAggregateModelPrimitives = selectFromPokemonV2ContesttypeAggregate()
