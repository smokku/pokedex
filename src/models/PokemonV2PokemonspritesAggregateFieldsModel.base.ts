/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspritesAvgFieldsModel, PokemonV2PokemonspritesAvgFieldsModelType } from "./PokemonV2PokemonspritesAvgFieldsModel"
import { PokemonV2PokemonspritesAvgFieldsModelSelector } from "./PokemonV2PokemonspritesAvgFieldsModel.base"
import { PokemonV2PokemonspritesMaxFieldsModel, PokemonV2PokemonspritesMaxFieldsModelType } from "./PokemonV2PokemonspritesMaxFieldsModel"
import { PokemonV2PokemonspritesMaxFieldsModelSelector } from "./PokemonV2PokemonspritesMaxFieldsModel.base"
import { PokemonV2PokemonspritesMinFieldsModel, PokemonV2PokemonspritesMinFieldsModelType } from "./PokemonV2PokemonspritesMinFieldsModel"
import { PokemonV2PokemonspritesMinFieldsModelSelector } from "./PokemonV2PokemonspritesMinFieldsModel.base"
import { PokemonV2PokemonspritesStddevFieldsModel, PokemonV2PokemonspritesStddevFieldsModelType } from "./PokemonV2PokemonspritesStddevFieldsModel"
import { PokemonV2PokemonspritesStddevFieldsModelSelector } from "./PokemonV2PokemonspritesStddevFieldsModel.base"
import { PokemonV2PokemonspritesStddevPopFieldsModel, PokemonV2PokemonspritesStddevPopFieldsModelType } from "./PokemonV2PokemonspritesStddevPopFieldsModel"
import { PokemonV2PokemonspritesStddevPopFieldsModelSelector } from "./PokemonV2PokemonspritesStddevPopFieldsModel.base"
import { PokemonV2PokemonspritesStddevSampFieldsModel, PokemonV2PokemonspritesStddevSampFieldsModelType } from "./PokemonV2PokemonspritesStddevSampFieldsModel"
import { PokemonV2PokemonspritesStddevSampFieldsModelSelector } from "./PokemonV2PokemonspritesStddevSampFieldsModel.base"
import { PokemonV2PokemonspritesSumFieldsModel, PokemonV2PokemonspritesSumFieldsModelType } from "./PokemonV2PokemonspritesSumFieldsModel"
import { PokemonV2PokemonspritesSumFieldsModelSelector } from "./PokemonV2PokemonspritesSumFieldsModel.base"
import { PokemonV2PokemonspritesVarPopFieldsModel, PokemonV2PokemonspritesVarPopFieldsModelType } from "./PokemonV2PokemonspritesVarPopFieldsModel"
import { PokemonV2PokemonspritesVarPopFieldsModelSelector } from "./PokemonV2PokemonspritesVarPopFieldsModel.base"
import { PokemonV2PokemonspritesVarSampFieldsModel, PokemonV2PokemonspritesVarSampFieldsModelType } from "./PokemonV2PokemonspritesVarSampFieldsModel"
import { PokemonV2PokemonspritesVarSampFieldsModelSelector } from "./PokemonV2PokemonspritesVarSampFieldsModel.base"
import { PokemonV2PokemonspritesVarianceFieldsModel, PokemonV2PokemonspritesVarianceFieldsModelType } from "./PokemonV2PokemonspritesVarianceFieldsModel"
import { PokemonV2PokemonspritesVarianceFieldsModelSelector } from "./PokemonV2PokemonspritesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonspritesAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonspritesAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonspritesAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonsprites_aggregate_fields"), "pokemon_v2_pokemonsprites_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspritesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonspritesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonspritesAvgFieldsModelSelector | ((selector: PokemonV2PokemonspritesAvgFieldsModelSelector) => PokemonV2PokemonspritesAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonspritesAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonspritesMaxFieldsModelSelector | ((selector: PokemonV2PokemonspritesMaxFieldsModelSelector) => PokemonV2PokemonspritesMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonspritesMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonspritesMinFieldsModelSelector | ((selector: PokemonV2PokemonspritesMinFieldsModelSelector) => PokemonV2PokemonspritesMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonspritesMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonspritesStddevFieldsModelSelector | ((selector: PokemonV2PokemonspritesStddevFieldsModelSelector) => PokemonV2PokemonspritesStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonspritesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonspritesStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonspritesStddevPopFieldsModelSelector) => PokemonV2PokemonspritesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonspritesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonspritesStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonspritesStddevSampFieldsModelSelector) => PokemonV2PokemonspritesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonspritesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonspritesSumFieldsModelSelector | ((selector: PokemonV2PokemonspritesSumFieldsModelSelector) => PokemonV2PokemonspritesSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonspritesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonspritesVarPopFieldsModelSelector | ((selector: PokemonV2PokemonspritesVarPopFieldsModelSelector) => PokemonV2PokemonspritesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonspritesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonspritesVarSampFieldsModelSelector | ((selector: PokemonV2PokemonspritesVarSampFieldsModelSelector) => PokemonV2PokemonspritesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonspritesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonspritesVarianceFieldsModelSelector | ((selector: PokemonV2PokemonspritesVarianceFieldsModelSelector) => PokemonV2PokemonspritesVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonspritesVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonspritesAggregateFields() {
  return new PokemonV2PokemonspritesAggregateFieldsModelSelector()
}

export const pokemonV2PokemonspritesAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonspritesAggregateFields().count
