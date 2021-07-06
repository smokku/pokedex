/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffectflavortextAvgFieldsModel, PokemonV2ContesteffectflavortextAvgFieldsModelType } from "./PokemonV2ContesteffectflavortextAvgFieldsModel"
import { PokemonV2ContesteffectflavortextAvgFieldsModelSelector } from "./PokemonV2ContesteffectflavortextAvgFieldsModel.base"
import { PokemonV2ContesteffectflavortextMaxFieldsModel, PokemonV2ContesteffectflavortextMaxFieldsModelType } from "./PokemonV2ContesteffectflavortextMaxFieldsModel"
import { PokemonV2ContesteffectflavortextMaxFieldsModelSelector } from "./PokemonV2ContesteffectflavortextMaxFieldsModel.base"
import { PokemonV2ContesteffectflavortextMinFieldsModel, PokemonV2ContesteffectflavortextMinFieldsModelType } from "./PokemonV2ContesteffectflavortextMinFieldsModel"
import { PokemonV2ContesteffectflavortextMinFieldsModelSelector } from "./PokemonV2ContesteffectflavortextMinFieldsModel.base"
import { PokemonV2ContesteffectflavortextStddevFieldsModel, PokemonV2ContesteffectflavortextStddevFieldsModelType } from "./PokemonV2ContesteffectflavortextStddevFieldsModel"
import { PokemonV2ContesteffectflavortextStddevFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevFieldsModel.base"
import { PokemonV2ContesteffectflavortextStddevPopFieldsModel, PokemonV2ContesteffectflavortextStddevPopFieldsModelType } from "./PokemonV2ContesteffectflavortextStddevPopFieldsModel"
import { PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevPopFieldsModel.base"
import { PokemonV2ContesteffectflavortextStddevSampFieldsModel, PokemonV2ContesteffectflavortextStddevSampFieldsModelType } from "./PokemonV2ContesteffectflavortextStddevSampFieldsModel"
import { PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevSampFieldsModel.base"
import { PokemonV2ContesteffectflavortextSumFieldsModel, PokemonV2ContesteffectflavortextSumFieldsModelType } from "./PokemonV2ContesteffectflavortextSumFieldsModel"
import { PokemonV2ContesteffectflavortextSumFieldsModelSelector } from "./PokemonV2ContesteffectflavortextSumFieldsModel.base"
import { PokemonV2ContesteffectflavortextVarPopFieldsModel, PokemonV2ContesteffectflavortextVarPopFieldsModelType } from "./PokemonV2ContesteffectflavortextVarPopFieldsModel"
import { PokemonV2ContesteffectflavortextVarPopFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarPopFieldsModel.base"
import { PokemonV2ContesteffectflavortextVarSampFieldsModel, PokemonV2ContesteffectflavortextVarSampFieldsModelType } from "./PokemonV2ContesteffectflavortextVarSampFieldsModel"
import { PokemonV2ContesteffectflavortextVarSampFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarSampFieldsModel.base"
import { PokemonV2ContesteffectflavortextVarianceFieldsModel, PokemonV2ContesteffectflavortextVarianceFieldsModelType } from "./PokemonV2ContesteffectflavortextVarianceFieldsModel"
import { PokemonV2ContesteffectflavortextVarianceFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contesteffectflavortext"
 */
export const PokemonV2ContesteffectflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffectflavortext_aggregate_fields"), "pokemon_v2_contesteffectflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContesteffectflavortextAvgFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextAvgFieldsModelSelector) => PokemonV2ContesteffectflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContesteffectflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContesteffectflavortextMaxFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextMaxFieldsModelSelector) => PokemonV2ContesteffectflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContesteffectflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContesteffectflavortextMinFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextMinFieldsModelSelector) => PokemonV2ContesteffectflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContesteffectflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContesteffectflavortextStddevFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextStddevFieldsModelSelector) => PokemonV2ContesteffectflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContesteffectflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector) => PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector) => PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContesteffectflavortextSumFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextSumFieldsModelSelector) => PokemonV2ContesteffectflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContesteffectflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContesteffectflavortextVarPopFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextVarPopFieldsModelSelector) => PokemonV2ContesteffectflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContesteffectflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContesteffectflavortextVarSampFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextVarSampFieldsModelSelector) => PokemonV2ContesteffectflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContesteffectflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContesteffectflavortextVarianceFieldsModelSelector | ((selector: PokemonV2ContesteffectflavortextVarianceFieldsModelSelector) => PokemonV2ContesteffectflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContesteffectflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffectflavortextAggregateFields() {
  return new PokemonV2ContesteffectflavortextAggregateFieldsModelSelector()
}

export const pokemonV2ContesteffectflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2ContesteffectflavortextAggregateFields().count
