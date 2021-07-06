/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributemapAggregateFieldsModel, PokemonV2MoveattributemapAggregateFieldsModelType } from "./PokemonV2MoveattributemapAggregateFieldsModel"
import { PokemonV2MoveattributemapAggregateFieldsModelSelector } from "./PokemonV2MoveattributemapAggregateFieldsModel.base"
import { PokemonV2MoveattributemapModel, PokemonV2MoveattributemapModelType } from "./PokemonV2MoveattributemapModel"
import { PokemonV2MoveattributemapModelSelector } from "./PokemonV2MoveattributemapModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapAggregateBase
 * auto generated base class for the model PokemonV2MoveattributemapAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapAggregateModelBase = ModelBase
  .named('PokemonV2MoveattributemapAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_aggregate"), "pokemon_v2_moveattributemap_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributemapModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveattributemapAggregateFieldsModelSelector | ((selector: PokemonV2MoveattributemapAggregateFieldsModelSelector) => PokemonV2MoveattributemapAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveattributemapAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveattributemapModelSelector | ((selector: PokemonV2MoveattributemapModelSelector) => PokemonV2MoveattributemapModelSelector)) { return this.__child(`nodes`, PokemonV2MoveattributemapModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributemapAggregate() {
  return new PokemonV2MoveattributemapAggregateModelSelector()
}

export const pokemonV2MoveattributemapAggregateModelPrimitives = selectFromPokemonV2MoveattributemapAggregate()
