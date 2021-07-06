/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GrowthrateAvgFieldsModel, PokemonV2GrowthrateAvgFieldsModelType } from "./PokemonV2GrowthrateAvgFieldsModel"
import { PokemonV2GrowthrateAvgFieldsModelSelector } from "./PokemonV2GrowthrateAvgFieldsModel.base"
import { PokemonV2GrowthrateMaxFieldsModel, PokemonV2GrowthrateMaxFieldsModelType } from "./PokemonV2GrowthrateMaxFieldsModel"
import { PokemonV2GrowthrateMaxFieldsModelSelector } from "./PokemonV2GrowthrateMaxFieldsModel.base"
import { PokemonV2GrowthrateMinFieldsModel, PokemonV2GrowthrateMinFieldsModelType } from "./PokemonV2GrowthrateMinFieldsModel"
import { PokemonV2GrowthrateMinFieldsModelSelector } from "./PokemonV2GrowthrateMinFieldsModel.base"
import { PokemonV2GrowthrateStddevFieldsModel, PokemonV2GrowthrateStddevFieldsModelType } from "./PokemonV2GrowthrateStddevFieldsModel"
import { PokemonV2GrowthrateStddevFieldsModelSelector } from "./PokemonV2GrowthrateStddevFieldsModel.base"
import { PokemonV2GrowthrateStddevPopFieldsModel, PokemonV2GrowthrateStddevPopFieldsModelType } from "./PokemonV2GrowthrateStddevPopFieldsModel"
import { PokemonV2GrowthrateStddevPopFieldsModelSelector } from "./PokemonV2GrowthrateStddevPopFieldsModel.base"
import { PokemonV2GrowthrateStddevSampFieldsModel, PokemonV2GrowthrateStddevSampFieldsModelType } from "./PokemonV2GrowthrateStddevSampFieldsModel"
import { PokemonV2GrowthrateStddevSampFieldsModelSelector } from "./PokemonV2GrowthrateStddevSampFieldsModel.base"
import { PokemonV2GrowthrateSumFieldsModel, PokemonV2GrowthrateSumFieldsModelType } from "./PokemonV2GrowthrateSumFieldsModel"
import { PokemonV2GrowthrateSumFieldsModelSelector } from "./PokemonV2GrowthrateSumFieldsModel.base"
import { PokemonV2GrowthrateVarPopFieldsModel, PokemonV2GrowthrateVarPopFieldsModelType } from "./PokemonV2GrowthrateVarPopFieldsModel"
import { PokemonV2GrowthrateVarPopFieldsModelSelector } from "./PokemonV2GrowthrateVarPopFieldsModel.base"
import { PokemonV2GrowthrateVarSampFieldsModel, PokemonV2GrowthrateVarSampFieldsModelType } from "./PokemonV2GrowthrateVarSampFieldsModel"
import { PokemonV2GrowthrateVarSampFieldsModelSelector } from "./PokemonV2GrowthrateVarSampFieldsModel.base"
import { PokemonV2GrowthrateVarianceFieldsModel, PokemonV2GrowthrateVarianceFieldsModelType } from "./PokemonV2GrowthrateVarianceFieldsModel"
import { PokemonV2GrowthrateVarianceFieldsModelSelector } from "./PokemonV2GrowthrateVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GrowthrateAggregateFieldsBase
 * auto generated base class for the model PokemonV2GrowthrateAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateAggregateFieldsModelBase = ModelBase
  .named('PokemonV2GrowthrateAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_growthrate_aggregate_fields"), "pokemon_v2_growthrate_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2GrowthrateVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GrowthrateAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2GrowthrateAvgFieldsModelSelector | ((selector: PokemonV2GrowthrateAvgFieldsModelSelector) => PokemonV2GrowthrateAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2GrowthrateAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2GrowthrateMaxFieldsModelSelector | ((selector: PokemonV2GrowthrateMaxFieldsModelSelector) => PokemonV2GrowthrateMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2GrowthrateMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2GrowthrateMinFieldsModelSelector | ((selector: PokemonV2GrowthrateMinFieldsModelSelector) => PokemonV2GrowthrateMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2GrowthrateMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2GrowthrateStddevFieldsModelSelector | ((selector: PokemonV2GrowthrateStddevFieldsModelSelector) => PokemonV2GrowthrateStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2GrowthrateStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2GrowthrateStddevPopFieldsModelSelector | ((selector: PokemonV2GrowthrateStddevPopFieldsModelSelector) => PokemonV2GrowthrateStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2GrowthrateStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2GrowthrateStddevSampFieldsModelSelector | ((selector: PokemonV2GrowthrateStddevSampFieldsModelSelector) => PokemonV2GrowthrateStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2GrowthrateStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2GrowthrateSumFieldsModelSelector | ((selector: PokemonV2GrowthrateSumFieldsModelSelector) => PokemonV2GrowthrateSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2GrowthrateSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2GrowthrateVarPopFieldsModelSelector | ((selector: PokemonV2GrowthrateVarPopFieldsModelSelector) => PokemonV2GrowthrateVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2GrowthrateVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2GrowthrateVarSampFieldsModelSelector | ((selector: PokemonV2GrowthrateVarSampFieldsModelSelector) => PokemonV2GrowthrateVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2GrowthrateVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2GrowthrateVarianceFieldsModelSelector | ((selector: PokemonV2GrowthrateVarianceFieldsModelSelector) => PokemonV2GrowthrateVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2GrowthrateVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2GrowthrateAggregateFields() {
  return new PokemonV2GrowthrateAggregateFieldsModelSelector()
}

export const pokemonV2GrowthrateAggregateFieldsModelPrimitives = selectFromPokemonV2GrowthrateAggregateFields().count
