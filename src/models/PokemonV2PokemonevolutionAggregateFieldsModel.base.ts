/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonevolutionAvgFieldsModel, PokemonV2PokemonevolutionAvgFieldsModelType } from "./PokemonV2PokemonevolutionAvgFieldsModel"
import { PokemonV2PokemonevolutionAvgFieldsModelSelector } from "./PokemonV2PokemonevolutionAvgFieldsModel.base"
import { PokemonV2PokemonevolutionMaxFieldsModel, PokemonV2PokemonevolutionMaxFieldsModelType } from "./PokemonV2PokemonevolutionMaxFieldsModel"
import { PokemonV2PokemonevolutionMaxFieldsModelSelector } from "./PokemonV2PokemonevolutionMaxFieldsModel.base"
import { PokemonV2PokemonevolutionMinFieldsModel, PokemonV2PokemonevolutionMinFieldsModelType } from "./PokemonV2PokemonevolutionMinFieldsModel"
import { PokemonV2PokemonevolutionMinFieldsModelSelector } from "./PokemonV2PokemonevolutionMinFieldsModel.base"
import { PokemonV2PokemonevolutionStddevFieldsModel, PokemonV2PokemonevolutionStddevFieldsModelType } from "./PokemonV2PokemonevolutionStddevFieldsModel"
import { PokemonV2PokemonevolutionStddevFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevFieldsModel.base"
import { PokemonV2PokemonevolutionStddevPopFieldsModel, PokemonV2PokemonevolutionStddevPopFieldsModelType } from "./PokemonV2PokemonevolutionStddevPopFieldsModel"
import { PokemonV2PokemonevolutionStddevPopFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevPopFieldsModel.base"
import { PokemonV2PokemonevolutionStddevSampFieldsModel, PokemonV2PokemonevolutionStddevSampFieldsModelType } from "./PokemonV2PokemonevolutionStddevSampFieldsModel"
import { PokemonV2PokemonevolutionStddevSampFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevSampFieldsModel.base"
import { PokemonV2PokemonevolutionSumFieldsModel, PokemonV2PokemonevolutionSumFieldsModelType } from "./PokemonV2PokemonevolutionSumFieldsModel"
import { PokemonV2PokemonevolutionSumFieldsModelSelector } from "./PokemonV2PokemonevolutionSumFieldsModel.base"
import { PokemonV2PokemonevolutionVarPopFieldsModel, PokemonV2PokemonevolutionVarPopFieldsModelType } from "./PokemonV2PokemonevolutionVarPopFieldsModel"
import { PokemonV2PokemonevolutionVarPopFieldsModelSelector } from "./PokemonV2PokemonevolutionVarPopFieldsModel.base"
import { PokemonV2PokemonevolutionVarSampFieldsModel, PokemonV2PokemonevolutionVarSampFieldsModelType } from "./PokemonV2PokemonevolutionVarSampFieldsModel"
import { PokemonV2PokemonevolutionVarSampFieldsModelSelector } from "./PokemonV2PokemonevolutionVarSampFieldsModel.base"
import { PokemonV2PokemonevolutionVarianceFieldsModel, PokemonV2PokemonevolutionVarianceFieldsModelType } from "./PokemonV2PokemonevolutionVarianceFieldsModel"
import { PokemonV2PokemonevolutionVarianceFieldsModelSelector } from "./PokemonV2PokemonevolutionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonevolutionAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonevolutionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonevolutionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonevolution_aggregate_fields"), "pokemon_v2_pokemonevolution_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonevolutionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonevolutionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonevolutionAvgFieldsModelSelector | ((selector: PokemonV2PokemonevolutionAvgFieldsModelSelector) => PokemonV2PokemonevolutionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonevolutionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonevolutionMaxFieldsModelSelector | ((selector: PokemonV2PokemonevolutionMaxFieldsModelSelector) => PokemonV2PokemonevolutionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonevolutionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonevolutionMinFieldsModelSelector | ((selector: PokemonV2PokemonevolutionMinFieldsModelSelector) => PokemonV2PokemonevolutionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonevolutionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonevolutionStddevFieldsModelSelector | ((selector: PokemonV2PokemonevolutionStddevFieldsModelSelector) => PokemonV2PokemonevolutionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonevolutionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonevolutionStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonevolutionStddevPopFieldsModelSelector) => PokemonV2PokemonevolutionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonevolutionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonevolutionStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonevolutionStddevSampFieldsModelSelector) => PokemonV2PokemonevolutionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonevolutionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonevolutionSumFieldsModelSelector | ((selector: PokemonV2PokemonevolutionSumFieldsModelSelector) => PokemonV2PokemonevolutionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonevolutionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonevolutionVarPopFieldsModelSelector | ((selector: PokemonV2PokemonevolutionVarPopFieldsModelSelector) => PokemonV2PokemonevolutionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonevolutionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonevolutionVarSampFieldsModelSelector | ((selector: PokemonV2PokemonevolutionVarSampFieldsModelSelector) => PokemonV2PokemonevolutionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonevolutionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonevolutionVarianceFieldsModelSelector | ((selector: PokemonV2PokemonevolutionVarianceFieldsModelSelector) => PokemonV2PokemonevolutionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonevolutionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonevolutionAggregateFields() {
  return new PokemonV2PokemonevolutionAggregateFieldsModelSelector()
}

export const pokemonV2PokemonevolutionAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonevolutionAggregateFields().count
