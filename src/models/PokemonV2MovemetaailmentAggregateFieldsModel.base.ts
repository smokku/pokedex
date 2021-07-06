/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaailmentAvgFieldsModel, PokemonV2MovemetaailmentAvgFieldsModelType } from "./PokemonV2MovemetaailmentAvgFieldsModel"
import { PokemonV2MovemetaailmentAvgFieldsModelSelector } from "./PokemonV2MovemetaailmentAvgFieldsModel.base"
import { PokemonV2MovemetaailmentMaxFieldsModel, PokemonV2MovemetaailmentMaxFieldsModelType } from "./PokemonV2MovemetaailmentMaxFieldsModel"
import { PokemonV2MovemetaailmentMaxFieldsModelSelector } from "./PokemonV2MovemetaailmentMaxFieldsModel.base"
import { PokemonV2MovemetaailmentMinFieldsModel, PokemonV2MovemetaailmentMinFieldsModelType } from "./PokemonV2MovemetaailmentMinFieldsModel"
import { PokemonV2MovemetaailmentMinFieldsModelSelector } from "./PokemonV2MovemetaailmentMinFieldsModel.base"
import { PokemonV2MovemetaailmentStddevFieldsModel, PokemonV2MovemetaailmentStddevFieldsModelType } from "./PokemonV2MovemetaailmentStddevFieldsModel"
import { PokemonV2MovemetaailmentStddevFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevFieldsModel.base"
import { PokemonV2MovemetaailmentStddevPopFieldsModel, PokemonV2MovemetaailmentStddevPopFieldsModelType } from "./PokemonV2MovemetaailmentStddevPopFieldsModel"
import { PokemonV2MovemetaailmentStddevPopFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevPopFieldsModel.base"
import { PokemonV2MovemetaailmentStddevSampFieldsModel, PokemonV2MovemetaailmentStddevSampFieldsModelType } from "./PokemonV2MovemetaailmentStddevSampFieldsModel"
import { PokemonV2MovemetaailmentStddevSampFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevSampFieldsModel.base"
import { PokemonV2MovemetaailmentSumFieldsModel, PokemonV2MovemetaailmentSumFieldsModelType } from "./PokemonV2MovemetaailmentSumFieldsModel"
import { PokemonV2MovemetaailmentSumFieldsModelSelector } from "./PokemonV2MovemetaailmentSumFieldsModel.base"
import { PokemonV2MovemetaailmentVarPopFieldsModel, PokemonV2MovemetaailmentVarPopFieldsModelType } from "./PokemonV2MovemetaailmentVarPopFieldsModel"
import { PokemonV2MovemetaailmentVarPopFieldsModelSelector } from "./PokemonV2MovemetaailmentVarPopFieldsModel.base"
import { PokemonV2MovemetaailmentVarSampFieldsModel, PokemonV2MovemetaailmentVarSampFieldsModelType } from "./PokemonV2MovemetaailmentVarSampFieldsModel"
import { PokemonV2MovemetaailmentVarSampFieldsModelSelector } from "./PokemonV2MovemetaailmentVarSampFieldsModel.base"
import { PokemonV2MovemetaailmentVarianceFieldsModel, PokemonV2MovemetaailmentVarianceFieldsModelType } from "./PokemonV2MovemetaailmentVarianceFieldsModel"
import { PokemonV2MovemetaailmentVarianceFieldsModelSelector } from "./PokemonV2MovemetaailmentVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaailmentAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetaailmentAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaailmentAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetaailment_aggregate_fields"), "pokemon_v2_movemetaailment_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaailmentVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaailmentAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetaailmentAvgFieldsModelSelector | ((selector: PokemonV2MovemetaailmentAvgFieldsModelSelector) => PokemonV2MovemetaailmentAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetaailmentAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetaailmentMaxFieldsModelSelector | ((selector: PokemonV2MovemetaailmentMaxFieldsModelSelector) => PokemonV2MovemetaailmentMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetaailmentMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetaailmentMinFieldsModelSelector | ((selector: PokemonV2MovemetaailmentMinFieldsModelSelector) => PokemonV2MovemetaailmentMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetaailmentMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetaailmentStddevFieldsModelSelector | ((selector: PokemonV2MovemetaailmentStddevFieldsModelSelector) => PokemonV2MovemetaailmentStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetaailmentStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetaailmentStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetaailmentStddevPopFieldsModelSelector) => PokemonV2MovemetaailmentStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetaailmentStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetaailmentStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetaailmentStddevSampFieldsModelSelector) => PokemonV2MovemetaailmentStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetaailmentStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetaailmentSumFieldsModelSelector | ((selector: PokemonV2MovemetaailmentSumFieldsModelSelector) => PokemonV2MovemetaailmentSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetaailmentSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetaailmentVarPopFieldsModelSelector | ((selector: PokemonV2MovemetaailmentVarPopFieldsModelSelector) => PokemonV2MovemetaailmentVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetaailmentVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetaailmentVarSampFieldsModelSelector | ((selector: PokemonV2MovemetaailmentVarSampFieldsModelSelector) => PokemonV2MovemetaailmentVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetaailmentVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetaailmentVarianceFieldsModelSelector | ((selector: PokemonV2MovemetaailmentVarianceFieldsModelSelector) => PokemonV2MovemetaailmentVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetaailmentVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaailmentAggregateFields() {
  return new PokemonV2MovemetaailmentAggregateFieldsModelSelector()
}

export const pokemonV2MovemetaailmentAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetaailmentAggregateFields().count
