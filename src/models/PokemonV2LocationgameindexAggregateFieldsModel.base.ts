/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationgameindexAvgFieldsModel, PokemonV2LocationgameindexAvgFieldsModelType } from "./PokemonV2LocationgameindexAvgFieldsModel"
import { PokemonV2LocationgameindexAvgFieldsModelSelector } from "./PokemonV2LocationgameindexAvgFieldsModel.base"
import { PokemonV2LocationgameindexMaxFieldsModel, PokemonV2LocationgameindexMaxFieldsModelType } from "./PokemonV2LocationgameindexMaxFieldsModel"
import { PokemonV2LocationgameindexMaxFieldsModelSelector } from "./PokemonV2LocationgameindexMaxFieldsModel.base"
import { PokemonV2LocationgameindexMinFieldsModel, PokemonV2LocationgameindexMinFieldsModelType } from "./PokemonV2LocationgameindexMinFieldsModel"
import { PokemonV2LocationgameindexMinFieldsModelSelector } from "./PokemonV2LocationgameindexMinFieldsModel.base"
import { PokemonV2LocationgameindexStddevFieldsModel, PokemonV2LocationgameindexStddevFieldsModelType } from "./PokemonV2LocationgameindexStddevFieldsModel"
import { PokemonV2LocationgameindexStddevFieldsModelSelector } from "./PokemonV2LocationgameindexStddevFieldsModel.base"
import { PokemonV2LocationgameindexStddevPopFieldsModel, PokemonV2LocationgameindexStddevPopFieldsModelType } from "./PokemonV2LocationgameindexStddevPopFieldsModel"
import { PokemonV2LocationgameindexStddevPopFieldsModelSelector } from "./PokemonV2LocationgameindexStddevPopFieldsModel.base"
import { PokemonV2LocationgameindexStddevSampFieldsModel, PokemonV2LocationgameindexStddevSampFieldsModelType } from "./PokemonV2LocationgameindexStddevSampFieldsModel"
import { PokemonV2LocationgameindexStddevSampFieldsModelSelector } from "./PokemonV2LocationgameindexStddevSampFieldsModel.base"
import { PokemonV2LocationgameindexSumFieldsModel, PokemonV2LocationgameindexSumFieldsModelType } from "./PokemonV2LocationgameindexSumFieldsModel"
import { PokemonV2LocationgameindexSumFieldsModelSelector } from "./PokemonV2LocationgameindexSumFieldsModel.base"
import { PokemonV2LocationgameindexVarPopFieldsModel, PokemonV2LocationgameindexVarPopFieldsModelType } from "./PokemonV2LocationgameindexVarPopFieldsModel"
import { PokemonV2LocationgameindexVarPopFieldsModelSelector } from "./PokemonV2LocationgameindexVarPopFieldsModel.base"
import { PokemonV2LocationgameindexVarSampFieldsModel, PokemonV2LocationgameindexVarSampFieldsModelType } from "./PokemonV2LocationgameindexVarSampFieldsModel"
import { PokemonV2LocationgameindexVarSampFieldsModelSelector } from "./PokemonV2LocationgameindexVarSampFieldsModel.base"
import { PokemonV2LocationgameindexVarianceFieldsModel, PokemonV2LocationgameindexVarianceFieldsModelType } from "./PokemonV2LocationgameindexVarianceFieldsModel"
import { PokemonV2LocationgameindexVarianceFieldsModelSelector } from "./PokemonV2LocationgameindexVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationgameindexAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationgameindexAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationgameindexAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationgameindex_aggregate_fields"), "pokemon_v2_locationgameindex_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationgameindexVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationgameindexAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationgameindexAvgFieldsModelSelector | ((selector: PokemonV2LocationgameindexAvgFieldsModelSelector) => PokemonV2LocationgameindexAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationgameindexAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationgameindexMaxFieldsModelSelector | ((selector: PokemonV2LocationgameindexMaxFieldsModelSelector) => PokemonV2LocationgameindexMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationgameindexMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationgameindexMinFieldsModelSelector | ((selector: PokemonV2LocationgameindexMinFieldsModelSelector) => PokemonV2LocationgameindexMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationgameindexMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationgameindexStddevFieldsModelSelector | ((selector: PokemonV2LocationgameindexStddevFieldsModelSelector) => PokemonV2LocationgameindexStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationgameindexStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationgameindexStddevPopFieldsModelSelector | ((selector: PokemonV2LocationgameindexStddevPopFieldsModelSelector) => PokemonV2LocationgameindexStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationgameindexStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationgameindexStddevSampFieldsModelSelector | ((selector: PokemonV2LocationgameindexStddevSampFieldsModelSelector) => PokemonV2LocationgameindexStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationgameindexStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationgameindexSumFieldsModelSelector | ((selector: PokemonV2LocationgameindexSumFieldsModelSelector) => PokemonV2LocationgameindexSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationgameindexSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationgameindexVarPopFieldsModelSelector | ((selector: PokemonV2LocationgameindexVarPopFieldsModelSelector) => PokemonV2LocationgameindexVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationgameindexVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationgameindexVarSampFieldsModelSelector | ((selector: PokemonV2LocationgameindexVarSampFieldsModelSelector) => PokemonV2LocationgameindexVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationgameindexVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationgameindexVarianceFieldsModelSelector | ((selector: PokemonV2LocationgameindexVarianceFieldsModelSelector) => PokemonV2LocationgameindexVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationgameindexVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationgameindexAggregateFields() {
  return new PokemonV2LocationgameindexAggregateFieldsModelSelector()
}

export const pokemonV2LocationgameindexAggregateFieldsModelPrimitives = selectFromPokemonV2LocationgameindexAggregateFields().count
