/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2NaturepokeathlonstatAvgFieldsModel, PokemonV2NaturepokeathlonstatAvgFieldsModelType } from "./PokemonV2NaturepokeathlonstatAvgFieldsModel"
import { PokemonV2NaturepokeathlonstatAvgFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatAvgFieldsModel.base"
import { PokemonV2NaturepokeathlonstatMaxFieldsModel, PokemonV2NaturepokeathlonstatMaxFieldsModelType } from "./PokemonV2NaturepokeathlonstatMaxFieldsModel"
import { PokemonV2NaturepokeathlonstatMaxFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatMaxFieldsModel.base"
import { PokemonV2NaturepokeathlonstatMinFieldsModel, PokemonV2NaturepokeathlonstatMinFieldsModelType } from "./PokemonV2NaturepokeathlonstatMinFieldsModel"
import { PokemonV2NaturepokeathlonstatMinFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatMinFieldsModel.base"
import { PokemonV2NaturepokeathlonstatStddevFieldsModel, PokemonV2NaturepokeathlonstatStddevFieldsModelType } from "./PokemonV2NaturepokeathlonstatStddevFieldsModel"
import { PokemonV2NaturepokeathlonstatStddevFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevFieldsModel.base"
import { PokemonV2NaturepokeathlonstatStddevPopFieldsModel, PokemonV2NaturepokeathlonstatStddevPopFieldsModelType } from "./PokemonV2NaturepokeathlonstatStddevPopFieldsModel"
import { PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevPopFieldsModel.base"
import { PokemonV2NaturepokeathlonstatStddevSampFieldsModel, PokemonV2NaturepokeathlonstatStddevSampFieldsModelType } from "./PokemonV2NaturepokeathlonstatStddevSampFieldsModel"
import { PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevSampFieldsModel.base"
import { PokemonV2NaturepokeathlonstatSumFieldsModel, PokemonV2NaturepokeathlonstatSumFieldsModelType } from "./PokemonV2NaturepokeathlonstatSumFieldsModel"
import { PokemonV2NaturepokeathlonstatSumFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatSumFieldsModel.base"
import { PokemonV2NaturepokeathlonstatVarPopFieldsModel, PokemonV2NaturepokeathlonstatVarPopFieldsModelType } from "./PokemonV2NaturepokeathlonstatVarPopFieldsModel"
import { PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarPopFieldsModel.base"
import { PokemonV2NaturepokeathlonstatVarSampFieldsModel, PokemonV2NaturepokeathlonstatVarSampFieldsModelType } from "./PokemonV2NaturepokeathlonstatVarSampFieldsModel"
import { PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarSampFieldsModel.base"
import { PokemonV2NaturepokeathlonstatVarianceFieldsModel, PokemonV2NaturepokeathlonstatVarianceFieldsModelType } from "./PokemonV2NaturepokeathlonstatVarianceFieldsModel"
import { PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2NaturepokeathlonstatAggregateFieldsBase
 * auto generated base class for the model PokemonV2NaturepokeathlonstatAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatAggregateFieldsModelBase = ModelBase
  .named('PokemonV2NaturepokeathlonstatAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_naturepokeathlonstat_aggregate_fields"), "pokemon_v2_naturepokeathlonstat_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2NaturepokeathlonstatVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2NaturepokeathlonstatAvgFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatAvgFieldsModelSelector) => PokemonV2NaturepokeathlonstatAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2NaturepokeathlonstatAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2NaturepokeathlonstatMaxFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatMaxFieldsModelSelector) => PokemonV2NaturepokeathlonstatMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2NaturepokeathlonstatMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2NaturepokeathlonstatMinFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatMinFieldsModelSelector) => PokemonV2NaturepokeathlonstatMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2NaturepokeathlonstatMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2NaturepokeathlonstatStddevFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatStddevFieldsModelSelector) => PokemonV2NaturepokeathlonstatStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2NaturepokeathlonstatStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector) => PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector) => PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2NaturepokeathlonstatSumFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatSumFieldsModelSelector) => PokemonV2NaturepokeathlonstatSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2NaturepokeathlonstatSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector) => PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector) => PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector | ((selector: PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector) => PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2NaturepokeathlonstatAggregateFields() {
  return new PokemonV2NaturepokeathlonstatAggregateFieldsModelSelector()
}

export const pokemonV2NaturepokeathlonstatAggregateFieldsModelPrimitives = selectFromPokemonV2NaturepokeathlonstatAggregateFields().count
