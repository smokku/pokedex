/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovebattlestylenameAvgFieldsModel, PokemonV2MovebattlestylenameAvgFieldsModelType } from "./PokemonV2MovebattlestylenameAvgFieldsModel"
import { PokemonV2MovebattlestylenameAvgFieldsModelSelector } from "./PokemonV2MovebattlestylenameAvgFieldsModel.base"
import { PokemonV2MovebattlestylenameMaxFieldsModel, PokemonV2MovebattlestylenameMaxFieldsModelType } from "./PokemonV2MovebattlestylenameMaxFieldsModel"
import { PokemonV2MovebattlestylenameMaxFieldsModelSelector } from "./PokemonV2MovebattlestylenameMaxFieldsModel.base"
import { PokemonV2MovebattlestylenameMinFieldsModel, PokemonV2MovebattlestylenameMinFieldsModelType } from "./PokemonV2MovebattlestylenameMinFieldsModel"
import { PokemonV2MovebattlestylenameMinFieldsModelSelector } from "./PokemonV2MovebattlestylenameMinFieldsModel.base"
import { PokemonV2MovebattlestylenameStddevFieldsModel, PokemonV2MovebattlestylenameStddevFieldsModelType } from "./PokemonV2MovebattlestylenameStddevFieldsModel"
import { PokemonV2MovebattlestylenameStddevFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevFieldsModel.base"
import { PokemonV2MovebattlestylenameStddevPopFieldsModel, PokemonV2MovebattlestylenameStddevPopFieldsModelType } from "./PokemonV2MovebattlestylenameStddevPopFieldsModel"
import { PokemonV2MovebattlestylenameStddevPopFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevPopFieldsModel.base"
import { PokemonV2MovebattlestylenameStddevSampFieldsModel, PokemonV2MovebattlestylenameStddevSampFieldsModelType } from "./PokemonV2MovebattlestylenameStddevSampFieldsModel"
import { PokemonV2MovebattlestylenameStddevSampFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevSampFieldsModel.base"
import { PokemonV2MovebattlestylenameSumFieldsModel, PokemonV2MovebattlestylenameSumFieldsModelType } from "./PokemonV2MovebattlestylenameSumFieldsModel"
import { PokemonV2MovebattlestylenameSumFieldsModelSelector } from "./PokemonV2MovebattlestylenameSumFieldsModel.base"
import { PokemonV2MovebattlestylenameVarPopFieldsModel, PokemonV2MovebattlestylenameVarPopFieldsModelType } from "./PokemonV2MovebattlestylenameVarPopFieldsModel"
import { PokemonV2MovebattlestylenameVarPopFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarPopFieldsModel.base"
import { PokemonV2MovebattlestylenameVarSampFieldsModel, PokemonV2MovebattlestylenameVarSampFieldsModelType } from "./PokemonV2MovebattlestylenameVarSampFieldsModel"
import { PokemonV2MovebattlestylenameVarSampFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarSampFieldsModel.base"
import { PokemonV2MovebattlestylenameVarianceFieldsModel, PokemonV2MovebattlestylenameVarianceFieldsModelType } from "./PokemonV2MovebattlestylenameVarianceFieldsModel"
import { PokemonV2MovebattlestylenameVarianceFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovebattlestylenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovebattlestylenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovebattlestylenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movebattlestylename_aggregate_fields"), "pokemon_v2_movebattlestylename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovebattlestylenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovebattlestylenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovebattlestylenameAvgFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameAvgFieldsModelSelector) => PokemonV2MovebattlestylenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovebattlestylenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovebattlestylenameMaxFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameMaxFieldsModelSelector) => PokemonV2MovebattlestylenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovebattlestylenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovebattlestylenameMinFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameMinFieldsModelSelector) => PokemonV2MovebattlestylenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovebattlestylenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovebattlestylenameStddevFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameStddevFieldsModelSelector) => PokemonV2MovebattlestylenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovebattlestylenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovebattlestylenameStddevPopFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameStddevPopFieldsModelSelector) => PokemonV2MovebattlestylenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovebattlestylenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovebattlestylenameStddevSampFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameStddevSampFieldsModelSelector) => PokemonV2MovebattlestylenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovebattlestylenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovebattlestylenameSumFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameSumFieldsModelSelector) => PokemonV2MovebattlestylenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovebattlestylenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovebattlestylenameVarPopFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameVarPopFieldsModelSelector) => PokemonV2MovebattlestylenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovebattlestylenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovebattlestylenameVarSampFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameVarSampFieldsModelSelector) => PokemonV2MovebattlestylenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovebattlestylenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovebattlestylenameVarianceFieldsModelSelector | ((selector: PokemonV2MovebattlestylenameVarianceFieldsModelSelector) => PokemonV2MovebattlestylenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovebattlestylenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovebattlestylenameAggregateFields() {
  return new PokemonV2MovebattlestylenameAggregateFieldsModelSelector()
}

export const pokemonV2MovebattlestylenameAggregateFieldsModelPrimitives = selectFromPokemonV2MovebattlestylenameAggregateFields().count
