/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessAvgFieldsModel, PokemonV2BerryfirmnessAvgFieldsModelType } from "./PokemonV2BerryfirmnessAvgFieldsModel"
import { PokemonV2BerryfirmnessAvgFieldsModelSelector } from "./PokemonV2BerryfirmnessAvgFieldsModel.base"
import { PokemonV2BerryfirmnessMaxFieldsModel, PokemonV2BerryfirmnessMaxFieldsModelType } from "./PokemonV2BerryfirmnessMaxFieldsModel"
import { PokemonV2BerryfirmnessMaxFieldsModelSelector } from "./PokemonV2BerryfirmnessMaxFieldsModel.base"
import { PokemonV2BerryfirmnessMinFieldsModel, PokemonV2BerryfirmnessMinFieldsModelType } from "./PokemonV2BerryfirmnessMinFieldsModel"
import { PokemonV2BerryfirmnessMinFieldsModelSelector } from "./PokemonV2BerryfirmnessMinFieldsModel.base"
import { PokemonV2BerryfirmnessStddevFieldsModel, PokemonV2BerryfirmnessStddevFieldsModelType } from "./PokemonV2BerryfirmnessStddevFieldsModel"
import { PokemonV2BerryfirmnessStddevFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevFieldsModel.base"
import { PokemonV2BerryfirmnessStddevPopFieldsModel, PokemonV2BerryfirmnessStddevPopFieldsModelType } from "./PokemonV2BerryfirmnessStddevPopFieldsModel"
import { PokemonV2BerryfirmnessStddevPopFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevPopFieldsModel.base"
import { PokemonV2BerryfirmnessStddevSampFieldsModel, PokemonV2BerryfirmnessStddevSampFieldsModelType } from "./PokemonV2BerryfirmnessStddevSampFieldsModel"
import { PokemonV2BerryfirmnessStddevSampFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevSampFieldsModel.base"
import { PokemonV2BerryfirmnessSumFieldsModel, PokemonV2BerryfirmnessSumFieldsModelType } from "./PokemonV2BerryfirmnessSumFieldsModel"
import { PokemonV2BerryfirmnessSumFieldsModelSelector } from "./PokemonV2BerryfirmnessSumFieldsModel.base"
import { PokemonV2BerryfirmnessVarPopFieldsModel, PokemonV2BerryfirmnessVarPopFieldsModelType } from "./PokemonV2BerryfirmnessVarPopFieldsModel"
import { PokemonV2BerryfirmnessVarPopFieldsModelSelector } from "./PokemonV2BerryfirmnessVarPopFieldsModel.base"
import { PokemonV2BerryfirmnessVarSampFieldsModel, PokemonV2BerryfirmnessVarSampFieldsModelType } from "./PokemonV2BerryfirmnessVarSampFieldsModel"
import { PokemonV2BerryfirmnessVarSampFieldsModelSelector } from "./PokemonV2BerryfirmnessVarSampFieldsModel.base"
import { PokemonV2BerryfirmnessVarianceFieldsModel, PokemonV2BerryfirmnessVarianceFieldsModelType } from "./PokemonV2BerryfirmnessVarianceFieldsModel"
import { PokemonV2BerryfirmnessVarianceFieldsModelSelector } from "./PokemonV2BerryfirmnessVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmness_aggregate_fields"), "pokemon_v2_berryfirmness_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryfirmnessAvgFieldsModelSelector | ((selector: PokemonV2BerryfirmnessAvgFieldsModelSelector) => PokemonV2BerryfirmnessAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryfirmnessAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryfirmnessMaxFieldsModelSelector | ((selector: PokemonV2BerryfirmnessMaxFieldsModelSelector) => PokemonV2BerryfirmnessMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryfirmnessMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryfirmnessMinFieldsModelSelector | ((selector: PokemonV2BerryfirmnessMinFieldsModelSelector) => PokemonV2BerryfirmnessMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryfirmnessMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryfirmnessStddevFieldsModelSelector | ((selector: PokemonV2BerryfirmnessStddevFieldsModelSelector) => PokemonV2BerryfirmnessStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryfirmnessStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryfirmnessStddevPopFieldsModelSelector | ((selector: PokemonV2BerryfirmnessStddevPopFieldsModelSelector) => PokemonV2BerryfirmnessStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryfirmnessStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryfirmnessStddevSampFieldsModelSelector | ((selector: PokemonV2BerryfirmnessStddevSampFieldsModelSelector) => PokemonV2BerryfirmnessStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryfirmnessStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerryfirmnessSumFieldsModelSelector | ((selector: PokemonV2BerryfirmnessSumFieldsModelSelector) => PokemonV2BerryfirmnessSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerryfirmnessSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryfirmnessVarPopFieldsModelSelector | ((selector: PokemonV2BerryfirmnessVarPopFieldsModelSelector) => PokemonV2BerryfirmnessVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryfirmnessVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryfirmnessVarSampFieldsModelSelector | ((selector: PokemonV2BerryfirmnessVarSampFieldsModelSelector) => PokemonV2BerryfirmnessVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryfirmnessVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryfirmnessVarianceFieldsModelSelector | ((selector: PokemonV2BerryfirmnessVarianceFieldsModelSelector) => PokemonV2BerryfirmnessVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryfirmnessVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryfirmnessAggregateFields() {
  return new PokemonV2BerryfirmnessAggregateFieldsModelSelector()
}

export const pokemonV2BerryfirmnessAggregateFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessAggregateFields().count
