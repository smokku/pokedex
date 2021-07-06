/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ContesttypeAvgFieldsModel, PokemonV2ContesttypeAvgFieldsModelType } from "./PokemonV2ContesttypeAvgFieldsModel"
import { PokemonV2ContesttypeAvgFieldsModelSelector } from "./PokemonV2ContesttypeAvgFieldsModel.base"
import { PokemonV2ContesttypeMaxFieldsModel, PokemonV2ContesttypeMaxFieldsModelType } from "./PokemonV2ContesttypeMaxFieldsModel"
import { PokemonV2ContesttypeMaxFieldsModelSelector } from "./PokemonV2ContesttypeMaxFieldsModel.base"
import { PokemonV2ContesttypeMinFieldsModel, PokemonV2ContesttypeMinFieldsModelType } from "./PokemonV2ContesttypeMinFieldsModel"
import { PokemonV2ContesttypeMinFieldsModelSelector } from "./PokemonV2ContesttypeMinFieldsModel.base"
import { PokemonV2ContesttypeStddevFieldsModel, PokemonV2ContesttypeStddevFieldsModelType } from "./PokemonV2ContesttypeStddevFieldsModel"
import { PokemonV2ContesttypeStddevFieldsModelSelector } from "./PokemonV2ContesttypeStddevFieldsModel.base"
import { PokemonV2ContesttypeStddevPopFieldsModel, PokemonV2ContesttypeStddevPopFieldsModelType } from "./PokemonV2ContesttypeStddevPopFieldsModel"
import { PokemonV2ContesttypeStddevPopFieldsModelSelector } from "./PokemonV2ContesttypeStddevPopFieldsModel.base"
import { PokemonV2ContesttypeStddevSampFieldsModel, PokemonV2ContesttypeStddevSampFieldsModelType } from "./PokemonV2ContesttypeStddevSampFieldsModel"
import { PokemonV2ContesttypeStddevSampFieldsModelSelector } from "./PokemonV2ContesttypeStddevSampFieldsModel.base"
import { PokemonV2ContesttypeSumFieldsModel, PokemonV2ContesttypeSumFieldsModelType } from "./PokemonV2ContesttypeSumFieldsModel"
import { PokemonV2ContesttypeSumFieldsModelSelector } from "./PokemonV2ContesttypeSumFieldsModel.base"
import { PokemonV2ContesttypeVarPopFieldsModel, PokemonV2ContesttypeVarPopFieldsModelType } from "./PokemonV2ContesttypeVarPopFieldsModel"
import { PokemonV2ContesttypeVarPopFieldsModelSelector } from "./PokemonV2ContesttypeVarPopFieldsModel.base"
import { PokemonV2ContesttypeVarSampFieldsModel, PokemonV2ContesttypeVarSampFieldsModelType } from "./PokemonV2ContesttypeVarSampFieldsModel"
import { PokemonV2ContesttypeVarSampFieldsModelSelector } from "./PokemonV2ContesttypeVarSampFieldsModel.base"
import { PokemonV2ContesttypeVarianceFieldsModel, PokemonV2ContesttypeVarianceFieldsModelType } from "./PokemonV2ContesttypeVarianceFieldsModel"
import { PokemonV2ContesttypeVarianceFieldsModelSelector } from "./PokemonV2ContesttypeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesttypeAggregateFieldsBase
 * auto generated base class for the model PokemonV2ContesttypeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ContesttypeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesttype_aggregate_fields"), "pokemon_v2_contesttype_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesttypeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ContesttypeAvgFieldsModelSelector | ((selector: PokemonV2ContesttypeAvgFieldsModelSelector) => PokemonV2ContesttypeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ContesttypeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ContesttypeMaxFieldsModelSelector | ((selector: PokemonV2ContesttypeMaxFieldsModelSelector) => PokemonV2ContesttypeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ContesttypeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ContesttypeMinFieldsModelSelector | ((selector: PokemonV2ContesttypeMinFieldsModelSelector) => PokemonV2ContesttypeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ContesttypeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ContesttypeStddevFieldsModelSelector | ((selector: PokemonV2ContesttypeStddevFieldsModelSelector) => PokemonV2ContesttypeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ContesttypeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ContesttypeStddevPopFieldsModelSelector | ((selector: PokemonV2ContesttypeStddevPopFieldsModelSelector) => PokemonV2ContesttypeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ContesttypeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ContesttypeStddevSampFieldsModelSelector | ((selector: PokemonV2ContesttypeStddevSampFieldsModelSelector) => PokemonV2ContesttypeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ContesttypeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ContesttypeSumFieldsModelSelector | ((selector: PokemonV2ContesttypeSumFieldsModelSelector) => PokemonV2ContesttypeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ContesttypeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ContesttypeVarPopFieldsModelSelector | ((selector: PokemonV2ContesttypeVarPopFieldsModelSelector) => PokemonV2ContesttypeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ContesttypeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ContesttypeVarSampFieldsModelSelector | ((selector: PokemonV2ContesttypeVarSampFieldsModelSelector) => PokemonV2ContesttypeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ContesttypeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ContesttypeVarianceFieldsModelSelector | ((selector: PokemonV2ContesttypeVarianceFieldsModelSelector) => PokemonV2ContesttypeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ContesttypeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ContesttypeAggregateFields() {
  return new PokemonV2ContesttypeAggregateFieldsModelSelector()
}

export const pokemonV2ContesttypeAggregateFieldsModelPrimitives = selectFromPokemonV2ContesttypeAggregateFields().count
