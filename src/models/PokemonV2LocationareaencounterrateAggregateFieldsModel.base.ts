/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareaencounterrateAvgFieldsModel, PokemonV2LocationareaencounterrateAvgFieldsModelType } from "./PokemonV2LocationareaencounterrateAvgFieldsModel"
import { PokemonV2LocationareaencounterrateAvgFieldsModelSelector } from "./PokemonV2LocationareaencounterrateAvgFieldsModel.base"
import { PokemonV2LocationareaencounterrateMaxFieldsModel, PokemonV2LocationareaencounterrateMaxFieldsModelType } from "./PokemonV2LocationareaencounterrateMaxFieldsModel"
import { PokemonV2LocationareaencounterrateMaxFieldsModelSelector } from "./PokemonV2LocationareaencounterrateMaxFieldsModel.base"
import { PokemonV2LocationareaencounterrateMinFieldsModel, PokemonV2LocationareaencounterrateMinFieldsModelType } from "./PokemonV2LocationareaencounterrateMinFieldsModel"
import { PokemonV2LocationareaencounterrateMinFieldsModelSelector } from "./PokemonV2LocationareaencounterrateMinFieldsModel.base"
import { PokemonV2LocationareaencounterrateStddevFieldsModel, PokemonV2LocationareaencounterrateStddevFieldsModelType } from "./PokemonV2LocationareaencounterrateStddevFieldsModel"
import { PokemonV2LocationareaencounterrateStddevFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevFieldsModel.base"
import { PokemonV2LocationareaencounterrateStddevPopFieldsModel, PokemonV2LocationareaencounterrateStddevPopFieldsModelType } from "./PokemonV2LocationareaencounterrateStddevPopFieldsModel"
import { PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevPopFieldsModel.base"
import { PokemonV2LocationareaencounterrateStddevSampFieldsModel, PokemonV2LocationareaencounterrateStddevSampFieldsModelType } from "./PokemonV2LocationareaencounterrateStddevSampFieldsModel"
import { PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector } from "./PokemonV2LocationareaencounterrateStddevSampFieldsModel.base"
import { PokemonV2LocationareaencounterrateSumFieldsModel, PokemonV2LocationareaencounterrateSumFieldsModelType } from "./PokemonV2LocationareaencounterrateSumFieldsModel"
import { PokemonV2LocationareaencounterrateSumFieldsModelSelector } from "./PokemonV2LocationareaencounterrateSumFieldsModel.base"
import { PokemonV2LocationareaencounterrateVarPopFieldsModel, PokemonV2LocationareaencounterrateVarPopFieldsModelType } from "./PokemonV2LocationareaencounterrateVarPopFieldsModel"
import { PokemonV2LocationareaencounterrateVarPopFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarPopFieldsModel.base"
import { PokemonV2LocationareaencounterrateVarSampFieldsModel, PokemonV2LocationareaencounterrateVarSampFieldsModelType } from "./PokemonV2LocationareaencounterrateVarSampFieldsModel"
import { PokemonV2LocationareaencounterrateVarSampFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarSampFieldsModel.base"
import { PokemonV2LocationareaencounterrateVarianceFieldsModel, PokemonV2LocationareaencounterrateVarianceFieldsModelType } from "./PokemonV2LocationareaencounterrateVarianceFieldsModel"
import { PokemonV2LocationareaencounterrateVarianceFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaencounterrateAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationareaencounterrateAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaencounterrateAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationareaencounterrate_aggregate_fields"), "pokemon_v2_locationareaencounterrate_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaencounterrateVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaencounterrateAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationareaencounterrateAvgFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateAvgFieldsModelSelector) => PokemonV2LocationareaencounterrateAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationareaencounterrateAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationareaencounterrateMaxFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateMaxFieldsModelSelector) => PokemonV2LocationareaencounterrateMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationareaencounterrateMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationareaencounterrateMinFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateMinFieldsModelSelector) => PokemonV2LocationareaencounterrateMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationareaencounterrateMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationareaencounterrateStddevFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateStddevFieldsModelSelector) => PokemonV2LocationareaencounterrateStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationareaencounterrateStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector) => PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationareaencounterrateStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector) => PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationareaencounterrateStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationareaencounterrateSumFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateSumFieldsModelSelector) => PokemonV2LocationareaencounterrateSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationareaencounterrateSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationareaencounterrateVarPopFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateVarPopFieldsModelSelector) => PokemonV2LocationareaencounterrateVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationareaencounterrateVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationareaencounterrateVarSampFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateVarSampFieldsModelSelector) => PokemonV2LocationareaencounterrateVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationareaencounterrateVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationareaencounterrateVarianceFieldsModelSelector | ((selector: PokemonV2LocationareaencounterrateVarianceFieldsModelSelector) => PokemonV2LocationareaencounterrateVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationareaencounterrateVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationareaencounterrateAggregateFields() {
  return new PokemonV2LocationareaencounterrateAggregateFieldsModelSelector()
}

export const pokemonV2LocationareaencounterrateAggregateFieldsModelPrimitives = selectFromPokemonV2LocationareaencounterrateAggregateFields().count
