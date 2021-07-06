/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemongameindexAvgFieldsModel, PokemonV2PokemongameindexAvgFieldsModelType } from "./PokemonV2PokemongameindexAvgFieldsModel"
import { PokemonV2PokemongameindexAvgFieldsModelSelector } from "./PokemonV2PokemongameindexAvgFieldsModel.base"
import { PokemonV2PokemongameindexMaxFieldsModel, PokemonV2PokemongameindexMaxFieldsModelType } from "./PokemonV2PokemongameindexMaxFieldsModel"
import { PokemonV2PokemongameindexMaxFieldsModelSelector } from "./PokemonV2PokemongameindexMaxFieldsModel.base"
import { PokemonV2PokemongameindexMinFieldsModel, PokemonV2PokemongameindexMinFieldsModelType } from "./PokemonV2PokemongameindexMinFieldsModel"
import { PokemonV2PokemongameindexMinFieldsModelSelector } from "./PokemonV2PokemongameindexMinFieldsModel.base"
import { PokemonV2PokemongameindexStddevFieldsModel, PokemonV2PokemongameindexStddevFieldsModelType } from "./PokemonV2PokemongameindexStddevFieldsModel"
import { PokemonV2PokemongameindexStddevFieldsModelSelector } from "./PokemonV2PokemongameindexStddevFieldsModel.base"
import { PokemonV2PokemongameindexStddevPopFieldsModel, PokemonV2PokemongameindexStddevPopFieldsModelType } from "./PokemonV2PokemongameindexStddevPopFieldsModel"
import { PokemonV2PokemongameindexStddevPopFieldsModelSelector } from "./PokemonV2PokemongameindexStddevPopFieldsModel.base"
import { PokemonV2PokemongameindexStddevSampFieldsModel, PokemonV2PokemongameindexStddevSampFieldsModelType } from "./PokemonV2PokemongameindexStddevSampFieldsModel"
import { PokemonV2PokemongameindexStddevSampFieldsModelSelector } from "./PokemonV2PokemongameindexStddevSampFieldsModel.base"
import { PokemonV2PokemongameindexSumFieldsModel, PokemonV2PokemongameindexSumFieldsModelType } from "./PokemonV2PokemongameindexSumFieldsModel"
import { PokemonV2PokemongameindexSumFieldsModelSelector } from "./PokemonV2PokemongameindexSumFieldsModel.base"
import { PokemonV2PokemongameindexVarPopFieldsModel, PokemonV2PokemongameindexVarPopFieldsModelType } from "./PokemonV2PokemongameindexVarPopFieldsModel"
import { PokemonV2PokemongameindexVarPopFieldsModelSelector } from "./PokemonV2PokemongameindexVarPopFieldsModel.base"
import { PokemonV2PokemongameindexVarSampFieldsModel, PokemonV2PokemongameindexVarSampFieldsModelType } from "./PokemonV2PokemongameindexVarSampFieldsModel"
import { PokemonV2PokemongameindexVarSampFieldsModelSelector } from "./PokemonV2PokemongameindexVarSampFieldsModel.base"
import { PokemonV2PokemongameindexVarianceFieldsModel, PokemonV2PokemongameindexVarianceFieldsModelType } from "./PokemonV2PokemongameindexVarianceFieldsModel"
import { PokemonV2PokemongameindexVarianceFieldsModelSelector } from "./PokemonV2PokemongameindexVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemongameindexAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemongameindexAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemongameindexAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemongameindex_aggregate_fields"), "pokemon_v2_pokemongameindex_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemongameindexVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemongameindexAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemongameindexAvgFieldsModelSelector | ((selector: PokemonV2PokemongameindexAvgFieldsModelSelector) => PokemonV2PokemongameindexAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemongameindexAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemongameindexMaxFieldsModelSelector | ((selector: PokemonV2PokemongameindexMaxFieldsModelSelector) => PokemonV2PokemongameindexMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemongameindexMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemongameindexMinFieldsModelSelector | ((selector: PokemonV2PokemongameindexMinFieldsModelSelector) => PokemonV2PokemongameindexMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemongameindexMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemongameindexStddevFieldsModelSelector | ((selector: PokemonV2PokemongameindexStddevFieldsModelSelector) => PokemonV2PokemongameindexStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemongameindexStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemongameindexStddevPopFieldsModelSelector | ((selector: PokemonV2PokemongameindexStddevPopFieldsModelSelector) => PokemonV2PokemongameindexStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemongameindexStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemongameindexStddevSampFieldsModelSelector | ((selector: PokemonV2PokemongameindexStddevSampFieldsModelSelector) => PokemonV2PokemongameindexStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemongameindexStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemongameindexSumFieldsModelSelector | ((selector: PokemonV2PokemongameindexSumFieldsModelSelector) => PokemonV2PokemongameindexSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemongameindexSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemongameindexVarPopFieldsModelSelector | ((selector: PokemonV2PokemongameindexVarPopFieldsModelSelector) => PokemonV2PokemongameindexVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemongameindexVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemongameindexVarSampFieldsModelSelector | ((selector: PokemonV2PokemongameindexVarSampFieldsModelSelector) => PokemonV2PokemongameindexVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemongameindexVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemongameindexVarianceFieldsModelSelector | ((selector: PokemonV2PokemongameindexVarianceFieldsModelSelector) => PokemonV2PokemongameindexVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemongameindexVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemongameindexAggregateFields() {
  return new PokemonV2PokemongameindexAggregateFieldsModelSelector()
}

export const pokemonV2PokemongameindexAggregateFieldsModelPrimitives = selectFromPokemonV2PokemongameindexAggregateFields().count
