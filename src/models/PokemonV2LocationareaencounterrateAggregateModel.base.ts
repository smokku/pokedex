/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareaencounterrateAggregateFieldsModel, PokemonV2LocationareaencounterrateAggregateFieldsModelType } from "./PokemonV2LocationareaencounterrateAggregateFieldsModel"
import { PokemonV2LocationareaencounterrateAggregateFieldsModelSelector } from "./PokemonV2LocationareaencounterrateAggregateFieldsModel.base"
import { PokemonV2LocationareaencounterrateModel, PokemonV2LocationareaencounterrateModelType } from "./PokemonV2LocationareaencounterrateModel"
import { PokemonV2LocationareaencounterrateModelSelector } from "./PokemonV2LocationareaencounterrateModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateAggregateBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateAggregateModel.
 *
 * aggregated selection of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateAggregateModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_aggregate"), "pokemon_v2_locationareaencounterrate_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2LocationareaencounterrateModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaencounterrateAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2LocationareaencounterrateAggregateFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateAggregateFieldsModelSelector) => PokemonV2LocationareaencounterrateAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2LocationareaencounterrateAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2LocationareaencounterrateModelSelector | ((selector: PokemonV2LocationareaencounterrateModelSelector) => PokemonV2LocationareaencounterrateModelSelector)) { return this.__child(`nodes`, PokemonV2LocationareaencounterrateModelSelector, builder) }
}
export function selectFromPokemonV2LocationareaencounterrateAggregate() {
  return new PokemonV2LocationareaencounterrateAggregateModelSelector()
}

export const pokemonV2LocationareaencounterrateAggregateModelPrimitives = selectFromPokemonV2LocationareaencounterrateAggregate()
