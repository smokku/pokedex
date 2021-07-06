/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupregionAggregateFieldsModel, PokemonV2VersiongroupregionAggregateFieldsModelType } from "./PokemonV2VersiongroupregionAggregateFieldsModel"
import { PokemonV2VersiongroupregionAggregateFieldsModelSelector } from "./PokemonV2VersiongroupregionAggregateFieldsModel.base"
import { PokemonV2VersiongroupregionModel, PokemonV2VersiongroupregionModelType } from "./PokemonV2VersiongroupregionModel"
import { PokemonV2VersiongroupregionModelSelector } from "./PokemonV2VersiongroupregionModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionAggregateBase
 * auto generated base class for the model PokemonV2VersiongroupregionAggregateModel.
 *
 * aggregated selection of "pokemon_v2_versiongroupregion"
 */
export const PokemonV2VersiongroupregionAggregateModelBase = ModelBase
  .named('PokemonV2VersiongroupregionAggregate')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_aggregate"), "pokemon_v2_versiongroupregion_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupregionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | PokemonV2VersiongroupregionAggregateFieldsModelSelector | ((selector: PokemonV2VersiongroupregionAggregateFieldsModelSelector) => PokemonV2VersiongroupregionAggregateFieldsModelSelector)) { return this.__child(`aggregate`, PokemonV2VersiongroupregionAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | PokemonV2VersiongroupregionModelSelector | ((selector: PokemonV2VersiongroupregionModelSelector) => PokemonV2VersiongroupregionModelSelector)) { return this.__child(`nodes`, PokemonV2VersiongroupregionModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupregionAggregate() {
  return new PokemonV2VersiongroupregionAggregateModelSelector()
}

export const pokemonV2VersiongroupregionAggregateModelPrimitives = selectFromPokemonV2VersiongroupregionAggregate()
