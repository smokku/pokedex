/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformnameAggregateFieldsModel, PokemonV2PokemonformnameAggregateFieldsModelType } from "./PokemonV2PokemonformnameAggregateFieldsModel"
import { PokemonV2PokemonformnameAggregateFieldsModelSelector } from "./PokemonV2PokemonformnameAggregateFieldsModel.base"
import { PokemonV2PokemonformnameModel, PokemonV2PokemonformnameModelType } from "./PokemonV2PokemonformnameModel"
import { PokemonV2PokemonformnameModelSelector } from "./PokemonV2PokemonformnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformnameAggregateBase
 * auto generated base class for the model PokemonV2PokemonformnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameAggregateModelBase = ModelBase
  .named('PokemonV2PokemonformnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformname_aggregate"), "pokemon_v2_pokemonformname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonformnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2PokemonformnameAggregateFieldsModelSelector | ((selector: PokemonV2PokemonformnameAggregateFieldsModelSelector) => PokemonV2PokemonformnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2PokemonformnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2PokemonformnameModelSelector | ((selector: PokemonV2PokemonformnameModelSelector) => PokemonV2PokemonformnameModelSelector)) { return this.__child(`nodes`, PokemonV2PokemonformnameModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformnameAggregate() {
  return new PokemonV2PokemonformnameAggregateModelSelector()
}

export const pokemonV2PokemonformnameAggregateModelPrimitives = selectFromPokemonV2PokemonformnameAggregate()
