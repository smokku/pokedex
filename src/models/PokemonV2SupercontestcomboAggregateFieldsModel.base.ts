/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2SupercontestcomboAvgFieldsModel, PokemonV2SupercontestcomboAvgFieldsModelType } from "./PokemonV2SupercontestcomboAvgFieldsModel"
import { PokemonV2SupercontestcomboAvgFieldsModelSelector } from "./PokemonV2SupercontestcomboAvgFieldsModel.base"
import { PokemonV2SupercontestcomboMaxFieldsModel, PokemonV2SupercontestcomboMaxFieldsModelType } from "./PokemonV2SupercontestcomboMaxFieldsModel"
import { PokemonV2SupercontestcomboMaxFieldsModelSelector } from "./PokemonV2SupercontestcomboMaxFieldsModel.base"
import { PokemonV2SupercontestcomboMinFieldsModel, PokemonV2SupercontestcomboMinFieldsModelType } from "./PokemonV2SupercontestcomboMinFieldsModel"
import { PokemonV2SupercontestcomboMinFieldsModelSelector } from "./PokemonV2SupercontestcomboMinFieldsModel.base"
import { PokemonV2SupercontestcomboStddevFieldsModel, PokemonV2SupercontestcomboStddevFieldsModelType } from "./PokemonV2SupercontestcomboStddevFieldsModel"
import { PokemonV2SupercontestcomboStddevFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevFieldsModel.base"
import { PokemonV2SupercontestcomboStddevPopFieldsModel, PokemonV2SupercontestcomboStddevPopFieldsModelType } from "./PokemonV2SupercontestcomboStddevPopFieldsModel"
import { PokemonV2SupercontestcomboStddevPopFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevPopFieldsModel.base"
import { PokemonV2SupercontestcomboStddevSampFieldsModel, PokemonV2SupercontestcomboStddevSampFieldsModelType } from "./PokemonV2SupercontestcomboStddevSampFieldsModel"
import { PokemonV2SupercontestcomboStddevSampFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevSampFieldsModel.base"
import { PokemonV2SupercontestcomboSumFieldsModel, PokemonV2SupercontestcomboSumFieldsModelType } from "./PokemonV2SupercontestcomboSumFieldsModel"
import { PokemonV2SupercontestcomboSumFieldsModelSelector } from "./PokemonV2SupercontestcomboSumFieldsModel.base"
import { PokemonV2SupercontestcomboVarPopFieldsModel, PokemonV2SupercontestcomboVarPopFieldsModelType } from "./PokemonV2SupercontestcomboVarPopFieldsModel"
import { PokemonV2SupercontestcomboVarPopFieldsModelSelector } from "./PokemonV2SupercontestcomboVarPopFieldsModel.base"
import { PokemonV2SupercontestcomboVarSampFieldsModel, PokemonV2SupercontestcomboVarSampFieldsModelType } from "./PokemonV2SupercontestcomboVarSampFieldsModel"
import { PokemonV2SupercontestcomboVarSampFieldsModelSelector } from "./PokemonV2SupercontestcomboVarSampFieldsModel.base"
import { PokemonV2SupercontestcomboVarianceFieldsModel, PokemonV2SupercontestcomboVarianceFieldsModelType } from "./PokemonV2SupercontestcomboVarianceFieldsModel"
import { PokemonV2SupercontestcomboVarianceFieldsModelSelector } from "./PokemonV2SupercontestcomboVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2SupercontestcomboAggregateFieldsBase
 * auto generated base class for the model PokemonV2SupercontestcomboAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_supercontestcombo"
 */
export const PokemonV2SupercontestcomboAggregateFieldsModelBase = ModelBase
  .named('PokemonV2SupercontestcomboAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_supercontestcombo_aggregate_fields"), "pokemon_v2_supercontestcombo_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2SupercontestcomboVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2SupercontestcomboAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2SupercontestcomboAvgFieldsModelSelector | ((selector: PokemonV2SupercontestcomboAvgFieldsModelSelector) => PokemonV2SupercontestcomboAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2SupercontestcomboAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2SupercontestcomboMaxFieldsModelSelector | ((selector: PokemonV2SupercontestcomboMaxFieldsModelSelector) => PokemonV2SupercontestcomboMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2SupercontestcomboMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2SupercontestcomboMinFieldsModelSelector | ((selector: PokemonV2SupercontestcomboMinFieldsModelSelector) => PokemonV2SupercontestcomboMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2SupercontestcomboMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2SupercontestcomboStddevFieldsModelSelector | ((selector: PokemonV2SupercontestcomboStddevFieldsModelSelector) => PokemonV2SupercontestcomboStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2SupercontestcomboStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2SupercontestcomboStddevPopFieldsModelSelector | ((selector: PokemonV2SupercontestcomboStddevPopFieldsModelSelector) => PokemonV2SupercontestcomboStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2SupercontestcomboStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2SupercontestcomboStddevSampFieldsModelSelector | ((selector: PokemonV2SupercontestcomboStddevSampFieldsModelSelector) => PokemonV2SupercontestcomboStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2SupercontestcomboStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2SupercontestcomboSumFieldsModelSelector | ((selector: PokemonV2SupercontestcomboSumFieldsModelSelector) => PokemonV2SupercontestcomboSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2SupercontestcomboSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2SupercontestcomboVarPopFieldsModelSelector | ((selector: PokemonV2SupercontestcomboVarPopFieldsModelSelector) => PokemonV2SupercontestcomboVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2SupercontestcomboVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2SupercontestcomboVarSampFieldsModelSelector | ((selector: PokemonV2SupercontestcomboVarSampFieldsModelSelector) => PokemonV2SupercontestcomboVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2SupercontestcomboVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2SupercontestcomboVarianceFieldsModelSelector | ((selector: PokemonV2SupercontestcomboVarianceFieldsModelSelector) => PokemonV2SupercontestcomboVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2SupercontestcomboVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2SupercontestcomboAggregateFields() {
  return new PokemonV2SupercontestcomboAggregateFieldsModelSelector()
}

export const pokemonV2SupercontestcomboAggregateFieldsModelPrimitives = selectFromPokemonV2SupercontestcomboAggregateFields().count
