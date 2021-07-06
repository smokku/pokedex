/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflavortextAvgFieldsModel, PokemonV2ItemflavortextAvgFieldsModelType } from "./PokemonV2ItemflavortextAvgFieldsModel"
import { PokemonV2ItemflavortextAvgFieldsModelSelector } from "./PokemonV2ItemflavortextAvgFieldsModel.base"
import { PokemonV2ItemflavortextMaxFieldsModel, PokemonV2ItemflavortextMaxFieldsModelType } from "./PokemonV2ItemflavortextMaxFieldsModel"
import { PokemonV2ItemflavortextMaxFieldsModelSelector } from "./PokemonV2ItemflavortextMaxFieldsModel.base"
import { PokemonV2ItemflavortextMinFieldsModel, PokemonV2ItemflavortextMinFieldsModelType } from "./PokemonV2ItemflavortextMinFieldsModel"
import { PokemonV2ItemflavortextMinFieldsModelSelector } from "./PokemonV2ItemflavortextMinFieldsModel.base"
import { PokemonV2ItemflavortextStddevFieldsModel, PokemonV2ItemflavortextStddevFieldsModelType } from "./PokemonV2ItemflavortextStddevFieldsModel"
import { PokemonV2ItemflavortextStddevFieldsModelSelector } from "./PokemonV2ItemflavortextStddevFieldsModel.base"
import { PokemonV2ItemflavortextStddevPopFieldsModel, PokemonV2ItemflavortextStddevPopFieldsModelType } from "./PokemonV2ItemflavortextStddevPopFieldsModel"
import { PokemonV2ItemflavortextStddevPopFieldsModelSelector } from "./PokemonV2ItemflavortextStddevPopFieldsModel.base"
import { PokemonV2ItemflavortextStddevSampFieldsModel, PokemonV2ItemflavortextStddevSampFieldsModelType } from "./PokemonV2ItemflavortextStddevSampFieldsModel"
import { PokemonV2ItemflavortextStddevSampFieldsModelSelector } from "./PokemonV2ItemflavortextStddevSampFieldsModel.base"
import { PokemonV2ItemflavortextSumFieldsModel, PokemonV2ItemflavortextSumFieldsModelType } from "./PokemonV2ItemflavortextSumFieldsModel"
import { PokemonV2ItemflavortextSumFieldsModelSelector } from "./PokemonV2ItemflavortextSumFieldsModel.base"
import { PokemonV2ItemflavortextVarPopFieldsModel, PokemonV2ItemflavortextVarPopFieldsModelType } from "./PokemonV2ItemflavortextVarPopFieldsModel"
import { PokemonV2ItemflavortextVarPopFieldsModelSelector } from "./PokemonV2ItemflavortextVarPopFieldsModel.base"
import { PokemonV2ItemflavortextVarSampFieldsModel, PokemonV2ItemflavortextVarSampFieldsModelType } from "./PokemonV2ItemflavortextVarSampFieldsModel"
import { PokemonV2ItemflavortextVarSampFieldsModelSelector } from "./PokemonV2ItemflavortextVarSampFieldsModel.base"
import { PokemonV2ItemflavortextVarianceFieldsModel, PokemonV2ItemflavortextVarianceFieldsModelType } from "./PokemonV2ItemflavortextVarianceFieldsModel"
import { PokemonV2ItemflavortextVarianceFieldsModelSelector } from "./PokemonV2ItemflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemflavortext"
 */
export const PokemonV2ItemflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflavortext_aggregate_fields"), "pokemon_v2_itemflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemflavortextAvgFieldsModelSelector | ((selector: PokemonV2ItemflavortextAvgFieldsModelSelector) => PokemonV2ItemflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemflavortextMaxFieldsModelSelector | ((selector: PokemonV2ItemflavortextMaxFieldsModelSelector) => PokemonV2ItemflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemflavortextMinFieldsModelSelector | ((selector: PokemonV2ItemflavortextMinFieldsModelSelector) => PokemonV2ItemflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemflavortextStddevFieldsModelSelector | ((selector: PokemonV2ItemflavortextStddevFieldsModelSelector) => PokemonV2ItemflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2ItemflavortextStddevPopFieldsModelSelector) => PokemonV2ItemflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2ItemflavortextStddevSampFieldsModelSelector) => PokemonV2ItemflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemflavortextSumFieldsModelSelector | ((selector: PokemonV2ItemflavortextSumFieldsModelSelector) => PokemonV2ItemflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemflavortextVarPopFieldsModelSelector | ((selector: PokemonV2ItemflavortextVarPopFieldsModelSelector) => PokemonV2ItemflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemflavortextVarSampFieldsModelSelector | ((selector: PokemonV2ItemflavortextVarSampFieldsModelSelector) => PokemonV2ItemflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemflavortextVarianceFieldsModelSelector | ((selector: PokemonV2ItemflavortextVarianceFieldsModelSelector) => PokemonV2ItemflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemflavortextAggregateFields() {
  return new PokemonV2ItemflavortextAggregateFieldsModelSelector()
}

export const pokemonV2ItemflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2ItemflavortextAggregateFields().count
