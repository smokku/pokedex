/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationAvgFieldsModel, PokemonV2LocationAvgFieldsModelType } from "./PokemonV2LocationAvgFieldsModel"
import { PokemonV2LocationAvgFieldsModelSelector } from "./PokemonV2LocationAvgFieldsModel.base"
import { PokemonV2LocationMaxFieldsModel, PokemonV2LocationMaxFieldsModelType } from "./PokemonV2LocationMaxFieldsModel"
import { PokemonV2LocationMaxFieldsModelSelector } from "./PokemonV2LocationMaxFieldsModel.base"
import { PokemonV2LocationMinFieldsModel, PokemonV2LocationMinFieldsModelType } from "./PokemonV2LocationMinFieldsModel"
import { PokemonV2LocationMinFieldsModelSelector } from "./PokemonV2LocationMinFieldsModel.base"
import { PokemonV2LocationStddevFieldsModel, PokemonV2LocationStddevFieldsModelType } from "./PokemonV2LocationStddevFieldsModel"
import { PokemonV2LocationStddevFieldsModelSelector } from "./PokemonV2LocationStddevFieldsModel.base"
import { PokemonV2LocationStddevPopFieldsModel, PokemonV2LocationStddevPopFieldsModelType } from "./PokemonV2LocationStddevPopFieldsModel"
import { PokemonV2LocationStddevPopFieldsModelSelector } from "./PokemonV2LocationStddevPopFieldsModel.base"
import { PokemonV2LocationStddevSampFieldsModel, PokemonV2LocationStddevSampFieldsModelType } from "./PokemonV2LocationStddevSampFieldsModel"
import { PokemonV2LocationStddevSampFieldsModelSelector } from "./PokemonV2LocationStddevSampFieldsModel.base"
import { PokemonV2LocationSumFieldsModel, PokemonV2LocationSumFieldsModelType } from "./PokemonV2LocationSumFieldsModel"
import { PokemonV2LocationSumFieldsModelSelector } from "./PokemonV2LocationSumFieldsModel.base"
import { PokemonV2LocationVarPopFieldsModel, PokemonV2LocationVarPopFieldsModelType } from "./PokemonV2LocationVarPopFieldsModel"
import { PokemonV2LocationVarPopFieldsModelSelector } from "./PokemonV2LocationVarPopFieldsModel.base"
import { PokemonV2LocationVarSampFieldsModel, PokemonV2LocationVarSampFieldsModelType } from "./PokemonV2LocationVarSampFieldsModel"
import { PokemonV2LocationVarSampFieldsModelSelector } from "./PokemonV2LocationVarSampFieldsModel.base"
import { PokemonV2LocationVarianceFieldsModel, PokemonV2LocationVarianceFieldsModelType } from "./PokemonV2LocationVarianceFieldsModel"
import { PokemonV2LocationVarianceFieldsModelSelector } from "./PokemonV2LocationVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_location"
 */
export const PokemonV2LocationAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_location_aggregate_fields"), "pokemon_v2_location_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationAvgFieldsModelSelector | ((selector: PokemonV2LocationAvgFieldsModelSelector) => PokemonV2LocationAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationMaxFieldsModelSelector | ((selector: PokemonV2LocationMaxFieldsModelSelector) => PokemonV2LocationMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationMinFieldsModelSelector | ((selector: PokemonV2LocationMinFieldsModelSelector) => PokemonV2LocationMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationStddevFieldsModelSelector | ((selector: PokemonV2LocationStddevFieldsModelSelector) => PokemonV2LocationStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationStddevPopFieldsModelSelector | ((selector: PokemonV2LocationStddevPopFieldsModelSelector) => PokemonV2LocationStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationStddevSampFieldsModelSelector | ((selector: PokemonV2LocationStddevSampFieldsModelSelector) => PokemonV2LocationStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationSumFieldsModelSelector | ((selector: PokemonV2LocationSumFieldsModelSelector) => PokemonV2LocationSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationVarPopFieldsModelSelector | ((selector: PokemonV2LocationVarPopFieldsModelSelector) => PokemonV2LocationVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationVarSampFieldsModelSelector | ((selector: PokemonV2LocationVarSampFieldsModelSelector) => PokemonV2LocationVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationVarianceFieldsModelSelector | ((selector: PokemonV2LocationVarianceFieldsModelSelector) => PokemonV2LocationVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationAggregateFields() {
  return new PokemonV2LocationAggregateFieldsModelSelector()
}

export const pokemonV2LocationAggregateFieldsModelPrimitives = selectFromPokemonV2LocationAggregateFields().count
