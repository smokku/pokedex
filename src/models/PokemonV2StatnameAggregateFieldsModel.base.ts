/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2StatnameAvgFieldsModel, PokemonV2StatnameAvgFieldsModelType } from "./PokemonV2StatnameAvgFieldsModel"
import { PokemonV2StatnameAvgFieldsModelSelector } from "./PokemonV2StatnameAvgFieldsModel.base"
import { PokemonV2StatnameMaxFieldsModel, PokemonV2StatnameMaxFieldsModelType } from "./PokemonV2StatnameMaxFieldsModel"
import { PokemonV2StatnameMaxFieldsModelSelector } from "./PokemonV2StatnameMaxFieldsModel.base"
import { PokemonV2StatnameMinFieldsModel, PokemonV2StatnameMinFieldsModelType } from "./PokemonV2StatnameMinFieldsModel"
import { PokemonV2StatnameMinFieldsModelSelector } from "./PokemonV2StatnameMinFieldsModel.base"
import { PokemonV2StatnameStddevFieldsModel, PokemonV2StatnameStddevFieldsModelType } from "./PokemonV2StatnameStddevFieldsModel"
import { PokemonV2StatnameStddevFieldsModelSelector } from "./PokemonV2StatnameStddevFieldsModel.base"
import { PokemonV2StatnameStddevPopFieldsModel, PokemonV2StatnameStddevPopFieldsModelType } from "./PokemonV2StatnameStddevPopFieldsModel"
import { PokemonV2StatnameStddevPopFieldsModelSelector } from "./PokemonV2StatnameStddevPopFieldsModel.base"
import { PokemonV2StatnameStddevSampFieldsModel, PokemonV2StatnameStddevSampFieldsModelType } from "./PokemonV2StatnameStddevSampFieldsModel"
import { PokemonV2StatnameStddevSampFieldsModelSelector } from "./PokemonV2StatnameStddevSampFieldsModel.base"
import { PokemonV2StatnameSumFieldsModel, PokemonV2StatnameSumFieldsModelType } from "./PokemonV2StatnameSumFieldsModel"
import { PokemonV2StatnameSumFieldsModelSelector } from "./PokemonV2StatnameSumFieldsModel.base"
import { PokemonV2StatnameVarPopFieldsModel, PokemonV2StatnameVarPopFieldsModelType } from "./PokemonV2StatnameVarPopFieldsModel"
import { PokemonV2StatnameVarPopFieldsModelSelector } from "./PokemonV2StatnameVarPopFieldsModel.base"
import { PokemonV2StatnameVarSampFieldsModel, PokemonV2StatnameVarSampFieldsModelType } from "./PokemonV2StatnameVarSampFieldsModel"
import { PokemonV2StatnameVarSampFieldsModelSelector } from "./PokemonV2StatnameVarSampFieldsModel.base"
import { PokemonV2StatnameVarianceFieldsModel, PokemonV2StatnameVarianceFieldsModelType } from "./PokemonV2StatnameVarianceFieldsModel"
import { PokemonV2StatnameVarianceFieldsModelSelector } from "./PokemonV2StatnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2StatnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2StatnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_statname"
 */
export const PokemonV2StatnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2StatnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_statname_aggregate_fields"), "pokemon_v2_statname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2StatnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2StatnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2StatnameAvgFieldsModelSelector | ((selector: PokemonV2StatnameAvgFieldsModelSelector) => PokemonV2StatnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2StatnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2StatnameMaxFieldsModelSelector | ((selector: PokemonV2StatnameMaxFieldsModelSelector) => PokemonV2StatnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2StatnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2StatnameMinFieldsModelSelector | ((selector: PokemonV2StatnameMinFieldsModelSelector) => PokemonV2StatnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2StatnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2StatnameStddevFieldsModelSelector | ((selector: PokemonV2StatnameStddevFieldsModelSelector) => PokemonV2StatnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2StatnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2StatnameStddevPopFieldsModelSelector | ((selector: PokemonV2StatnameStddevPopFieldsModelSelector) => PokemonV2StatnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2StatnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2StatnameStddevSampFieldsModelSelector | ((selector: PokemonV2StatnameStddevSampFieldsModelSelector) => PokemonV2StatnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2StatnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2StatnameSumFieldsModelSelector | ((selector: PokemonV2StatnameSumFieldsModelSelector) => PokemonV2StatnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2StatnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2StatnameVarPopFieldsModelSelector | ((selector: PokemonV2StatnameVarPopFieldsModelSelector) => PokemonV2StatnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2StatnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2StatnameVarSampFieldsModelSelector | ((selector: PokemonV2StatnameVarSampFieldsModelSelector) => PokemonV2StatnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2StatnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2StatnameVarianceFieldsModelSelector | ((selector: PokemonV2StatnameVarianceFieldsModelSelector) => PokemonV2StatnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2StatnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2StatnameAggregateFields() {
  return new PokemonV2StatnameAggregateFieldsModelSelector()
}

export const pokemonV2StatnameAggregateFieldsModelPrimitives = selectFromPokemonV2StatnameAggregateFields().count
