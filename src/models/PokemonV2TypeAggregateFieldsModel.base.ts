/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypeAvgFieldsModel, PokemonV2TypeAvgFieldsModelType } from "./PokemonV2TypeAvgFieldsModel"
import { PokemonV2TypeAvgFieldsModelSelector } from "./PokemonV2TypeAvgFieldsModel.base"
import { PokemonV2TypeMaxFieldsModel, PokemonV2TypeMaxFieldsModelType } from "./PokemonV2TypeMaxFieldsModel"
import { PokemonV2TypeMaxFieldsModelSelector } from "./PokemonV2TypeMaxFieldsModel.base"
import { PokemonV2TypeMinFieldsModel, PokemonV2TypeMinFieldsModelType } from "./PokemonV2TypeMinFieldsModel"
import { PokemonV2TypeMinFieldsModelSelector } from "./PokemonV2TypeMinFieldsModel.base"
import { PokemonV2TypeStddevFieldsModel, PokemonV2TypeStddevFieldsModelType } from "./PokemonV2TypeStddevFieldsModel"
import { PokemonV2TypeStddevFieldsModelSelector } from "./PokemonV2TypeStddevFieldsModel.base"
import { PokemonV2TypeStddevPopFieldsModel, PokemonV2TypeStddevPopFieldsModelType } from "./PokemonV2TypeStddevPopFieldsModel"
import { PokemonV2TypeStddevPopFieldsModelSelector } from "./PokemonV2TypeStddevPopFieldsModel.base"
import { PokemonV2TypeStddevSampFieldsModel, PokemonV2TypeStddevSampFieldsModelType } from "./PokemonV2TypeStddevSampFieldsModel"
import { PokemonV2TypeStddevSampFieldsModelSelector } from "./PokemonV2TypeStddevSampFieldsModel.base"
import { PokemonV2TypeSumFieldsModel, PokemonV2TypeSumFieldsModelType } from "./PokemonV2TypeSumFieldsModel"
import { PokemonV2TypeSumFieldsModelSelector } from "./PokemonV2TypeSumFieldsModel.base"
import { PokemonV2TypeVarPopFieldsModel, PokemonV2TypeVarPopFieldsModelType } from "./PokemonV2TypeVarPopFieldsModel"
import { PokemonV2TypeVarPopFieldsModelSelector } from "./PokemonV2TypeVarPopFieldsModel.base"
import { PokemonV2TypeVarSampFieldsModel, PokemonV2TypeVarSampFieldsModelType } from "./PokemonV2TypeVarSampFieldsModel"
import { PokemonV2TypeVarSampFieldsModelSelector } from "./PokemonV2TypeVarSampFieldsModel.base"
import { PokemonV2TypeVarianceFieldsModel, PokemonV2TypeVarianceFieldsModelType } from "./PokemonV2TypeVarianceFieldsModel"
import { PokemonV2TypeVarianceFieldsModelSelector } from "./PokemonV2TypeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeAggregateFieldsBase
 * auto generated base class for the model PokemonV2TypeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_type"
 */
export const PokemonV2TypeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2TypeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type_aggregate_fields"), "pokemon_v2_type_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2TypeAvgFieldsModelSelector | ((selector: PokemonV2TypeAvgFieldsModelSelector) => PokemonV2TypeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2TypeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2TypeMaxFieldsModelSelector | ((selector: PokemonV2TypeMaxFieldsModelSelector) => PokemonV2TypeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2TypeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2TypeMinFieldsModelSelector | ((selector: PokemonV2TypeMinFieldsModelSelector) => PokemonV2TypeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2TypeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2TypeStddevFieldsModelSelector | ((selector: PokemonV2TypeStddevFieldsModelSelector) => PokemonV2TypeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2TypeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2TypeStddevPopFieldsModelSelector | ((selector: PokemonV2TypeStddevPopFieldsModelSelector) => PokemonV2TypeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2TypeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2TypeStddevSampFieldsModelSelector | ((selector: PokemonV2TypeStddevSampFieldsModelSelector) => PokemonV2TypeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2TypeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2TypeSumFieldsModelSelector | ((selector: PokemonV2TypeSumFieldsModelSelector) => PokemonV2TypeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2TypeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2TypeVarPopFieldsModelSelector | ((selector: PokemonV2TypeVarPopFieldsModelSelector) => PokemonV2TypeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2TypeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2TypeVarSampFieldsModelSelector | ((selector: PokemonV2TypeVarSampFieldsModelSelector) => PokemonV2TypeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2TypeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2TypeVarianceFieldsModelSelector | ((selector: PokemonV2TypeVarianceFieldsModelSelector) => PokemonV2TypeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2TypeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2TypeAggregateFields() {
  return new PokemonV2TypeAggregateFieldsModelSelector()
}

export const pokemonV2TypeAggregateFieldsModelPrimitives = selectFromPokemonV2TypeAggregateFields().count
