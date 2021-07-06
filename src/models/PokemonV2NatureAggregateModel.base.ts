/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NatureAggregateFieldsModel, PokemonV2NatureAggregateFieldsModelType } from "./PokemonV2NatureAggregateFieldsModel"
import { PokemonV2NatureAggregateFieldsModelSelector } from "./PokemonV2NatureAggregateFieldsModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NatureAggregateBase
 * auto generated base class for the model PokemonV2NatureAggregateModel.
 *
 * aggregated selection of "pokemon_v2_nature"
 */
export const PokemonV2NatureAggregateModelBase = ModelBase
  .named('PokemonV2NatureAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_nature_aggregate"), "pokemon_v2_nature_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2NatureAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NatureAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2NatureAggregateFieldsModelSelector | ((selector: PokemonV2NatureAggregateFieldsModelSelector) => PokemonV2NatureAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2NatureAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`nodes`, PokemonV2NatureModelSelector, builder) }
}
export function selectFromPokemonV2NatureAggregate() {
  return new PokemonV2NatureAggregateModelSelector()
}

export const pokemonV2NatureAggregateModelPrimitives = selectFromPokemonV2NatureAggregate()
