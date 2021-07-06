/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesnameAggregateFieldsModel, PokemonV2PokemonspeciesnameAggregateFieldsModelType } from "./PokemonV2PokemonspeciesnameAggregateFieldsModel"
import { PokemonV2PokemonspeciesnameAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesnameAggregateFieldsModel.base"
import { PokemonV2PokemonspeciesnameModel, PokemonV2PokemonspeciesnameModelType } from "./PokemonV2PokemonspeciesnameModel"
import { PokemonV2PokemonspeciesnameModelSelector } from "./PokemonV2PokemonspeciesnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspeciesnameAggregateBase
 * auto generated base class for the model PokemonV2PokemonspeciesnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameAggregateModelBase = ModelBase
  .named('PokemonV2PokemonspeciesnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonspeciesname_aggregate"), "pokemon_v2_pokemonspeciesname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonspeciesnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspeciesnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonspeciesnameAggregateFieldsModelSelector | ((selector: PokemonV2PokemonspeciesnameAggregateFieldsModelSelector) => PokemonV2PokemonspeciesnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonspeciesnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonspeciesnameModelSelector | ((selector: PokemonV2PokemonspeciesnameModelSelector) => PokemonV2PokemonspeciesnameModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonspeciesnameModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspeciesnameAggregate() {
  return new PokemonV2PokemonspeciesnameAggregateModelSelector()
}

export const pokemonV2PokemonspeciesnameAggregateModelPrimitives = selectFromPokemonV2PokemonspeciesnameAggregate()
