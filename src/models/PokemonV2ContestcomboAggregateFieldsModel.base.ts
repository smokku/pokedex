/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContestcomboAvgFieldsModel, PokemonV2ContestcomboAvgFieldsModelType } from "./PokemonV2ContestcomboAvgFieldsModel"
import { PokemonV2ContestcomboAvgFieldsModelSelector } from "./PokemonV2ContestcomboAvgFieldsModel.base"
import { PokemonV2ContestcomboMaxFieldsModel, PokemonV2ContestcomboMaxFieldsModelType } from "./PokemonV2ContestcomboMaxFieldsModel"
import { PokemonV2ContestcomboMaxFieldsModelSelector } from "./PokemonV2ContestcomboMaxFieldsModel.base"
import { PokemonV2ContestcomboMinFieldsModel, PokemonV2ContestcomboMinFieldsModelType } from "./PokemonV2ContestcomboMinFieldsModel"
import { PokemonV2ContestcomboMinFieldsModelSelector } from "./PokemonV2ContestcomboMinFieldsModel.base"
import { PokemonV2ContestcomboStddevFieldsModel, PokemonV2ContestcomboStddevFieldsModelType } from "./PokemonV2ContestcomboStddevFieldsModel"
import { PokemonV2ContestcomboStddevFieldsModelSelector } from "./PokemonV2ContestcomboStddevFieldsModel.base"
import { PokemonV2ContestcomboStddevPopFieldsModel, PokemonV2ContestcomboStddevPopFieldsModelType } from "./PokemonV2ContestcomboStddevPopFieldsModel"
import { PokemonV2ContestcomboStddevPopFieldsModelSelector } from "./PokemonV2ContestcomboStddevPopFieldsModel.base"
import { PokemonV2ContestcomboStddevSampFieldsModel, PokemonV2ContestcomboStddevSampFieldsModelType } from "./PokemonV2ContestcomboStddevSampFieldsModel"
import { PokemonV2ContestcomboStddevSampFieldsModelSelector } from "./PokemonV2ContestcomboStddevSampFieldsModel.base"
import { PokemonV2ContestcomboSumFieldsModel, PokemonV2ContestcomboSumFieldsModelType } from "./PokemonV2ContestcomboSumFieldsModel"
import { PokemonV2ContestcomboSumFieldsModelSelector } from "./PokemonV2ContestcomboSumFieldsModel.base"
import { PokemonV2ContestcomboVarPopFieldsModel, PokemonV2ContestcomboVarPopFieldsModelType } from "./PokemonV2ContestcomboVarPopFieldsModel"
import { PokemonV2ContestcomboVarPopFieldsModelSelector } from "./PokemonV2ContestcomboVarPopFieldsModel.base"
import { PokemonV2ContestcomboVarSampFieldsModel, PokemonV2ContestcomboVarSampFieldsModelType } from "./PokemonV2ContestcomboVarSampFieldsModel"
import { PokemonV2ContestcomboVarSampFieldsModelSelector } from "./PokemonV2ContestcomboVarSampFieldsModel.base"
import { PokemonV2ContestcomboVarianceFieldsModel, PokemonV2ContestcomboVarianceFieldsModelType } from "./PokemonV2ContestcomboVarianceFieldsModel"
import { PokemonV2ContestcomboVarianceFieldsModelSelector } from "./PokemonV2ContestcomboVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContestcomboAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContestcomboAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContestcomboAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contestcombo_aggregate_fields"), "pokemon_v2_contestcombo_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContestcomboVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContestcomboAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContestcomboAvgFieldsModelSelector | ((selector: PokemonV2ContestcomboAvgFieldsModelSelector) => PokemonV2ContestcomboAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContestcomboAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContestcomboMaxFieldsModelSelector | ((selector: PokemonV2ContestcomboMaxFieldsModelSelector) => PokemonV2ContestcomboMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContestcomboMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContestcomboMinFieldsModelSelector | ((selector: PokemonV2ContestcomboMinFieldsModelSelector) => PokemonV2ContestcomboMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContestcomboMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContestcomboStddevFieldsModelSelector | ((selector: PokemonV2ContestcomboStddevFieldsModelSelector) => PokemonV2ContestcomboStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContestcomboStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContestcomboStddevPopFieldsModelSelector | ((selector: PokemonV2ContestcomboStddevPopFieldsModelSelector) => PokemonV2ContestcomboStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContestcomboStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContestcomboStddevSampFieldsModelSelector | ((selector: PokemonV2ContestcomboStddevSampFieldsModelSelector) => PokemonV2ContestcomboStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContestcomboStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContestcomboSumFieldsModelSelector | ((selector: PokemonV2ContestcomboSumFieldsModelSelector) => PokemonV2ContestcomboSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContestcomboSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContestcomboVarPopFieldsModelSelector | ((selector: PokemonV2ContestcomboVarPopFieldsModelSelector) => PokemonV2ContestcomboVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContestcomboVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContestcomboVarSampFieldsModelSelector | ((selector: PokemonV2ContestcomboVarSampFieldsModelSelector) => PokemonV2ContestcomboVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContestcomboVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContestcomboVarianceFieldsModelSelector | ((selector: PokemonV2ContestcomboVarianceFieldsModelSelector) => PokemonV2ContestcomboVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContestcomboVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContestcomboAggregateFields() {
  return new PokemonV2ContestcomboAggregateFieldsModelSelector()
}

export const pokemonV2ContestcomboAggregateFieldsModelPrimitives = selectFromPokemonV2ContestcomboAggregateFields().count
