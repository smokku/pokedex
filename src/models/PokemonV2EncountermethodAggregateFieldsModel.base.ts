/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2EncountermethodAvgFieldsModel, PokemonV2EncountermethodAvgFieldsModelType } from "./PokemonV2EncountermethodAvgFieldsModel"
import { PokemonV2EncountermethodAvgFieldsModelSelector } from "./PokemonV2EncountermethodAvgFieldsModel.base"
import { PokemonV2EncountermethodMaxFieldsModel, PokemonV2EncountermethodMaxFieldsModelType } from "./PokemonV2EncountermethodMaxFieldsModel"
import { PokemonV2EncountermethodMaxFieldsModelSelector } from "./PokemonV2EncountermethodMaxFieldsModel.base"
import { PokemonV2EncountermethodMinFieldsModel, PokemonV2EncountermethodMinFieldsModelType } from "./PokemonV2EncountermethodMinFieldsModel"
import { PokemonV2EncountermethodMinFieldsModelSelector } from "./PokemonV2EncountermethodMinFieldsModel.base"
import { PokemonV2EncountermethodStddevFieldsModel, PokemonV2EncountermethodStddevFieldsModelType } from "./PokemonV2EncountermethodStddevFieldsModel"
import { PokemonV2EncountermethodStddevFieldsModelSelector } from "./PokemonV2EncountermethodStddevFieldsModel.base"
import { PokemonV2EncountermethodStddevPopFieldsModel, PokemonV2EncountermethodStddevPopFieldsModelType } from "./PokemonV2EncountermethodStddevPopFieldsModel"
import { PokemonV2EncountermethodStddevPopFieldsModelSelector } from "./PokemonV2EncountermethodStddevPopFieldsModel.base"
import { PokemonV2EncountermethodStddevSampFieldsModel, PokemonV2EncountermethodStddevSampFieldsModelType } from "./PokemonV2EncountermethodStddevSampFieldsModel"
import { PokemonV2EncountermethodStddevSampFieldsModelSelector } from "./PokemonV2EncountermethodStddevSampFieldsModel.base"
import { PokemonV2EncountermethodSumFieldsModel, PokemonV2EncountermethodSumFieldsModelType } from "./PokemonV2EncountermethodSumFieldsModel"
import { PokemonV2EncountermethodSumFieldsModelSelector } from "./PokemonV2EncountermethodSumFieldsModel.base"
import { PokemonV2EncountermethodVarPopFieldsModel, PokemonV2EncountermethodVarPopFieldsModelType } from "./PokemonV2EncountermethodVarPopFieldsModel"
import { PokemonV2EncountermethodVarPopFieldsModelSelector } from "./PokemonV2EncountermethodVarPopFieldsModel.base"
import { PokemonV2EncountermethodVarSampFieldsModel, PokemonV2EncountermethodVarSampFieldsModelType } from "./PokemonV2EncountermethodVarSampFieldsModel"
import { PokemonV2EncountermethodVarSampFieldsModelSelector } from "./PokemonV2EncountermethodVarSampFieldsModel.base"
import { PokemonV2EncountermethodVarianceFieldsModel, PokemonV2EncountermethodVarianceFieldsModelType } from "./PokemonV2EncountermethodVarianceFieldsModel"
import { PokemonV2EncountermethodVarianceFieldsModelSelector } from "./PokemonV2EncountermethodVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncountermethodAggregateFieldsBase
 * auto generated base class for the model PokemonV2EncountermethodAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodAggregateFieldsModelBase = ModelBase
  .named('PokemonV2EncountermethodAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encountermethod_aggregate_fields"), "pokemon_v2_encountermethod_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2EncountermethodVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncountermethodAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2EncountermethodAvgFieldsModelSelector | ((selector: PokemonV2EncountermethodAvgFieldsModelSelector) => PokemonV2EncountermethodAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2EncountermethodAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2EncountermethodMaxFieldsModelSelector | ((selector: PokemonV2EncountermethodMaxFieldsModelSelector) => PokemonV2EncountermethodMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2EncountermethodMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2EncountermethodMinFieldsModelSelector | ((selector: PokemonV2EncountermethodMinFieldsModelSelector) => PokemonV2EncountermethodMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2EncountermethodMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2EncountermethodStddevFieldsModelSelector | ((selector: PokemonV2EncountermethodStddevFieldsModelSelector) => PokemonV2EncountermethodStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2EncountermethodStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2EncountermethodStddevPopFieldsModelSelector | ((selector: PokemonV2EncountermethodStddevPopFieldsModelSelector) => PokemonV2EncountermethodStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2EncountermethodStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2EncountermethodStddevSampFieldsModelSelector | ((selector: PokemonV2EncountermethodStddevSampFieldsModelSelector) => PokemonV2EncountermethodStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2EncountermethodStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2EncountermethodSumFieldsModelSelector | ((selector: PokemonV2EncountermethodSumFieldsModelSelector) => PokemonV2EncountermethodSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2EncountermethodSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2EncountermethodVarPopFieldsModelSelector | ((selector: PokemonV2EncountermethodVarPopFieldsModelSelector) => PokemonV2EncountermethodVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2EncountermethodVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2EncountermethodVarSampFieldsModelSelector | ((selector: PokemonV2EncountermethodVarSampFieldsModelSelector) => PokemonV2EncountermethodVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2EncountermethodVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2EncountermethodVarianceFieldsModelSelector | ((selector: PokemonV2EncountermethodVarianceFieldsModelSelector) => PokemonV2EncountermethodVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2EncountermethodVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2EncountermethodAggregateFields() {
  return new PokemonV2EncountermethodAggregateFieldsModelSelector()
}

export const pokemonV2EncountermethodAggregateFieldsModelPrimitives = selectFromPokemonV2EncountermethodAggregateFields().count
