/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveflavortextAvgFieldsModel, PokemonV2MoveflavortextAvgFieldsModelType } from "./PokemonV2MoveflavortextAvgFieldsModel"
import { PokemonV2MoveflavortextAvgFieldsModelSelector } from "./PokemonV2MoveflavortextAvgFieldsModel.base"
import { PokemonV2MoveflavortextMaxFieldsModel, PokemonV2MoveflavortextMaxFieldsModelType } from "./PokemonV2MoveflavortextMaxFieldsModel"
import { PokemonV2MoveflavortextMaxFieldsModelSelector } from "./PokemonV2MoveflavortextMaxFieldsModel.base"
import { PokemonV2MoveflavortextMinFieldsModel, PokemonV2MoveflavortextMinFieldsModelType } from "./PokemonV2MoveflavortextMinFieldsModel"
import { PokemonV2MoveflavortextMinFieldsModelSelector } from "./PokemonV2MoveflavortextMinFieldsModel.base"
import { PokemonV2MoveflavortextStddevFieldsModel, PokemonV2MoveflavortextStddevFieldsModelType } from "./PokemonV2MoveflavortextStddevFieldsModel"
import { PokemonV2MoveflavortextStddevFieldsModelSelector } from "./PokemonV2MoveflavortextStddevFieldsModel.base"
import { PokemonV2MoveflavortextStddevPopFieldsModel, PokemonV2MoveflavortextStddevPopFieldsModelType } from "./PokemonV2MoveflavortextStddevPopFieldsModel"
import { PokemonV2MoveflavortextStddevPopFieldsModelSelector } from "./PokemonV2MoveflavortextStddevPopFieldsModel.base"
import { PokemonV2MoveflavortextStddevSampFieldsModel, PokemonV2MoveflavortextStddevSampFieldsModelType } from "./PokemonV2MoveflavortextStddevSampFieldsModel"
import { PokemonV2MoveflavortextStddevSampFieldsModelSelector } from "./PokemonV2MoveflavortextStddevSampFieldsModel.base"
import { PokemonV2MoveflavortextSumFieldsModel, PokemonV2MoveflavortextSumFieldsModelType } from "./PokemonV2MoveflavortextSumFieldsModel"
import { PokemonV2MoveflavortextSumFieldsModelSelector } from "./PokemonV2MoveflavortextSumFieldsModel.base"
import { PokemonV2MoveflavortextVarPopFieldsModel, PokemonV2MoveflavortextVarPopFieldsModelType } from "./PokemonV2MoveflavortextVarPopFieldsModel"
import { PokemonV2MoveflavortextVarPopFieldsModelSelector } from "./PokemonV2MoveflavortextVarPopFieldsModel.base"
import { PokemonV2MoveflavortextVarSampFieldsModel, PokemonV2MoveflavortextVarSampFieldsModelType } from "./PokemonV2MoveflavortextVarSampFieldsModel"
import { PokemonV2MoveflavortextVarSampFieldsModelSelector } from "./PokemonV2MoveflavortextVarSampFieldsModel.base"
import { PokemonV2MoveflavortextVarianceFieldsModel, PokemonV2MoveflavortextVarianceFieldsModelType } from "./PokemonV2MoveflavortextVarianceFieldsModel"
import { PokemonV2MoveflavortextVarianceFieldsModelSelector } from "./PokemonV2MoveflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveflavortext_aggregate_fields"), "pokemon_v2_moveflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveflavortextAvgFieldsModelSelector | ((selector: PokemonV2MoveflavortextAvgFieldsModelSelector) => PokemonV2MoveflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveflavortextMaxFieldsModelSelector | ((selector: PokemonV2MoveflavortextMaxFieldsModelSelector) => PokemonV2MoveflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveflavortextMinFieldsModelSelector | ((selector: PokemonV2MoveflavortextMinFieldsModelSelector) => PokemonV2MoveflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveflavortextStddevFieldsModelSelector | ((selector: PokemonV2MoveflavortextStddevFieldsModelSelector) => PokemonV2MoveflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2MoveflavortextStddevPopFieldsModelSelector) => PokemonV2MoveflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2MoveflavortextStddevSampFieldsModelSelector) => PokemonV2MoveflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveflavortextSumFieldsModelSelector | ((selector: PokemonV2MoveflavortextSumFieldsModelSelector) => PokemonV2MoveflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveflavortextVarPopFieldsModelSelector | ((selector: PokemonV2MoveflavortextVarPopFieldsModelSelector) => PokemonV2MoveflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveflavortextVarSampFieldsModelSelector | ((selector: PokemonV2MoveflavortextVarSampFieldsModelSelector) => PokemonV2MoveflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveflavortextVarianceFieldsModelSelector | ((selector: PokemonV2MoveflavortextVarianceFieldsModelSelector) => PokemonV2MoveflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveflavortextAggregateFields() {
  return new PokemonV2MoveflavortextAggregateFieldsModelSelector()
}

export const pokemonV2MoveflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2MoveflavortextAggregateFields().count
