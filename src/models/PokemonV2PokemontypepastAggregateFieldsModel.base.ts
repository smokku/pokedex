/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemontypepastAvgFieldsModel, PokemonV2PokemontypepastAvgFieldsModelType } from "./PokemonV2PokemontypepastAvgFieldsModel"
import { PokemonV2PokemontypepastAvgFieldsModelSelector } from "./PokemonV2PokemontypepastAvgFieldsModel.base"
import { PokemonV2PokemontypepastMaxFieldsModel, PokemonV2PokemontypepastMaxFieldsModelType } from "./PokemonV2PokemontypepastMaxFieldsModel"
import { PokemonV2PokemontypepastMaxFieldsModelSelector } from "./PokemonV2PokemontypepastMaxFieldsModel.base"
import { PokemonV2PokemontypepastMinFieldsModel, PokemonV2PokemontypepastMinFieldsModelType } from "./PokemonV2PokemontypepastMinFieldsModel"
import { PokemonV2PokemontypepastMinFieldsModelSelector } from "./PokemonV2PokemontypepastMinFieldsModel.base"
import { PokemonV2PokemontypepastStddevFieldsModel, PokemonV2PokemontypepastStddevFieldsModelType } from "./PokemonV2PokemontypepastStddevFieldsModel"
import { PokemonV2PokemontypepastStddevFieldsModelSelector } from "./PokemonV2PokemontypepastStddevFieldsModel.base"
import { PokemonV2PokemontypepastStddevPopFieldsModel, PokemonV2PokemontypepastStddevPopFieldsModelType } from "./PokemonV2PokemontypepastStddevPopFieldsModel"
import { PokemonV2PokemontypepastStddevPopFieldsModelSelector } from "./PokemonV2PokemontypepastStddevPopFieldsModel.base"
import { PokemonV2PokemontypepastStddevSampFieldsModel, PokemonV2PokemontypepastStddevSampFieldsModelType } from "./PokemonV2PokemontypepastStddevSampFieldsModel"
import { PokemonV2PokemontypepastStddevSampFieldsModelSelector } from "./PokemonV2PokemontypepastStddevSampFieldsModel.base"
import { PokemonV2PokemontypepastSumFieldsModel, PokemonV2PokemontypepastSumFieldsModelType } from "./PokemonV2PokemontypepastSumFieldsModel"
import { PokemonV2PokemontypepastSumFieldsModelSelector } from "./PokemonV2PokemontypepastSumFieldsModel.base"
import { PokemonV2PokemontypepastVarPopFieldsModel, PokemonV2PokemontypepastVarPopFieldsModelType } from "./PokemonV2PokemontypepastVarPopFieldsModel"
import { PokemonV2PokemontypepastVarPopFieldsModelSelector } from "./PokemonV2PokemontypepastVarPopFieldsModel.base"
import { PokemonV2PokemontypepastVarSampFieldsModel, PokemonV2PokemontypepastVarSampFieldsModelType } from "./PokemonV2PokemontypepastVarSampFieldsModel"
import { PokemonV2PokemontypepastVarSampFieldsModelSelector } from "./PokemonV2PokemontypepastVarSampFieldsModel.base"
import { PokemonV2PokemontypepastVarianceFieldsModel, PokemonV2PokemontypepastVarianceFieldsModelType } from "./PokemonV2PokemontypepastVarianceFieldsModel"
import { PokemonV2PokemontypepastVarianceFieldsModelSelector } from "./PokemonV2PokemontypepastVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemontypepastAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemontypepastAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast_aggregate_fields"), "pokemon_v2_pokemontypepast_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemontypepastVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypepastAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemontypepastAvgFieldsModelSelector | ((selector: PokemonV2PokemontypepastAvgFieldsModelSelector) => PokemonV2PokemontypepastAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemontypepastAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemontypepastMaxFieldsModelSelector | ((selector: PokemonV2PokemontypepastMaxFieldsModelSelector) => PokemonV2PokemontypepastMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemontypepastMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemontypepastMinFieldsModelSelector | ((selector: PokemonV2PokemontypepastMinFieldsModelSelector) => PokemonV2PokemontypepastMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemontypepastMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemontypepastStddevFieldsModelSelector | ((selector: PokemonV2PokemontypepastStddevFieldsModelSelector) => PokemonV2PokemontypepastStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemontypepastStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemontypepastStddevPopFieldsModelSelector | ((selector: PokemonV2PokemontypepastStddevPopFieldsModelSelector) => PokemonV2PokemontypepastStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemontypepastStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemontypepastStddevSampFieldsModelSelector | ((selector: PokemonV2PokemontypepastStddevSampFieldsModelSelector) => PokemonV2PokemontypepastStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemontypepastStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemontypepastSumFieldsModelSelector | ((selector: PokemonV2PokemontypepastSumFieldsModelSelector) => PokemonV2PokemontypepastSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemontypepastSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemontypepastVarPopFieldsModelSelector | ((selector: PokemonV2PokemontypepastVarPopFieldsModelSelector) => PokemonV2PokemontypepastVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemontypepastVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemontypepastVarSampFieldsModelSelector | ((selector: PokemonV2PokemontypepastVarSampFieldsModelSelector) => PokemonV2PokemontypepastVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemontypepastVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemontypepastVarianceFieldsModelSelector | ((selector: PokemonV2PokemontypepastVarianceFieldsModelSelector) => PokemonV2PokemontypepastVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemontypepastVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemontypepastAggregateFields() {
  return new PokemonV2PokemontypepastAggregateFieldsModelSelector()
}

export const pokemonV2PokemontypepastAggregateFieldsModelPrimitives = selectFromPokemonV2PokemontypepastAggregateFields().count
