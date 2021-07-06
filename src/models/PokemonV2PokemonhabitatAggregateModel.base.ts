/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonhabitatAggregateFieldsModel, PokemonV2PokemonhabitatAggregateFieldsModelType } from "./PokemonV2PokemonhabitatAggregateFieldsModel"
import { PokemonV2PokemonhabitatAggregateFieldsModelSelector } from "./PokemonV2PokemonhabitatAggregateFieldsModel.base"
import { PokemonV2PokemonhabitatModel, PokemonV2PokemonhabitatModelType } from "./PokemonV2PokemonhabitatModel"
import { PokemonV2PokemonhabitatModelSelector } from "./PokemonV2PokemonhabitatModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonhabitatAggregateBase
 * auto generated base class for the model PokemonV2PokemonhabitatAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatAggregateModelBase = ModelBase
  .named('PokemonV2PokemonhabitatAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonhabitat_aggregate"), "pokemon_v2_pokemonhabitat_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonhabitatAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonhabitatModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonhabitatAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonhabitatAggregateFieldsModelSelector | ((selector: PokemonV2PokemonhabitatAggregateFieldsModelSelector) => PokemonV2PokemonhabitatAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonhabitatAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonhabitatModelSelector | ((selector: PokemonV2PokemonhabitatModelSelector) => PokemonV2PokemonhabitatModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonhabitatModelSelector, builder) }
}
export function selectFromPokemonV2PokemonhabitatAggregate() {
  return new PokemonV2PokemonhabitatAggregateModelSelector()
}

export const pokemonV2PokemonhabitatAggregateModelPrimitives = selectFromPokemonV2PokemonhabitatAggregate()
