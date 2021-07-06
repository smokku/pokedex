/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributenameAggregateFieldsModel, PokemonV2ItemattributenameAggregateFieldsModelType } from "./PokemonV2ItemattributenameAggregateFieldsModel"
import { PokemonV2ItemattributenameAggregateFieldsModelSelector } from "./PokemonV2ItemattributenameAggregateFieldsModel.base"
import { PokemonV2ItemattributenameModel, PokemonV2ItemattributenameModelType } from "./PokemonV2ItemattributenameModel"
import { PokemonV2ItemattributenameModelSelector } from "./PokemonV2ItemattributenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributenameAggregateBase
 * auto generated base class for the model PokemonV2ItemattributenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameAggregateModelBase = ModelBase
  .named('PokemonV2ItemattributenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributename_aggregate"), "pokemon_v2_itemattributename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemattributenameAggregateFieldsModelSelector | ((selector: PokemonV2ItemattributenameAggregateFieldsModelSelector) => PokemonV2ItemattributenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemattributenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`nodes`, PokemonV2ItemattributenameModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributenameAggregate() {
  return new PokemonV2ItemattributenameAggregateModelSelector()
}

export const pokemonV2ItemattributenameAggregateModelPrimitives = selectFromPokemonV2ItemattributenameAggregate()
