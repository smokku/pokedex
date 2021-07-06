/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupregionAvgFieldsModel, PokemonV2VersiongroupregionAvgFieldsModelType } from "./PokemonV2VersiongroupregionAvgFieldsModel"
import { PokemonV2VersiongroupregionAvgFieldsModelSelector } from "./PokemonV2VersiongroupregionAvgFieldsModel.base"
import { PokemonV2VersiongroupregionMaxFieldsModel, PokemonV2VersiongroupregionMaxFieldsModelType } from "./PokemonV2VersiongroupregionMaxFieldsModel"
import { PokemonV2VersiongroupregionMaxFieldsModelSelector } from "./PokemonV2VersiongroupregionMaxFieldsModel.base"
import { PokemonV2VersiongroupregionMinFieldsModel, PokemonV2VersiongroupregionMinFieldsModelType } from "./PokemonV2VersiongroupregionMinFieldsModel"
import { PokemonV2VersiongroupregionMinFieldsModelSelector } from "./PokemonV2VersiongroupregionMinFieldsModel.base"
import { PokemonV2VersiongroupregionStddevFieldsModel, PokemonV2VersiongroupregionStddevFieldsModelType } from "./PokemonV2VersiongroupregionStddevFieldsModel"
import { PokemonV2VersiongroupregionStddevFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevFieldsModel.base"
import { PokemonV2VersiongroupregionStddevPopFieldsModel, PokemonV2VersiongroupregionStddevPopFieldsModelType } from "./PokemonV2VersiongroupregionStddevPopFieldsModel"
import { PokemonV2VersiongroupregionStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevPopFieldsModel.base"
import { PokemonV2VersiongroupregionStddevSampFieldsModel, PokemonV2VersiongroupregionStddevSampFieldsModelType } from "./PokemonV2VersiongroupregionStddevSampFieldsModel"
import { PokemonV2VersiongroupregionStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupregionStddevSampFieldsModel.base"
import { PokemonV2VersiongroupregionSumFieldsModel, PokemonV2VersiongroupregionSumFieldsModelType } from "./PokemonV2VersiongroupregionSumFieldsModel"
import { PokemonV2VersiongroupregionSumFieldsModelSelector } from "./PokemonV2VersiongroupregionSumFieldsModel.base"
import { PokemonV2VersiongroupregionVarPopFieldsModel, PokemonV2VersiongroupregionVarPopFieldsModelType } from "./PokemonV2VersiongroupregionVarPopFieldsModel"
import { PokemonV2VersiongroupregionVarPopFieldsModelSelector } from "./PokemonV2VersiongroupregionVarPopFieldsModel.base"
import { PokemonV2VersiongroupregionVarSampFieldsModel, PokemonV2VersiongroupregionVarSampFieldsModelType } from "./PokemonV2VersiongroupregionVarSampFieldsModel"
import { PokemonV2VersiongroupregionVarSampFieldsModelSelector } from "./PokemonV2VersiongroupregionVarSampFieldsModel.base"
import { PokemonV2VersiongroupregionVarianceFieldsModel, PokemonV2VersiongroupregionVarianceFieldsModelType } from "./PokemonV2VersiongroupregionVarianceFieldsModel"
import { PokemonV2VersiongroupregionVarianceFieldsModelSelector } from "./PokemonV2VersiongroupregionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupregionAggregateFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupregionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_versiongroupregion"
 */
export const PokemonV2VersiongroupregionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupregionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupregion_aggregate_fields"), "pokemon_v2_versiongroupregion_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupregionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupregionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2VersiongroupregionAvgFieldsModelSelector | ((selector: PokemonV2VersiongroupregionAvgFieldsModelSelector) => PokemonV2VersiongroupregionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2VersiongroupregionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2VersiongroupregionMaxFieldsModelSelector | ((selector: PokemonV2VersiongroupregionMaxFieldsModelSelector) => PokemonV2VersiongroupregionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2VersiongroupregionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2VersiongroupregionMinFieldsModelSelector | ((selector: PokemonV2VersiongroupregionMinFieldsModelSelector) => PokemonV2VersiongroupregionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2VersiongroupregionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2VersiongroupregionStddevFieldsModelSelector | ((selector: PokemonV2VersiongroupregionStddevFieldsModelSelector) => PokemonV2VersiongroupregionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2VersiongroupregionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2VersiongroupregionStddevPopFieldsModelSelector | ((selector: PokemonV2VersiongroupregionStddevPopFieldsModelSelector) => PokemonV2VersiongroupregionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2VersiongroupregionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2VersiongroupregionStddevSampFieldsModelSelector | ((selector: PokemonV2VersiongroupregionStddevSampFieldsModelSelector) => PokemonV2VersiongroupregionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2VersiongroupregionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2VersiongroupregionSumFieldsModelSelector | ((selector: PokemonV2VersiongroupregionSumFieldsModelSelector) => PokemonV2VersiongroupregionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2VersiongroupregionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2VersiongroupregionVarPopFieldsModelSelector | ((selector: PokemonV2VersiongroupregionVarPopFieldsModelSelector) => PokemonV2VersiongroupregionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2VersiongroupregionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2VersiongroupregionVarSampFieldsModelSelector | ((selector: PokemonV2VersiongroupregionVarSampFieldsModelSelector) => PokemonV2VersiongroupregionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2VersiongroupregionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2VersiongroupregionVarianceFieldsModelSelector | ((selector: PokemonV2VersiongroupregionVarianceFieldsModelSelector) => PokemonV2VersiongroupregionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2VersiongroupregionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupregionAggregateFields() {
  return new PokemonV2VersiongroupregionAggregateFieldsModelSelector()
}

export const pokemonV2VersiongroupregionAggregateFieldsModelPrimitives = selectFromPokemonV2VersiongroupregionAggregateFields().count
