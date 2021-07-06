/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethodAvgFieldsModel, PokemonV2MovelearnmethodAvgFieldsModelType } from "./PokemonV2MovelearnmethodAvgFieldsModel"
import { PokemonV2MovelearnmethodAvgFieldsModelSelector } from "./PokemonV2MovelearnmethodAvgFieldsModel.base"
import { PokemonV2MovelearnmethodMaxFieldsModel, PokemonV2MovelearnmethodMaxFieldsModelType } from "./PokemonV2MovelearnmethodMaxFieldsModel"
import { PokemonV2MovelearnmethodMaxFieldsModelSelector } from "./PokemonV2MovelearnmethodMaxFieldsModel.base"
import { PokemonV2MovelearnmethodMinFieldsModel, PokemonV2MovelearnmethodMinFieldsModelType } from "./PokemonV2MovelearnmethodMinFieldsModel"
import { PokemonV2MovelearnmethodMinFieldsModelSelector } from "./PokemonV2MovelearnmethodMinFieldsModel.base"
import { PokemonV2MovelearnmethodStddevFieldsModel, PokemonV2MovelearnmethodStddevFieldsModelType } from "./PokemonV2MovelearnmethodStddevFieldsModel"
import { PokemonV2MovelearnmethodStddevFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevFieldsModel.base"
import { PokemonV2MovelearnmethodStddevPopFieldsModel, PokemonV2MovelearnmethodStddevPopFieldsModelType } from "./PokemonV2MovelearnmethodStddevPopFieldsModel"
import { PokemonV2MovelearnmethodStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevPopFieldsModel.base"
import { PokemonV2MovelearnmethodStddevSampFieldsModel, PokemonV2MovelearnmethodStddevSampFieldsModelType } from "./PokemonV2MovelearnmethodStddevSampFieldsModel"
import { PokemonV2MovelearnmethodStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevSampFieldsModel.base"
import { PokemonV2MovelearnmethodSumFieldsModel, PokemonV2MovelearnmethodSumFieldsModelType } from "./PokemonV2MovelearnmethodSumFieldsModel"
import { PokemonV2MovelearnmethodSumFieldsModelSelector } from "./PokemonV2MovelearnmethodSumFieldsModel.base"
import { PokemonV2MovelearnmethodVarPopFieldsModel, PokemonV2MovelearnmethodVarPopFieldsModelType } from "./PokemonV2MovelearnmethodVarPopFieldsModel"
import { PokemonV2MovelearnmethodVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethodVarPopFieldsModel.base"
import { PokemonV2MovelearnmethodVarSampFieldsModel, PokemonV2MovelearnmethodVarSampFieldsModelType } from "./PokemonV2MovelearnmethodVarSampFieldsModel"
import { PokemonV2MovelearnmethodVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethodVarSampFieldsModel.base"
import { PokemonV2MovelearnmethodVarianceFieldsModel, PokemonV2MovelearnmethodVarianceFieldsModelType } from "./PokemonV2MovelearnmethodVarianceFieldsModel"
import { PokemonV2MovelearnmethodVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethodVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovelearnmethodAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovelearnmethodAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod_aggregate_fields"), "pokemon_v2_movelearnmethod_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovelearnmethodVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovelearnmethodAvgFieldsModelSelector | ((selector: PokemonV2MovelearnmethodAvgFieldsModelSelector) => PokemonV2MovelearnmethodAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovelearnmethodAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovelearnmethodMaxFieldsModelSelector | ((selector: PokemonV2MovelearnmethodMaxFieldsModelSelector) => PokemonV2MovelearnmethodMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovelearnmethodMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovelearnmethodMinFieldsModelSelector | ((selector: PokemonV2MovelearnmethodMinFieldsModelSelector) => PokemonV2MovelearnmethodMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovelearnmethodMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovelearnmethodStddevFieldsModelSelector | ((selector: PokemonV2MovelearnmethodStddevFieldsModelSelector) => PokemonV2MovelearnmethodStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovelearnmethodStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovelearnmethodStddevPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethodStddevPopFieldsModelSelector) => PokemonV2MovelearnmethodStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovelearnmethodStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovelearnmethodStddevSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethodStddevSampFieldsModelSelector) => PokemonV2MovelearnmethodStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovelearnmethodStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovelearnmethodSumFieldsModelSelector | ((selector: PokemonV2MovelearnmethodSumFieldsModelSelector) => PokemonV2MovelearnmethodSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovelearnmethodSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovelearnmethodVarPopFieldsModelSelector | ((selector: PokemonV2MovelearnmethodVarPopFieldsModelSelector) => PokemonV2MovelearnmethodVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovelearnmethodVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovelearnmethodVarSampFieldsModelSelector | ((selector: PokemonV2MovelearnmethodVarSampFieldsModelSelector) => PokemonV2MovelearnmethodVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovelearnmethodVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovelearnmethodVarianceFieldsModelSelector | ((selector: PokemonV2MovelearnmethodVarianceFieldsModelSelector) => PokemonV2MovelearnmethodVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovelearnmethodVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovelearnmethodAggregateFields() {
  return new PokemonV2MovelearnmethodAggregateFieldsModelSelector()
}

export const pokemonV2MovelearnmethodAggregateFieldsModelPrimitives = selectFromPokemonV2MovelearnmethodAggregateFields().count
