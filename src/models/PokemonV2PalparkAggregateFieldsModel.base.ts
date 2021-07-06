/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkAvgFieldsModel, PokemonV2PalparkAvgFieldsModelType } from "./PokemonV2PalparkAvgFieldsModel"
import { PokemonV2PalparkAvgFieldsModelSelector } from "./PokemonV2PalparkAvgFieldsModel.base"
import { PokemonV2PalparkMaxFieldsModel, PokemonV2PalparkMaxFieldsModelType } from "./PokemonV2PalparkMaxFieldsModel"
import { PokemonV2PalparkMaxFieldsModelSelector } from "./PokemonV2PalparkMaxFieldsModel.base"
import { PokemonV2PalparkMinFieldsModel, PokemonV2PalparkMinFieldsModelType } from "./PokemonV2PalparkMinFieldsModel"
import { PokemonV2PalparkMinFieldsModelSelector } from "./PokemonV2PalparkMinFieldsModel.base"
import { PokemonV2PalparkStddevFieldsModel, PokemonV2PalparkStddevFieldsModelType } from "./PokemonV2PalparkStddevFieldsModel"
import { PokemonV2PalparkStddevFieldsModelSelector } from "./PokemonV2PalparkStddevFieldsModel.base"
import { PokemonV2PalparkStddevPopFieldsModel, PokemonV2PalparkStddevPopFieldsModelType } from "./PokemonV2PalparkStddevPopFieldsModel"
import { PokemonV2PalparkStddevPopFieldsModelSelector } from "./PokemonV2PalparkStddevPopFieldsModel.base"
import { PokemonV2PalparkStddevSampFieldsModel, PokemonV2PalparkStddevSampFieldsModelType } from "./PokemonV2PalparkStddevSampFieldsModel"
import { PokemonV2PalparkStddevSampFieldsModelSelector } from "./PokemonV2PalparkStddevSampFieldsModel.base"
import { PokemonV2PalparkSumFieldsModel, PokemonV2PalparkSumFieldsModelType } from "./PokemonV2PalparkSumFieldsModel"
import { PokemonV2PalparkSumFieldsModelSelector } from "./PokemonV2PalparkSumFieldsModel.base"
import { PokemonV2PalparkVarPopFieldsModel, PokemonV2PalparkVarPopFieldsModelType } from "./PokemonV2PalparkVarPopFieldsModel"
import { PokemonV2PalparkVarPopFieldsModelSelector } from "./PokemonV2PalparkVarPopFieldsModel.base"
import { PokemonV2PalparkVarSampFieldsModel, PokemonV2PalparkVarSampFieldsModelType } from "./PokemonV2PalparkVarSampFieldsModel"
import { PokemonV2PalparkVarSampFieldsModelSelector } from "./PokemonV2PalparkVarSampFieldsModel.base"
import { PokemonV2PalparkVarianceFieldsModel, PokemonV2PalparkVarianceFieldsModelType } from "./PokemonV2PalparkVarianceFieldsModel"
import { PokemonV2PalparkVarianceFieldsModelSelector } from "./PokemonV2PalparkVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkAggregateFieldsBase
 * auto generated base class for the model PokemonV2PalparkAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PalparkAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palpark_aggregate_fields"), "pokemon_v2_palpark_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PalparkAvgFieldsModelSelector | ((selector: PokemonV2PalparkAvgFieldsModelSelector) => PokemonV2PalparkAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PalparkAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PalparkMaxFieldsModelSelector | ((selector: PokemonV2PalparkMaxFieldsModelSelector) => PokemonV2PalparkMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PalparkMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PalparkMinFieldsModelSelector | ((selector: PokemonV2PalparkMinFieldsModelSelector) => PokemonV2PalparkMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PalparkMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PalparkStddevFieldsModelSelector | ((selector: PokemonV2PalparkStddevFieldsModelSelector) => PokemonV2PalparkStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PalparkStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PalparkStddevPopFieldsModelSelector | ((selector: PokemonV2PalparkStddevPopFieldsModelSelector) => PokemonV2PalparkStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PalparkStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PalparkStddevSampFieldsModelSelector | ((selector: PokemonV2PalparkStddevSampFieldsModelSelector) => PokemonV2PalparkStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PalparkStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PalparkSumFieldsModelSelector | ((selector: PokemonV2PalparkSumFieldsModelSelector) => PokemonV2PalparkSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PalparkSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PalparkVarPopFieldsModelSelector | ((selector: PokemonV2PalparkVarPopFieldsModelSelector) => PokemonV2PalparkVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PalparkVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PalparkVarSampFieldsModelSelector | ((selector: PokemonV2PalparkVarSampFieldsModelSelector) => PokemonV2PalparkVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PalparkVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PalparkVarianceFieldsModelSelector | ((selector: PokemonV2PalparkVarianceFieldsModelSelector) => PokemonV2PalparkVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PalparkVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PalparkAggregateFields() {
  return new PokemonV2PalparkAggregateFieldsModelSelector()
}

export const pokemonV2PalparkAggregateFieldsModelPrimitives = selectFromPokemonV2PalparkAggregateFields().count
