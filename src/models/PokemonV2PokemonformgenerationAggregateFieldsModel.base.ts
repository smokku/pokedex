/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformgenerationAvgFieldsModel, PokemonV2PokemonformgenerationAvgFieldsModelType } from "./PokemonV2PokemonformgenerationAvgFieldsModel"
import { PokemonV2PokemonformgenerationAvgFieldsModelSelector } from "./PokemonV2PokemonformgenerationAvgFieldsModel.base"
import { PokemonV2PokemonformgenerationMaxFieldsModel, PokemonV2PokemonformgenerationMaxFieldsModelType } from "./PokemonV2PokemonformgenerationMaxFieldsModel"
import { PokemonV2PokemonformgenerationMaxFieldsModelSelector } from "./PokemonV2PokemonformgenerationMaxFieldsModel.base"
import { PokemonV2PokemonformgenerationMinFieldsModel, PokemonV2PokemonformgenerationMinFieldsModelType } from "./PokemonV2PokemonformgenerationMinFieldsModel"
import { PokemonV2PokemonformgenerationMinFieldsModelSelector } from "./PokemonV2PokemonformgenerationMinFieldsModel.base"
import { PokemonV2PokemonformgenerationStddevFieldsModel, PokemonV2PokemonformgenerationStddevFieldsModelType } from "./PokemonV2PokemonformgenerationStddevFieldsModel"
import { PokemonV2PokemonformgenerationStddevFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevFieldsModel.base"
import { PokemonV2PokemonformgenerationStddevPopFieldsModel, PokemonV2PokemonformgenerationStddevPopFieldsModelType } from "./PokemonV2PokemonformgenerationStddevPopFieldsModel"
import { PokemonV2PokemonformgenerationStddevPopFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevPopFieldsModel.base"
import { PokemonV2PokemonformgenerationStddevSampFieldsModel, PokemonV2PokemonformgenerationStddevSampFieldsModelType } from "./PokemonV2PokemonformgenerationStddevSampFieldsModel"
import { PokemonV2PokemonformgenerationStddevSampFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevSampFieldsModel.base"
import { PokemonV2PokemonformgenerationSumFieldsModel, PokemonV2PokemonformgenerationSumFieldsModelType } from "./PokemonV2PokemonformgenerationSumFieldsModel"
import { PokemonV2PokemonformgenerationSumFieldsModelSelector } from "./PokemonV2PokemonformgenerationSumFieldsModel.base"
import { PokemonV2PokemonformgenerationVarPopFieldsModel, PokemonV2PokemonformgenerationVarPopFieldsModelType } from "./PokemonV2PokemonformgenerationVarPopFieldsModel"
import { PokemonV2PokemonformgenerationVarPopFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarPopFieldsModel.base"
import { PokemonV2PokemonformgenerationVarSampFieldsModel, PokemonV2PokemonformgenerationVarSampFieldsModelType } from "./PokemonV2PokemonformgenerationVarSampFieldsModel"
import { PokemonV2PokemonformgenerationVarSampFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarSampFieldsModel.base"
import { PokemonV2PokemonformgenerationVarianceFieldsModel, PokemonV2PokemonformgenerationVarianceFieldsModelType } from "./PokemonV2PokemonformgenerationVarianceFieldsModel"
import { PokemonV2PokemonformgenerationVarianceFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformgenerationAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonformgenerationAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformgenerationAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformgeneration_aggregate_fields"), "pokemon_v2_pokemonformgeneration_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformgenerationVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformgenerationAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonformgenerationAvgFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationAvgFieldsModelSelector) => PokemonV2PokemonformgenerationAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonformgenerationAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonformgenerationMaxFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationMaxFieldsModelSelector) => PokemonV2PokemonformgenerationMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonformgenerationMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonformgenerationMinFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationMinFieldsModelSelector) => PokemonV2PokemonformgenerationMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonformgenerationMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonformgenerationStddevFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationStddevFieldsModelSelector) => PokemonV2PokemonformgenerationStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonformgenerationStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonformgenerationStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationStddevPopFieldsModelSelector) => PokemonV2PokemonformgenerationStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonformgenerationStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonformgenerationStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationStddevSampFieldsModelSelector) => PokemonV2PokemonformgenerationStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonformgenerationStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonformgenerationSumFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationSumFieldsModelSelector) => PokemonV2PokemonformgenerationSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonformgenerationSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonformgenerationVarPopFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationVarPopFieldsModelSelector) => PokemonV2PokemonformgenerationVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonformgenerationVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonformgenerationVarSampFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationVarSampFieldsModelSelector) => PokemonV2PokemonformgenerationVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonformgenerationVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonformgenerationVarianceFieldsModelSelector | ((selector: PokemonV2PokemonformgenerationVarianceFieldsModelSelector) => PokemonV2PokemonformgenerationVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonformgenerationVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformgenerationAggregateFields() {
  return new PokemonV2PokemonformgenerationAggregateFieldsModelSelector()
}

export const pokemonV2PokemonformgenerationAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonformgenerationAggregateFields().count
