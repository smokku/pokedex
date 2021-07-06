/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontesteffectAvgFieldsModel, PokemonV2SupercontesteffectAvgFieldsModelType } from "./PokemonV2SupercontesteffectAvgFieldsModel"
import { PokemonV2SupercontesteffectAvgFieldsModelSelector } from "./PokemonV2SupercontesteffectAvgFieldsModel.base"
import { PokemonV2SupercontesteffectMaxFieldsModel, PokemonV2SupercontesteffectMaxFieldsModelType } from "./PokemonV2SupercontesteffectMaxFieldsModel"
import { PokemonV2SupercontesteffectMaxFieldsModelSelector } from "./PokemonV2SupercontesteffectMaxFieldsModel.base"
import { PokemonV2SupercontesteffectMinFieldsModel, PokemonV2SupercontesteffectMinFieldsModelType } from "./PokemonV2SupercontesteffectMinFieldsModel"
import { PokemonV2SupercontesteffectMinFieldsModelSelector } from "./PokemonV2SupercontesteffectMinFieldsModel.base"
import { PokemonV2SupercontesteffectStddevFieldsModel, PokemonV2SupercontesteffectStddevFieldsModelType } from "./PokemonV2SupercontesteffectStddevFieldsModel"
import { PokemonV2SupercontesteffectStddevFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevFieldsModel.base"
import { PokemonV2SupercontesteffectStddevPopFieldsModel, PokemonV2SupercontesteffectStddevPopFieldsModelType } from "./PokemonV2SupercontesteffectStddevPopFieldsModel"
import { PokemonV2SupercontesteffectStddevPopFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevPopFieldsModel.base"
import { PokemonV2SupercontesteffectStddevSampFieldsModel, PokemonV2SupercontesteffectStddevSampFieldsModelType } from "./PokemonV2SupercontesteffectStddevSampFieldsModel"
import { PokemonV2SupercontesteffectStddevSampFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevSampFieldsModel.base"
import { PokemonV2SupercontesteffectSumFieldsModel, PokemonV2SupercontesteffectSumFieldsModelType } from "./PokemonV2SupercontesteffectSumFieldsModel"
import { PokemonV2SupercontesteffectSumFieldsModelSelector } from "./PokemonV2SupercontesteffectSumFieldsModel.base"
import { PokemonV2SupercontesteffectVarPopFieldsModel, PokemonV2SupercontesteffectVarPopFieldsModelType } from "./PokemonV2SupercontesteffectVarPopFieldsModel"
import { PokemonV2SupercontesteffectVarPopFieldsModelSelector } from "./PokemonV2SupercontesteffectVarPopFieldsModel.base"
import { PokemonV2SupercontesteffectVarSampFieldsModel, PokemonV2SupercontesteffectVarSampFieldsModelType } from "./PokemonV2SupercontesteffectVarSampFieldsModel"
import { PokemonV2SupercontesteffectVarSampFieldsModelSelector } from "./PokemonV2SupercontesteffectVarSampFieldsModel.base"
import { PokemonV2SupercontesteffectVarianceFieldsModel, PokemonV2SupercontesteffectVarianceFieldsModelType } from "./PokemonV2SupercontesteffectVarianceFieldsModel"
import { PokemonV2SupercontesteffectVarianceFieldsModelSelector } from "./PokemonV2SupercontesteffectVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontesteffectAggregateFieldsBase
 * auto generated base class for the model PokemonV2SupercontesteffectAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectAggregateFieldsModelBase = ModelBase
  .named('PokemonV2SupercontesteffectAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontesteffect_aggregate_fields"), "pokemon_v2_supercontesteffect_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontesteffectVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontesteffectAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2SupercontesteffectAvgFieldsModelSelector | ((selector: PokemonV2SupercontesteffectAvgFieldsModelSelector) => PokemonV2SupercontesteffectAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2SupercontesteffectAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2SupercontesteffectMaxFieldsModelSelector | ((selector: PokemonV2SupercontesteffectMaxFieldsModelSelector) => PokemonV2SupercontesteffectMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2SupercontesteffectMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2SupercontesteffectMinFieldsModelSelector | ((selector: PokemonV2SupercontesteffectMinFieldsModelSelector) => PokemonV2SupercontesteffectMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2SupercontesteffectMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2SupercontesteffectStddevFieldsModelSelector | ((selector: PokemonV2SupercontesteffectStddevFieldsModelSelector) => PokemonV2SupercontesteffectStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2SupercontesteffectStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2SupercontesteffectStddevPopFieldsModelSelector | ((selector: PokemonV2SupercontesteffectStddevPopFieldsModelSelector) => PokemonV2SupercontesteffectStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2SupercontesteffectStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2SupercontesteffectStddevSampFieldsModelSelector | ((selector: PokemonV2SupercontesteffectStddevSampFieldsModelSelector) => PokemonV2SupercontesteffectStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2SupercontesteffectStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2SupercontesteffectSumFieldsModelSelector | ((selector: PokemonV2SupercontesteffectSumFieldsModelSelector) => PokemonV2SupercontesteffectSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2SupercontesteffectSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2SupercontesteffectVarPopFieldsModelSelector | ((selector: PokemonV2SupercontesteffectVarPopFieldsModelSelector) => PokemonV2SupercontesteffectVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2SupercontesteffectVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2SupercontesteffectVarSampFieldsModelSelector | ((selector: PokemonV2SupercontesteffectVarSampFieldsModelSelector) => PokemonV2SupercontesteffectVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2SupercontesteffectVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2SupercontesteffectVarianceFieldsModelSelector | ((selector: PokemonV2SupercontesteffectVarianceFieldsModelSelector) => PokemonV2SupercontesteffectVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2SupercontesteffectVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2SupercontesteffectAggregateFields() {
  return new PokemonV2SupercontesteffectAggregateFieldsModelSelector()
}

export const pokemonV2SupercontesteffectAggregateFieldsModelPrimitives = selectFromPokemonV2SupercontesteffectAggregateFields().count
