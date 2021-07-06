/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonstatAvgFieldsModel, PokemonV2PokemonstatAvgFieldsModelType } from "./PokemonV2PokemonstatAvgFieldsModel"
import { PokemonV2PokemonstatAvgFieldsModelSelector } from "./PokemonV2PokemonstatAvgFieldsModel.base"
import { PokemonV2PokemonstatMaxFieldsModel, PokemonV2PokemonstatMaxFieldsModelType } from "./PokemonV2PokemonstatMaxFieldsModel"
import { PokemonV2PokemonstatMaxFieldsModelSelector } from "./PokemonV2PokemonstatMaxFieldsModel.base"
import { PokemonV2PokemonstatMinFieldsModel, PokemonV2PokemonstatMinFieldsModelType } from "./PokemonV2PokemonstatMinFieldsModel"
import { PokemonV2PokemonstatMinFieldsModelSelector } from "./PokemonV2PokemonstatMinFieldsModel.base"
import { PokemonV2PokemonstatStddevFieldsModel, PokemonV2PokemonstatStddevFieldsModelType } from "./PokemonV2PokemonstatStddevFieldsModel"
import { PokemonV2PokemonstatStddevFieldsModelSelector } from "./PokemonV2PokemonstatStddevFieldsModel.base"
import { PokemonV2PokemonstatStddevPopFieldsModel, PokemonV2PokemonstatStddevPopFieldsModelType } from "./PokemonV2PokemonstatStddevPopFieldsModel"
import { PokemonV2PokemonstatStddevPopFieldsModelSelector } from "./PokemonV2PokemonstatStddevPopFieldsModel.base"
import { PokemonV2PokemonstatStddevSampFieldsModel, PokemonV2PokemonstatStddevSampFieldsModelType } from "./PokemonV2PokemonstatStddevSampFieldsModel"
import { PokemonV2PokemonstatStddevSampFieldsModelSelector } from "./PokemonV2PokemonstatStddevSampFieldsModel.base"
import { PokemonV2PokemonstatSumFieldsModel, PokemonV2PokemonstatSumFieldsModelType } from "./PokemonV2PokemonstatSumFieldsModel"
import { PokemonV2PokemonstatSumFieldsModelSelector } from "./PokemonV2PokemonstatSumFieldsModel.base"
import { PokemonV2PokemonstatVarPopFieldsModel, PokemonV2PokemonstatVarPopFieldsModelType } from "./PokemonV2PokemonstatVarPopFieldsModel"
import { PokemonV2PokemonstatVarPopFieldsModelSelector } from "./PokemonV2PokemonstatVarPopFieldsModel.base"
import { PokemonV2PokemonstatVarSampFieldsModel, PokemonV2PokemonstatVarSampFieldsModelType } from "./PokemonV2PokemonstatVarSampFieldsModel"
import { PokemonV2PokemonstatVarSampFieldsModelSelector } from "./PokemonV2PokemonstatVarSampFieldsModel.base"
import { PokemonV2PokemonstatVarianceFieldsModel, PokemonV2PokemonstatVarianceFieldsModelType } from "./PokemonV2PokemonstatVarianceFieldsModel"
import { PokemonV2PokemonstatVarianceFieldsModelSelector } from "./PokemonV2PokemonstatVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonstatAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonstatAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonstatAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonstat_aggregate_fields"), "pokemon_v2_pokemonstat_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonstatVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonstatAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonstatAvgFieldsModelSelector | ((selector: PokemonV2PokemonstatAvgFieldsModelSelector) => PokemonV2PokemonstatAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonstatAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonstatMaxFieldsModelSelector | ((selector: PokemonV2PokemonstatMaxFieldsModelSelector) => PokemonV2PokemonstatMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonstatMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonstatMinFieldsModelSelector | ((selector: PokemonV2PokemonstatMinFieldsModelSelector) => PokemonV2PokemonstatMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonstatMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonstatStddevFieldsModelSelector | ((selector: PokemonV2PokemonstatStddevFieldsModelSelector) => PokemonV2PokemonstatStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonstatStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonstatStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonstatStddevPopFieldsModelSelector) => PokemonV2PokemonstatStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonstatStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonstatStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonstatStddevSampFieldsModelSelector) => PokemonV2PokemonstatStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonstatStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonstatSumFieldsModelSelector | ((selector: PokemonV2PokemonstatSumFieldsModelSelector) => PokemonV2PokemonstatSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonstatSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonstatVarPopFieldsModelSelector | ((selector: PokemonV2PokemonstatVarPopFieldsModelSelector) => PokemonV2PokemonstatVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonstatVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonstatVarSampFieldsModelSelector | ((selector: PokemonV2PokemonstatVarSampFieldsModelSelector) => PokemonV2PokemonstatVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonstatVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonstatVarianceFieldsModelSelector | ((selector: PokemonV2PokemonstatVarianceFieldsModelSelector) => PokemonV2PokemonstatVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonstatVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonstatAggregateFields() {
  return new PokemonV2PokemonstatAggregateFieldsModelSelector()
}

export const pokemonV2PokemonstatAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonstatAggregateFields().count
