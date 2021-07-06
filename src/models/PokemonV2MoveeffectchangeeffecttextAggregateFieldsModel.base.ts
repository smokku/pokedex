/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectchangeeffecttextAvgFieldsModel, PokemonV2MoveeffectchangeeffecttextAvgFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextAvgFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAvgFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextMaxFieldsModel, PokemonV2MoveeffectchangeeffecttextMaxFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextMaxFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextMaxFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextMinFieldsModel, PokemonV2MoveeffectchangeeffecttextMinFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextMinFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextMinFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextStddevFieldsModel, PokemonV2MoveeffectchangeeffecttextStddevFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextStddevFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel, PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel, PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextSumFieldsModel, PokemonV2MoveeffectchangeeffecttextSumFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextSumFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextSumFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel, PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel, PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel.base"
import { PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel, PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelType } from "./PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel"
import { PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeeffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeeffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchangeeffecttext_aggregate_fields"), "pokemon_v2_moveeffectchangeeffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveeffectchangeeffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector) => PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectchangeeffecttextAggregateFields() {
  return new PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeeffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeeffecttextAggregateFields().count
