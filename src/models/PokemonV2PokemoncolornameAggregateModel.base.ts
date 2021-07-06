/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolornameAggregateFieldsModel, PokemonV2PokemoncolornameAggregateFieldsModelType } from "./PokemonV2PokemoncolornameAggregateFieldsModel"
import { PokemonV2PokemoncolornameAggregateFieldsModelSelector } from "./PokemonV2PokemoncolornameAggregateFieldsModel.base"
import { PokemonV2PokemoncolornameModel, PokemonV2PokemoncolornameModelType } from "./PokemonV2PokemoncolornameModel"
import { PokemonV2PokemoncolornameModelSelector } from "./PokemonV2PokemoncolornameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameAggregateBase
 * auto generated base class for the model PokemonV2PokemoncolornameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameAggregateModelBase = ModelBase
  .named('PokemonV2PokemoncolornameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_aggregate"), "pokemon_v2_pokemoncolorname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemoncolornameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemoncolornameAggregateFieldsModelSelector | ((selector: PokemonV2PokemoncolornameAggregateFieldsModelSelector) => PokemonV2PokemoncolornameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemoncolornameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemoncolornameModelSelector | ((selector: PokemonV2PokemoncolornameModelSelector) => PokemonV2PokemoncolornameModelSelector)) { return this.__child(`nodes`, PokemonV2PokemoncolornameModelSelector, builder) }
}
export function selectFromPokemonV2PokemoncolornameAggregate() {
  return new PokemonV2PokemoncolornameAggregateModelSelector()
}

export const pokemonV2PokemoncolornameAggregateModelPrimitives = selectFromPokemonV2PokemoncolornameAggregate()
