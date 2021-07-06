/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemgameindexAvgFieldsModel, PokemonV2ItemgameindexAvgFieldsModelType } from "./PokemonV2ItemgameindexAvgFieldsModel"
import { PokemonV2ItemgameindexAvgFieldsModelSelector } from "./PokemonV2ItemgameindexAvgFieldsModel.base"
import { PokemonV2ItemgameindexMaxFieldsModel, PokemonV2ItemgameindexMaxFieldsModelType } from "./PokemonV2ItemgameindexMaxFieldsModel"
import { PokemonV2ItemgameindexMaxFieldsModelSelector } from "./PokemonV2ItemgameindexMaxFieldsModel.base"
import { PokemonV2ItemgameindexMinFieldsModel, PokemonV2ItemgameindexMinFieldsModelType } from "./PokemonV2ItemgameindexMinFieldsModel"
import { PokemonV2ItemgameindexMinFieldsModelSelector } from "./PokemonV2ItemgameindexMinFieldsModel.base"
import { PokemonV2ItemgameindexStddevFieldsModel, PokemonV2ItemgameindexStddevFieldsModelType } from "./PokemonV2ItemgameindexStddevFieldsModel"
import { PokemonV2ItemgameindexStddevFieldsModelSelector } from "./PokemonV2ItemgameindexStddevFieldsModel.base"
import { PokemonV2ItemgameindexStddevPopFieldsModel, PokemonV2ItemgameindexStddevPopFieldsModelType } from "./PokemonV2ItemgameindexStddevPopFieldsModel"
import { PokemonV2ItemgameindexStddevPopFieldsModelSelector } from "./PokemonV2ItemgameindexStddevPopFieldsModel.base"
import { PokemonV2ItemgameindexStddevSampFieldsModel, PokemonV2ItemgameindexStddevSampFieldsModelType } from "./PokemonV2ItemgameindexStddevSampFieldsModel"
import { PokemonV2ItemgameindexStddevSampFieldsModelSelector } from "./PokemonV2ItemgameindexStddevSampFieldsModel.base"
import { PokemonV2ItemgameindexSumFieldsModel, PokemonV2ItemgameindexSumFieldsModelType } from "./PokemonV2ItemgameindexSumFieldsModel"
import { PokemonV2ItemgameindexSumFieldsModelSelector } from "./PokemonV2ItemgameindexSumFieldsModel.base"
import { PokemonV2ItemgameindexVarPopFieldsModel, PokemonV2ItemgameindexVarPopFieldsModelType } from "./PokemonV2ItemgameindexVarPopFieldsModel"
import { PokemonV2ItemgameindexVarPopFieldsModelSelector } from "./PokemonV2ItemgameindexVarPopFieldsModel.base"
import { PokemonV2ItemgameindexVarSampFieldsModel, PokemonV2ItemgameindexVarSampFieldsModelType } from "./PokemonV2ItemgameindexVarSampFieldsModel"
import { PokemonV2ItemgameindexVarSampFieldsModelSelector } from "./PokemonV2ItemgameindexVarSampFieldsModel.base"
import { PokemonV2ItemgameindexVarianceFieldsModel, PokemonV2ItemgameindexVarianceFieldsModelType } from "./PokemonV2ItemgameindexVarianceFieldsModel"
import { PokemonV2ItemgameindexVarianceFieldsModelSelector } from "./PokemonV2ItemgameindexVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemgameindexAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemgameindexAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemgameindexAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemgameindex_aggregate_fields"), "pokemon_v2_itemgameindex_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemgameindexVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemgameindexAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemgameindexAvgFieldsModelSelector | ((selector: PokemonV2ItemgameindexAvgFieldsModelSelector) => PokemonV2ItemgameindexAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemgameindexAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemgameindexMaxFieldsModelSelector | ((selector: PokemonV2ItemgameindexMaxFieldsModelSelector) => PokemonV2ItemgameindexMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemgameindexMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemgameindexMinFieldsModelSelector | ((selector: PokemonV2ItemgameindexMinFieldsModelSelector) => PokemonV2ItemgameindexMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemgameindexMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemgameindexStddevFieldsModelSelector | ((selector: PokemonV2ItemgameindexStddevFieldsModelSelector) => PokemonV2ItemgameindexStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemgameindexStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemgameindexStddevPopFieldsModelSelector | ((selector: PokemonV2ItemgameindexStddevPopFieldsModelSelector) => PokemonV2ItemgameindexStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemgameindexStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemgameindexStddevSampFieldsModelSelector | ((selector: PokemonV2ItemgameindexStddevSampFieldsModelSelector) => PokemonV2ItemgameindexStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemgameindexStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemgameindexSumFieldsModelSelector | ((selector: PokemonV2ItemgameindexSumFieldsModelSelector) => PokemonV2ItemgameindexSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemgameindexSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemgameindexVarPopFieldsModelSelector | ((selector: PokemonV2ItemgameindexVarPopFieldsModelSelector) => PokemonV2ItemgameindexVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemgameindexVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemgameindexVarSampFieldsModelSelector | ((selector: PokemonV2ItemgameindexVarSampFieldsModelSelector) => PokemonV2ItemgameindexVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemgameindexVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemgameindexVarianceFieldsModelSelector | ((selector: PokemonV2ItemgameindexVarianceFieldsModelSelector) => PokemonV2ItemgameindexVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemgameindexVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemgameindexAggregateFields() {
  return new PokemonV2ItemgameindexAggregateFieldsModelSelector()
}

export const pokemonV2ItemgameindexAggregateFieldsModelPrimitives = selectFromPokemonV2ItemgameindexAggregateFields().count
