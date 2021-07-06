/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenderAvgFieldsModel, PokemonV2GenderAvgFieldsModelType } from "./PokemonV2GenderAvgFieldsModel"
import { PokemonV2GenderAvgFieldsModelSelector } from "./PokemonV2GenderAvgFieldsModel.base"
import { PokemonV2GenderMaxFieldsModel, PokemonV2GenderMaxFieldsModelType } from "./PokemonV2GenderMaxFieldsModel"
import { PokemonV2GenderMaxFieldsModelSelector } from "./PokemonV2GenderMaxFieldsModel.base"
import { PokemonV2GenderMinFieldsModel, PokemonV2GenderMinFieldsModelType } from "./PokemonV2GenderMinFieldsModel"
import { PokemonV2GenderMinFieldsModelSelector } from "./PokemonV2GenderMinFieldsModel.base"
import { PokemonV2GenderStddevFieldsModel, PokemonV2GenderStddevFieldsModelType } from "./PokemonV2GenderStddevFieldsModel"
import { PokemonV2GenderStddevFieldsModelSelector } from "./PokemonV2GenderStddevFieldsModel.base"
import { PokemonV2GenderStddevPopFieldsModel, PokemonV2GenderStddevPopFieldsModelType } from "./PokemonV2GenderStddevPopFieldsModel"
import { PokemonV2GenderStddevPopFieldsModelSelector } from "./PokemonV2GenderStddevPopFieldsModel.base"
import { PokemonV2GenderStddevSampFieldsModel, PokemonV2GenderStddevSampFieldsModelType } from "./PokemonV2GenderStddevSampFieldsModel"
import { PokemonV2GenderStddevSampFieldsModelSelector } from "./PokemonV2GenderStddevSampFieldsModel.base"
import { PokemonV2GenderSumFieldsModel, PokemonV2GenderSumFieldsModelType } from "./PokemonV2GenderSumFieldsModel"
import { PokemonV2GenderSumFieldsModelSelector } from "./PokemonV2GenderSumFieldsModel.base"
import { PokemonV2GenderVarPopFieldsModel, PokemonV2GenderVarPopFieldsModelType } from "./PokemonV2GenderVarPopFieldsModel"
import { PokemonV2GenderVarPopFieldsModelSelector } from "./PokemonV2GenderVarPopFieldsModel.base"
import { PokemonV2GenderVarSampFieldsModel, PokemonV2GenderVarSampFieldsModelType } from "./PokemonV2GenderVarSampFieldsModel"
import { PokemonV2GenderVarSampFieldsModelSelector } from "./PokemonV2GenderVarSampFieldsModel.base"
import { PokemonV2GenderVarianceFieldsModel, PokemonV2GenderVarianceFieldsModelType } from "./PokemonV2GenderVarianceFieldsModel"
import { PokemonV2GenderVarianceFieldsModelSelector } from "./PokemonV2GenderVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2GenderAggregateFieldsBase
 * auto generated base class for the model PokemonV2GenderAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_gender"
 */
export const PokemonV2GenderAggregateFieldsModelBase = ModelBase
  .named('PokemonV2GenderAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_gender_aggregate_fields"), "pokemon_v2_gender_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenderVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2GenderAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2GenderAvgFieldsModelSelector | ((selector: PokemonV2GenderAvgFieldsModelSelector) => PokemonV2GenderAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2GenderAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2GenderMaxFieldsModelSelector | ((selector: PokemonV2GenderMaxFieldsModelSelector) => PokemonV2GenderMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2GenderMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2GenderMinFieldsModelSelector | ((selector: PokemonV2GenderMinFieldsModelSelector) => PokemonV2GenderMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2GenderMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2GenderStddevFieldsModelSelector | ((selector: PokemonV2GenderStddevFieldsModelSelector) => PokemonV2GenderStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2GenderStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2GenderStddevPopFieldsModelSelector | ((selector: PokemonV2GenderStddevPopFieldsModelSelector) => PokemonV2GenderStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2GenderStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2GenderStddevSampFieldsModelSelector | ((selector: PokemonV2GenderStddevSampFieldsModelSelector) => PokemonV2GenderStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2GenderStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2GenderSumFieldsModelSelector | ((selector: PokemonV2GenderSumFieldsModelSelector) => PokemonV2GenderSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2GenderSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2GenderVarPopFieldsModelSelector | ((selector: PokemonV2GenderVarPopFieldsModelSelector) => PokemonV2GenderVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2GenderVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2GenderVarSampFieldsModelSelector | ((selector: PokemonV2GenderVarSampFieldsModelSelector) => PokemonV2GenderVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2GenderVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2GenderVarianceFieldsModelSelector | ((selector: PokemonV2GenderVarianceFieldsModelSelector) => PokemonV2GenderVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2GenderVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2GenderAggregateFields() {
  return new PokemonV2GenderAggregateFieldsModelSelector()
}

export const pokemonV2GenderAggregateFieldsModelPrimitives = selectFromPokemonV2GenderAggregateFields().count
