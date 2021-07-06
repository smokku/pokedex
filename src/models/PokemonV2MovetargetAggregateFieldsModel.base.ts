/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovetargetAvgFieldsModel, PokemonV2MovetargetAvgFieldsModelType } from "./PokemonV2MovetargetAvgFieldsModel"
import { PokemonV2MovetargetAvgFieldsModelSelector } from "./PokemonV2MovetargetAvgFieldsModel.base"
import { PokemonV2MovetargetMaxFieldsModel, PokemonV2MovetargetMaxFieldsModelType } from "./PokemonV2MovetargetMaxFieldsModel"
import { PokemonV2MovetargetMaxFieldsModelSelector } from "./PokemonV2MovetargetMaxFieldsModel.base"
import { PokemonV2MovetargetMinFieldsModel, PokemonV2MovetargetMinFieldsModelType } from "./PokemonV2MovetargetMinFieldsModel"
import { PokemonV2MovetargetMinFieldsModelSelector } from "./PokemonV2MovetargetMinFieldsModel.base"
import { PokemonV2MovetargetStddevFieldsModel, PokemonV2MovetargetStddevFieldsModelType } from "./PokemonV2MovetargetStddevFieldsModel"
import { PokemonV2MovetargetStddevFieldsModelSelector } from "./PokemonV2MovetargetStddevFieldsModel.base"
import { PokemonV2MovetargetStddevPopFieldsModel, PokemonV2MovetargetStddevPopFieldsModelType } from "./PokemonV2MovetargetStddevPopFieldsModel"
import { PokemonV2MovetargetStddevPopFieldsModelSelector } from "./PokemonV2MovetargetStddevPopFieldsModel.base"
import { PokemonV2MovetargetStddevSampFieldsModel, PokemonV2MovetargetStddevSampFieldsModelType } from "./PokemonV2MovetargetStddevSampFieldsModel"
import { PokemonV2MovetargetStddevSampFieldsModelSelector } from "./PokemonV2MovetargetStddevSampFieldsModel.base"
import { PokemonV2MovetargetSumFieldsModel, PokemonV2MovetargetSumFieldsModelType } from "./PokemonV2MovetargetSumFieldsModel"
import { PokemonV2MovetargetSumFieldsModelSelector } from "./PokemonV2MovetargetSumFieldsModel.base"
import { PokemonV2MovetargetVarPopFieldsModel, PokemonV2MovetargetVarPopFieldsModelType } from "./PokemonV2MovetargetVarPopFieldsModel"
import { PokemonV2MovetargetVarPopFieldsModelSelector } from "./PokemonV2MovetargetVarPopFieldsModel.base"
import { PokemonV2MovetargetVarSampFieldsModel, PokemonV2MovetargetVarSampFieldsModelType } from "./PokemonV2MovetargetVarSampFieldsModel"
import { PokemonV2MovetargetVarSampFieldsModelSelector } from "./PokemonV2MovetargetVarSampFieldsModel.base"
import { PokemonV2MovetargetVarianceFieldsModel, PokemonV2MovetargetVarianceFieldsModelType } from "./PokemonV2MovetargetVarianceFieldsModel"
import { PokemonV2MovetargetVarianceFieldsModelSelector } from "./PokemonV2MovetargetVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovetargetAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovetargetAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovetargetAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movetarget_aggregate_fields"), "pokemon_v2_movetarget_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovetargetVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovetargetAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovetargetAvgFieldsModelSelector | ((selector: PokemonV2MovetargetAvgFieldsModelSelector) => PokemonV2MovetargetAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovetargetAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovetargetMaxFieldsModelSelector | ((selector: PokemonV2MovetargetMaxFieldsModelSelector) => PokemonV2MovetargetMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovetargetMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovetargetMinFieldsModelSelector | ((selector: PokemonV2MovetargetMinFieldsModelSelector) => PokemonV2MovetargetMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovetargetMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovetargetStddevFieldsModelSelector | ((selector: PokemonV2MovetargetStddevFieldsModelSelector) => PokemonV2MovetargetStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovetargetStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovetargetStddevPopFieldsModelSelector | ((selector: PokemonV2MovetargetStddevPopFieldsModelSelector) => PokemonV2MovetargetStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovetargetStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovetargetStddevSampFieldsModelSelector | ((selector: PokemonV2MovetargetStddevSampFieldsModelSelector) => PokemonV2MovetargetStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovetargetStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovetargetSumFieldsModelSelector | ((selector: PokemonV2MovetargetSumFieldsModelSelector) => PokemonV2MovetargetSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovetargetSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovetargetVarPopFieldsModelSelector | ((selector: PokemonV2MovetargetVarPopFieldsModelSelector) => PokemonV2MovetargetVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovetargetVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovetargetVarSampFieldsModelSelector | ((selector: PokemonV2MovetargetVarSampFieldsModelSelector) => PokemonV2MovetargetVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovetargetVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovetargetVarianceFieldsModelSelector | ((selector: PokemonV2MovetargetVarianceFieldsModelSelector) => PokemonV2MovetargetVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovetargetVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovetargetAggregateFields() {
  return new PokemonV2MovetargetAggregateFieldsModelSelector()
}

export const pokemonV2MovetargetAggregateFieldsModelPrimitives = selectFromPokemonV2MovetargetAggregateFields().count
