/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavormapAvgFieldsModel, PokemonV2BerryflavormapAvgFieldsModelType } from "./PokemonV2BerryflavormapAvgFieldsModel"
import { PokemonV2BerryflavormapAvgFieldsModelSelector } from "./PokemonV2BerryflavormapAvgFieldsModel.base"
import { PokemonV2BerryflavormapMaxFieldsModel, PokemonV2BerryflavormapMaxFieldsModelType } from "./PokemonV2BerryflavormapMaxFieldsModel"
import { PokemonV2BerryflavormapMaxFieldsModelSelector } from "./PokemonV2BerryflavormapMaxFieldsModel.base"
import { PokemonV2BerryflavormapMinFieldsModel, PokemonV2BerryflavormapMinFieldsModelType } from "./PokemonV2BerryflavormapMinFieldsModel"
import { PokemonV2BerryflavormapMinFieldsModelSelector } from "./PokemonV2BerryflavormapMinFieldsModel.base"
import { PokemonV2BerryflavormapStddevFieldsModel, PokemonV2BerryflavormapStddevFieldsModelType } from "./PokemonV2BerryflavormapStddevFieldsModel"
import { PokemonV2BerryflavormapStddevFieldsModelSelector } from "./PokemonV2BerryflavormapStddevFieldsModel.base"
import { PokemonV2BerryflavormapStddevPopFieldsModel, PokemonV2BerryflavormapStddevPopFieldsModelType } from "./PokemonV2BerryflavormapStddevPopFieldsModel"
import { PokemonV2BerryflavormapStddevPopFieldsModelSelector } from "./PokemonV2BerryflavormapStddevPopFieldsModel.base"
import { PokemonV2BerryflavormapStddevSampFieldsModel, PokemonV2BerryflavormapStddevSampFieldsModelType } from "./PokemonV2BerryflavormapStddevSampFieldsModel"
import { PokemonV2BerryflavormapStddevSampFieldsModelSelector } from "./PokemonV2BerryflavormapStddevSampFieldsModel.base"
import { PokemonV2BerryflavormapSumFieldsModel, PokemonV2BerryflavormapSumFieldsModelType } from "./PokemonV2BerryflavormapSumFieldsModel"
import { PokemonV2BerryflavormapSumFieldsModelSelector } from "./PokemonV2BerryflavormapSumFieldsModel.base"
import { PokemonV2BerryflavormapVarPopFieldsModel, PokemonV2BerryflavormapVarPopFieldsModelType } from "./PokemonV2BerryflavormapVarPopFieldsModel"
import { PokemonV2BerryflavormapVarPopFieldsModelSelector } from "./PokemonV2BerryflavormapVarPopFieldsModel.base"
import { PokemonV2BerryflavormapVarSampFieldsModel, PokemonV2BerryflavormapVarSampFieldsModelType } from "./PokemonV2BerryflavormapVarSampFieldsModel"
import { PokemonV2BerryflavormapVarSampFieldsModelSelector } from "./PokemonV2BerryflavormapVarSampFieldsModel.base"
import { PokemonV2BerryflavormapVarianceFieldsModel, PokemonV2BerryflavormapVarianceFieldsModelType } from "./PokemonV2BerryflavormapVarianceFieldsModel"
import { PokemonV2BerryflavormapVarianceFieldsModelSelector } from "./PokemonV2BerryflavormapVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_aggregate_fields"), "pokemon_v2_berryflavormap_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavormapVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryflavormapAvgFieldsModelSelector | ((selector: PokemonV2BerryflavormapAvgFieldsModelSelector) => PokemonV2BerryflavormapAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryflavormapAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryflavormapMaxFieldsModelSelector | ((selector: PokemonV2BerryflavormapMaxFieldsModelSelector) => PokemonV2BerryflavormapMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryflavormapMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryflavormapMinFieldsModelSelector | ((selector: PokemonV2BerryflavormapMinFieldsModelSelector) => PokemonV2BerryflavormapMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryflavormapMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryflavormapStddevFieldsModelSelector | ((selector: PokemonV2BerryflavormapStddevFieldsModelSelector) => PokemonV2BerryflavormapStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryflavormapStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryflavormapStddevPopFieldsModelSelector | ((selector: PokemonV2BerryflavormapStddevPopFieldsModelSelector) => PokemonV2BerryflavormapStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryflavormapStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryflavormapStddevSampFieldsModelSelector | ((selector: PokemonV2BerryflavormapStddevSampFieldsModelSelector) => PokemonV2BerryflavormapStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryflavormapStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerryflavormapSumFieldsModelSelector | ((selector: PokemonV2BerryflavormapSumFieldsModelSelector) => PokemonV2BerryflavormapSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerryflavormapSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryflavormapVarPopFieldsModelSelector | ((selector: PokemonV2BerryflavormapVarPopFieldsModelSelector) => PokemonV2BerryflavormapVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryflavormapVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryflavormapVarSampFieldsModelSelector | ((selector: PokemonV2BerryflavormapVarSampFieldsModelSelector) => PokemonV2BerryflavormapVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryflavormapVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryflavormapVarianceFieldsModelSelector | ((selector: PokemonV2BerryflavormapVarianceFieldsModelSelector) => PokemonV2BerryflavormapVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryflavormapVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavormapAggregateFields() {
  return new PokemonV2BerryflavormapAggregateFieldsModelSelector()
}

export const pokemonV2BerryflavormapAggregateFieldsModelPrimitives = selectFromPokemonV2BerryflavormapAggregateFields().count
