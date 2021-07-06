/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterAvgFieldsModel, PokemonV2EncounterAvgFieldsModelType } from "./PokemonV2EncounterAvgFieldsModel"
import { PokemonV2EncounterAvgFieldsModelSelector } from "./PokemonV2EncounterAvgFieldsModel.base"
import { PokemonV2EncounterMaxFieldsModel, PokemonV2EncounterMaxFieldsModelType } from "./PokemonV2EncounterMaxFieldsModel"
import { PokemonV2EncounterMaxFieldsModelSelector } from "./PokemonV2EncounterMaxFieldsModel.base"
import { PokemonV2EncounterMinFieldsModel, PokemonV2EncounterMinFieldsModelType } from "./PokemonV2EncounterMinFieldsModel"
import { PokemonV2EncounterMinFieldsModelSelector } from "./PokemonV2EncounterMinFieldsModel.base"
import { PokemonV2EncounterStddevFieldsModel, PokemonV2EncounterStddevFieldsModelType } from "./PokemonV2EncounterStddevFieldsModel"
import { PokemonV2EncounterStddevFieldsModelSelector } from "./PokemonV2EncounterStddevFieldsModel.base"
import { PokemonV2EncounterStddevPopFieldsModel, PokemonV2EncounterStddevPopFieldsModelType } from "./PokemonV2EncounterStddevPopFieldsModel"
import { PokemonV2EncounterStddevPopFieldsModelSelector } from "./PokemonV2EncounterStddevPopFieldsModel.base"
import { PokemonV2EncounterStddevSampFieldsModel, PokemonV2EncounterStddevSampFieldsModelType } from "./PokemonV2EncounterStddevSampFieldsModel"
import { PokemonV2EncounterStddevSampFieldsModelSelector } from "./PokemonV2EncounterStddevSampFieldsModel.base"
import { PokemonV2EncounterSumFieldsModel, PokemonV2EncounterSumFieldsModelType } from "./PokemonV2EncounterSumFieldsModel"
import { PokemonV2EncounterSumFieldsModelSelector } from "./PokemonV2EncounterSumFieldsModel.base"
import { PokemonV2EncounterVarPopFieldsModel, PokemonV2EncounterVarPopFieldsModelType } from "./PokemonV2EncounterVarPopFieldsModel"
import { PokemonV2EncounterVarPopFieldsModelSelector } from "./PokemonV2EncounterVarPopFieldsModel.base"
import { PokemonV2EncounterVarSampFieldsModel, PokemonV2EncounterVarSampFieldsModelType } from "./PokemonV2EncounterVarSampFieldsModel"
import { PokemonV2EncounterVarSampFieldsModelSelector } from "./PokemonV2EncounterVarSampFieldsModel.base"
import { PokemonV2EncounterVarianceFieldsModel, PokemonV2EncounterVarianceFieldsModelType } from "./PokemonV2EncounterVarianceFieldsModel"
import { PokemonV2EncounterVarianceFieldsModelSelector } from "./PokemonV2EncounterVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounter_aggregate_fields"), "pokemon_v2_encounter_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterAvgFieldsModelSelector | ((selector: PokemonV2EncounterAvgFieldsModelSelector) => PokemonV2EncounterAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterMaxFieldsModelSelector | ((selector: PokemonV2EncounterMaxFieldsModelSelector) => PokemonV2EncounterMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterMinFieldsModelSelector | ((selector: PokemonV2EncounterMinFieldsModelSelector) => PokemonV2EncounterMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterStddevFieldsModelSelector | ((selector: PokemonV2EncounterStddevFieldsModelSelector) => PokemonV2EncounterStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterStddevPopFieldsModelSelector) => PokemonV2EncounterStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterStddevSampFieldsModelSelector) => PokemonV2EncounterStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterSumFieldsModelSelector | ((selector: PokemonV2EncounterSumFieldsModelSelector) => PokemonV2EncounterSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterVarPopFieldsModelSelector | ((selector: PokemonV2EncounterVarPopFieldsModelSelector) => PokemonV2EncounterVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterVarSampFieldsModelSelector | ((selector: PokemonV2EncounterVarSampFieldsModelSelector) => PokemonV2EncounterVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterVarianceFieldsModelSelector | ((selector: PokemonV2EncounterVarianceFieldsModelSelector) => PokemonV2EncounterVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterAggregateFields() {
  return new PokemonV2EncounterAggregateFieldsModelSelector()
}

export const pokemonV2EncounterAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterAggregateFields().count
