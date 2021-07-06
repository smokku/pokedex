/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemnameAggregateFieldsModel, PokemonV2ItemnameAggregateFieldsModelType } from "./PokemonV2ItemnameAggregateFieldsModel"
import { PokemonV2ItemnameAggregateFieldsModelSelector } from "./PokemonV2ItemnameAggregateFieldsModel.base"
import { PokemonV2ItemnameModel, PokemonV2ItemnameModelType } from "./PokemonV2ItemnameModel"
import { PokemonV2ItemnameModelSelector } from "./PokemonV2ItemnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemnameAggregateBase
 * auto generated base class for the model PokemonV2ItemnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_itemname"
 */
export const PokemonV2ItemnameAggregateModelBase = ModelBase
  .named('PokemonV2ItemnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemname_aggregate"), "pokemon_v2_itemname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2ItemnameAggregateFieldsModelSelector | ((selector: PokemonV2ItemnameAggregateFieldsModelSelector) => PokemonV2ItemnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2ItemnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2ItemnameModelSelector | ((selector: PokemonV2ItemnameModelSelector) => PokemonV2ItemnameModelSelector)) { return this.__child(`nodes`, PokemonV2ItemnameModelSelector, builder) }
}
export function selectFromPokemonV2ItemnameAggregate() {
  return new PokemonV2ItemnameAggregateModelSelector()
}

export const pokemonV2ItemnameAggregateModelPrimitives = selectFromPokemonV2ItemnameAggregate()
