/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EvolutiontriggerAvgFieldsModel, PokemonV2EvolutiontriggerAvgFieldsModelType } from "./PokemonV2EvolutiontriggerAvgFieldsModel"
import { PokemonV2EvolutiontriggerAvgFieldsModelSelector } from "./PokemonV2EvolutiontriggerAvgFieldsModel.base"
import { PokemonV2EvolutiontriggerMaxFieldsModel, PokemonV2EvolutiontriggerMaxFieldsModelType } from "./PokemonV2EvolutiontriggerMaxFieldsModel"
import { PokemonV2EvolutiontriggerMaxFieldsModelSelector } from "./PokemonV2EvolutiontriggerMaxFieldsModel.base"
import { PokemonV2EvolutiontriggerMinFieldsModel, PokemonV2EvolutiontriggerMinFieldsModelType } from "./PokemonV2EvolutiontriggerMinFieldsModel"
import { PokemonV2EvolutiontriggerMinFieldsModelSelector } from "./PokemonV2EvolutiontriggerMinFieldsModel.base"
import { PokemonV2EvolutiontriggerStddevFieldsModel, PokemonV2EvolutiontriggerStddevFieldsModelType } from "./PokemonV2EvolutiontriggerStddevFieldsModel"
import { PokemonV2EvolutiontriggerStddevFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevFieldsModel.base"
import { PokemonV2EvolutiontriggerStddevPopFieldsModel, PokemonV2EvolutiontriggerStddevPopFieldsModelType } from "./PokemonV2EvolutiontriggerStddevPopFieldsModel"
import { PokemonV2EvolutiontriggerStddevPopFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevPopFieldsModel.base"
import { PokemonV2EvolutiontriggerStddevSampFieldsModel, PokemonV2EvolutiontriggerStddevSampFieldsModelType } from "./PokemonV2EvolutiontriggerStddevSampFieldsModel"
import { PokemonV2EvolutiontriggerStddevSampFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevSampFieldsModel.base"
import { PokemonV2EvolutiontriggerSumFieldsModel, PokemonV2EvolutiontriggerSumFieldsModelType } from "./PokemonV2EvolutiontriggerSumFieldsModel"
import { PokemonV2EvolutiontriggerSumFieldsModelSelector } from "./PokemonV2EvolutiontriggerSumFieldsModel.base"
import { PokemonV2EvolutiontriggerVarPopFieldsModel, PokemonV2EvolutiontriggerVarPopFieldsModelType } from "./PokemonV2EvolutiontriggerVarPopFieldsModel"
import { PokemonV2EvolutiontriggerVarPopFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarPopFieldsModel.base"
import { PokemonV2EvolutiontriggerVarSampFieldsModel, PokemonV2EvolutiontriggerVarSampFieldsModelType } from "./PokemonV2EvolutiontriggerVarSampFieldsModel"
import { PokemonV2EvolutiontriggerVarSampFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarSampFieldsModel.base"
import { PokemonV2EvolutiontriggerVarianceFieldsModel, PokemonV2EvolutiontriggerVarianceFieldsModelType } from "./PokemonV2EvolutiontriggerVarianceFieldsModel"
import { PokemonV2EvolutiontriggerVarianceFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EvolutiontriggerAggregateFieldsBase
 * auto generated base class for the model PokemonV2EvolutiontriggerAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EvolutiontriggerAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_evolutiontrigger_aggregate_fields"), "pokemon_v2_evolutiontrigger_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EvolutiontriggerVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EvolutiontriggerAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EvolutiontriggerAvgFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerAvgFieldsModelSelector) => PokemonV2EvolutiontriggerAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EvolutiontriggerAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EvolutiontriggerMaxFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerMaxFieldsModelSelector) => PokemonV2EvolutiontriggerMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EvolutiontriggerMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EvolutiontriggerMinFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerMinFieldsModelSelector) => PokemonV2EvolutiontriggerMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EvolutiontriggerMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EvolutiontriggerStddevFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerStddevFieldsModelSelector) => PokemonV2EvolutiontriggerStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EvolutiontriggerStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EvolutiontriggerStddevPopFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerStddevPopFieldsModelSelector) => PokemonV2EvolutiontriggerStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EvolutiontriggerStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EvolutiontriggerStddevSampFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerStddevSampFieldsModelSelector) => PokemonV2EvolutiontriggerStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EvolutiontriggerStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EvolutiontriggerSumFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerSumFieldsModelSelector) => PokemonV2EvolutiontriggerSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EvolutiontriggerSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EvolutiontriggerVarPopFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerVarPopFieldsModelSelector) => PokemonV2EvolutiontriggerVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EvolutiontriggerVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EvolutiontriggerVarSampFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerVarSampFieldsModelSelector) => PokemonV2EvolutiontriggerVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EvolutiontriggerVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EvolutiontriggerVarianceFieldsModelSelector | ((selector: PokemonV2EvolutiontriggerVarianceFieldsModelSelector) => PokemonV2EvolutiontriggerVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EvolutiontriggerVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EvolutiontriggerAggregateFields() {
  return new PokemonV2EvolutiontriggerAggregateFieldsModelSelector()
}

export const pokemonV2EvolutiontriggerAggregateFieldsModelPrimitives = selectFromPokemonV2EvolutiontriggerAggregateFields().count
