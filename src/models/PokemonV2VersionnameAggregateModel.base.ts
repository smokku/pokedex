/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersionnameAggregateFieldsModel, PokemonV2VersionnameAggregateFieldsModelType } from "./PokemonV2VersionnameAggregateFieldsModel"
import { PokemonV2VersionnameAggregateFieldsModelSelector } from "./PokemonV2VersionnameAggregateFieldsModel.base"
import { PokemonV2VersionnameModel, PokemonV2VersionnameModelType } from "./PokemonV2VersionnameModel"
import { PokemonV2VersionnameModelSelector } from "./PokemonV2VersionnameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameAggregateBase
 * auto generated base class for the model PokemonV2VersionnameAggregateModel.
 *
 * aggregated selection of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameAggregateModelBase = ModelBase
  .named('PokemonV2VersionnameAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_aggregate"), "pokemon_v2_versionname_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersionnameModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2VersionnameAggregateFieldsModelSelector | ((selector: PokemonV2VersionnameAggregateFieldsModelSelector) => PokemonV2VersionnameAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2VersionnameAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2VersionnameModelSelector | ((selector: PokemonV2VersionnameModelSelector) => PokemonV2VersionnameModelSelector)) { return this.__child(`nodes`, PokemonV2VersionnameModelSelector, builder) }
}
export function selectFromPokemonV2VersionnameAggregate() {
  return new PokemonV2VersionnameAggregateModelSelector()
}

export const pokemonV2VersionnameAggregateModelPrimitives = selectFromPokemonV2VersionnameAggregate()
