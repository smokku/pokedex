/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonAvgFieldsModel, PokemonV2PokemonAvgFieldsModelType } from "./PokemonV2PokemonAvgFieldsModel"
import { PokemonV2PokemonAvgFieldsModelSelector } from "./PokemonV2PokemonAvgFieldsModel.base"
import { PokemonV2PokemonMaxFieldsModel, PokemonV2PokemonMaxFieldsModelType } from "./PokemonV2PokemonMaxFieldsModel"
import { PokemonV2PokemonMaxFieldsModelSelector } from "./PokemonV2PokemonMaxFieldsModel.base"
import { PokemonV2PokemonMinFieldsModel, PokemonV2PokemonMinFieldsModelType } from "./PokemonV2PokemonMinFieldsModel"
import { PokemonV2PokemonMinFieldsModelSelector } from "./PokemonV2PokemonMinFieldsModel.base"
import { PokemonV2PokemonStddevFieldsModel, PokemonV2PokemonStddevFieldsModelType } from "./PokemonV2PokemonStddevFieldsModel"
import { PokemonV2PokemonStddevFieldsModelSelector } from "./PokemonV2PokemonStddevFieldsModel.base"
import { PokemonV2PokemonStddevPopFieldsModel, PokemonV2PokemonStddevPopFieldsModelType } from "./PokemonV2PokemonStddevPopFieldsModel"
import { PokemonV2PokemonStddevPopFieldsModelSelector } from "./PokemonV2PokemonStddevPopFieldsModel.base"
import { PokemonV2PokemonStddevSampFieldsModel, PokemonV2PokemonStddevSampFieldsModelType } from "./PokemonV2PokemonStddevSampFieldsModel"
import { PokemonV2PokemonStddevSampFieldsModelSelector } from "./PokemonV2PokemonStddevSampFieldsModel.base"
import { PokemonV2PokemonSumFieldsModel, PokemonV2PokemonSumFieldsModelType } from "./PokemonV2PokemonSumFieldsModel"
import { PokemonV2PokemonSumFieldsModelSelector } from "./PokemonV2PokemonSumFieldsModel.base"
import { PokemonV2PokemonVarPopFieldsModel, PokemonV2PokemonVarPopFieldsModelType } from "./PokemonV2PokemonVarPopFieldsModel"
import { PokemonV2PokemonVarPopFieldsModelSelector } from "./PokemonV2PokemonVarPopFieldsModel.base"
import { PokemonV2PokemonVarSampFieldsModel, PokemonV2PokemonVarSampFieldsModelType } from "./PokemonV2PokemonVarSampFieldsModel"
import { PokemonV2PokemonVarSampFieldsModelSelector } from "./PokemonV2PokemonVarSampFieldsModel.base"
import { PokemonV2PokemonVarianceFieldsModel, PokemonV2PokemonVarianceFieldsModelType } from "./PokemonV2PokemonVarianceFieldsModel"
import { PokemonV2PokemonVarianceFieldsModelSelector } from "./PokemonV2PokemonVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemon_aggregate_fields"), "pokemon_v2_pokemon_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonAvgFieldsModelSelector | ((selector: PokemonV2PokemonAvgFieldsModelSelector) => PokemonV2PokemonAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonMaxFieldsModelSelector | ((selector: PokemonV2PokemonMaxFieldsModelSelector) => PokemonV2PokemonMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonMinFieldsModelSelector | ((selector: PokemonV2PokemonMinFieldsModelSelector) => PokemonV2PokemonMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonStddevFieldsModelSelector | ((selector: PokemonV2PokemonStddevFieldsModelSelector) => PokemonV2PokemonStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonStddevPopFieldsModelSelector) => PokemonV2PokemonStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonStddevSampFieldsModelSelector) => PokemonV2PokemonStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonSumFieldsModelSelector | ((selector: PokemonV2PokemonSumFieldsModelSelector) => PokemonV2PokemonSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonVarPopFieldsModelSelector | ((selector: PokemonV2PokemonVarPopFieldsModelSelector) => PokemonV2PokemonVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonVarSampFieldsModelSelector | ((selector: PokemonV2PokemonVarSampFieldsModelSelector) => PokemonV2PokemonVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonVarianceFieldsModelSelector | ((selector: PokemonV2PokemonVarianceFieldsModelSelector) => PokemonV2PokemonVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonAggregateFields() {
  return new PokemonV2PokemonAggregateFieldsModelSelector()
}

export const pokemonV2PokemonAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonAggregateFields().count
