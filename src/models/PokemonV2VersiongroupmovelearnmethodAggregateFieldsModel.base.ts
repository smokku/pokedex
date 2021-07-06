/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2VersiongroupmovelearnmethodAvgFieldsModel, PokemonV2VersiongroupmovelearnmethodAvgFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodAvgFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAvgFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodMaxFieldsModel, PokemonV2VersiongroupmovelearnmethodMaxFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodMaxFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodMaxFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodMinFieldsModel, PokemonV2VersiongroupmovelearnmethodMinFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodMinFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodMinFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodStddevFieldsModel, PokemonV2VersiongroupmovelearnmethodStddevFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodStddevFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel, PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel, PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodSumFieldsModel, PokemonV2VersiongroupmovelearnmethodSumFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodSumFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodSumFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel, PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel, PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel.base"
import { PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel, PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelType } from "./PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel"
import { PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2VersiongroupmovelearnmethodAggregateFieldsBase
 * auto generated base class for the model PokemonV2VersiongroupmovelearnmethodAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelBase = ModelBase
  .named('PokemonV2VersiongroupmovelearnmethodAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_versiongroupmovelearnmethod_aggregate_fields"), "pokemon_v2_versiongroupmovelearnmethod_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2VersiongroupmovelearnmethodAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2VersiongroupmovelearnmethodMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2VersiongroupmovelearnmethodSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector) => PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2VersiongroupmovelearnmethodAggregateFields() {
  return new PokemonV2VersiongroupmovelearnmethodAggregateFieldsModelSelector()
}

export const pokemonV2VersiongroupmovelearnmethodAggregateFieldsModelPrimitives = selectFromPokemonV2VersiongroupmovelearnmethodAggregateFields().count
