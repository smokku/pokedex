/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityflavortextAvgFieldsModel, PokemonV2AbilityflavortextAvgFieldsModelType } from "./PokemonV2AbilityflavortextAvgFieldsModel"
import { PokemonV2AbilityflavortextAvgFieldsModelSelector } from "./PokemonV2AbilityflavortextAvgFieldsModel.base"
import { PokemonV2AbilityflavortextMaxFieldsModel, PokemonV2AbilityflavortextMaxFieldsModelType } from "./PokemonV2AbilityflavortextMaxFieldsModel"
import { PokemonV2AbilityflavortextMaxFieldsModelSelector } from "./PokemonV2AbilityflavortextMaxFieldsModel.base"
import { PokemonV2AbilityflavortextMinFieldsModel, PokemonV2AbilityflavortextMinFieldsModelType } from "./PokemonV2AbilityflavortextMinFieldsModel"
import { PokemonV2AbilityflavortextMinFieldsModelSelector } from "./PokemonV2AbilityflavortextMinFieldsModel.base"
import { PokemonV2AbilityflavortextStddevFieldsModel, PokemonV2AbilityflavortextStddevFieldsModelType } from "./PokemonV2AbilityflavortextStddevFieldsModel"
import { PokemonV2AbilityflavortextStddevFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevFieldsModel.base"
import { PokemonV2AbilityflavortextStddevPopFieldsModel, PokemonV2AbilityflavortextStddevPopFieldsModelType } from "./PokemonV2AbilityflavortextStddevPopFieldsModel"
import { PokemonV2AbilityflavortextStddevPopFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevPopFieldsModel.base"
import { PokemonV2AbilityflavortextStddevSampFieldsModel, PokemonV2AbilityflavortextStddevSampFieldsModelType } from "./PokemonV2AbilityflavortextStddevSampFieldsModel"
import { PokemonV2AbilityflavortextStddevSampFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevSampFieldsModel.base"
import { PokemonV2AbilityflavortextSumFieldsModel, PokemonV2AbilityflavortextSumFieldsModelType } from "./PokemonV2AbilityflavortextSumFieldsModel"
import { PokemonV2AbilityflavortextSumFieldsModelSelector } from "./PokemonV2AbilityflavortextSumFieldsModel.base"
import { PokemonV2AbilityflavortextVarPopFieldsModel, PokemonV2AbilityflavortextVarPopFieldsModelType } from "./PokemonV2AbilityflavortextVarPopFieldsModel"
import { PokemonV2AbilityflavortextVarPopFieldsModelSelector } from "./PokemonV2AbilityflavortextVarPopFieldsModel.base"
import { PokemonV2AbilityflavortextVarSampFieldsModel, PokemonV2AbilityflavortextVarSampFieldsModelType } from "./PokemonV2AbilityflavortextVarSampFieldsModel"
import { PokemonV2AbilityflavortextVarSampFieldsModelSelector } from "./PokemonV2AbilityflavortextVarSampFieldsModel.base"
import { PokemonV2AbilityflavortextVarianceFieldsModel, PokemonV2AbilityflavortextVarianceFieldsModelType } from "./PokemonV2AbilityflavortextVarianceFieldsModel"
import { PokemonV2AbilityflavortextVarianceFieldsModelSelector } from "./PokemonV2AbilityflavortextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityflavortextAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilityflavortextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilityflavortextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityflavortext_aggregate_fields"), "pokemon_v2_abilityflavortext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityflavortextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityflavortextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilityflavortextAvgFieldsModelSelector | ((selector: PokemonV2AbilityflavortextAvgFieldsModelSelector) => PokemonV2AbilityflavortextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilityflavortextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilityflavortextMaxFieldsModelSelector | ((selector: PokemonV2AbilityflavortextMaxFieldsModelSelector) => PokemonV2AbilityflavortextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilityflavortextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilityflavortextMinFieldsModelSelector | ((selector: PokemonV2AbilityflavortextMinFieldsModelSelector) => PokemonV2AbilityflavortextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilityflavortextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilityflavortextStddevFieldsModelSelector | ((selector: PokemonV2AbilityflavortextStddevFieldsModelSelector) => PokemonV2AbilityflavortextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilityflavortextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilityflavortextStddevPopFieldsModelSelector | ((selector: PokemonV2AbilityflavortextStddevPopFieldsModelSelector) => PokemonV2AbilityflavortextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilityflavortextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilityflavortextStddevSampFieldsModelSelector | ((selector: PokemonV2AbilityflavortextStddevSampFieldsModelSelector) => PokemonV2AbilityflavortextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilityflavortextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilityflavortextSumFieldsModelSelector | ((selector: PokemonV2AbilityflavortextSumFieldsModelSelector) => PokemonV2AbilityflavortextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilityflavortextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilityflavortextVarPopFieldsModelSelector | ((selector: PokemonV2AbilityflavortextVarPopFieldsModelSelector) => PokemonV2AbilityflavortextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilityflavortextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilityflavortextVarSampFieldsModelSelector | ((selector: PokemonV2AbilityflavortextVarSampFieldsModelSelector) => PokemonV2AbilityflavortextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilityflavortextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilityflavortextVarianceFieldsModelSelector | ((selector: PokemonV2AbilityflavortextVarianceFieldsModelSelector) => PokemonV2AbilityflavortextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilityflavortextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilityflavortextAggregateFields() {
  return new PokemonV2AbilityflavortextAggregateFieldsModelSelector()
}

export const pokemonV2AbilityflavortextAggregateFieldsModelPrimitives = selectFromPokemonV2AbilityflavortextAggregateFields().count
