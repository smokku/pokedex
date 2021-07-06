/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesteffecteffecttextAvgFieldsModel, PokemonV2ContesteffecteffecttextAvgFieldsModelType } from "./PokemonV2ContesteffecteffecttextAvgFieldsModel"
import { PokemonV2ContesteffecteffecttextAvgFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextAvgFieldsModel.base"
import { PokemonV2ContesteffecteffecttextMaxFieldsModel, PokemonV2ContesteffecteffecttextMaxFieldsModelType } from "./PokemonV2ContesteffecteffecttextMaxFieldsModel"
import { PokemonV2ContesteffecteffecttextMaxFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextMaxFieldsModel.base"
import { PokemonV2ContesteffecteffecttextMinFieldsModel, PokemonV2ContesteffecteffecttextMinFieldsModelType } from "./PokemonV2ContesteffecteffecttextMinFieldsModel"
import { PokemonV2ContesteffecteffecttextMinFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextMinFieldsModel.base"
import { PokemonV2ContesteffecteffecttextStddevFieldsModel, PokemonV2ContesteffecteffecttextStddevFieldsModelType } from "./PokemonV2ContesteffecteffecttextStddevFieldsModel"
import { PokemonV2ContesteffecteffecttextStddevFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevFieldsModel.base"
import { PokemonV2ContesteffecteffecttextStddevPopFieldsModel, PokemonV2ContesteffecteffecttextStddevPopFieldsModelType } from "./PokemonV2ContesteffecteffecttextStddevPopFieldsModel"
import { PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevPopFieldsModel.base"
import { PokemonV2ContesteffecteffecttextStddevSampFieldsModel, PokemonV2ContesteffecteffecttextStddevSampFieldsModelType } from "./PokemonV2ContesteffecteffecttextStddevSampFieldsModel"
import { PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevSampFieldsModel.base"
import { PokemonV2ContesteffecteffecttextSumFieldsModel, PokemonV2ContesteffecteffecttextSumFieldsModelType } from "./PokemonV2ContesteffecteffecttextSumFieldsModel"
import { PokemonV2ContesteffecteffecttextSumFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextSumFieldsModel.base"
import { PokemonV2ContesteffecteffecttextVarPopFieldsModel, PokemonV2ContesteffecteffecttextVarPopFieldsModelType } from "./PokemonV2ContesteffecteffecttextVarPopFieldsModel"
import { PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarPopFieldsModel.base"
import { PokemonV2ContesteffecteffecttextVarSampFieldsModel, PokemonV2ContesteffecteffecttextVarSampFieldsModelType } from "./PokemonV2ContesteffecteffecttextVarSampFieldsModel"
import { PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarSampFieldsModel.base"
import { PokemonV2ContesteffecteffecttextVarianceFieldsModel, PokemonV2ContesteffecteffecttextVarianceFieldsModelType } from "./PokemonV2ContesteffecteffecttextVarianceFieldsModel"
import { PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_aggregate_fields"), "pokemon_v2_contesteffecteffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesteffecteffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContesteffecteffecttextAvgFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextAvgFieldsModelSelector) => PokemonV2ContesteffecteffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContesteffecteffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContesteffecteffecttextMaxFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextMaxFieldsModelSelector) => PokemonV2ContesteffecteffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContesteffecteffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContesteffecteffecttextMinFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextMinFieldsModelSelector) => PokemonV2ContesteffecteffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContesteffecteffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContesteffecteffecttextStddevFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextStddevFieldsModelSelector) => PokemonV2ContesteffecteffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContesteffecteffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector) => PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector) => PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContesteffecteffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContesteffecteffecttextSumFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextSumFieldsModelSelector) => PokemonV2ContesteffecteffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContesteffecteffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector) => PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector) => PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector | ((selector: PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector) => PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContesteffecteffecttextAggregateFields() {
  return new PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector()
}

export const pokemonV2ContesteffecteffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2ContesteffecteffecttextAggregateFields().count
