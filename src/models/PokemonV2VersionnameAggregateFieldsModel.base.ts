/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersionnameAvgFieldsModel, PokemonV2VersionnameAvgFieldsModelType } from "./PokemonV2VersionnameAvgFieldsModel"
import { PokemonV2VersionnameAvgFieldsModelSelector } from "./PokemonV2VersionnameAvgFieldsModel.base"
import { PokemonV2VersionnameMaxFieldsModel, PokemonV2VersionnameMaxFieldsModelType } from "./PokemonV2VersionnameMaxFieldsModel"
import { PokemonV2VersionnameMaxFieldsModelSelector } from "./PokemonV2VersionnameMaxFieldsModel.base"
import { PokemonV2VersionnameMinFieldsModel, PokemonV2VersionnameMinFieldsModelType } from "./PokemonV2VersionnameMinFieldsModel"
import { PokemonV2VersionnameMinFieldsModelSelector } from "./PokemonV2VersionnameMinFieldsModel.base"
import { PokemonV2VersionnameStddevFieldsModel, PokemonV2VersionnameStddevFieldsModelType } from "./PokemonV2VersionnameStddevFieldsModel"
import { PokemonV2VersionnameStddevFieldsModelSelector } from "./PokemonV2VersionnameStddevFieldsModel.base"
import { PokemonV2VersionnameStddevPopFieldsModel, PokemonV2VersionnameStddevPopFieldsModelType } from "./PokemonV2VersionnameStddevPopFieldsModel"
import { PokemonV2VersionnameStddevPopFieldsModelSelector } from "./PokemonV2VersionnameStddevPopFieldsModel.base"
import { PokemonV2VersionnameStddevSampFieldsModel, PokemonV2VersionnameStddevSampFieldsModelType } from "./PokemonV2VersionnameStddevSampFieldsModel"
import { PokemonV2VersionnameStddevSampFieldsModelSelector } from "./PokemonV2VersionnameStddevSampFieldsModel.base"
import { PokemonV2VersionnameSumFieldsModel, PokemonV2VersionnameSumFieldsModelType } from "./PokemonV2VersionnameSumFieldsModel"
import { PokemonV2VersionnameSumFieldsModelSelector } from "./PokemonV2VersionnameSumFieldsModel.base"
import { PokemonV2VersionnameVarPopFieldsModel, PokemonV2VersionnameVarPopFieldsModelType } from "./PokemonV2VersionnameVarPopFieldsModel"
import { PokemonV2VersionnameVarPopFieldsModelSelector } from "./PokemonV2VersionnameVarPopFieldsModel.base"
import { PokemonV2VersionnameVarSampFieldsModel, PokemonV2VersionnameVarSampFieldsModelType } from "./PokemonV2VersionnameVarSampFieldsModel"
import { PokemonV2VersionnameVarSampFieldsModelSelector } from "./PokemonV2VersionnameVarSampFieldsModel.base"
import { PokemonV2VersionnameVarianceFieldsModel, PokemonV2VersionnameVarianceFieldsModelType } from "./PokemonV2VersionnameVarianceFieldsModel"
import { PokemonV2VersionnameVarianceFieldsModelSelector } from "./PokemonV2VersionnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2VersionnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2VersionnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versionname_aggregate_fields"), "pokemon_v2_versionname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2VersionnameAvgFieldsModelSelector | ((selector: PokemonV2VersionnameAvgFieldsModelSelector) => PokemonV2VersionnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2VersionnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2VersionnameMaxFieldsModelSelector | ((selector: PokemonV2VersionnameMaxFieldsModelSelector) => PokemonV2VersionnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2VersionnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2VersionnameMinFieldsModelSelector | ((selector: PokemonV2VersionnameMinFieldsModelSelector) => PokemonV2VersionnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2VersionnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2VersionnameStddevFieldsModelSelector | ((selector: PokemonV2VersionnameStddevFieldsModelSelector) => PokemonV2VersionnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2VersionnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2VersionnameStddevPopFieldsModelSelector | ((selector: PokemonV2VersionnameStddevPopFieldsModelSelector) => PokemonV2VersionnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2VersionnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2VersionnameStddevSampFieldsModelSelector | ((selector: PokemonV2VersionnameStddevSampFieldsModelSelector) => PokemonV2VersionnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2VersionnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2VersionnameSumFieldsModelSelector | ((selector: PokemonV2VersionnameSumFieldsModelSelector) => PokemonV2VersionnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2VersionnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2VersionnameVarPopFieldsModelSelector | ((selector: PokemonV2VersionnameVarPopFieldsModelSelector) => PokemonV2VersionnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2VersionnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2VersionnameVarSampFieldsModelSelector | ((selector: PokemonV2VersionnameVarSampFieldsModelSelector) => PokemonV2VersionnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2VersionnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2VersionnameVarianceFieldsModelSelector | ((selector: PokemonV2VersionnameVarianceFieldsModelSelector) => PokemonV2VersionnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2VersionnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2VersionnameAggregateFields() {
  return new PokemonV2VersionnameAggregateFieldsModelSelector()
}

export const pokemonV2VersionnameAggregateFieldsModelPrimitives = selectFromPokemonV2VersionnameAggregateFields().count
