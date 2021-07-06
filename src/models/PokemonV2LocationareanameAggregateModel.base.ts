/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareanameAggregateFieldsModel, PokemonV2LocationareanameAggregateFieldsModelType } from "./PokemonV2LocationareanameAggregateFieldsModel"
import { PokemonV2LocationareanameAggregateFieldsModelSelector } from "./PokemonV2LocationareanameAggregateFieldsModel.base"
import { PokemonV2LocationareanameModel, PokemonV2LocationareanameModelType } from "./PokemonV2LocationareanameModel"
import { PokemonV2LocationareanameModelSelector } from "./PokemonV2LocationareanameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareanameAggregateBase
 * auto generated base class for the model PokemonV2LocationareanameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameAggregateModelBase = ModelBase
  .named('PokemonV2LocationareanameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaname_aggregate"), "pokemon_v2_locationareaname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareanameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareanameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareanameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationareanameAggregateFieldsModelSelector | ((selector: PokemonV2LocationareanameAggregateFieldsModelSelector) => PokemonV2LocationareanameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationareanameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationareanameModelSelector | ((selector: PokemonV2LocationareanameModelSelector) => PokemonV2LocationareanameModelSelector)) { return this.__child(`nodes`, PokemonV2LocationareanameModelSelector, builder) }
}
export function selectFromPokemonV2LocationareanameAggregate() {
  return new PokemonV2LocationareanameAggregateModelSelector()
}

export const pokemonV2LocationareanameAggregateModelPrimitives = selectFromPokemonV2LocationareanameAggregate()
