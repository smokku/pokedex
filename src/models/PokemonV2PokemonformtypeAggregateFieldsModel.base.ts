/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonformtypeAvgFieldsModel, PokemonV2PokemonformtypeAvgFieldsModelType } from "./PokemonV2PokemonformtypeAvgFieldsModel"
import { PokemonV2PokemonformtypeAvgFieldsModelSelector } from "./PokemonV2PokemonformtypeAvgFieldsModel.base"
import { PokemonV2PokemonformtypeMaxFieldsModel, PokemonV2PokemonformtypeMaxFieldsModelType } from "./PokemonV2PokemonformtypeMaxFieldsModel"
import { PokemonV2PokemonformtypeMaxFieldsModelSelector } from "./PokemonV2PokemonformtypeMaxFieldsModel.base"
import { PokemonV2PokemonformtypeMinFieldsModel, PokemonV2PokemonformtypeMinFieldsModelType } from "./PokemonV2PokemonformtypeMinFieldsModel"
import { PokemonV2PokemonformtypeMinFieldsModelSelector } from "./PokemonV2PokemonformtypeMinFieldsModel.base"
import { PokemonV2PokemonformtypeStddevFieldsModel, PokemonV2PokemonformtypeStddevFieldsModelType } from "./PokemonV2PokemonformtypeStddevFieldsModel"
import { PokemonV2PokemonformtypeStddevFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevFieldsModel.base"
import { PokemonV2PokemonformtypeStddevPopFieldsModel, PokemonV2PokemonformtypeStddevPopFieldsModelType } from "./PokemonV2PokemonformtypeStddevPopFieldsModel"
import { PokemonV2PokemonformtypeStddevPopFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevPopFieldsModel.base"
import { PokemonV2PokemonformtypeStddevSampFieldsModel, PokemonV2PokemonformtypeStddevSampFieldsModelType } from "./PokemonV2PokemonformtypeStddevSampFieldsModel"
import { PokemonV2PokemonformtypeStddevSampFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevSampFieldsModel.base"
import { PokemonV2PokemonformtypeSumFieldsModel, PokemonV2PokemonformtypeSumFieldsModelType } from "./PokemonV2PokemonformtypeSumFieldsModel"
import { PokemonV2PokemonformtypeSumFieldsModelSelector } from "./PokemonV2PokemonformtypeSumFieldsModel.base"
import { PokemonV2PokemonformtypeVarPopFieldsModel, PokemonV2PokemonformtypeVarPopFieldsModelType } from "./PokemonV2PokemonformtypeVarPopFieldsModel"
import { PokemonV2PokemonformtypeVarPopFieldsModelSelector } from "./PokemonV2PokemonformtypeVarPopFieldsModel.base"
import { PokemonV2PokemonformtypeVarSampFieldsModel, PokemonV2PokemonformtypeVarSampFieldsModelType } from "./PokemonV2PokemonformtypeVarSampFieldsModel"
import { PokemonV2PokemonformtypeVarSampFieldsModelSelector } from "./PokemonV2PokemonformtypeVarSampFieldsModel.base"
import { PokemonV2PokemonformtypeVarianceFieldsModel, PokemonV2PokemonformtypeVarianceFieldsModelType } from "./PokemonV2PokemonformtypeVarianceFieldsModel"
import { PokemonV2PokemonformtypeVarianceFieldsModelSelector } from "./PokemonV2PokemonformtypeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonformtypeAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemonformtypeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemonformtypeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonformtype_aggregate_fields"), "pokemon_v2_pokemonformtype_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonformtypeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonformtypeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemonformtypeAvgFieldsModelSelector | ((selector: PokemonV2PokemonformtypeAvgFieldsModelSelector) => PokemonV2PokemonformtypeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemonformtypeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemonformtypeMaxFieldsModelSelector | ((selector: PokemonV2PokemonformtypeMaxFieldsModelSelector) => PokemonV2PokemonformtypeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemonformtypeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemonformtypeMinFieldsModelSelector | ((selector: PokemonV2PokemonformtypeMinFieldsModelSelector) => PokemonV2PokemonformtypeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemonformtypeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemonformtypeStddevFieldsModelSelector | ((selector: PokemonV2PokemonformtypeStddevFieldsModelSelector) => PokemonV2PokemonformtypeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemonformtypeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemonformtypeStddevPopFieldsModelSelector | ((selector: PokemonV2PokemonformtypeStddevPopFieldsModelSelector) => PokemonV2PokemonformtypeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemonformtypeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemonformtypeStddevSampFieldsModelSelector | ((selector: PokemonV2PokemonformtypeStddevSampFieldsModelSelector) => PokemonV2PokemonformtypeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemonformtypeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemonformtypeSumFieldsModelSelector | ((selector: PokemonV2PokemonformtypeSumFieldsModelSelector) => PokemonV2PokemonformtypeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemonformtypeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemonformtypeVarPopFieldsModelSelector | ((selector: PokemonV2PokemonformtypeVarPopFieldsModelSelector) => PokemonV2PokemonformtypeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemonformtypeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemonformtypeVarSampFieldsModelSelector | ((selector: PokemonV2PokemonformtypeVarSampFieldsModelSelector) => PokemonV2PokemonformtypeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemonformtypeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemonformtypeVarianceFieldsModelSelector | ((selector: PokemonV2PokemonformtypeVarianceFieldsModelSelector) => PokemonV2PokemonformtypeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemonformtypeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemonformtypeAggregateFields() {
  return new PokemonV2PokemonformtypeAggregateFieldsModelSelector()
}

export const pokemonV2PokemonformtypeAggregateFieldsModelPrimitives = selectFromPokemonV2PokemonformtypeAggregateFields().count
