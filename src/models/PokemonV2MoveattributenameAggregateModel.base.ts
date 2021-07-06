/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributenameAggregateFieldsModel, PokemonV2MoveattributenameAggregateFieldsModelType } from "./PokemonV2MoveattributenameAggregateFieldsModel"
import { PokemonV2MoveattributenameAggregateFieldsModelSelector } from "./PokemonV2MoveattributenameAggregateFieldsModel.base"
import { PokemonV2MoveattributenameModel, PokemonV2MoveattributenameModelType } from "./PokemonV2MoveattributenameModel"
import { PokemonV2MoveattributenameModelSelector } from "./PokemonV2MoveattributenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributenameAggregateBase
 * auto generated base class for the model PokemonV2MoveattributenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameAggregateModelBase = ModelBase
  .named('PokemonV2MoveattributenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributename_aggregate"), "pokemon_v2_moveattributename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveattributenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MoveattributenameAggregateFieldsModelSelector | ((selector: PokemonV2MoveattributenameAggregateFieldsModelSelector) => PokemonV2MoveattributenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MoveattributenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MoveattributenameModelSelector | ((selector: PokemonV2MoveattributenameModelSelector) => PokemonV2MoveattributenameModelSelector)) { return this.__child(`nodes`, PokemonV2MoveattributenameModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributenameAggregate() {
  return new PokemonV2MoveattributenameAggregateModelSelector()
}

export const pokemonV2MoveattributenameAggregateModelPrimitives = selectFromPokemonV2MoveattributenameAggregate()
