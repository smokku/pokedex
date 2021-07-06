/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationnameAggregateFieldsModel, PokemonV2LocationnameAggregateFieldsModelType } from "./PokemonV2LocationnameAggregateFieldsModel"
import { PokemonV2LocationnameAggregateFieldsModelSelector } from "./PokemonV2LocationnameAggregateFieldsModel.base"
import { PokemonV2LocationnameModel, PokemonV2LocationnameModelType } from "./PokemonV2LocationnameModel"
import { PokemonV2LocationnameModelSelector } from "./PokemonV2LocationnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameAggregateBase
 * auto generated base class for the model PokemonV2LocationnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameAggregateModelBase = ModelBase
  .named('PokemonV2LocationnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_aggregate"), "pokemon_v2_locationname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationnameAggregateFieldsModelSelector | ((selector: PokemonV2LocationnameAggregateFieldsModelSelector) => PokemonV2LocationnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationnameModelSelector | ((selector: PokemonV2LocationnameModelSelector) => PokemonV2LocationnameModelSelector)) { return this.__child(`nodes`, PokemonV2LocationnameModelSelector, builder) }
}
export function selectFromPokemonV2LocationnameAggregate() {
  return new PokemonV2LocationnameAggregateModelSelector()
}

export const pokemonV2LocationnameAggregateModelPrimitives = selectFromPokemonV2LocationnameAggregate()
