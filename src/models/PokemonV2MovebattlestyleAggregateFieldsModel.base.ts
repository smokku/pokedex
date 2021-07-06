/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestyleAvgFieldsModel, PokemonV2MovebattlestyleAvgFieldsModelType } from "./PokemonV2MovebattlestyleAvgFieldsModel"
import { PokemonV2MovebattlestyleAvgFieldsModelSelector } from "./PokemonV2MovebattlestyleAvgFieldsModel.base"
import { PokemonV2MovebattlestyleMaxFieldsModel, PokemonV2MovebattlestyleMaxFieldsModelType } from "./PokemonV2MovebattlestyleMaxFieldsModel"
import { PokemonV2MovebattlestyleMaxFieldsModelSelector } from "./PokemonV2MovebattlestyleMaxFieldsModel.base"
import { PokemonV2MovebattlestyleMinFieldsModel, PokemonV2MovebattlestyleMinFieldsModelType } from "./PokemonV2MovebattlestyleMinFieldsModel"
import { PokemonV2MovebattlestyleMinFieldsModelSelector } from "./PokemonV2MovebattlestyleMinFieldsModel.base"
import { PokemonV2MovebattlestyleStddevFieldsModel, PokemonV2MovebattlestyleStddevFieldsModelType } from "./PokemonV2MovebattlestyleStddevFieldsModel"
import { PokemonV2MovebattlestyleStddevFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevFieldsModel.base"
import { PokemonV2MovebattlestyleStddevPopFieldsModel, PokemonV2MovebattlestyleStddevPopFieldsModelType } from "./PokemonV2MovebattlestyleStddevPopFieldsModel"
import { PokemonV2MovebattlestyleStddevPopFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevPopFieldsModel.base"
import { PokemonV2MovebattlestyleStddevSampFieldsModel, PokemonV2MovebattlestyleStddevSampFieldsModelType } from "./PokemonV2MovebattlestyleStddevSampFieldsModel"
import { PokemonV2MovebattlestyleStddevSampFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevSampFieldsModel.base"
import { PokemonV2MovebattlestyleSumFieldsModel, PokemonV2MovebattlestyleSumFieldsModelType } from "./PokemonV2MovebattlestyleSumFieldsModel"
import { PokemonV2MovebattlestyleSumFieldsModelSelector } from "./PokemonV2MovebattlestyleSumFieldsModel.base"
import { PokemonV2MovebattlestyleVarPopFieldsModel, PokemonV2MovebattlestyleVarPopFieldsModelType } from "./PokemonV2MovebattlestyleVarPopFieldsModel"
import { PokemonV2MovebattlestyleVarPopFieldsModelSelector } from "./PokemonV2MovebattlestyleVarPopFieldsModel.base"
import { PokemonV2MovebattlestyleVarSampFieldsModel, PokemonV2MovebattlestyleVarSampFieldsModelType } from "./PokemonV2MovebattlestyleVarSampFieldsModel"
import { PokemonV2MovebattlestyleVarSampFieldsModelSelector } from "./PokemonV2MovebattlestyleVarSampFieldsModel.base"
import { PokemonV2MovebattlestyleVarianceFieldsModel, PokemonV2MovebattlestyleVarianceFieldsModelType } from "./PokemonV2MovebattlestyleVarianceFieldsModel"
import { PokemonV2MovebattlestyleVarianceFieldsModelSelector } from "./PokemonV2MovebattlestyleVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestyleAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestyleAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestyleAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestyle_aggregate_fields"), "pokemon_v2_movebattlestyle_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestyleVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestyleAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovebattlestyleAvgFieldsModelSelector | ((selector: PokemonV2MovebattlestyleAvgFieldsModelSelector) => PokemonV2MovebattlestyleAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovebattlestyleAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovebattlestyleMaxFieldsModelSelector | ((selector: PokemonV2MovebattlestyleMaxFieldsModelSelector) => PokemonV2MovebattlestyleMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovebattlestyleMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovebattlestyleMinFieldsModelSelector | ((selector: PokemonV2MovebattlestyleMinFieldsModelSelector) => PokemonV2MovebattlestyleMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovebattlestyleMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovebattlestyleStddevFieldsModelSelector | ((selector: PokemonV2MovebattlestyleStddevFieldsModelSelector) => PokemonV2MovebattlestyleStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovebattlestyleStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovebattlestyleStddevPopFieldsModelSelector | ((selector: PokemonV2MovebattlestyleStddevPopFieldsModelSelector) => PokemonV2MovebattlestyleStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovebattlestyleStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovebattlestyleStddevSampFieldsModelSelector | ((selector: PokemonV2MovebattlestyleStddevSampFieldsModelSelector) => PokemonV2MovebattlestyleStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovebattlestyleStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovebattlestyleSumFieldsModelSelector | ((selector: PokemonV2MovebattlestyleSumFieldsModelSelector) => PokemonV2MovebattlestyleSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovebattlestyleSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovebattlestyleVarPopFieldsModelSelector | ((selector: PokemonV2MovebattlestyleVarPopFieldsModelSelector) => PokemonV2MovebattlestyleVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovebattlestyleVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovebattlestyleVarSampFieldsModelSelector | ((selector: PokemonV2MovebattlestyleVarSampFieldsModelSelector) => PokemonV2MovebattlestyleVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovebattlestyleVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovebattlestyleVarianceFieldsModelSelector | ((selector: PokemonV2MovebattlestyleVarianceFieldsModelSelector) => PokemonV2MovebattlestyleVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovebattlestyleVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovebattlestyleAggregateFields() {
  return new PokemonV2MovebattlestyleAggregateFieldsModelSelector()
}

export const pokemonV2MovebattlestyleAggregateFieldsModelPrimitives = selectFromPokemonV2MovebattlestyleAggregateFields().count
