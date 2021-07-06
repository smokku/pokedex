/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilitychangeeffecttextAvgFieldsModel, PokemonV2AbilitychangeeffecttextAvgFieldsModelType } from "./PokemonV2AbilitychangeeffecttextAvgFieldsModel"
import { PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextAvgFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextMaxFieldsModel, PokemonV2AbilitychangeeffecttextMaxFieldsModelType } from "./PokemonV2AbilitychangeeffecttextMaxFieldsModel"
import { PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextMaxFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextMinFieldsModel, PokemonV2AbilitychangeeffecttextMinFieldsModelType } from "./PokemonV2AbilitychangeeffecttextMinFieldsModel"
import { PokemonV2AbilitychangeeffecttextMinFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextMinFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextStddevFieldsModel, PokemonV2AbilitychangeeffecttextStddevFieldsModelType } from "./PokemonV2AbilitychangeeffecttextStddevFieldsModel"
import { PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextStddevPopFieldsModel, PokemonV2AbilitychangeeffecttextStddevPopFieldsModelType } from "./PokemonV2AbilitychangeeffecttextStddevPopFieldsModel"
import { PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevPopFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextStddevSampFieldsModel, PokemonV2AbilitychangeeffecttextStddevSampFieldsModelType } from "./PokemonV2AbilitychangeeffecttextStddevSampFieldsModel"
import { PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextStddevSampFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextSumFieldsModel, PokemonV2AbilitychangeeffecttextSumFieldsModelType } from "./PokemonV2AbilitychangeeffecttextSumFieldsModel"
import { PokemonV2AbilitychangeeffecttextSumFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextSumFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextVarPopFieldsModel, PokemonV2AbilitychangeeffecttextVarPopFieldsModelType } from "./PokemonV2AbilitychangeeffecttextVarPopFieldsModel"
import { PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarPopFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextVarSampFieldsModel, PokemonV2AbilitychangeeffecttextVarSampFieldsModelType } from "./PokemonV2AbilitychangeeffecttextVarSampFieldsModel"
import { PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarSampFieldsModel.base"
import { PokemonV2AbilitychangeeffecttextVarianceFieldsModel, PokemonV2AbilitychangeeffecttextVarianceFieldsModelType } from "./PokemonV2AbilitychangeeffecttextVarianceFieldsModel"
import { PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitychangeeffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2AbilitychangeeffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_abilitychangeeffecttext"
 */
export const PokemonV2AbilitychangeeffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2AbilitychangeeffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilitychangeeffecttext_aggregate_fields"), "pokemon_v2_abilitychangeeffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilitychangeeffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector) => PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2AbilitychangeeffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector) => PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2AbilitychangeeffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2AbilitychangeeffecttextMinFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextMinFieldsModelSelector) => PokemonV2AbilitychangeeffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2AbilitychangeeffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector) => PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2AbilitychangeeffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector) => PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2AbilitychangeeffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector) => PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2AbilitychangeeffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2AbilitychangeeffecttextSumFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextSumFieldsModelSelector) => PokemonV2AbilitychangeeffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2AbilitychangeeffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector) => PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2AbilitychangeeffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector) => PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector | ((selector: PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector) => PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2AbilitychangeeffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2AbilitychangeeffecttextAggregateFields() {
  return new PokemonV2AbilitychangeeffecttextAggregateFieldsModelSelector()
}

export const pokemonV2AbilitychangeeffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2AbilitychangeeffecttextAggregateFields().count
