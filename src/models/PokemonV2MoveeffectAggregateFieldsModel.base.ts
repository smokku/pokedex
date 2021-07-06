/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectAvgFieldsModel, PokemonV2MoveeffectAvgFieldsModelType } from "./PokemonV2MoveeffectAvgFieldsModel"
import { PokemonV2MoveeffectAvgFieldsModelSelector } from "./PokemonV2MoveeffectAvgFieldsModel.base"
import { PokemonV2MoveeffectMaxFieldsModel, PokemonV2MoveeffectMaxFieldsModelType } from "./PokemonV2MoveeffectMaxFieldsModel"
import { PokemonV2MoveeffectMaxFieldsModelSelector } from "./PokemonV2MoveeffectMaxFieldsModel.base"
import { PokemonV2MoveeffectMinFieldsModel, PokemonV2MoveeffectMinFieldsModelType } from "./PokemonV2MoveeffectMinFieldsModel"
import { PokemonV2MoveeffectMinFieldsModelSelector } from "./PokemonV2MoveeffectMinFieldsModel.base"
import { PokemonV2MoveeffectStddevFieldsModel, PokemonV2MoveeffectStddevFieldsModelType } from "./PokemonV2MoveeffectStddevFieldsModel"
import { PokemonV2MoveeffectStddevFieldsModelSelector } from "./PokemonV2MoveeffectStddevFieldsModel.base"
import { PokemonV2MoveeffectStddevPopFieldsModel, PokemonV2MoveeffectStddevPopFieldsModelType } from "./PokemonV2MoveeffectStddevPopFieldsModel"
import { PokemonV2MoveeffectStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectStddevPopFieldsModel.base"
import { PokemonV2MoveeffectStddevSampFieldsModel, PokemonV2MoveeffectStddevSampFieldsModelType } from "./PokemonV2MoveeffectStddevSampFieldsModel"
import { PokemonV2MoveeffectStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectStddevSampFieldsModel.base"
import { PokemonV2MoveeffectSumFieldsModel, PokemonV2MoveeffectSumFieldsModelType } from "./PokemonV2MoveeffectSumFieldsModel"
import { PokemonV2MoveeffectSumFieldsModelSelector } from "./PokemonV2MoveeffectSumFieldsModel.base"
import { PokemonV2MoveeffectVarPopFieldsModel, PokemonV2MoveeffectVarPopFieldsModelType } from "./PokemonV2MoveeffectVarPopFieldsModel"
import { PokemonV2MoveeffectVarPopFieldsModelSelector } from "./PokemonV2MoveeffectVarPopFieldsModel.base"
import { PokemonV2MoveeffectVarSampFieldsModel, PokemonV2MoveeffectVarSampFieldsModelType } from "./PokemonV2MoveeffectVarSampFieldsModel"
import { PokemonV2MoveeffectVarSampFieldsModelSelector } from "./PokemonV2MoveeffectVarSampFieldsModel.base"
import { PokemonV2MoveeffectVarianceFieldsModel, PokemonV2MoveeffectVarianceFieldsModelType } from "./PokemonV2MoveeffectVarianceFieldsModel"
import { PokemonV2MoveeffectVarianceFieldsModelSelector } from "./PokemonV2MoveeffectVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffect_aggregate_fields"), "pokemon_v2_moveeffect_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveeffectAvgFieldsModelSelector | ((selector: PokemonV2MoveeffectAvgFieldsModelSelector) => PokemonV2MoveeffectAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveeffectAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveeffectMaxFieldsModelSelector | ((selector: PokemonV2MoveeffectMaxFieldsModelSelector) => PokemonV2MoveeffectMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveeffectMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveeffectMinFieldsModelSelector | ((selector: PokemonV2MoveeffectMinFieldsModelSelector) => PokemonV2MoveeffectMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveeffectMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveeffectStddevFieldsModelSelector | ((selector: PokemonV2MoveeffectStddevFieldsModelSelector) => PokemonV2MoveeffectStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveeffectStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveeffectStddevPopFieldsModelSelector | ((selector: PokemonV2MoveeffectStddevPopFieldsModelSelector) => PokemonV2MoveeffectStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveeffectStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveeffectStddevSampFieldsModelSelector | ((selector: PokemonV2MoveeffectStddevSampFieldsModelSelector) => PokemonV2MoveeffectStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveeffectStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveeffectSumFieldsModelSelector | ((selector: PokemonV2MoveeffectSumFieldsModelSelector) => PokemonV2MoveeffectSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveeffectSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveeffectVarPopFieldsModelSelector | ((selector: PokemonV2MoveeffectVarPopFieldsModelSelector) => PokemonV2MoveeffectVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveeffectVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveeffectVarSampFieldsModelSelector | ((selector: PokemonV2MoveeffectVarSampFieldsModelSelector) => PokemonV2MoveeffectVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveeffectVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveeffectVarianceFieldsModelSelector | ((selector: PokemonV2MoveeffectVarianceFieldsModelSelector) => PokemonV2MoveeffectVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveeffectVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectAggregateFields() {
  return new PokemonV2MoveeffectAggregateFieldsModelSelector()
}

export const pokemonV2MoveeffectAggregateFieldsModelPrimitives = selectFromPokemonV2MoveeffectAggregateFields().count
