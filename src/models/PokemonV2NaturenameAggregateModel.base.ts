/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturenameAggregateFieldsModel, PokemonV2NaturenameAggregateFieldsModelType } from "./PokemonV2NaturenameAggregateFieldsModel"
import { PokemonV2NaturenameAggregateFieldsModelSelector } from "./PokemonV2NaturenameAggregateFieldsModel.base"
import { PokemonV2NaturenameModel, PokemonV2NaturenameModelType } from "./PokemonV2NaturenameModel"
import { PokemonV2NaturenameModelSelector } from "./PokemonV2NaturenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturenameAggregateBase
 * auto generated base class for the model PokemonV2NaturenameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameAggregateModelBase = ModelBase
  .named('PokemonV2NaturenameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturename_aggregate"), "pokemon_v2_naturename_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturenameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2NaturenameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturenameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2NaturenameAggregateFieldsModelSelector | ((selector: PokemonV2NaturenameAggregateFieldsModelSelector) => PokemonV2NaturenameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2NaturenameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2NaturenameModelSelector | ((selector: PokemonV2NaturenameModelSelector) => PokemonV2NaturenameModelSelector)) { return this.__child(`nodes`, PokemonV2NaturenameModelSelector, builder) }
}
export function selectFromPokemonV2NaturenameAggregate() {
  return new PokemonV2NaturenameAggregateModelSelector()
}

export const pokemonV2NaturenameAggregateModelPrimitives = selectFromPokemonV2NaturenameAggregate()
