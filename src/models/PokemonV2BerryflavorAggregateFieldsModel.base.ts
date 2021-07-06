/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavorAvgFieldsModel, PokemonV2BerryflavorAvgFieldsModelType } from "./PokemonV2BerryflavorAvgFieldsModel"
import { PokemonV2BerryflavorAvgFieldsModelSelector } from "./PokemonV2BerryflavorAvgFieldsModel.base"
import { PokemonV2BerryflavorMaxFieldsModel, PokemonV2BerryflavorMaxFieldsModelType } from "./PokemonV2BerryflavorMaxFieldsModel"
import { PokemonV2BerryflavorMaxFieldsModelSelector } from "./PokemonV2BerryflavorMaxFieldsModel.base"
import { PokemonV2BerryflavorMinFieldsModel, PokemonV2BerryflavorMinFieldsModelType } from "./PokemonV2BerryflavorMinFieldsModel"
import { PokemonV2BerryflavorMinFieldsModelSelector } from "./PokemonV2BerryflavorMinFieldsModel.base"
import { PokemonV2BerryflavorStddevFieldsModel, PokemonV2BerryflavorStddevFieldsModelType } from "./PokemonV2BerryflavorStddevFieldsModel"
import { PokemonV2BerryflavorStddevFieldsModelSelector } from "./PokemonV2BerryflavorStddevFieldsModel.base"
import { PokemonV2BerryflavorStddevPopFieldsModel, PokemonV2BerryflavorStddevPopFieldsModelType } from "./PokemonV2BerryflavorStddevPopFieldsModel"
import { PokemonV2BerryflavorStddevPopFieldsModelSelector } from "./PokemonV2BerryflavorStddevPopFieldsModel.base"
import { PokemonV2BerryflavorStddevSampFieldsModel, PokemonV2BerryflavorStddevSampFieldsModelType } from "./PokemonV2BerryflavorStddevSampFieldsModel"
import { PokemonV2BerryflavorStddevSampFieldsModelSelector } from "./PokemonV2BerryflavorStddevSampFieldsModel.base"
import { PokemonV2BerryflavorSumFieldsModel, PokemonV2BerryflavorSumFieldsModelType } from "./PokemonV2BerryflavorSumFieldsModel"
import { PokemonV2BerryflavorSumFieldsModelSelector } from "./PokemonV2BerryflavorSumFieldsModel.base"
import { PokemonV2BerryflavorVarPopFieldsModel, PokemonV2BerryflavorVarPopFieldsModelType } from "./PokemonV2BerryflavorVarPopFieldsModel"
import { PokemonV2BerryflavorVarPopFieldsModelSelector } from "./PokemonV2BerryflavorVarPopFieldsModel.base"
import { PokemonV2BerryflavorVarSampFieldsModel, PokemonV2BerryflavorVarSampFieldsModelType } from "./PokemonV2BerryflavorVarSampFieldsModel"
import { PokemonV2BerryflavorVarSampFieldsModelSelector } from "./PokemonV2BerryflavorVarSampFieldsModel.base"
import { PokemonV2BerryflavorVarianceFieldsModel, PokemonV2BerryflavorVarianceFieldsModelType } from "./PokemonV2BerryflavorVarianceFieldsModel"
import { PokemonV2BerryflavorVarianceFieldsModelSelector } from "./PokemonV2BerryflavorVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryflavorAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavorAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor_aggregate_fields"), "pokemon_v2_berryflavor_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavorVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryflavorAvgFieldsModelSelector | ((selector: PokemonV2BerryflavorAvgFieldsModelSelector) => PokemonV2BerryflavorAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryflavorAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryflavorMaxFieldsModelSelector | ((selector: PokemonV2BerryflavorMaxFieldsModelSelector) => PokemonV2BerryflavorMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryflavorMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryflavorMinFieldsModelSelector | ((selector: PokemonV2BerryflavorMinFieldsModelSelector) => PokemonV2BerryflavorMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryflavorMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryflavorStddevFieldsModelSelector | ((selector: PokemonV2BerryflavorStddevFieldsModelSelector) => PokemonV2BerryflavorStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryflavorStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryflavorStddevPopFieldsModelSelector | ((selector: PokemonV2BerryflavorStddevPopFieldsModelSelector) => PokemonV2BerryflavorStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryflavorStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryflavorStddevSampFieldsModelSelector | ((selector: PokemonV2BerryflavorStddevSampFieldsModelSelector) => PokemonV2BerryflavorStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryflavorStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerryflavorSumFieldsModelSelector | ((selector: PokemonV2BerryflavorSumFieldsModelSelector) => PokemonV2BerryflavorSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerryflavorSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryflavorVarPopFieldsModelSelector | ((selector: PokemonV2BerryflavorVarPopFieldsModelSelector) => PokemonV2BerryflavorVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryflavorVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryflavorVarSampFieldsModelSelector | ((selector: PokemonV2BerryflavorVarSampFieldsModelSelector) => PokemonV2BerryflavorVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryflavorVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryflavorVarianceFieldsModelSelector | ((selector: PokemonV2BerryflavorVarianceFieldsModelSelector) => PokemonV2BerryflavorVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryflavorVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavorAggregateFields() {
  return new PokemonV2BerryflavorAggregateFieldsModelSelector()
}

export const pokemonV2BerryflavorAggregateFieldsModelPrimitives = selectFromPokemonV2BerryflavorAggregateFields().count
