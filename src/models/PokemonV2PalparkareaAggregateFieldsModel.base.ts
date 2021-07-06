/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PalparkareaAvgFieldsModel, PokemonV2PalparkareaAvgFieldsModelType } from "./PokemonV2PalparkareaAvgFieldsModel"
import { PokemonV2PalparkareaAvgFieldsModelSelector } from "./PokemonV2PalparkareaAvgFieldsModel.base"
import { PokemonV2PalparkareaMaxFieldsModel, PokemonV2PalparkareaMaxFieldsModelType } from "./PokemonV2PalparkareaMaxFieldsModel"
import { PokemonV2PalparkareaMaxFieldsModelSelector } from "./PokemonV2PalparkareaMaxFieldsModel.base"
import { PokemonV2PalparkareaMinFieldsModel, PokemonV2PalparkareaMinFieldsModelType } from "./PokemonV2PalparkareaMinFieldsModel"
import { PokemonV2PalparkareaMinFieldsModelSelector } from "./PokemonV2PalparkareaMinFieldsModel.base"
import { PokemonV2PalparkareaStddevFieldsModel, PokemonV2PalparkareaStddevFieldsModelType } from "./PokemonV2PalparkareaStddevFieldsModel"
import { PokemonV2PalparkareaStddevFieldsModelSelector } from "./PokemonV2PalparkareaStddevFieldsModel.base"
import { PokemonV2PalparkareaStddevPopFieldsModel, PokemonV2PalparkareaStddevPopFieldsModelType } from "./PokemonV2PalparkareaStddevPopFieldsModel"
import { PokemonV2PalparkareaStddevPopFieldsModelSelector } from "./PokemonV2PalparkareaStddevPopFieldsModel.base"
import { PokemonV2PalparkareaStddevSampFieldsModel, PokemonV2PalparkareaStddevSampFieldsModelType } from "./PokemonV2PalparkareaStddevSampFieldsModel"
import { PokemonV2PalparkareaStddevSampFieldsModelSelector } from "./PokemonV2PalparkareaStddevSampFieldsModel.base"
import { PokemonV2PalparkareaSumFieldsModel, PokemonV2PalparkareaSumFieldsModelType } from "./PokemonV2PalparkareaSumFieldsModel"
import { PokemonV2PalparkareaSumFieldsModelSelector } from "./PokemonV2PalparkareaSumFieldsModel.base"
import { PokemonV2PalparkareaVarPopFieldsModel, PokemonV2PalparkareaVarPopFieldsModelType } from "./PokemonV2PalparkareaVarPopFieldsModel"
import { PokemonV2PalparkareaVarPopFieldsModelSelector } from "./PokemonV2PalparkareaVarPopFieldsModel.base"
import { PokemonV2PalparkareaVarSampFieldsModel, PokemonV2PalparkareaVarSampFieldsModelType } from "./PokemonV2PalparkareaVarSampFieldsModel"
import { PokemonV2PalparkareaVarSampFieldsModelSelector } from "./PokemonV2PalparkareaVarSampFieldsModel.base"
import { PokemonV2PalparkareaVarianceFieldsModel, PokemonV2PalparkareaVarianceFieldsModelType } from "./PokemonV2PalparkareaVarianceFieldsModel"
import { PokemonV2PalparkareaVarianceFieldsModelSelector } from "./PokemonV2PalparkareaVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PalparkareaAggregateFieldsBase
 * auto generated base class for the model PokemonV2PalparkareaAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PalparkareaAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_palparkarea_aggregate_fields"), "pokemon_v2_palparkarea_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PalparkareaVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PalparkareaAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PalparkareaAvgFieldsModelSelector | ((selector: PokemonV2PalparkareaAvgFieldsModelSelector) => PokemonV2PalparkareaAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PalparkareaAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PalparkareaMaxFieldsModelSelector | ((selector: PokemonV2PalparkareaMaxFieldsModelSelector) => PokemonV2PalparkareaMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PalparkareaMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PalparkareaMinFieldsModelSelector | ((selector: PokemonV2PalparkareaMinFieldsModelSelector) => PokemonV2PalparkareaMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PalparkareaMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PalparkareaStddevFieldsModelSelector | ((selector: PokemonV2PalparkareaStddevFieldsModelSelector) => PokemonV2PalparkareaStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PalparkareaStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PalparkareaStddevPopFieldsModelSelector | ((selector: PokemonV2PalparkareaStddevPopFieldsModelSelector) => PokemonV2PalparkareaStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PalparkareaStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PalparkareaStddevSampFieldsModelSelector | ((selector: PokemonV2PalparkareaStddevSampFieldsModelSelector) => PokemonV2PalparkareaStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PalparkareaStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PalparkareaSumFieldsModelSelector | ((selector: PokemonV2PalparkareaSumFieldsModelSelector) => PokemonV2PalparkareaSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PalparkareaSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PalparkareaVarPopFieldsModelSelector | ((selector: PokemonV2PalparkareaVarPopFieldsModelSelector) => PokemonV2PalparkareaVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PalparkareaVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PalparkareaVarSampFieldsModelSelector | ((selector: PokemonV2PalparkareaVarSampFieldsModelSelector) => PokemonV2PalparkareaVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PalparkareaVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PalparkareaVarianceFieldsModelSelector | ((selector: PokemonV2PalparkareaVarianceFieldsModelSelector) => PokemonV2PalparkareaVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PalparkareaVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PalparkareaAggregateFields() {
  return new PokemonV2PalparkareaAggregateFieldsModelSelector()
}

export const pokemonV2PalparkareaAggregateFieldsModelPrimitives = selectFromPokemonV2PalparkareaAggregateFields().count
