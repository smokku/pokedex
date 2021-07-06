/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersionAggregateFieldsModel, PokemonV2VersionAggregateFieldsModelType } from "./PokemonV2VersionAggregateFieldsModel"
import { PokemonV2VersionAggregateFieldsModelSelector } from "./PokemonV2VersionAggregateFieldsModel.base"
import { PokemonV2VersionModel, PokemonV2VersionModelType } from "./PokemonV2VersionModel"
import { PokemonV2VersionModelSelector } from "./PokemonV2VersionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionAggregateBase
 * auto generated base class for the model PokemonV2VersionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_version"
 */
export const PokemonV2VersionAggregateModelBase = ModelBase
  .named('PokemonV2VersionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_aggregate"), "pokemon_v2_version_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2VersionAggregateFieldsModelSelector | ((selector: PokemonV2VersionAggregateFieldsModelSelector) => PokemonV2VersionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2VersionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2VersionModelSelector | ((selector: PokemonV2VersionModelSelector) => PokemonV2VersionModelSelector)) { return this.__child(`nodes`, PokemonV2VersionModelSelector, builder) }
}
export function selectFromPokemonV2VersionAggregate() {
  return new PokemonV2VersionAggregateModelSelector()
}

export const pokemonV2VersionAggregateModelPrimitives = selectFromPokemonV2VersionAggregate()
