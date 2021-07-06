/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersionAvgFieldsModel, PokemonV2VersionAvgFieldsModelType } from "./PokemonV2VersionAvgFieldsModel"
import { PokemonV2VersionAvgFieldsModelSelector } from "./PokemonV2VersionAvgFieldsModel.base"
import { PokemonV2VersionMaxFieldsModel, PokemonV2VersionMaxFieldsModelType } from "./PokemonV2VersionMaxFieldsModel"
import { PokemonV2VersionMaxFieldsModelSelector } from "./PokemonV2VersionMaxFieldsModel.base"
import { PokemonV2VersionMinFieldsModel, PokemonV2VersionMinFieldsModelType } from "./PokemonV2VersionMinFieldsModel"
import { PokemonV2VersionMinFieldsModelSelector } from "./PokemonV2VersionMinFieldsModel.base"
import { PokemonV2VersionStddevFieldsModel, PokemonV2VersionStddevFieldsModelType } from "./PokemonV2VersionStddevFieldsModel"
import { PokemonV2VersionStddevFieldsModelSelector } from "./PokemonV2VersionStddevFieldsModel.base"
import { PokemonV2VersionStddevPopFieldsModel, PokemonV2VersionStddevPopFieldsModelType } from "./PokemonV2VersionStddevPopFieldsModel"
import { PokemonV2VersionStddevPopFieldsModelSelector } from "./PokemonV2VersionStddevPopFieldsModel.base"
import { PokemonV2VersionStddevSampFieldsModel, PokemonV2VersionStddevSampFieldsModelType } from "./PokemonV2VersionStddevSampFieldsModel"
import { PokemonV2VersionStddevSampFieldsModelSelector } from "./PokemonV2VersionStddevSampFieldsModel.base"
import { PokemonV2VersionSumFieldsModel, PokemonV2VersionSumFieldsModelType } from "./PokemonV2VersionSumFieldsModel"
import { PokemonV2VersionSumFieldsModelSelector } from "./PokemonV2VersionSumFieldsModel.base"
import { PokemonV2VersionVarPopFieldsModel, PokemonV2VersionVarPopFieldsModelType } from "./PokemonV2VersionVarPopFieldsModel"
import { PokemonV2VersionVarPopFieldsModelSelector } from "./PokemonV2VersionVarPopFieldsModel.base"
import { PokemonV2VersionVarSampFieldsModel, PokemonV2VersionVarSampFieldsModelType } from "./PokemonV2VersionVarSampFieldsModel"
import { PokemonV2VersionVarSampFieldsModelSelector } from "./PokemonV2VersionVarSampFieldsModel.base"
import { PokemonV2VersionVarianceFieldsModel, PokemonV2VersionVarianceFieldsModelType } from "./PokemonV2VersionVarianceFieldsModel"
import { PokemonV2VersionVarianceFieldsModelSelector } from "./PokemonV2VersionVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersionAggregateFieldsBase
 * auto generated base class for the model PokemonV2VersionAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_version"
 */
export const PokemonV2VersionAggregateFieldsModelBase = ModelBase
  .named('PokemonV2VersionAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_version_aggregate_fields"), "pokemon_v2_version_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersionVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersionAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2VersionAvgFieldsModelSelector | ((selector: PokemonV2VersionAvgFieldsModelSelector) => PokemonV2VersionAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2VersionAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2VersionMaxFieldsModelSelector | ((selector: PokemonV2VersionMaxFieldsModelSelector) => PokemonV2VersionMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2VersionMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2VersionMinFieldsModelSelector | ((selector: PokemonV2VersionMinFieldsModelSelector) => PokemonV2VersionMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2VersionMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2VersionStddevFieldsModelSelector | ((selector: PokemonV2VersionStddevFieldsModelSelector) => PokemonV2VersionStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2VersionStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2VersionStddevPopFieldsModelSelector | ((selector: PokemonV2VersionStddevPopFieldsModelSelector) => PokemonV2VersionStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2VersionStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2VersionStddevSampFieldsModelSelector | ((selector: PokemonV2VersionStddevSampFieldsModelSelector) => PokemonV2VersionStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2VersionStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2VersionSumFieldsModelSelector | ((selector: PokemonV2VersionSumFieldsModelSelector) => PokemonV2VersionSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2VersionSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2VersionVarPopFieldsModelSelector | ((selector: PokemonV2VersionVarPopFieldsModelSelector) => PokemonV2VersionVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2VersionVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2VersionVarSampFieldsModelSelector | ((selector: PokemonV2VersionVarSampFieldsModelSelector) => PokemonV2VersionVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2VersionVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2VersionVarianceFieldsModelSelector | ((selector: PokemonV2VersionVarianceFieldsModelSelector) => PokemonV2VersionVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2VersionVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2VersionAggregateFields() {
  return new PokemonV2VersionAggregateFieldsModelSelector()
}

export const pokemonV2VersionAggregateFieldsModelPrimitives = selectFromPokemonV2VersionAggregateFields().count
