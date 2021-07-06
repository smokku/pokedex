/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareaAggregateFieldsModel, PokemonV2LocationareaAggregateFieldsModelType } from "./PokemonV2LocationareaAggregateFieldsModel"
import { PokemonV2LocationareaAggregateFieldsModelSelector } from "./PokemonV2LocationareaAggregateFieldsModel.base"
import { PokemonV2LocationareaModel, PokemonV2LocationareaModelType } from "./PokemonV2LocationareaModel"
import { PokemonV2LocationareaModelSelector } from "./PokemonV2LocationareaModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaAggregateBase
 * auto generated base class for the model PokemonV2LocationareaAggregateModel.
 *
 * aggregated selection of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaAggregateModelBase = ModelBase
  .named('PokemonV2LocationareaAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_aggregate"), "pokemon_v2_locationarea_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationareaAggregateFieldsModelSelector | ((selector: PokemonV2LocationareaAggregateFieldsModelSelector) => PokemonV2LocationareaAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationareaAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationareaModelSelector | ((selector: PokemonV2LocationareaModelSelector) => PokemonV2LocationareaModelSelector)) { return this.__child(`nodes`, PokemonV2LocationareaModelSelector, builder) }
}
export function selectFromPokemonV2LocationareaAggregate() {
  return new PokemonV2LocationareaAggregateModelSelector()
}

export const pokemonV2LocationareaAggregateModelPrimitives = selectFromPokemonV2LocationareaAggregate()
