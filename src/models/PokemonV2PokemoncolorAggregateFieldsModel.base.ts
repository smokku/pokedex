/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolorAvgFieldsModel, PokemonV2PokemoncolorAvgFieldsModelType } from "./PokemonV2PokemoncolorAvgFieldsModel"
import { PokemonV2PokemoncolorAvgFieldsModelSelector } from "./PokemonV2PokemoncolorAvgFieldsModel.base"
import { PokemonV2PokemoncolorMaxFieldsModel, PokemonV2PokemoncolorMaxFieldsModelType } from "./PokemonV2PokemoncolorMaxFieldsModel"
import { PokemonV2PokemoncolorMaxFieldsModelSelector } from "./PokemonV2PokemoncolorMaxFieldsModel.base"
import { PokemonV2PokemoncolorMinFieldsModel, PokemonV2PokemoncolorMinFieldsModelType } from "./PokemonV2PokemoncolorMinFieldsModel"
import { PokemonV2PokemoncolorMinFieldsModelSelector } from "./PokemonV2PokemoncolorMinFieldsModel.base"
import { PokemonV2PokemoncolorStddevFieldsModel, PokemonV2PokemoncolorStddevFieldsModelType } from "./PokemonV2PokemoncolorStddevFieldsModel"
import { PokemonV2PokemoncolorStddevFieldsModelSelector } from "./PokemonV2PokemoncolorStddevFieldsModel.base"
import { PokemonV2PokemoncolorStddevPopFieldsModel, PokemonV2PokemoncolorStddevPopFieldsModelType } from "./PokemonV2PokemoncolorStddevPopFieldsModel"
import { PokemonV2PokemoncolorStddevPopFieldsModelSelector } from "./PokemonV2PokemoncolorStddevPopFieldsModel.base"
import { PokemonV2PokemoncolorStddevSampFieldsModel, PokemonV2PokemoncolorStddevSampFieldsModelType } from "./PokemonV2PokemoncolorStddevSampFieldsModel"
import { PokemonV2PokemoncolorStddevSampFieldsModelSelector } from "./PokemonV2PokemoncolorStddevSampFieldsModel.base"
import { PokemonV2PokemoncolorSumFieldsModel, PokemonV2PokemoncolorSumFieldsModelType } from "./PokemonV2PokemoncolorSumFieldsModel"
import { PokemonV2PokemoncolorSumFieldsModelSelector } from "./PokemonV2PokemoncolorSumFieldsModel.base"
import { PokemonV2PokemoncolorVarPopFieldsModel, PokemonV2PokemoncolorVarPopFieldsModelType } from "./PokemonV2PokemoncolorVarPopFieldsModel"
import { PokemonV2PokemoncolorVarPopFieldsModelSelector } from "./PokemonV2PokemoncolorVarPopFieldsModel.base"
import { PokemonV2PokemoncolorVarSampFieldsModel, PokemonV2PokemoncolorVarSampFieldsModelType } from "./PokemonV2PokemoncolorVarSampFieldsModel"
import { PokemonV2PokemoncolorVarSampFieldsModelSelector } from "./PokemonV2PokemoncolorVarSampFieldsModel.base"
import { PokemonV2PokemoncolorVarianceFieldsModel, PokemonV2PokemoncolorVarianceFieldsModelType } from "./PokemonV2PokemoncolorVarianceFieldsModel"
import { PokemonV2PokemoncolorVarianceFieldsModelSelector } from "./PokemonV2PokemoncolorVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolorAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolorAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolorAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolor_aggregate_fields"), "pokemon_v2_pokemoncolor_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolorVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolorAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemoncolorAvgFieldsModelSelector | ((selector: PokemonV2PokemoncolorAvgFieldsModelSelector) => PokemonV2PokemoncolorAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemoncolorAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemoncolorMaxFieldsModelSelector | ((selector: PokemonV2PokemoncolorMaxFieldsModelSelector) => PokemonV2PokemoncolorMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemoncolorMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemoncolorMinFieldsModelSelector | ((selector: PokemonV2PokemoncolorMinFieldsModelSelector) => PokemonV2PokemoncolorMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemoncolorMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemoncolorStddevFieldsModelSelector | ((selector: PokemonV2PokemoncolorStddevFieldsModelSelector) => PokemonV2PokemoncolorStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemoncolorStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemoncolorStddevPopFieldsModelSelector | ((selector: PokemonV2PokemoncolorStddevPopFieldsModelSelector) => PokemonV2PokemoncolorStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemoncolorStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemoncolorStddevSampFieldsModelSelector | ((selector: PokemonV2PokemoncolorStddevSampFieldsModelSelector) => PokemonV2PokemoncolorStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemoncolorStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemoncolorSumFieldsModelSelector | ((selector: PokemonV2PokemoncolorSumFieldsModelSelector) => PokemonV2PokemoncolorSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemoncolorSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemoncolorVarPopFieldsModelSelector | ((selector: PokemonV2PokemoncolorVarPopFieldsModelSelector) => PokemonV2PokemoncolorVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemoncolorVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemoncolorVarSampFieldsModelSelector | ((selector: PokemonV2PokemoncolorVarSampFieldsModelSelector) => PokemonV2PokemoncolorVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemoncolorVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemoncolorVarianceFieldsModelSelector | ((selector: PokemonV2PokemoncolorVarianceFieldsModelSelector) => PokemonV2PokemoncolorVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemoncolorVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemoncolorAggregateFields() {
  return new PokemonV2PokemoncolorAggregateFieldsModelSelector()
}

export const pokemonV2PokemoncolorAggregateFieldsModelPrimitives = selectFromPokemonV2PokemoncolorAggregateFields().count
