/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvaluemapAggregateFieldsModel, PokemonV2EncounterconditionvaluemapAggregateFieldsModelType } from "./PokemonV2EncounterconditionvaluemapAggregateFieldsModel"
import { PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapModel, PokemonV2EncounterconditionvaluemapModelType } from "./PokemonV2EncounterconditionvaluemapModel"
import { PokemonV2EncounterconditionvaluemapModelSelector } from "./PokemonV2EncounterconditionvaluemapModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapAggregateBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapAggregateModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_aggregate"), "pokemon_v2_encounterconditionvaluemap_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvaluemapModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector) => PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterconditionvaluemapModelSelector | ((selector: PokemonV2EncounterconditionvaluemapModelSelector) => PokemonV2EncounterconditionvaluemapModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterconditionvaluemapModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvaluemapAggregate() {
  return new PokemonV2EncounterconditionvaluemapAggregateModelSelector()
}

export const pokemonV2EncounterconditionvaluemapAggregateModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapAggregate()
