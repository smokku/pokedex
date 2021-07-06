/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionAggregateFieldsModel, PokemonV2EncounterconditionAggregateFieldsModelType } from "./PokemonV2EncounterconditionAggregateFieldsModel"
import { PokemonV2EncounterconditionAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionAggregateFieldsModel.base"
import { PokemonV2EncounterconditionModel, PokemonV2EncounterconditionModelType } from "./PokemonV2EncounterconditionModel"
import { PokemonV2EncounterconditionModelSelector } from "./PokemonV2EncounterconditionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionAggregateBase
 * auto generated base class for the model PokemonV2EncounterconditionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionAggregateModelBase = ModelBase
  .named('PokemonV2EncounterconditionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_aggregate"), "pokemon_v2_encountercondition_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterconditionAggregateFieldsModelSelector | ((selector: PokemonV2EncounterconditionAggregateFieldsModelSelector) => PokemonV2EncounterconditionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterconditionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterconditionModelSelector | ((selector: PokemonV2EncounterconditionModelSelector) => PokemonV2EncounterconditionModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterconditionModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionAggregate() {
  return new PokemonV2EncounterconditionAggregateModelSelector()
}

export const pokemonV2EncounterconditionAggregateModelPrimitives = selectFromPokemonV2EncounterconditionAggregate()
