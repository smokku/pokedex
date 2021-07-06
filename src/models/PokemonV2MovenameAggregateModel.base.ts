/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovenameAggregateFieldsModel, PokemonV2MovenameAggregateFieldsModelType } from "./PokemonV2MovenameAggregateFieldsModel"
import { PokemonV2MovenameAggregateFieldsModelSelector } from "./PokemonV2MovenameAggregateFieldsModel.base"
import { PokemonV2MovenameModel, PokemonV2MovenameModelType } from "./PokemonV2MovenameModel"
import { PokemonV2MovenameModelSelector } from "./PokemonV2MovenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovenameAggregateBase
 * auto generated base class for the model PokemonV2MovenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_movename"
 */
export const PokemonV2MovenameAggregateModelBase = ModelBase
  .named('PokemonV2MovenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movename_aggregate"), "pokemon_v2_movename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2MovenameAggregateFieldsModelSelector | ((selector: PokemonV2MovenameAggregateFieldsModelSelector) => PokemonV2MovenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2MovenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2MovenameModelSelector | ((selector: PokemonV2MovenameModelSelector) => PokemonV2MovenameModelSelector)) { return this.__child(`nodes`, PokemonV2MovenameModelSelector, builder) }
}
export function selectFromPokemonV2MovenameAggregate() {
  return new PokemonV2MovenameAggregateModelSelector()
}

export const pokemonV2MovenameAggregateModelPrimitives = selectFromPokemonV2MovenameAggregate()
