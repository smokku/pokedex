/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesttypenameAggregateFieldsModel, PokemonV2ContesttypenameAggregateFieldsModelType } from "./PokemonV2ContesttypenameAggregateFieldsModel"
import { PokemonV2ContesttypenameAggregateFieldsModelSelector } from "./PokemonV2ContesttypenameAggregateFieldsModel.base"
import { PokemonV2ContesttypenameModel, PokemonV2ContesttypenameModelType } from "./PokemonV2ContesttypenameModel"
import { PokemonV2ContesttypenameModelSelector } from "./PokemonV2ContesttypenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypenameAggregateBase
 * auto generated base class for the model PokemonV2ContesttypenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameAggregateModelBase = ModelBase
  .named('PokemonV2ContesttypenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttypename_aggregate"), "pokemon_v2_contesttypename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ContesttypenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ContesttypenameAggregateFieldsModelSelector | ((selector: PokemonV2ContesttypenameAggregateFieldsModelSelector) => PokemonV2ContesttypenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ContesttypenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ContesttypenameModelSelector | ((selector: PokemonV2ContesttypenameModelSelector) => PokemonV2ContesttypenameModelSelector)) { return this.__child(`nodes`, PokemonV2ContesttypenameModelSelector, builder) }
}
export function selectFromPokemonV2ContesttypenameAggregate() {
  return new PokemonV2ContesttypenameAggregateModelSelector()
}

export const pokemonV2ContesttypenameAggregateModelPrimitives = selectFromPokemonV2ContesttypenameAggregate()
