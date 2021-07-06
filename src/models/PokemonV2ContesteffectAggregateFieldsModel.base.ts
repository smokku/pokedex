/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffectAvgFieldsModel, PokemonV2ContesteffectAvgFieldsModelType } from "./PokemonV2ContesteffectAvgFieldsModel"
import { PokemonV2ContesteffectAvgFieldsModelSelector } from "./PokemonV2ContesteffectAvgFieldsModel.base"
import { PokemonV2ContesteffectMaxFieldsModel, PokemonV2ContesteffectMaxFieldsModelType } from "./PokemonV2ContesteffectMaxFieldsModel"
import { PokemonV2ContesteffectMaxFieldsModelSelector } from "./PokemonV2ContesteffectMaxFieldsModel.base"
import { PokemonV2ContesteffectMinFieldsModel, PokemonV2ContesteffectMinFieldsModelType } from "./PokemonV2ContesteffectMinFieldsModel"
import { PokemonV2ContesteffectMinFieldsModelSelector } from "./PokemonV2ContesteffectMinFieldsModel.base"
import { PokemonV2ContesteffectStddevFieldsModel, PokemonV2ContesteffectStddevFieldsModelType } from "./PokemonV2ContesteffectStddevFieldsModel"
import { PokemonV2ContesteffectStddevFieldsModelSelector } from "./PokemonV2ContesteffectStddevFieldsModel.base"
import { PokemonV2ContesteffectStddevPopFieldsModel, PokemonV2ContesteffectStddevPopFieldsModelType } from "./PokemonV2ContesteffectStddevPopFieldsModel"
import { PokemonV2ContesteffectStddevPopFieldsModelSelector } from "./PokemonV2ContesteffectStddevPopFieldsModel.base"
import { PokemonV2ContesteffectStddevSampFieldsModel, PokemonV2ContesteffectStddevSampFieldsModelType } from "./PokemonV2ContesteffectStddevSampFieldsModel"
import { PokemonV2ContesteffectStddevSampFieldsModelSelector } from "./PokemonV2ContesteffectStddevSampFieldsModel.base"
import { PokemonV2ContesteffectSumFieldsModel, PokemonV2ContesteffectSumFieldsModelType } from "./PokemonV2ContesteffectSumFieldsModel"
import { PokemonV2ContesteffectSumFieldsModelSelector } from "./PokemonV2ContesteffectSumFieldsModel.base"
import { PokemonV2ContesteffectVarPopFieldsModel, PokemonV2ContesteffectVarPopFieldsModelType } from "./PokemonV2ContesteffectVarPopFieldsModel"
import { PokemonV2ContesteffectVarPopFieldsModelSelector } from "./PokemonV2ContesteffectVarPopFieldsModel.base"
import { PokemonV2ContesteffectVarSampFieldsModel, PokemonV2ContesteffectVarSampFieldsModelType } from "./PokemonV2ContesteffectVarSampFieldsModel"
import { PokemonV2ContesteffectVarSampFieldsModelSelector } from "./PokemonV2ContesteffectVarSampFieldsModel.base"
import { PokemonV2ContesteffectVarianceFieldsModel, PokemonV2ContesteffectVarianceFieldsModelType } from "./PokemonV2ContesteffectVarianceFieldsModel"
import { PokemonV2ContesteffectVarianceFieldsModelSelector } from "./PokemonV2ContesteffectVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffectAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContesteffectAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffectAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffect_aggregate_fields"), "pokemon_v2_contesteffect_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffectVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffectAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContesteffectAvgFieldsModelSelector | ((selector: PokemonV2ContesteffectAvgFieldsModelSelector) => PokemonV2ContesteffectAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContesteffectAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContesteffectMaxFieldsModelSelector | ((selector: PokemonV2ContesteffectMaxFieldsModelSelector) => PokemonV2ContesteffectMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContesteffectMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContesteffectMinFieldsModelSelector | ((selector: PokemonV2ContesteffectMinFieldsModelSelector) => PokemonV2ContesteffectMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContesteffectMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContesteffectStddevFieldsModelSelector | ((selector: PokemonV2ContesteffectStddevFieldsModelSelector) => PokemonV2ContesteffectStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContesteffectStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContesteffectStddevPopFieldsModelSelector | ((selector: PokemonV2ContesteffectStddevPopFieldsModelSelector) => PokemonV2ContesteffectStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContesteffectStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContesteffectStddevSampFieldsModelSelector | ((selector: PokemonV2ContesteffectStddevSampFieldsModelSelector) => PokemonV2ContesteffectStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContesteffectStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContesteffectSumFieldsModelSelector | ((selector: PokemonV2ContesteffectSumFieldsModelSelector) => PokemonV2ContesteffectSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContesteffectSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContesteffectVarPopFieldsModelSelector | ((selector: PokemonV2ContesteffectVarPopFieldsModelSelector) => PokemonV2ContesteffectVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContesteffectVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContesteffectVarSampFieldsModelSelector | ((selector: PokemonV2ContesteffectVarSampFieldsModelSelector) => PokemonV2ContesteffectVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContesteffectVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContesteffectVarianceFieldsModelSelector | ((selector: PokemonV2ContesteffectVarianceFieldsModelSelector) => PokemonV2ContesteffectVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContesteffectVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffectAggregateFields() {
  return new PokemonV2ContesteffectAggregateFieldsModelSelector()
}

export const pokemonV2ContesteffectAggregateFieldsModelPrimitives = selectFromPokemonV2ContesteffectAggregateFields().count
