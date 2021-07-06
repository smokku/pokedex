/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionAvgFieldsModel, PokemonV2EncounterconditionAvgFieldsModelType } from "./PokemonV2EncounterconditionAvgFieldsModel"
import { PokemonV2EncounterconditionAvgFieldsModelSelector } from "./PokemonV2EncounterconditionAvgFieldsModel.base"
import { PokemonV2EncounterconditionMaxFieldsModel, PokemonV2EncounterconditionMaxFieldsModelType } from "./PokemonV2EncounterconditionMaxFieldsModel"
import { PokemonV2EncounterconditionMaxFieldsModelSelector } from "./PokemonV2EncounterconditionMaxFieldsModel.base"
import { PokemonV2EncounterconditionMinFieldsModel, PokemonV2EncounterconditionMinFieldsModelType } from "./PokemonV2EncounterconditionMinFieldsModel"
import { PokemonV2EncounterconditionMinFieldsModelSelector } from "./PokemonV2EncounterconditionMinFieldsModel.base"
import { PokemonV2EncounterconditionStddevFieldsModel, PokemonV2EncounterconditionStddevFieldsModelType } from "./PokemonV2EncounterconditionStddevFieldsModel"
import { PokemonV2EncounterconditionStddevFieldsModelSelector } from "./PokemonV2EncounterconditionStddevFieldsModel.base"
import { PokemonV2EncounterconditionStddevPopFieldsModel, PokemonV2EncounterconditionStddevPopFieldsModelType } from "./PokemonV2EncounterconditionStddevPopFieldsModel"
import { PokemonV2EncounterconditionStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionStddevPopFieldsModel.base"
import { PokemonV2EncounterconditionStddevSampFieldsModel, PokemonV2EncounterconditionStddevSampFieldsModelType } from "./PokemonV2EncounterconditionStddevSampFieldsModel"
import { PokemonV2EncounterconditionStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionStddevSampFieldsModel.base"
import { PokemonV2EncounterconditionSumFieldsModel, PokemonV2EncounterconditionSumFieldsModelType } from "./PokemonV2EncounterconditionSumFieldsModel"
import { PokemonV2EncounterconditionSumFieldsModelSelector } from "./PokemonV2EncounterconditionSumFieldsModel.base"
import { PokemonV2EncounterconditionVarPopFieldsModel, PokemonV2EncounterconditionVarPopFieldsModelType } from "./PokemonV2EncounterconditionVarPopFieldsModel"
import { PokemonV2EncounterconditionVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionVarPopFieldsModel.base"
import { PokemonV2EncounterconditionVarSampFieldsModel, PokemonV2EncounterconditionVarSampFieldsModelType } from "./PokemonV2EncounterconditionVarSampFieldsModel"
import { PokemonV2EncounterconditionVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionVarSampFieldsModel.base"
import { PokemonV2EncounterconditionVarianceFieldsModel, PokemonV2EncounterconditionVarianceFieldsModelType } from "./PokemonV2EncounterconditionVarianceFieldsModel"
import { PokemonV2EncounterconditionVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountercondition_aggregate_fields"), "pokemon_v2_encountercondition_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterconditionAvgFieldsModelSelector | ((selector: PokemonV2EncounterconditionAvgFieldsModelSelector) => PokemonV2EncounterconditionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterconditionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterconditionMaxFieldsModelSelector | ((selector: PokemonV2EncounterconditionMaxFieldsModelSelector) => PokemonV2EncounterconditionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterconditionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterconditionMinFieldsModelSelector | ((selector: PokemonV2EncounterconditionMinFieldsModelSelector) => PokemonV2EncounterconditionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterconditionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterconditionStddevFieldsModelSelector | ((selector: PokemonV2EncounterconditionStddevFieldsModelSelector) => PokemonV2EncounterconditionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterconditionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterconditionStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionStddevPopFieldsModelSelector) => PokemonV2EncounterconditionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterconditionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterconditionStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionStddevSampFieldsModelSelector) => PokemonV2EncounterconditionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterconditionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterconditionSumFieldsModelSelector | ((selector: PokemonV2EncounterconditionSumFieldsModelSelector) => PokemonV2EncounterconditionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterconditionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterconditionVarPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionVarPopFieldsModelSelector) => PokemonV2EncounterconditionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterconditionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterconditionVarSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionVarSampFieldsModelSelector) => PokemonV2EncounterconditionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterconditionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterconditionVarianceFieldsModelSelector | ((selector: PokemonV2EncounterconditionVarianceFieldsModelSelector) => PokemonV2EncounterconditionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterconditionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionAggregateFields() {
  return new PokemonV2EncounterconditionAggregateFieldsModelSelector()
}

export const pokemonV2EncounterconditionAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterconditionAggregateFields().count
