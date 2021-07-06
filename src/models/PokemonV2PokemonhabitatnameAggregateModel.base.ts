/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonhabitatnameAggregateFieldsModel, PokemonV2PokemonhabitatnameAggregateFieldsModelType } from "./PokemonV2PokemonhabitatnameAggregateFieldsModel"
import { PokemonV2PokemonhabitatnameAggregateFieldsModelSelector } from "./PokemonV2PokemonhabitatnameAggregateFieldsModel.base"
import { PokemonV2PokemonhabitatnameModel, PokemonV2PokemonhabitatnameModelType } from "./PokemonV2PokemonhabitatnameModel"
import { PokemonV2PokemonhabitatnameModelSelector } from "./PokemonV2PokemonhabitatnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatnameAggregateBase
 * auto generated base class for the model PokemonV2PokemonhabitatnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonhabitatname"
 */
export const PokemonV2PokemonhabitatnameAggregateModelBase = ModelBase
  .named('PokemonV2PokemonhabitatnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitatname_aggregate"), "pokemon_v2_pokemonhabitatname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonhabitatnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonhabitatnameAggregateFieldsModelSelector | ((selector: PokemonV2PokemonhabitatnameAggregateFieldsModelSelector) => PokemonV2PokemonhabitatnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonhabitatnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonhabitatnameModelSelector | ((selector: PokemonV2PokemonhabitatnameModelSelector) => PokemonV2PokemonhabitatnameModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonhabitatnameModelSelector, builder) }
}
export function selectFromPokemonV2PokemonhabitatnameAggregate() {
  return new PokemonV2PokemonhabitatnameAggregateModelSelector()
}

export const pokemonV2PokemonhabitatnameAggregateModelPrimitives = selectFromPokemonV2PokemonhabitatnameAggregate()
