/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesdescriptionAggregateFieldsModel, PokemonV2PokemonspeciesdescriptionAggregateFieldsModelType } from "./PokemonV2PokemonspeciesdescriptionAggregateFieldsModel"
import { PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionAggregateFieldsModel.base"
import { PokemonV2PokemonspeciesdescriptionModel, PokemonV2PokemonspeciesdescriptionModelType } from "./PokemonV2PokemonspeciesdescriptionModel"
import { PokemonV2PokemonspeciesdescriptionModelSelector } from "./PokemonV2PokemonspeciesdescriptionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesdescriptionAggregateBase
 * auto generated base class for the model PokemonV2PokemonspeciesdescriptionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesdescription"
 */
export const PokemonV2PokemonspeciesdescriptionAggregateModelBase = ModelBase
  .named('PokemonV2PokemonspeciesdescriptionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesdescription_aggregate"), "pokemon_v2_pokemonspeciesdescription_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesdescriptionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesdescriptionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesdescriptionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector) => PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonspeciesdescriptionModelSelector | ((selector: PokemonV2PokemonspeciesdescriptionModelSelector) => PokemonV2PokemonspeciesdescriptionModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonspeciesdescriptionModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesdescriptionAggregate() {
  return new PokemonV2PokemonspeciesdescriptionAggregateModelSelector()
}

export const pokemonV2PokemonspeciesdescriptionAggregateModelPrimitives = selectFromPokemonV2PokemonspeciesdescriptionAggregate()
