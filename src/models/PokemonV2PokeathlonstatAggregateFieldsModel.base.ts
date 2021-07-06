/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokeathlonstatAvgFieldsModel, PokemonV2PokeathlonstatAvgFieldsModelType } from "./PokemonV2PokeathlonstatAvgFieldsModel"
import { PokemonV2PokeathlonstatAvgFieldsModelSelector } from "./PokemonV2PokeathlonstatAvgFieldsModel.base"
import { PokemonV2PokeathlonstatMaxFieldsModel, PokemonV2PokeathlonstatMaxFieldsModelType } from "./PokemonV2PokeathlonstatMaxFieldsModel"
import { PokemonV2PokeathlonstatMaxFieldsModelSelector } from "./PokemonV2PokeathlonstatMaxFieldsModel.base"
import { PokemonV2PokeathlonstatMinFieldsModel, PokemonV2PokeathlonstatMinFieldsModelType } from "./PokemonV2PokeathlonstatMinFieldsModel"
import { PokemonV2PokeathlonstatMinFieldsModelSelector } from "./PokemonV2PokeathlonstatMinFieldsModel.base"
import { PokemonV2PokeathlonstatStddevFieldsModel, PokemonV2PokeathlonstatStddevFieldsModelType } from "./PokemonV2PokeathlonstatStddevFieldsModel"
import { PokemonV2PokeathlonstatStddevFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevFieldsModel.base"
import { PokemonV2PokeathlonstatStddevPopFieldsModel, PokemonV2PokeathlonstatStddevPopFieldsModelType } from "./PokemonV2PokeathlonstatStddevPopFieldsModel"
import { PokemonV2PokeathlonstatStddevPopFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevPopFieldsModel.base"
import { PokemonV2PokeathlonstatStddevSampFieldsModel, PokemonV2PokeathlonstatStddevSampFieldsModelType } from "./PokemonV2PokeathlonstatStddevSampFieldsModel"
import { PokemonV2PokeathlonstatStddevSampFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevSampFieldsModel.base"
import { PokemonV2PokeathlonstatSumFieldsModel, PokemonV2PokeathlonstatSumFieldsModelType } from "./PokemonV2PokeathlonstatSumFieldsModel"
import { PokemonV2PokeathlonstatSumFieldsModelSelector } from "./PokemonV2PokeathlonstatSumFieldsModel.base"
import { PokemonV2PokeathlonstatVarPopFieldsModel, PokemonV2PokeathlonstatVarPopFieldsModelType } from "./PokemonV2PokeathlonstatVarPopFieldsModel"
import { PokemonV2PokeathlonstatVarPopFieldsModelSelector } from "./PokemonV2PokeathlonstatVarPopFieldsModel.base"
import { PokemonV2PokeathlonstatVarSampFieldsModel, PokemonV2PokeathlonstatVarSampFieldsModelType } from "./PokemonV2PokeathlonstatVarSampFieldsModel"
import { PokemonV2PokeathlonstatVarSampFieldsModelSelector } from "./PokemonV2PokeathlonstatVarSampFieldsModel.base"
import { PokemonV2PokeathlonstatVarianceFieldsModel, PokemonV2PokeathlonstatVarianceFieldsModelType } from "./PokemonV2PokeathlonstatVarianceFieldsModel"
import { PokemonV2PokeathlonstatVarianceFieldsModelSelector } from "./PokemonV2PokeathlonstatVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstat_aggregate_fields"), "pokemon_v2_pokeathlonstat_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokeathlonstatAvgFieldsModelSelector | ((selector: PokemonV2PokeathlonstatAvgFieldsModelSelector) => PokemonV2PokeathlonstatAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokeathlonstatAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokeathlonstatMaxFieldsModelSelector | ((selector: PokemonV2PokeathlonstatMaxFieldsModelSelector) => PokemonV2PokeathlonstatMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokeathlonstatMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokeathlonstatMinFieldsModelSelector | ((selector: PokemonV2PokeathlonstatMinFieldsModelSelector) => PokemonV2PokeathlonstatMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokeathlonstatMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokeathlonstatStddevFieldsModelSelector | ((selector: PokemonV2PokeathlonstatStddevFieldsModelSelector) => PokemonV2PokeathlonstatStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokeathlonstatStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokeathlonstatStddevPopFieldsModelSelector | ((selector: PokemonV2PokeathlonstatStddevPopFieldsModelSelector) => PokemonV2PokeathlonstatStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokeathlonstatStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokeathlonstatStddevSampFieldsModelSelector | ((selector: PokemonV2PokeathlonstatStddevSampFieldsModelSelector) => PokemonV2PokeathlonstatStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokeathlonstatStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokeathlonstatSumFieldsModelSelector | ((selector: PokemonV2PokeathlonstatSumFieldsModelSelector) => PokemonV2PokeathlonstatSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokeathlonstatSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokeathlonstatVarPopFieldsModelSelector | ((selector: PokemonV2PokeathlonstatVarPopFieldsModelSelector) => PokemonV2PokeathlonstatVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokeathlonstatVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokeathlonstatVarSampFieldsModelSelector | ((selector: PokemonV2PokeathlonstatVarSampFieldsModelSelector) => PokemonV2PokeathlonstatVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokeathlonstatVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokeathlonstatVarianceFieldsModelSelector | ((selector: PokemonV2PokeathlonstatVarianceFieldsModelSelector) => PokemonV2PokeathlonstatVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokeathlonstatVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokeathlonstatAggregateFields() {
  return new PokemonV2PokeathlonstatAggregateFieldsModelSelector()
}

export const pokemonV2PokeathlonstatAggregateFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatAggregateFields().count
