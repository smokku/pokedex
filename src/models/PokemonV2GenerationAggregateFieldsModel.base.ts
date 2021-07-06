/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationAvgFieldsModel, PokemonV2GenerationAvgFieldsModelType } from "./PokemonV2GenerationAvgFieldsModel"
import { PokemonV2GenerationAvgFieldsModelSelector } from "./PokemonV2GenerationAvgFieldsModel.base"
import { PokemonV2GenerationMaxFieldsModel, PokemonV2GenerationMaxFieldsModelType } from "./PokemonV2GenerationMaxFieldsModel"
import { PokemonV2GenerationMaxFieldsModelSelector } from "./PokemonV2GenerationMaxFieldsModel.base"
import { PokemonV2GenerationMinFieldsModel, PokemonV2GenerationMinFieldsModelType } from "./PokemonV2GenerationMinFieldsModel"
import { PokemonV2GenerationMinFieldsModelSelector } from "./PokemonV2GenerationMinFieldsModel.base"
import { PokemonV2GenerationStddevFieldsModel, PokemonV2GenerationStddevFieldsModelType } from "./PokemonV2GenerationStddevFieldsModel"
import { PokemonV2GenerationStddevFieldsModelSelector } from "./PokemonV2GenerationStddevFieldsModel.base"
import { PokemonV2GenerationStddevPopFieldsModel, PokemonV2GenerationStddevPopFieldsModelType } from "./PokemonV2GenerationStddevPopFieldsModel"
import { PokemonV2GenerationStddevPopFieldsModelSelector } from "./PokemonV2GenerationStddevPopFieldsModel.base"
import { PokemonV2GenerationStddevSampFieldsModel, PokemonV2GenerationStddevSampFieldsModelType } from "./PokemonV2GenerationStddevSampFieldsModel"
import { PokemonV2GenerationStddevSampFieldsModelSelector } from "./PokemonV2GenerationStddevSampFieldsModel.base"
import { PokemonV2GenerationSumFieldsModel, PokemonV2GenerationSumFieldsModelType } from "./PokemonV2GenerationSumFieldsModel"
import { PokemonV2GenerationSumFieldsModelSelector } from "./PokemonV2GenerationSumFieldsModel.base"
import { PokemonV2GenerationVarPopFieldsModel, PokemonV2GenerationVarPopFieldsModelType } from "./PokemonV2GenerationVarPopFieldsModel"
import { PokemonV2GenerationVarPopFieldsModelSelector } from "./PokemonV2GenerationVarPopFieldsModel.base"
import { PokemonV2GenerationVarSampFieldsModel, PokemonV2GenerationVarSampFieldsModelType } from "./PokemonV2GenerationVarSampFieldsModel"
import { PokemonV2GenerationVarSampFieldsModelSelector } from "./PokemonV2GenerationVarSampFieldsModel.base"
import { PokemonV2GenerationVarianceFieldsModel, PokemonV2GenerationVarianceFieldsModelType } from "./PokemonV2GenerationVarianceFieldsModel"
import { PokemonV2GenerationVarianceFieldsModelSelector } from "./PokemonV2GenerationVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenerationAggregateFieldsBase
 * auto generated base class for the model PokemonV2GenerationAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_generation"
 */
export const PokemonV2GenerationAggregateFieldsModelBase = ModelBase
  .named('PokemonV2GenerationAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_generation_aggregate_fields"), "pokemon_v2_generation_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenerationAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2GenerationAvgFieldsModelSelector | ((selector: PokemonV2GenerationAvgFieldsModelSelector) => PokemonV2GenerationAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2GenerationAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2GenerationMaxFieldsModelSelector | ((selector: PokemonV2GenerationMaxFieldsModelSelector) => PokemonV2GenerationMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2GenerationMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2GenerationMinFieldsModelSelector | ((selector: PokemonV2GenerationMinFieldsModelSelector) => PokemonV2GenerationMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2GenerationMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2GenerationStddevFieldsModelSelector | ((selector: PokemonV2GenerationStddevFieldsModelSelector) => PokemonV2GenerationStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2GenerationStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2GenerationStddevPopFieldsModelSelector | ((selector: PokemonV2GenerationStddevPopFieldsModelSelector) => PokemonV2GenerationStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2GenerationStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2GenerationStddevSampFieldsModelSelector | ((selector: PokemonV2GenerationStddevSampFieldsModelSelector) => PokemonV2GenerationStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2GenerationStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2GenerationSumFieldsModelSelector | ((selector: PokemonV2GenerationSumFieldsModelSelector) => PokemonV2GenerationSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2GenerationSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2GenerationVarPopFieldsModelSelector | ((selector: PokemonV2GenerationVarPopFieldsModelSelector) => PokemonV2GenerationVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2GenerationVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2GenerationVarSampFieldsModelSelector | ((selector: PokemonV2GenerationVarSampFieldsModelSelector) => PokemonV2GenerationVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2GenerationVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2GenerationVarianceFieldsModelSelector | ((selector: PokemonV2GenerationVarianceFieldsModelSelector) => PokemonV2GenerationVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2GenerationVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2GenerationAggregateFields() {
  return new PokemonV2GenerationAggregateFieldsModelSelector()
}

export const pokemonV2GenerationAggregateFieldsModelPrimitives = selectFromPokemonV2GenerationAggregateFields().count
