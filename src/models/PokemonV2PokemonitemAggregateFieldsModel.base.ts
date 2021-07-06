/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonitemAvgFieldsModel, PokemonV2PokemonitemAvgFieldsModelType } from "./PokemonV2PokemonitemAvgFieldsModel"
import { PokemonV2PokemonitemAvgFieldsModelSelector } from "./PokemonV2PokemonitemAvgFieldsModel.base"
import { PokemonV2PokemonitemMaxFieldsModel, PokemonV2PokemonitemMaxFieldsModelType } from "./PokemonV2PokemonitemMaxFieldsModel"
import { PokemonV2PokemonitemMaxFieldsModelSelector } from "./PokemonV2PokemonitemMaxFieldsModel.base"
import { PokemonV2PokemonitemMinFieldsModel, PokemonV2PokemonitemMinFieldsModelType } from "./PokemonV2PokemonitemMinFieldsModel"
import { PokemonV2PokemonitemMinFieldsModelSelector } from "./PokemonV2PokemonitemMinFieldsModel.base"
import { PokemonV2PokemonitemStddevFieldsModel, PokemonV2PokemonitemStddevFieldsModelType } from "./PokemonV2PokemonitemStddevFieldsModel"
import { PokemonV2PokemonitemStddevFieldsModelSelector } from "./PokemonV2PokemonitemStddevFieldsModel.base"
import { PokemonV2PokemonitemStddevPopFieldsModel, PokemonV2PokemonitemStddevPopFieldsModelType } from "./PokemonV2PokemonitemStddevPopFieldsModel"
import { PokemonV2PokemonitemStddevPopFieldsModelSelector } from "./PokemonV2PokemonitemStddevPopFieldsModel.base"
import { PokemonV2PokemonitemStddevSampFieldsModel, PokemonV2PokemonitemStddevSampFieldsModelType } from "./PokemonV2PokemonitemStddevSampFieldsModel"
import { PokemonV2PokemonitemStddevSampFieldsModelSelector } from "./PokemonV2PokemonitemStddevSampFieldsModel.base"
import { PokemonV2PokemonitemSumFieldsModel, PokemonV2PokemonitemSumFieldsModelType } from "./PokemonV2PokemonitemSumFieldsModel"
import { PokemonV2PokemonitemSumFieldsModelSelector } from "./PokemonV2PokemonitemSumFieldsModel.base"
import { PokemonV2PokemonitemVarPopFieldsModel, PokemonV2PokemonitemVarPopFieldsModelType } from "./PokemonV2PokemonitemVarPopFieldsModel"
import { PokemonV2PokemonitemVarPopFieldsModelSelector } from "./PokemonV2PokemonitemVarPopFieldsModel.base"
import { PokemonV2PokemonitemVarSampFieldsModel, PokemonV2PokemonitemVarSampFieldsModelType } from "./PokemonV2PokemonitemVarSampFieldsModel"
import { PokemonV2PokemonitemVarSampFieldsModelSelector } from "./PokemonV2PokemonitemVarSampFieldsModel.base"
import { PokemonV2PokemonitemVarianceFieldsModel, PokemonV2PokemonitemVarianceFieldsModelType } from "./PokemonV2PokemonitemVarianceFieldsModel"
import { PokemonV2PokemonitemVarianceFieldsModelSelector } from "./PokemonV2PokemonitemVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonitemAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonitemAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonitemAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonitem_aggregate_fields"), "pokemon_v2_pokemonitem_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonitemVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonitemAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonitemAvgFieldsModelSelector | ((selector: PokemonV2PokemonitemAvgFieldsModelSelector) => PokemonV2PokemonitemAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonitemAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonitemMaxFieldsModelSelector | ((selector: PokemonV2PokemonitemMaxFieldsModelSelector) => PokemonV2PokemonitemMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonitemMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonitemMinFieldsModelSelector | ((selector: PokemonV2PokemonitemMinFieldsModelSelector) => PokemonV2PokemonitemMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonitemMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonitemStddevFieldsModelSelector | ((selector: PokemonV2PokemonitemStddevFieldsModelSelector) => PokemonV2PokemonitemStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonitemStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonitemStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonitemStddevPopFieldsModelSelector) => PokemonV2PokemonitemStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonitemStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonitemStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonitemStddevSampFieldsModelSelector) => PokemonV2PokemonitemStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonitemStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonitemSumFieldsModelSelector | ((selector: PokemonV2PokemonitemSumFieldsModelSelector) => PokemonV2PokemonitemSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonitemSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonitemVarPopFieldsModelSelector | ((selector: PokemonV2PokemonitemVarPopFieldsModelSelector) => PokemonV2PokemonitemVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonitemVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonitemVarSampFieldsModelSelector | ((selector: PokemonV2PokemonitemVarSampFieldsModelSelector) => PokemonV2PokemonitemVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonitemVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonitemVarianceFieldsModelSelector | ((selector: PokemonV2PokemonitemVarianceFieldsModelSelector) => PokemonV2PokemonitemVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonitemVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonitemAggregateFields() {
  return new PokemonV2PokemonitemAggregateFieldsModelSelector()
}

export const pokemonV2PokemonitemAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonitemAggregateFields().count
