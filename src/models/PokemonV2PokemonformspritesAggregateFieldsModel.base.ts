/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformspritesAvgFieldsModel, PokemonV2PokemonformspritesAvgFieldsModelType } from "./PokemonV2PokemonformspritesAvgFieldsModel"
import { PokemonV2PokemonformspritesAvgFieldsModelSelector } from "./PokemonV2PokemonformspritesAvgFieldsModel.base"
import { PokemonV2PokemonformspritesMaxFieldsModel, PokemonV2PokemonformspritesMaxFieldsModelType } from "./PokemonV2PokemonformspritesMaxFieldsModel"
import { PokemonV2PokemonformspritesMaxFieldsModelSelector } from "./PokemonV2PokemonformspritesMaxFieldsModel.base"
import { PokemonV2PokemonformspritesMinFieldsModel, PokemonV2PokemonformspritesMinFieldsModelType } from "./PokemonV2PokemonformspritesMinFieldsModel"
import { PokemonV2PokemonformspritesMinFieldsModelSelector } from "./PokemonV2PokemonformspritesMinFieldsModel.base"
import { PokemonV2PokemonformspritesStddevFieldsModel, PokemonV2PokemonformspritesStddevFieldsModelType } from "./PokemonV2PokemonformspritesStddevFieldsModel"
import { PokemonV2PokemonformspritesStddevFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevFieldsModel.base"
import { PokemonV2PokemonformspritesStddevPopFieldsModel, PokemonV2PokemonformspritesStddevPopFieldsModelType } from "./PokemonV2PokemonformspritesStddevPopFieldsModel"
import { PokemonV2PokemonformspritesStddevPopFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevPopFieldsModel.base"
import { PokemonV2PokemonformspritesStddevSampFieldsModel, PokemonV2PokemonformspritesStddevSampFieldsModelType } from "./PokemonV2PokemonformspritesStddevSampFieldsModel"
import { PokemonV2PokemonformspritesStddevSampFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevSampFieldsModel.base"
import { PokemonV2PokemonformspritesSumFieldsModel, PokemonV2PokemonformspritesSumFieldsModelType } from "./PokemonV2PokemonformspritesSumFieldsModel"
import { PokemonV2PokemonformspritesSumFieldsModelSelector } from "./PokemonV2PokemonformspritesSumFieldsModel.base"
import { PokemonV2PokemonformspritesVarPopFieldsModel, PokemonV2PokemonformspritesVarPopFieldsModelType } from "./PokemonV2PokemonformspritesVarPopFieldsModel"
import { PokemonV2PokemonformspritesVarPopFieldsModelSelector } from "./PokemonV2PokemonformspritesVarPopFieldsModel.base"
import { PokemonV2PokemonformspritesVarSampFieldsModel, PokemonV2PokemonformspritesVarSampFieldsModelType } from "./PokemonV2PokemonformspritesVarSampFieldsModel"
import { PokemonV2PokemonformspritesVarSampFieldsModelSelector } from "./PokemonV2PokemonformspritesVarSampFieldsModel.base"
import { PokemonV2PokemonformspritesVarianceFieldsModel, PokemonV2PokemonformspritesVarianceFieldsModelType } from "./PokemonV2PokemonformspritesVarianceFieldsModel"
import { PokemonV2PokemonformspritesVarianceFieldsModelSelector } from "./PokemonV2PokemonformspritesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformspritesAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonformspritesAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformspritesAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformsprites_aggregate_fields"), "pokemon_v2_pokemonformsprites_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformspritesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformspritesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonformspritesAvgFieldsModelSelector | ((selector: PokemonV2PokemonformspritesAvgFieldsModelSelector) => PokemonV2PokemonformspritesAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonformspritesAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonformspritesMaxFieldsModelSelector | ((selector: PokemonV2PokemonformspritesMaxFieldsModelSelector) => PokemonV2PokemonformspritesMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonformspritesMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonformspritesMinFieldsModelSelector | ((selector: PokemonV2PokemonformspritesMinFieldsModelSelector) => PokemonV2PokemonformspritesMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonformspritesMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonformspritesStddevFieldsModelSelector | ((selector: PokemonV2PokemonformspritesStddevFieldsModelSelector) => PokemonV2PokemonformspritesStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonformspritesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonformspritesStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonformspritesStddevPopFieldsModelSelector) => PokemonV2PokemonformspritesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonformspritesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonformspritesStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonformspritesStddevSampFieldsModelSelector) => PokemonV2PokemonformspritesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonformspritesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonformspritesSumFieldsModelSelector | ((selector: PokemonV2PokemonformspritesSumFieldsModelSelector) => PokemonV2PokemonformspritesSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonformspritesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonformspritesVarPopFieldsModelSelector | ((selector: PokemonV2PokemonformspritesVarPopFieldsModelSelector) => PokemonV2PokemonformspritesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonformspritesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonformspritesVarSampFieldsModelSelector | ((selector: PokemonV2PokemonformspritesVarSampFieldsModelSelector) => PokemonV2PokemonformspritesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonformspritesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonformspritesVarianceFieldsModelSelector | ((selector: PokemonV2PokemonformspritesVarianceFieldsModelSelector) => PokemonV2PokemonformspritesVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonformspritesVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformspritesAggregateFields() {
  return new PokemonV2PokemonformspritesAggregateFieldsModelSelector()
}

export const pokemonV2PokemonformspritesAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonformspritesAggregateFields().count
