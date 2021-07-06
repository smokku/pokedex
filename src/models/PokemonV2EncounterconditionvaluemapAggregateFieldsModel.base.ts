/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterconditionvaluemapAvgFieldsModel, PokemonV2EncounterconditionvaluemapAvgFieldsModelType } from "./PokemonV2EncounterconditionvaluemapAvgFieldsModel"
import { PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapAvgFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapMaxFieldsModel, PokemonV2EncounterconditionvaluemapMaxFieldsModelType } from "./PokemonV2EncounterconditionvaluemapMaxFieldsModel"
import { PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapMaxFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapMinFieldsModel, PokemonV2EncounterconditionvaluemapMinFieldsModelType } from "./PokemonV2EncounterconditionvaluemapMinFieldsModel"
import { PokemonV2EncounterconditionvaluemapMinFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapMinFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapStddevFieldsModel, PokemonV2EncounterconditionvaluemapStddevFieldsModelType } from "./PokemonV2EncounterconditionvaluemapStddevFieldsModel"
import { PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapStddevPopFieldsModel, PokemonV2EncounterconditionvaluemapStddevPopFieldsModelType } from "./PokemonV2EncounterconditionvaluemapStddevPopFieldsModel"
import { PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevPopFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapStddevSampFieldsModel, PokemonV2EncounterconditionvaluemapStddevSampFieldsModelType } from "./PokemonV2EncounterconditionvaluemapStddevSampFieldsModel"
import { PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevSampFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapSumFieldsModel, PokemonV2EncounterconditionvaluemapSumFieldsModelType } from "./PokemonV2EncounterconditionvaluemapSumFieldsModel"
import { PokemonV2EncounterconditionvaluemapSumFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapSumFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapVarPopFieldsModel, PokemonV2EncounterconditionvaluemapVarPopFieldsModelType } from "./PokemonV2EncounterconditionvaluemapVarPopFieldsModel"
import { PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarPopFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapVarSampFieldsModel, PokemonV2EncounterconditionvaluemapVarSampFieldsModelType } from "./PokemonV2EncounterconditionvaluemapVarSampFieldsModel"
import { PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarSampFieldsModel.base"
import { PokemonV2EncounterconditionvaluemapVarianceFieldsModel, PokemonV2EncounterconditionvaluemapVarianceFieldsModelType } from "./PokemonV2EncounterconditionvaluemapVarianceFieldsModel"
import { PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvaluemapAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvaluemapAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvaluemapAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvaluemap_aggregate_fields"), "pokemon_v2_encounterconditionvaluemap_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterconditionvaluemapVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector) => PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector) => PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterconditionvaluemapMinFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapMinFieldsModelSelector) => PokemonV2EncounterconditionvaluemapMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterconditionvaluemapMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector) => PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector) => PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector) => PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterconditionvaluemapSumFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapSumFieldsModelSelector) => PokemonV2EncounterconditionvaluemapSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterconditionvaluemapSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector) => PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector) => PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector | ((selector: PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector) => PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterconditionvaluemapAggregateFields() {
  return new PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector()
}

export const pokemonV2EncounterconditionvaluemapAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvaluemapAggregateFields().count
