/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncounterslotAvgFieldsModel, PokemonV2EncounterslotAvgFieldsModelType } from "./PokemonV2EncounterslotAvgFieldsModel"
import { PokemonV2EncounterslotAvgFieldsModelSelector } from "./PokemonV2EncounterslotAvgFieldsModel.base"
import { PokemonV2EncounterslotMaxFieldsModel, PokemonV2EncounterslotMaxFieldsModelType } from "./PokemonV2EncounterslotMaxFieldsModel"
import { PokemonV2EncounterslotMaxFieldsModelSelector } from "./PokemonV2EncounterslotMaxFieldsModel.base"
import { PokemonV2EncounterslotMinFieldsModel, PokemonV2EncounterslotMinFieldsModelType } from "./PokemonV2EncounterslotMinFieldsModel"
import { PokemonV2EncounterslotMinFieldsModelSelector } from "./PokemonV2EncounterslotMinFieldsModel.base"
import { PokemonV2EncounterslotStddevFieldsModel, PokemonV2EncounterslotStddevFieldsModelType } from "./PokemonV2EncounterslotStddevFieldsModel"
import { PokemonV2EncounterslotStddevFieldsModelSelector } from "./PokemonV2EncounterslotStddevFieldsModel.base"
import { PokemonV2EncounterslotStddevPopFieldsModel, PokemonV2EncounterslotStddevPopFieldsModelType } from "./PokemonV2EncounterslotStddevPopFieldsModel"
import { PokemonV2EncounterslotStddevPopFieldsModelSelector } from "./PokemonV2EncounterslotStddevPopFieldsModel.base"
import { PokemonV2EncounterslotStddevSampFieldsModel, PokemonV2EncounterslotStddevSampFieldsModelType } from "./PokemonV2EncounterslotStddevSampFieldsModel"
import { PokemonV2EncounterslotStddevSampFieldsModelSelector } from "./PokemonV2EncounterslotStddevSampFieldsModel.base"
import { PokemonV2EncounterslotSumFieldsModel, PokemonV2EncounterslotSumFieldsModelType } from "./PokemonV2EncounterslotSumFieldsModel"
import { PokemonV2EncounterslotSumFieldsModelSelector } from "./PokemonV2EncounterslotSumFieldsModel.base"
import { PokemonV2EncounterslotVarPopFieldsModel, PokemonV2EncounterslotVarPopFieldsModelType } from "./PokemonV2EncounterslotVarPopFieldsModel"
import { PokemonV2EncounterslotVarPopFieldsModelSelector } from "./PokemonV2EncounterslotVarPopFieldsModel.base"
import { PokemonV2EncounterslotVarSampFieldsModel, PokemonV2EncounterslotVarSampFieldsModelType } from "./PokemonV2EncounterslotVarSampFieldsModel"
import { PokemonV2EncounterslotVarSampFieldsModelSelector } from "./PokemonV2EncounterslotVarSampFieldsModel.base"
import { PokemonV2EncounterslotVarianceFieldsModel, PokemonV2EncounterslotVarianceFieldsModelType } from "./PokemonV2EncounterslotVarianceFieldsModel"
import { PokemonV2EncounterslotVarianceFieldsModelSelector } from "./PokemonV2EncounterslotVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterslotAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncounterslotAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncounterslotAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterslot_aggregate_fields"), "pokemon_v2_encounterslot_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncounterslotVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterslotAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncounterslotAvgFieldsModelSelector | ((selector: PokemonV2EncounterslotAvgFieldsModelSelector) => PokemonV2EncounterslotAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncounterslotAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncounterslotMaxFieldsModelSelector | ((selector: PokemonV2EncounterslotMaxFieldsModelSelector) => PokemonV2EncounterslotMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncounterslotMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncounterslotMinFieldsModelSelector | ((selector: PokemonV2EncounterslotMinFieldsModelSelector) => PokemonV2EncounterslotMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncounterslotMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncounterslotStddevFieldsModelSelector | ((selector: PokemonV2EncounterslotStddevFieldsModelSelector) => PokemonV2EncounterslotStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncounterslotStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncounterslotStddevPopFieldsModelSelector | ((selector: PokemonV2EncounterslotStddevPopFieldsModelSelector) => PokemonV2EncounterslotStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncounterslotStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncounterslotStddevSampFieldsModelSelector | ((selector: PokemonV2EncounterslotStddevSampFieldsModelSelector) => PokemonV2EncounterslotStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncounterslotStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncounterslotSumFieldsModelSelector | ((selector: PokemonV2EncounterslotSumFieldsModelSelector) => PokemonV2EncounterslotSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncounterslotSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncounterslotVarPopFieldsModelSelector | ((selector: PokemonV2EncounterslotVarPopFieldsModelSelector) => PokemonV2EncounterslotVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncounterslotVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncounterslotVarSampFieldsModelSelector | ((selector: PokemonV2EncounterslotVarSampFieldsModelSelector) => PokemonV2EncounterslotVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncounterslotVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncounterslotVarianceFieldsModelSelector | ((selector: PokemonV2EncounterslotVarianceFieldsModelSelector) => PokemonV2EncounterslotVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncounterslotVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncounterslotAggregateFields() {
  return new PokemonV2EncounterslotAggregateFieldsModelSelector()
}

export const pokemonV2EncounterslotAggregateFieldsModelPrimitives = selectFromPokemonV2EncounterslotAggregateFields().count
