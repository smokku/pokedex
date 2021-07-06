/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupAvgFieldsModel, PokemonV2VersiongroupAvgFieldsModelType } from "./PokemonV2VersiongroupAvgFieldsModel"
import { PokemonV2VersiongroupAvgFieldsModelSelector } from "./PokemonV2VersiongroupAvgFieldsModel.base"
import { PokemonV2VersiongroupMaxFieldsModel, PokemonV2VersiongroupMaxFieldsModelType } from "./PokemonV2VersiongroupMaxFieldsModel"
import { PokemonV2VersiongroupMaxFieldsModelSelector } from "./PokemonV2VersiongroupMaxFieldsModel.base"
import { PokemonV2VersiongroupMinFieldsModel, PokemonV2VersiongroupMinFieldsModelType } from "./PokemonV2VersiongroupMinFieldsModel"
import { PokemonV2VersiongroupMinFieldsModelSelector } from "./PokemonV2VersiongroupMinFieldsModel.base"
import { PokemonV2VersiongroupStddevFieldsModel, PokemonV2VersiongroupStddevFieldsModelType } from "./PokemonV2VersiongroupStddevFieldsModel"
import { PokemonV2VersiongroupStddevFieldsModelSelector } from "./PokemonV2VersiongroupStddevFieldsModel.base"
import { PokemonV2VersiongroupStddevPopFieldsModel, PokemonV2VersiongroupStddevPopFieldsModelType } from "./PokemonV2VersiongroupStddevPopFieldsModel"
import { PokemonV2VersiongroupStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupStddevPopFieldsModel.base"
import { PokemonV2VersiongroupStddevSampFieldsModel, PokemonV2VersiongroupStddevSampFieldsModelType } from "./PokemonV2VersiongroupStddevSampFieldsModel"
import { PokemonV2VersiongroupStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupStddevSampFieldsModel.base"
import { PokemonV2VersiongroupSumFieldsModel, PokemonV2VersiongroupSumFieldsModelType } from "./PokemonV2VersiongroupSumFieldsModel"
import { PokemonV2VersiongroupSumFieldsModelSelector } from "./PokemonV2VersiongroupSumFieldsModel.base"
import { PokemonV2VersiongroupVarPopFieldsModel, PokemonV2VersiongroupVarPopFieldsModelType } from "./PokemonV2VersiongroupVarPopFieldsModel"
import { PokemonV2VersiongroupVarPopFieldsModelSelector } from "./PokemonV2VersiongroupVarPopFieldsModel.base"
import { PokemonV2VersiongroupVarSampFieldsModel, PokemonV2VersiongroupVarSampFieldsModelType } from "./PokemonV2VersiongroupVarSampFieldsModel"
import { PokemonV2VersiongroupVarSampFieldsModelSelector } from "./PokemonV2VersiongroupVarSampFieldsModel.base"
import { PokemonV2VersiongroupVarianceFieldsModel, PokemonV2VersiongroupVarianceFieldsModelType } from "./PokemonV2VersiongroupVarianceFieldsModel"
import { PokemonV2VersiongroupVarianceFieldsModelSelector } from "./PokemonV2VersiongroupVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupAggregateFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupAggregateFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroup_aggregate_fields"), "pokemon_v2_versiongroup_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2VersiongroupAvgFieldsModelSelector | ((selector: PokemonV2VersiongroupAvgFieldsModelSelector) => PokemonV2VersiongroupAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2VersiongroupAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2VersiongroupMaxFieldsModelSelector | ((selector: PokemonV2VersiongroupMaxFieldsModelSelector) => PokemonV2VersiongroupMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2VersiongroupMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2VersiongroupMinFieldsModelSelector | ((selector: PokemonV2VersiongroupMinFieldsModelSelector) => PokemonV2VersiongroupMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2VersiongroupMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2VersiongroupStddevFieldsModelSelector | ((selector: PokemonV2VersiongroupStddevFieldsModelSelector) => PokemonV2VersiongroupStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2VersiongroupStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2VersiongroupStddevPopFieldsModelSelector | ((selector: PokemonV2VersiongroupStddevPopFieldsModelSelector) => PokemonV2VersiongroupStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2VersiongroupStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2VersiongroupStddevSampFieldsModelSelector | ((selector: PokemonV2VersiongroupStddevSampFieldsModelSelector) => PokemonV2VersiongroupStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2VersiongroupStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2VersiongroupSumFieldsModelSelector | ((selector: PokemonV2VersiongroupSumFieldsModelSelector) => PokemonV2VersiongroupSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2VersiongroupSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2VersiongroupVarPopFieldsModelSelector | ((selector: PokemonV2VersiongroupVarPopFieldsModelSelector) => PokemonV2VersiongroupVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2VersiongroupVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2VersiongroupVarSampFieldsModelSelector | ((selector: PokemonV2VersiongroupVarSampFieldsModelSelector) => PokemonV2VersiongroupVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2VersiongroupVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2VersiongroupVarianceFieldsModelSelector | ((selector: PokemonV2VersiongroupVarianceFieldsModelSelector) => PokemonV2VersiongroupVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2VersiongroupVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupAggregateFields() {
  return new PokemonV2VersiongroupAggregateFieldsModelSelector()
}

export const pokemonV2VersiongroupAggregateFieldsModelPrimitives = selectFromPokemonV2VersiongroupAggregateFields().count
