/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2RegionnameAvgFieldsModel, PokemonV2RegionnameAvgFieldsModelType } from "./PokemonV2RegionnameAvgFieldsModel"
import { PokemonV2RegionnameAvgFieldsModelSelector } from "./PokemonV2RegionnameAvgFieldsModel.base"
import { PokemonV2RegionnameMaxFieldsModel, PokemonV2RegionnameMaxFieldsModelType } from "./PokemonV2RegionnameMaxFieldsModel"
import { PokemonV2RegionnameMaxFieldsModelSelector } from "./PokemonV2RegionnameMaxFieldsModel.base"
import { PokemonV2RegionnameMinFieldsModel, PokemonV2RegionnameMinFieldsModelType } from "./PokemonV2RegionnameMinFieldsModel"
import { PokemonV2RegionnameMinFieldsModelSelector } from "./PokemonV2RegionnameMinFieldsModel.base"
import { PokemonV2RegionnameStddevFieldsModel, PokemonV2RegionnameStddevFieldsModelType } from "./PokemonV2RegionnameStddevFieldsModel"
import { PokemonV2RegionnameStddevFieldsModelSelector } from "./PokemonV2RegionnameStddevFieldsModel.base"
import { PokemonV2RegionnameStddevPopFieldsModel, PokemonV2RegionnameStddevPopFieldsModelType } from "./PokemonV2RegionnameStddevPopFieldsModel"
import { PokemonV2RegionnameStddevPopFieldsModelSelector } from "./PokemonV2RegionnameStddevPopFieldsModel.base"
import { PokemonV2RegionnameStddevSampFieldsModel, PokemonV2RegionnameStddevSampFieldsModelType } from "./PokemonV2RegionnameStddevSampFieldsModel"
import { PokemonV2RegionnameStddevSampFieldsModelSelector } from "./PokemonV2RegionnameStddevSampFieldsModel.base"
import { PokemonV2RegionnameSumFieldsModel, PokemonV2RegionnameSumFieldsModelType } from "./PokemonV2RegionnameSumFieldsModel"
import { PokemonV2RegionnameSumFieldsModelSelector } from "./PokemonV2RegionnameSumFieldsModel.base"
import { PokemonV2RegionnameVarPopFieldsModel, PokemonV2RegionnameVarPopFieldsModelType } from "./PokemonV2RegionnameVarPopFieldsModel"
import { PokemonV2RegionnameVarPopFieldsModelSelector } from "./PokemonV2RegionnameVarPopFieldsModel.base"
import { PokemonV2RegionnameVarSampFieldsModel, PokemonV2RegionnameVarSampFieldsModelType } from "./PokemonV2RegionnameVarSampFieldsModel"
import { PokemonV2RegionnameVarSampFieldsModelSelector } from "./PokemonV2RegionnameVarSampFieldsModel.base"
import { PokemonV2RegionnameVarianceFieldsModel, PokemonV2RegionnameVarianceFieldsModelType } from "./PokemonV2RegionnameVarianceFieldsModel"
import { PokemonV2RegionnameVarianceFieldsModelSelector } from "./PokemonV2RegionnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2RegionnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2RegionnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2RegionnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_regionname_aggregate_fields"), "pokemon_v2_regionname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2RegionnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2RegionnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2RegionnameAvgFieldsModelSelector | ((selector: PokemonV2RegionnameAvgFieldsModelSelector) => PokemonV2RegionnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2RegionnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2RegionnameMaxFieldsModelSelector | ((selector: PokemonV2RegionnameMaxFieldsModelSelector) => PokemonV2RegionnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2RegionnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2RegionnameMinFieldsModelSelector | ((selector: PokemonV2RegionnameMinFieldsModelSelector) => PokemonV2RegionnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2RegionnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2RegionnameStddevFieldsModelSelector | ((selector: PokemonV2RegionnameStddevFieldsModelSelector) => PokemonV2RegionnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2RegionnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2RegionnameStddevPopFieldsModelSelector | ((selector: PokemonV2RegionnameStddevPopFieldsModelSelector) => PokemonV2RegionnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2RegionnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2RegionnameStddevSampFieldsModelSelector | ((selector: PokemonV2RegionnameStddevSampFieldsModelSelector) => PokemonV2RegionnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2RegionnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2RegionnameSumFieldsModelSelector | ((selector: PokemonV2RegionnameSumFieldsModelSelector) => PokemonV2RegionnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2RegionnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2RegionnameVarPopFieldsModelSelector | ((selector: PokemonV2RegionnameVarPopFieldsModelSelector) => PokemonV2RegionnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2RegionnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2RegionnameVarSampFieldsModelSelector | ((selector: PokemonV2RegionnameVarSampFieldsModelSelector) => PokemonV2RegionnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2RegionnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2RegionnameVarianceFieldsModelSelector | ((selector: PokemonV2RegionnameVarianceFieldsModelSelector) => PokemonV2RegionnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2RegionnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2RegionnameAggregateFields() {
  return new PokemonV2RegionnameAggregateFieldsModelSelector()
}

export const pokemonV2RegionnameAggregateFieldsModelPrimitives = selectFromPokemonV2RegionnameAggregateFields().count
