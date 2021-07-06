/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypegameindexAvgFieldsModel, PokemonV2TypegameindexAvgFieldsModelType } from "./PokemonV2TypegameindexAvgFieldsModel"
import { PokemonV2TypegameindexAvgFieldsModelSelector } from "./PokemonV2TypegameindexAvgFieldsModel.base"
import { PokemonV2TypegameindexMaxFieldsModel, PokemonV2TypegameindexMaxFieldsModelType } from "./PokemonV2TypegameindexMaxFieldsModel"
import { PokemonV2TypegameindexMaxFieldsModelSelector } from "./PokemonV2TypegameindexMaxFieldsModel.base"
import { PokemonV2TypegameindexMinFieldsModel, PokemonV2TypegameindexMinFieldsModelType } from "./PokemonV2TypegameindexMinFieldsModel"
import { PokemonV2TypegameindexMinFieldsModelSelector } from "./PokemonV2TypegameindexMinFieldsModel.base"
import { PokemonV2TypegameindexStddevFieldsModel, PokemonV2TypegameindexStddevFieldsModelType } from "./PokemonV2TypegameindexStddevFieldsModel"
import { PokemonV2TypegameindexStddevFieldsModelSelector } from "./PokemonV2TypegameindexStddevFieldsModel.base"
import { PokemonV2TypegameindexStddevPopFieldsModel, PokemonV2TypegameindexStddevPopFieldsModelType } from "./PokemonV2TypegameindexStddevPopFieldsModel"
import { PokemonV2TypegameindexStddevPopFieldsModelSelector } from "./PokemonV2TypegameindexStddevPopFieldsModel.base"
import { PokemonV2TypegameindexStddevSampFieldsModel, PokemonV2TypegameindexStddevSampFieldsModelType } from "./PokemonV2TypegameindexStddevSampFieldsModel"
import { PokemonV2TypegameindexStddevSampFieldsModelSelector } from "./PokemonV2TypegameindexStddevSampFieldsModel.base"
import { PokemonV2TypegameindexSumFieldsModel, PokemonV2TypegameindexSumFieldsModelType } from "./PokemonV2TypegameindexSumFieldsModel"
import { PokemonV2TypegameindexSumFieldsModelSelector } from "./PokemonV2TypegameindexSumFieldsModel.base"
import { PokemonV2TypegameindexVarPopFieldsModel, PokemonV2TypegameindexVarPopFieldsModelType } from "./PokemonV2TypegameindexVarPopFieldsModel"
import { PokemonV2TypegameindexVarPopFieldsModelSelector } from "./PokemonV2TypegameindexVarPopFieldsModel.base"
import { PokemonV2TypegameindexVarSampFieldsModel, PokemonV2TypegameindexVarSampFieldsModelType } from "./PokemonV2TypegameindexVarSampFieldsModel"
import { PokemonV2TypegameindexVarSampFieldsModelSelector } from "./PokemonV2TypegameindexVarSampFieldsModel.base"
import { PokemonV2TypegameindexVarianceFieldsModel, PokemonV2TypegameindexVarianceFieldsModelType } from "./PokemonV2TypegameindexVarianceFieldsModel"
import { PokemonV2TypegameindexVarianceFieldsModelSelector } from "./PokemonV2TypegameindexVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypegameindexAggregateFieldsBase
 * auto generated base class for the model PokemonV2TypegameindexAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexAggregateFieldsModelBase = ModelBase
  .named('PokemonV2TypegameindexAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typegameindex_aggregate_fields"), "pokemon_v2_typegameindex_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypegameindexVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypegameindexAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2TypegameindexAvgFieldsModelSelector | ((selector: PokemonV2TypegameindexAvgFieldsModelSelector) => PokemonV2TypegameindexAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2TypegameindexAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2TypegameindexMaxFieldsModelSelector | ((selector: PokemonV2TypegameindexMaxFieldsModelSelector) => PokemonV2TypegameindexMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2TypegameindexMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2TypegameindexMinFieldsModelSelector | ((selector: PokemonV2TypegameindexMinFieldsModelSelector) => PokemonV2TypegameindexMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2TypegameindexMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2TypegameindexStddevFieldsModelSelector | ((selector: PokemonV2TypegameindexStddevFieldsModelSelector) => PokemonV2TypegameindexStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2TypegameindexStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2TypegameindexStddevPopFieldsModelSelector | ((selector: PokemonV2TypegameindexStddevPopFieldsModelSelector) => PokemonV2TypegameindexStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2TypegameindexStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2TypegameindexStddevSampFieldsModelSelector | ((selector: PokemonV2TypegameindexStddevSampFieldsModelSelector) => PokemonV2TypegameindexStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2TypegameindexStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2TypegameindexSumFieldsModelSelector | ((selector: PokemonV2TypegameindexSumFieldsModelSelector) => PokemonV2TypegameindexSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2TypegameindexSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2TypegameindexVarPopFieldsModelSelector | ((selector: PokemonV2TypegameindexVarPopFieldsModelSelector) => PokemonV2TypegameindexVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2TypegameindexVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2TypegameindexVarSampFieldsModelSelector | ((selector: PokemonV2TypegameindexVarSampFieldsModelSelector) => PokemonV2TypegameindexVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2TypegameindexVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2TypegameindexVarianceFieldsModelSelector | ((selector: PokemonV2TypegameindexVarianceFieldsModelSelector) => PokemonV2TypegameindexVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2TypegameindexVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2TypegameindexAggregateFields() {
  return new PokemonV2TypegameindexAggregateFieldsModelSelector()
}

export const pokemonV2TypegameindexAggregateFieldsModelPrimitives = selectFromPokemonV2TypegameindexAggregateFields().count
