/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationareaAvgFieldsModel, PokemonV2LocationareaAvgFieldsModelType } from "./PokemonV2LocationareaAvgFieldsModel"
import { PokemonV2LocationareaAvgFieldsModelSelector } from "./PokemonV2LocationareaAvgFieldsModel.base"
import { PokemonV2LocationareaMaxFieldsModel, PokemonV2LocationareaMaxFieldsModelType } from "./PokemonV2LocationareaMaxFieldsModel"
import { PokemonV2LocationareaMaxFieldsModelSelector } from "./PokemonV2LocationareaMaxFieldsModel.base"
import { PokemonV2LocationareaMinFieldsModel, PokemonV2LocationareaMinFieldsModelType } from "./PokemonV2LocationareaMinFieldsModel"
import { PokemonV2LocationareaMinFieldsModelSelector } from "./PokemonV2LocationareaMinFieldsModel.base"
import { PokemonV2LocationareaStddevFieldsModel, PokemonV2LocationareaStddevFieldsModelType } from "./PokemonV2LocationareaStddevFieldsModel"
import { PokemonV2LocationareaStddevFieldsModelSelector } from "./PokemonV2LocationareaStddevFieldsModel.base"
import { PokemonV2LocationareaStddevPopFieldsModel, PokemonV2LocationareaStddevPopFieldsModelType } from "./PokemonV2LocationareaStddevPopFieldsModel"
import { PokemonV2LocationareaStddevPopFieldsModelSelector } from "./PokemonV2LocationareaStddevPopFieldsModel.base"
import { PokemonV2LocationareaStddevSampFieldsModel, PokemonV2LocationareaStddevSampFieldsModelType } from "./PokemonV2LocationareaStddevSampFieldsModel"
import { PokemonV2LocationareaStddevSampFieldsModelSelector } from "./PokemonV2LocationareaStddevSampFieldsModel.base"
import { PokemonV2LocationareaSumFieldsModel, PokemonV2LocationareaSumFieldsModelType } from "./PokemonV2LocationareaSumFieldsModel"
import { PokemonV2LocationareaSumFieldsModelSelector } from "./PokemonV2LocationareaSumFieldsModel.base"
import { PokemonV2LocationareaVarPopFieldsModel, PokemonV2LocationareaVarPopFieldsModelType } from "./PokemonV2LocationareaVarPopFieldsModel"
import { PokemonV2LocationareaVarPopFieldsModelSelector } from "./PokemonV2LocationareaVarPopFieldsModel.base"
import { PokemonV2LocationareaVarSampFieldsModel, PokemonV2LocationareaVarSampFieldsModelType } from "./PokemonV2LocationareaVarSampFieldsModel"
import { PokemonV2LocationareaVarSampFieldsModelSelector } from "./PokemonV2LocationareaVarSampFieldsModel.base"
import { PokemonV2LocationareaVarianceFieldsModel, PokemonV2LocationareaVarianceFieldsModelType } from "./PokemonV2LocationareaVarianceFieldsModel"
import { PokemonV2LocationareaVarianceFieldsModelSelector } from "./PokemonV2LocationareaVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationareaAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationareaAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationareaAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationarea_aggregate_fields"), "pokemon_v2_locationarea_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationareaVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationareaAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationareaAvgFieldsModelSelector | ((selector: PokemonV2LocationareaAvgFieldsModelSelector) => PokemonV2LocationareaAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationareaAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationareaMaxFieldsModelSelector | ((selector: PokemonV2LocationareaMaxFieldsModelSelector) => PokemonV2LocationareaMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationareaMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationareaMinFieldsModelSelector | ((selector: PokemonV2LocationareaMinFieldsModelSelector) => PokemonV2LocationareaMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationareaMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationareaStddevFieldsModelSelector | ((selector: PokemonV2LocationareaStddevFieldsModelSelector) => PokemonV2LocationareaStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationareaStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationareaStddevPopFieldsModelSelector | ((selector: PokemonV2LocationareaStddevPopFieldsModelSelector) => PokemonV2LocationareaStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationareaStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationareaStddevSampFieldsModelSelector | ((selector: PokemonV2LocationareaStddevSampFieldsModelSelector) => PokemonV2LocationareaStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationareaStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationareaSumFieldsModelSelector | ((selector: PokemonV2LocationareaSumFieldsModelSelector) => PokemonV2LocationareaSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationareaSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationareaVarPopFieldsModelSelector | ((selector: PokemonV2LocationareaVarPopFieldsModelSelector) => PokemonV2LocationareaVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationareaVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationareaVarSampFieldsModelSelector | ((selector: PokemonV2LocationareaVarSampFieldsModelSelector) => PokemonV2LocationareaVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationareaVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationareaVarianceFieldsModelSelector | ((selector: PokemonV2LocationareaVarianceFieldsModelSelector) => PokemonV2LocationareaVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationareaVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationareaAggregateFields() {
  return new PokemonV2LocationareaAggregateFieldsModelSelector()
}

export const pokemonV2LocationareaAggregateFieldsModelPrimitives = selectFromPokemonV2LocationareaAggregateFields().count
