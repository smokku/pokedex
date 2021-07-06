/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypeefficacyAvgFieldsModel, PokemonV2TypeefficacyAvgFieldsModelType } from "./PokemonV2TypeefficacyAvgFieldsModel"
import { PokemonV2TypeefficacyAvgFieldsModelSelector } from "./PokemonV2TypeefficacyAvgFieldsModel.base"
import { PokemonV2TypeefficacyMaxFieldsModel, PokemonV2TypeefficacyMaxFieldsModelType } from "./PokemonV2TypeefficacyMaxFieldsModel"
import { PokemonV2TypeefficacyMaxFieldsModelSelector } from "./PokemonV2TypeefficacyMaxFieldsModel.base"
import { PokemonV2TypeefficacyMinFieldsModel, PokemonV2TypeefficacyMinFieldsModelType } from "./PokemonV2TypeefficacyMinFieldsModel"
import { PokemonV2TypeefficacyMinFieldsModelSelector } from "./PokemonV2TypeefficacyMinFieldsModel.base"
import { PokemonV2TypeefficacyStddevFieldsModel, PokemonV2TypeefficacyStddevFieldsModelType } from "./PokemonV2TypeefficacyStddevFieldsModel"
import { PokemonV2TypeefficacyStddevFieldsModelSelector } from "./PokemonV2TypeefficacyStddevFieldsModel.base"
import { PokemonV2TypeefficacyStddevPopFieldsModel, PokemonV2TypeefficacyStddevPopFieldsModelType } from "./PokemonV2TypeefficacyStddevPopFieldsModel"
import { PokemonV2TypeefficacyStddevPopFieldsModelSelector } from "./PokemonV2TypeefficacyStddevPopFieldsModel.base"
import { PokemonV2TypeefficacyStddevSampFieldsModel, PokemonV2TypeefficacyStddevSampFieldsModelType } from "./PokemonV2TypeefficacyStddevSampFieldsModel"
import { PokemonV2TypeefficacyStddevSampFieldsModelSelector } from "./PokemonV2TypeefficacyStddevSampFieldsModel.base"
import { PokemonV2TypeefficacySumFieldsModel, PokemonV2TypeefficacySumFieldsModelType } from "./PokemonV2TypeefficacySumFieldsModel"
import { PokemonV2TypeefficacySumFieldsModelSelector } from "./PokemonV2TypeefficacySumFieldsModel.base"
import { PokemonV2TypeefficacyVarPopFieldsModel, PokemonV2TypeefficacyVarPopFieldsModelType } from "./PokemonV2TypeefficacyVarPopFieldsModel"
import { PokemonV2TypeefficacyVarPopFieldsModelSelector } from "./PokemonV2TypeefficacyVarPopFieldsModel.base"
import { PokemonV2TypeefficacyVarSampFieldsModel, PokemonV2TypeefficacyVarSampFieldsModelType } from "./PokemonV2TypeefficacyVarSampFieldsModel"
import { PokemonV2TypeefficacyVarSampFieldsModelSelector } from "./PokemonV2TypeefficacyVarSampFieldsModel.base"
import { PokemonV2TypeefficacyVarianceFieldsModel, PokemonV2TypeefficacyVarianceFieldsModelType } from "./PokemonV2TypeefficacyVarianceFieldsModel"
import { PokemonV2TypeefficacyVarianceFieldsModelSelector } from "./PokemonV2TypeefficacyVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeefficacyAggregateFieldsBase
 * auto generated base class for the model PokemonV2TypeefficacyAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyAggregateFieldsModelBase = ModelBase
  .named('PokemonV2TypeefficacyAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typeefficacy_aggregate_fields"), "pokemon_v2_typeefficacy_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeefficacyVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeefficacyAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2TypeefficacyAvgFieldsModelSelector | ((selector: PokemonV2TypeefficacyAvgFieldsModelSelector) => PokemonV2TypeefficacyAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2TypeefficacyAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2TypeefficacyMaxFieldsModelSelector | ((selector: PokemonV2TypeefficacyMaxFieldsModelSelector) => PokemonV2TypeefficacyMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2TypeefficacyMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2TypeefficacyMinFieldsModelSelector | ((selector: PokemonV2TypeefficacyMinFieldsModelSelector) => PokemonV2TypeefficacyMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2TypeefficacyMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2TypeefficacyStddevFieldsModelSelector | ((selector: PokemonV2TypeefficacyStddevFieldsModelSelector) => PokemonV2TypeefficacyStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2TypeefficacyStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2TypeefficacyStddevPopFieldsModelSelector | ((selector: PokemonV2TypeefficacyStddevPopFieldsModelSelector) => PokemonV2TypeefficacyStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2TypeefficacyStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2TypeefficacyStddevSampFieldsModelSelector | ((selector: PokemonV2TypeefficacyStddevSampFieldsModelSelector) => PokemonV2TypeefficacyStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2TypeefficacyStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2TypeefficacySumFieldsModelSelector | ((selector: PokemonV2TypeefficacySumFieldsModelSelector) => PokemonV2TypeefficacySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2TypeefficacySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2TypeefficacyVarPopFieldsModelSelector | ((selector: PokemonV2TypeefficacyVarPopFieldsModelSelector) => PokemonV2TypeefficacyVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2TypeefficacyVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2TypeefficacyVarSampFieldsModelSelector | ((selector: PokemonV2TypeefficacyVarSampFieldsModelSelector) => PokemonV2TypeefficacyVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2TypeefficacyVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2TypeefficacyVarianceFieldsModelSelector | ((selector: PokemonV2TypeefficacyVarianceFieldsModelSelector) => PokemonV2TypeefficacyVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2TypeefficacyVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2TypeefficacyAggregateFields() {
  return new PokemonV2TypeefficacyAggregateFieldsModelSelector()
}

export const pokemonV2TypeefficacyAggregateFieldsModelPrimitives = selectFromPokemonV2TypeefficacyAggregateFields().count
