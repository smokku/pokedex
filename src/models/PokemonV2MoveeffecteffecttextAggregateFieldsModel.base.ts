/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffecteffecttextAvgFieldsModel, PokemonV2MoveeffecteffecttextAvgFieldsModelType } from "./PokemonV2MoveeffecteffecttextAvgFieldsModel"
import { PokemonV2MoveeffecteffecttextAvgFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextAvgFieldsModel.base"
import { PokemonV2MoveeffecteffecttextMaxFieldsModel, PokemonV2MoveeffecteffecttextMaxFieldsModelType } from "./PokemonV2MoveeffecteffecttextMaxFieldsModel"
import { PokemonV2MoveeffecteffecttextMaxFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextMaxFieldsModel.base"
import { PokemonV2MoveeffecteffecttextMinFieldsModel, PokemonV2MoveeffecteffecttextMinFieldsModelType } from "./PokemonV2MoveeffecteffecttextMinFieldsModel"
import { PokemonV2MoveeffecteffecttextMinFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextMinFieldsModel.base"
import { PokemonV2MoveeffecteffecttextStddevFieldsModel, PokemonV2MoveeffecteffecttextStddevFieldsModelType } from "./PokemonV2MoveeffecteffecttextStddevFieldsModel"
import { PokemonV2MoveeffecteffecttextStddevFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevFieldsModel.base"
import { PokemonV2MoveeffecteffecttextStddevPopFieldsModel, PokemonV2MoveeffecteffecttextStddevPopFieldsModelType } from "./PokemonV2MoveeffecteffecttextStddevPopFieldsModel"
import { PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevPopFieldsModel.base"
import { PokemonV2MoveeffecteffecttextStddevSampFieldsModel, PokemonV2MoveeffecteffecttextStddevSampFieldsModelType } from "./PokemonV2MoveeffecteffecttextStddevSampFieldsModel"
import { PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextStddevSampFieldsModel.base"
import { PokemonV2MoveeffecteffecttextSumFieldsModel, PokemonV2MoveeffecteffecttextSumFieldsModelType } from "./PokemonV2MoveeffecteffecttextSumFieldsModel"
import { PokemonV2MoveeffecteffecttextSumFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextSumFieldsModel.base"
import { PokemonV2MoveeffecteffecttextVarPopFieldsModel, PokemonV2MoveeffecteffecttextVarPopFieldsModelType } from "./PokemonV2MoveeffecteffecttextVarPopFieldsModel"
import { PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarPopFieldsModel.base"
import { PokemonV2MoveeffecteffecttextVarSampFieldsModel, PokemonV2MoveeffecteffecttextVarSampFieldsModelType } from "./PokemonV2MoveeffecteffecttextVarSampFieldsModel"
import { PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarSampFieldsModel.base"
import { PokemonV2MoveeffecteffecttextVarianceFieldsModel, PokemonV2MoveeffecteffecttextVarianceFieldsModelType } from "./PokemonV2MoveeffecteffecttextVarianceFieldsModel"
import { PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffecteffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveeffecteffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffecteffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffecteffecttext_aggregate_fields"), "pokemon_v2_moveeffecteffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffecteffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveeffecteffecttextAvgFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextAvgFieldsModelSelector) => PokemonV2MoveeffecteffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveeffecteffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveeffecteffecttextMaxFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextMaxFieldsModelSelector) => PokemonV2MoveeffecteffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveeffecteffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveeffecteffecttextMinFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextMinFieldsModelSelector) => PokemonV2MoveeffecteffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveeffecteffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveeffecteffecttextStddevFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextStddevFieldsModelSelector) => PokemonV2MoveeffecteffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveeffecteffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector) => PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveeffecteffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector) => PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveeffecteffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveeffecteffecttextSumFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextSumFieldsModelSelector) => PokemonV2MoveeffecteffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveeffecteffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector) => PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector) => PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector | ((selector: PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector) => PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffecteffecttextAggregateFields() {
  return new PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector()
}

export const pokemonV2MoveeffecteffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2MoveeffecteffecttextAggregateFields().count
