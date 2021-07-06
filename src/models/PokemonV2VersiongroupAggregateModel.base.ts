/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupAggregateFieldsModel, PokemonV2VersiongroupAggregateFieldsModelType } from "./PokemonV2VersiongroupAggregateFieldsModel"
import { PokemonV2VersiongroupAggregateFieldsModelSelector } from "./PokemonV2VersiongroupAggregateFieldsModel.base"
import { PokemonV2VersiongroupModel, PokemonV2VersiongroupModelType } from "./PokemonV2VersiongroupModel"
import { PokemonV2VersiongroupModelSelector } from "./PokemonV2VersiongroupModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupAggregateBase
 * auto generated base class for the model PokemonV2VersiongroupAggregateModel.
 *
 * aggregated selection of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupAggregateModelBase = ModelBase
  .named('PokemonV2VersiongroupAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_aggregate"), "pokemon_v2_versiongroup_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2VersiongroupAggregateFieldsModelSelector | ((selector: PokemonV2VersiongroupAggregateFieldsModelSelector) => PokemonV2VersiongroupAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2VersiongroupAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2VersiongroupModelSelector | ((selector: PokemonV2VersiongroupModelSelector) => PokemonV2VersiongroupModelSelector)) { return this.__child(`nodes`, PokemonV2VersiongroupModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupAggregate() {
  return new PokemonV2VersiongroupAggregateModelSelector()
}

export const pokemonV2VersiongroupAggregateModelPrimitives = selectFromPokemonV2VersiongroupAggregate()
