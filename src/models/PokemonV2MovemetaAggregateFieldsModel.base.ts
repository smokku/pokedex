/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetaAvgFieldsModel, PokemonV2MovemetaAvgFieldsModelType } from "./PokemonV2MovemetaAvgFieldsModel"
import { PokemonV2MovemetaAvgFieldsModelSelector } from "./PokemonV2MovemetaAvgFieldsModel.base"
import { PokemonV2MovemetaMaxFieldsModel, PokemonV2MovemetaMaxFieldsModelType } from "./PokemonV2MovemetaMaxFieldsModel"
import { PokemonV2MovemetaMaxFieldsModelSelector } from "./PokemonV2MovemetaMaxFieldsModel.base"
import { PokemonV2MovemetaMinFieldsModel, PokemonV2MovemetaMinFieldsModelType } from "./PokemonV2MovemetaMinFieldsModel"
import { PokemonV2MovemetaMinFieldsModelSelector } from "./PokemonV2MovemetaMinFieldsModel.base"
import { PokemonV2MovemetaStddevFieldsModel, PokemonV2MovemetaStddevFieldsModelType } from "./PokemonV2MovemetaStddevFieldsModel"
import { PokemonV2MovemetaStddevFieldsModelSelector } from "./PokemonV2MovemetaStddevFieldsModel.base"
import { PokemonV2MovemetaStddevPopFieldsModel, PokemonV2MovemetaStddevPopFieldsModelType } from "./PokemonV2MovemetaStddevPopFieldsModel"
import { PokemonV2MovemetaStddevPopFieldsModelSelector } from "./PokemonV2MovemetaStddevPopFieldsModel.base"
import { PokemonV2MovemetaStddevSampFieldsModel, PokemonV2MovemetaStddevSampFieldsModelType } from "./PokemonV2MovemetaStddevSampFieldsModel"
import { PokemonV2MovemetaStddevSampFieldsModelSelector } from "./PokemonV2MovemetaStddevSampFieldsModel.base"
import { PokemonV2MovemetaSumFieldsModel, PokemonV2MovemetaSumFieldsModelType } from "./PokemonV2MovemetaSumFieldsModel"
import { PokemonV2MovemetaSumFieldsModelSelector } from "./PokemonV2MovemetaSumFieldsModel.base"
import { PokemonV2MovemetaVarPopFieldsModel, PokemonV2MovemetaVarPopFieldsModelType } from "./PokemonV2MovemetaVarPopFieldsModel"
import { PokemonV2MovemetaVarPopFieldsModelSelector } from "./PokemonV2MovemetaVarPopFieldsModel.base"
import { PokemonV2MovemetaVarSampFieldsModel, PokemonV2MovemetaVarSampFieldsModelType } from "./PokemonV2MovemetaVarSampFieldsModel"
import { PokemonV2MovemetaVarSampFieldsModelSelector } from "./PokemonV2MovemetaVarSampFieldsModel.base"
import { PokemonV2MovemetaVarianceFieldsModel, PokemonV2MovemetaVarianceFieldsModelType } from "./PokemonV2MovemetaVarianceFieldsModel"
import { PokemonV2MovemetaVarianceFieldsModelSelector } from "./PokemonV2MovemetaVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetaAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetaAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemeta"
 */
export const PokemonV2MovemetaAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetaAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemeta_aggregate_fields"), "pokemon_v2_movemeta_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetaVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetaAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetaAvgFieldsModelSelector | ((selector: PokemonV2MovemetaAvgFieldsModelSelector) => PokemonV2MovemetaAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetaAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetaMaxFieldsModelSelector | ((selector: PokemonV2MovemetaMaxFieldsModelSelector) => PokemonV2MovemetaMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetaMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetaMinFieldsModelSelector | ((selector: PokemonV2MovemetaMinFieldsModelSelector) => PokemonV2MovemetaMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetaMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetaStddevFieldsModelSelector | ((selector: PokemonV2MovemetaStddevFieldsModelSelector) => PokemonV2MovemetaStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetaStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetaStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetaStddevPopFieldsModelSelector) => PokemonV2MovemetaStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetaStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetaStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetaStddevSampFieldsModelSelector) => PokemonV2MovemetaStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetaStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetaSumFieldsModelSelector | ((selector: PokemonV2MovemetaSumFieldsModelSelector) => PokemonV2MovemetaSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetaSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetaVarPopFieldsModelSelector | ((selector: PokemonV2MovemetaVarPopFieldsModelSelector) => PokemonV2MovemetaVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetaVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetaVarSampFieldsModelSelector | ((selector: PokemonV2MovemetaVarSampFieldsModelSelector) => PokemonV2MovemetaVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetaVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetaVarianceFieldsModelSelector | ((selector: PokemonV2MovemetaVarianceFieldsModelSelector) => PokemonV2MovemetaVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetaVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetaAggregateFields() {
  return new PokemonV2MovemetaAggregateFieldsModelSelector()
}

export const pokemonV2MovemetaAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetaAggregateFields().count
