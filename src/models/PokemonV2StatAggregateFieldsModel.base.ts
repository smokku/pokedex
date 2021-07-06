/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2StatAvgFieldsModel, PokemonV2StatAvgFieldsModelType } from "./PokemonV2StatAvgFieldsModel"
import { PokemonV2StatAvgFieldsModelSelector } from "./PokemonV2StatAvgFieldsModel.base"
import { PokemonV2StatMaxFieldsModel, PokemonV2StatMaxFieldsModelType } from "./PokemonV2StatMaxFieldsModel"
import { PokemonV2StatMaxFieldsModelSelector } from "./PokemonV2StatMaxFieldsModel.base"
import { PokemonV2StatMinFieldsModel, PokemonV2StatMinFieldsModelType } from "./PokemonV2StatMinFieldsModel"
import { PokemonV2StatMinFieldsModelSelector } from "./PokemonV2StatMinFieldsModel.base"
import { PokemonV2StatStddevFieldsModel, PokemonV2StatStddevFieldsModelType } from "./PokemonV2StatStddevFieldsModel"
import { PokemonV2StatStddevFieldsModelSelector } from "./PokemonV2StatStddevFieldsModel.base"
import { PokemonV2StatStddevPopFieldsModel, PokemonV2StatStddevPopFieldsModelType } from "./PokemonV2StatStddevPopFieldsModel"
import { PokemonV2StatStddevPopFieldsModelSelector } from "./PokemonV2StatStddevPopFieldsModel.base"
import { PokemonV2StatStddevSampFieldsModel, PokemonV2StatStddevSampFieldsModelType } from "./PokemonV2StatStddevSampFieldsModel"
import { PokemonV2StatStddevSampFieldsModelSelector } from "./PokemonV2StatStddevSampFieldsModel.base"
import { PokemonV2StatSumFieldsModel, PokemonV2StatSumFieldsModelType } from "./PokemonV2StatSumFieldsModel"
import { PokemonV2StatSumFieldsModelSelector } from "./PokemonV2StatSumFieldsModel.base"
import { PokemonV2StatVarPopFieldsModel, PokemonV2StatVarPopFieldsModelType } from "./PokemonV2StatVarPopFieldsModel"
import { PokemonV2StatVarPopFieldsModelSelector } from "./PokemonV2StatVarPopFieldsModel.base"
import { PokemonV2StatVarSampFieldsModel, PokemonV2StatVarSampFieldsModelType } from "./PokemonV2StatVarSampFieldsModel"
import { PokemonV2StatVarSampFieldsModelSelector } from "./PokemonV2StatVarSampFieldsModel.base"
import { PokemonV2StatVarianceFieldsModel, PokemonV2StatVarianceFieldsModelType } from "./PokemonV2StatVarianceFieldsModel"
import { PokemonV2StatVarianceFieldsModelSelector } from "./PokemonV2StatVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatAggregateFieldsBase
 * auto generated base class for the model PokemonV2StatAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_stat"
 */
export const PokemonV2StatAggregateFieldsModelBase = ModelBase
  .named('PokemonV2StatAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_stat_aggregate_fields"), "pokemon_v2_stat_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2StatAvgFieldsModelSelector | ((selector: PokemonV2StatAvgFieldsModelSelector) => PokemonV2StatAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2StatAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2StatMaxFieldsModelSelector | ((selector: PokemonV2StatMaxFieldsModelSelector) => PokemonV2StatMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2StatMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2StatMinFieldsModelSelector | ((selector: PokemonV2StatMinFieldsModelSelector) => PokemonV2StatMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2StatMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2StatStddevFieldsModelSelector | ((selector: PokemonV2StatStddevFieldsModelSelector) => PokemonV2StatStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2StatStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2StatStddevPopFieldsModelSelector | ((selector: PokemonV2StatStddevPopFieldsModelSelector) => PokemonV2StatStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2StatStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2StatStddevSampFieldsModelSelector | ((selector: PokemonV2StatStddevSampFieldsModelSelector) => PokemonV2StatStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2StatStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2StatSumFieldsModelSelector | ((selector: PokemonV2StatSumFieldsModelSelector) => PokemonV2StatSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2StatSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2StatVarPopFieldsModelSelector | ((selector: PokemonV2StatVarPopFieldsModelSelector) => PokemonV2StatVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2StatVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2StatVarSampFieldsModelSelector | ((selector: PokemonV2StatVarSampFieldsModelSelector) => PokemonV2StatVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2StatVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2StatVarianceFieldsModelSelector | ((selector: PokemonV2StatVarianceFieldsModelSelector) => PokemonV2StatVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2StatVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2StatAggregateFields() {
  return new PokemonV2StatAggregateFieldsModelSelector()
}

export const pokemonV2StatAggregateFieldsModelPrimitives = selectFromPokemonV2StatAggregateFields().count
