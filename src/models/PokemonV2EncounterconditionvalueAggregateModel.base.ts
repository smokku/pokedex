/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvalueAggregateFieldsModel, PokemonV2EncounterconditionvalueAggregateFieldsModelType } from "./PokemonV2EncounterconditionvalueAggregateFieldsModel"
import { PokemonV2EncounterconditionvalueAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvalueAggregateFieldsModel.base"
import { PokemonV2EncounterconditionvalueModel, PokemonV2EncounterconditionvalueModelType } from "./PokemonV2EncounterconditionvalueModel"
import { PokemonV2EncounterconditionvalueModelSelector } from "./PokemonV2EncounterconditionvalueModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueAggregateBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueAggregateModel.
 *
 * aggregated selection of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueAggregateModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_aggregate"), "pokemon_v2_encounterconditionvalue_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvalueAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2EncounterconditionvalueModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2EncounterconditionvalueAggregateFieldsModelSelector | ((selector: PokemonV2EncounterconditionvalueAggregateFieldsModelSelector) => PokemonV2EncounterconditionvalueAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2EncounterconditionvalueAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2EncounterconditionvalueModelSelector | ((selector: PokemonV2EncounterconditionvalueModelSelector) => PokemonV2EncounterconditionvalueModelSelector)) { return this.__child(`nodes`, PokemonV2EncounterconditionvalueModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvalueAggregate() {
  return new PokemonV2EncounterconditionvalueAggregateModelSelector()
}

export const pokemonV2EncounterconditionvalueAggregateModelPrimitives = selectFromPokemonV2EncounterconditionvalueAggregate()
