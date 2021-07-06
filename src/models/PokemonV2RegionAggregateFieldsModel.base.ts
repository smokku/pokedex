/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2RegionAvgFieldsModel, PokemonV2RegionAvgFieldsModelType } from "./PokemonV2RegionAvgFieldsModel"
import { PokemonV2RegionAvgFieldsModelSelector } from "./PokemonV2RegionAvgFieldsModel.base"
import { PokemonV2RegionMaxFieldsModel, PokemonV2RegionMaxFieldsModelType } from "./PokemonV2RegionMaxFieldsModel"
import { PokemonV2RegionMaxFieldsModelSelector } from "./PokemonV2RegionMaxFieldsModel.base"
import { PokemonV2RegionMinFieldsModel, PokemonV2RegionMinFieldsModelType } from "./PokemonV2RegionMinFieldsModel"
import { PokemonV2RegionMinFieldsModelSelector } from "./PokemonV2RegionMinFieldsModel.base"
import { PokemonV2RegionStddevFieldsModel, PokemonV2RegionStddevFieldsModelType } from "./PokemonV2RegionStddevFieldsModel"
import { PokemonV2RegionStddevFieldsModelSelector } from "./PokemonV2RegionStddevFieldsModel.base"
import { PokemonV2RegionStddevPopFieldsModel, PokemonV2RegionStddevPopFieldsModelType } from "./PokemonV2RegionStddevPopFieldsModel"
import { PokemonV2RegionStddevPopFieldsModelSelector } from "./PokemonV2RegionStddevPopFieldsModel.base"
import { PokemonV2RegionStddevSampFieldsModel, PokemonV2RegionStddevSampFieldsModelType } from "./PokemonV2RegionStddevSampFieldsModel"
import { PokemonV2RegionStddevSampFieldsModelSelector } from "./PokemonV2RegionStddevSampFieldsModel.base"
import { PokemonV2RegionSumFieldsModel, PokemonV2RegionSumFieldsModelType } from "./PokemonV2RegionSumFieldsModel"
import { PokemonV2RegionSumFieldsModelSelector } from "./PokemonV2RegionSumFieldsModel.base"
import { PokemonV2RegionVarPopFieldsModel, PokemonV2RegionVarPopFieldsModelType } from "./PokemonV2RegionVarPopFieldsModel"
import { PokemonV2RegionVarPopFieldsModelSelector } from "./PokemonV2RegionVarPopFieldsModel.base"
import { PokemonV2RegionVarSampFieldsModel, PokemonV2RegionVarSampFieldsModelType } from "./PokemonV2RegionVarSampFieldsModel"
import { PokemonV2RegionVarSampFieldsModelSelector } from "./PokemonV2RegionVarSampFieldsModel.base"
import { PokemonV2RegionVarianceFieldsModel, PokemonV2RegionVarianceFieldsModelType } from "./PokemonV2RegionVarianceFieldsModel"
import { PokemonV2RegionVarianceFieldsModelSelector } from "./PokemonV2RegionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionAggregateFieldsBase
 * auto generated base class for the model PokemonV2RegionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_region"
 */
export const PokemonV2RegionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2RegionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_region_aggregate_fields"), "pokemon_v2_region_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2RegionAvgFieldsModelSelector | ((selector: PokemonV2RegionAvgFieldsModelSelector) => PokemonV2RegionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2RegionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2RegionMaxFieldsModelSelector | ((selector: PokemonV2RegionMaxFieldsModelSelector) => PokemonV2RegionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2RegionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2RegionMinFieldsModelSelector | ((selector: PokemonV2RegionMinFieldsModelSelector) => PokemonV2RegionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2RegionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2RegionStddevFieldsModelSelector | ((selector: PokemonV2RegionStddevFieldsModelSelector) => PokemonV2RegionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2RegionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2RegionStddevPopFieldsModelSelector | ((selector: PokemonV2RegionStddevPopFieldsModelSelector) => PokemonV2RegionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2RegionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2RegionStddevSampFieldsModelSelector | ((selector: PokemonV2RegionStddevSampFieldsModelSelector) => PokemonV2RegionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2RegionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2RegionSumFieldsModelSelector | ((selector: PokemonV2RegionSumFieldsModelSelector) => PokemonV2RegionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2RegionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2RegionVarPopFieldsModelSelector | ((selector: PokemonV2RegionVarPopFieldsModelSelector) => PokemonV2RegionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2RegionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2RegionVarSampFieldsModelSelector | ((selector: PokemonV2RegionVarSampFieldsModelSelector) => PokemonV2RegionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2RegionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2RegionVarianceFieldsModelSelector | ((selector: PokemonV2RegionVarianceFieldsModelSelector) => PokemonV2RegionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2RegionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2RegionAggregateFields() {
  return new PokemonV2RegionAggregateFieldsModelSelector()
}

export const pokemonV2RegionAggregateFieldsModelPrimitives = selectFromPokemonV2RegionAggregateFields().count
