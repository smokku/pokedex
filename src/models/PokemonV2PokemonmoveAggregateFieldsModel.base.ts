/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonmoveAvgFieldsModel, PokemonV2PokemonmoveAvgFieldsModelType } from "./PokemonV2PokemonmoveAvgFieldsModel"
import { PokemonV2PokemonmoveAvgFieldsModelSelector } from "./PokemonV2PokemonmoveAvgFieldsModel.base"
import { PokemonV2PokemonmoveMaxFieldsModel, PokemonV2PokemonmoveMaxFieldsModelType } from "./PokemonV2PokemonmoveMaxFieldsModel"
import { PokemonV2PokemonmoveMaxFieldsModelSelector } from "./PokemonV2PokemonmoveMaxFieldsModel.base"
import { PokemonV2PokemonmoveMinFieldsModel, PokemonV2PokemonmoveMinFieldsModelType } from "./PokemonV2PokemonmoveMinFieldsModel"
import { PokemonV2PokemonmoveMinFieldsModelSelector } from "./PokemonV2PokemonmoveMinFieldsModel.base"
import { PokemonV2PokemonmoveStddevFieldsModel, PokemonV2PokemonmoveStddevFieldsModelType } from "./PokemonV2PokemonmoveStddevFieldsModel"
import { PokemonV2PokemonmoveStddevFieldsModelSelector } from "./PokemonV2PokemonmoveStddevFieldsModel.base"
import { PokemonV2PokemonmoveStddevPopFieldsModel, PokemonV2PokemonmoveStddevPopFieldsModelType } from "./PokemonV2PokemonmoveStddevPopFieldsModel"
import { PokemonV2PokemonmoveStddevPopFieldsModelSelector } from "./PokemonV2PokemonmoveStddevPopFieldsModel.base"
import { PokemonV2PokemonmoveStddevSampFieldsModel, PokemonV2PokemonmoveStddevSampFieldsModelType } from "./PokemonV2PokemonmoveStddevSampFieldsModel"
import { PokemonV2PokemonmoveStddevSampFieldsModelSelector } from "./PokemonV2PokemonmoveStddevSampFieldsModel.base"
import { PokemonV2PokemonmoveSumFieldsModel, PokemonV2PokemonmoveSumFieldsModelType } from "./PokemonV2PokemonmoveSumFieldsModel"
import { PokemonV2PokemonmoveSumFieldsModelSelector } from "./PokemonV2PokemonmoveSumFieldsModel.base"
import { PokemonV2PokemonmoveVarPopFieldsModel, PokemonV2PokemonmoveVarPopFieldsModelType } from "./PokemonV2PokemonmoveVarPopFieldsModel"
import { PokemonV2PokemonmoveVarPopFieldsModelSelector } from "./PokemonV2PokemonmoveVarPopFieldsModel.base"
import { PokemonV2PokemonmoveVarSampFieldsModel, PokemonV2PokemonmoveVarSampFieldsModelType } from "./PokemonV2PokemonmoveVarSampFieldsModel"
import { PokemonV2PokemonmoveVarSampFieldsModelSelector } from "./PokemonV2PokemonmoveVarSampFieldsModel.base"
import { PokemonV2PokemonmoveVarianceFieldsModel, PokemonV2PokemonmoveVarianceFieldsModelType } from "./PokemonV2PokemonmoveVarianceFieldsModel"
import { PokemonV2PokemonmoveVarianceFieldsModelSelector } from "./PokemonV2PokemonmoveVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonmoveAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonmoveAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonmoveAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonmove_aggregate_fields"), "pokemon_v2_pokemonmove_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonmoveVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonmoveAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonmoveAvgFieldsModelSelector | ((selector: PokemonV2PokemonmoveAvgFieldsModelSelector) => PokemonV2PokemonmoveAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonmoveAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonmoveMaxFieldsModelSelector | ((selector: PokemonV2PokemonmoveMaxFieldsModelSelector) => PokemonV2PokemonmoveMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonmoveMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonmoveMinFieldsModelSelector | ((selector: PokemonV2PokemonmoveMinFieldsModelSelector) => PokemonV2PokemonmoveMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonmoveMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonmoveStddevFieldsModelSelector | ((selector: PokemonV2PokemonmoveStddevFieldsModelSelector) => PokemonV2PokemonmoveStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonmoveStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonmoveStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonmoveStddevPopFieldsModelSelector) => PokemonV2PokemonmoveStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonmoveStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonmoveStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonmoveStddevSampFieldsModelSelector) => PokemonV2PokemonmoveStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonmoveStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonmoveSumFieldsModelSelector | ((selector: PokemonV2PokemonmoveSumFieldsModelSelector) => PokemonV2PokemonmoveSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonmoveSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonmoveVarPopFieldsModelSelector | ((selector: PokemonV2PokemonmoveVarPopFieldsModelSelector) => PokemonV2PokemonmoveVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonmoveVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonmoveVarSampFieldsModelSelector | ((selector: PokemonV2PokemonmoveVarSampFieldsModelSelector) => PokemonV2PokemonmoveVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonmoveVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonmoveVarianceFieldsModelSelector | ((selector: PokemonV2PokemonmoveVarianceFieldsModelSelector) => PokemonV2PokemonmoveVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonmoveVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonmoveAggregateFields() {
  return new PokemonV2PokemonmoveAggregateFieldsModelSelector()
}

export const pokemonV2PokemonmoveAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonmoveAggregateFields().count
