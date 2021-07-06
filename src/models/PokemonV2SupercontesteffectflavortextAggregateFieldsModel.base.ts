/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontesteffectflavortextAvgFieldsModel, PokemonV2SupercontesteffectflavortextAvgFieldsModelType } from "./PokemonV2SupercontesteffectflavortextAvgFieldsModel"
import { PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextAvgFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextMaxFieldsModel, PokemonV2SupercontesteffectflavortextMaxFieldsModelType } from "./PokemonV2SupercontesteffectflavortextMaxFieldsModel"
import { PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextMaxFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextMinFieldsModel, PokemonV2SupercontesteffectflavortextMinFieldsModelType } from "./PokemonV2SupercontesteffectflavortextMinFieldsModel"
import { PokemonV2SupercontesteffectflavortextMinFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextMinFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextStddevFieldsModel, PokemonV2SupercontesteffectflavortextStddevFieldsModelType } from "./PokemonV2SupercontesteffectflavortextStddevFieldsModel"
import { PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextStddevPopFieldsModel, PokemonV2SupercontesteffectflavortextStddevPopFieldsModelType } from "./PokemonV2SupercontesteffectflavortextStddevPopFieldsModel"
import { PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevPopFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextStddevSampFieldsModel, PokemonV2SupercontesteffectflavortextStddevSampFieldsModelType } from "./PokemonV2SupercontesteffectflavortextStddevSampFieldsModel"
import { PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevSampFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextSumFieldsModel, PokemonV2SupercontesteffectflavortextSumFieldsModelType } from "./PokemonV2SupercontesteffectflavortextSumFieldsModel"
import { PokemonV2SupercontesteffectflavortextSumFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextSumFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextVarPopFieldsModel, PokemonV2SupercontesteffectflavortextVarPopFieldsModelType } from "./PokemonV2SupercontesteffectflavortextVarPopFieldsModel"
import { PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarPopFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextVarSampFieldsModel, PokemonV2SupercontesteffectflavortextVarSampFieldsModelType } from "./PokemonV2SupercontesteffectflavortextVarSampFieldsModel"
import { PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarSampFieldsModel.base"
import { PokemonV2SupercontesteffectflavortextVarianceFieldsModel, PokemonV2SupercontesteffectflavortextVarianceFieldsModelType } from "./PokemonV2SupercontesteffectflavortextVarianceFieldsModel"
import { PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffectflavortext_aggregate_fields"), "pokemon_v2_supercontesteffectflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector) => PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2SupercontesteffectflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector) => PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2SupercontesteffectflavortextMinFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextMinFieldsModelSelector) => PokemonV2SupercontesteffectflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2SupercontesteffectflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector) => PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2SupercontesteffectflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector) => PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2SupercontesteffectflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector) => PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2SupercontesteffectflavortextSumFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextSumFieldsModelSelector) => PokemonV2SupercontesteffectflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2SupercontesteffectflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector) => PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2SupercontesteffectflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector) => PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector | ((selector: PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector) => PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2SupercontesteffectflavortextAggregateFields() {
  return new PokemonV2SupercontesteffectflavortextAggregateFieldsModelSelector()
}

export const pokemonV2SupercontesteffectflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectflavortextAggregateFields().count
