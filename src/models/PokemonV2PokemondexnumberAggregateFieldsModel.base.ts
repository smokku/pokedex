/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemondexnumberAvgFieldsModel, PokemonV2PokemondexnumberAvgFieldsModelType } from "./PokemonV2PokemondexnumberAvgFieldsModel"
import { PokemonV2PokemondexnumberAvgFieldsModelSelector } from "./PokemonV2PokemondexnumberAvgFieldsModel.base"
import { PokemonV2PokemondexnumberMaxFieldsModel, PokemonV2PokemondexnumberMaxFieldsModelType } from "./PokemonV2PokemondexnumberMaxFieldsModel"
import { PokemonV2PokemondexnumberMaxFieldsModelSelector } from "./PokemonV2PokemondexnumberMaxFieldsModel.base"
import { PokemonV2PokemondexnumberMinFieldsModel, PokemonV2PokemondexnumberMinFieldsModelType } from "./PokemonV2PokemondexnumberMinFieldsModel"
import { PokemonV2PokemondexnumberMinFieldsModelSelector } from "./PokemonV2PokemondexnumberMinFieldsModel.base"
import { PokemonV2PokemondexnumberStddevFieldsModel, PokemonV2PokemondexnumberStddevFieldsModelType } from "./PokemonV2PokemondexnumberStddevFieldsModel"
import { PokemonV2PokemondexnumberStddevFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevFieldsModel.base"
import { PokemonV2PokemondexnumberStddevPopFieldsModel, PokemonV2PokemondexnumberStddevPopFieldsModelType } from "./PokemonV2PokemondexnumberStddevPopFieldsModel"
import { PokemonV2PokemondexnumberStddevPopFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevPopFieldsModel.base"
import { PokemonV2PokemondexnumberStddevSampFieldsModel, PokemonV2PokemondexnumberStddevSampFieldsModelType } from "./PokemonV2PokemondexnumberStddevSampFieldsModel"
import { PokemonV2PokemondexnumberStddevSampFieldsModelSelector } from "./PokemonV2PokemondexnumberStddevSampFieldsModel.base"
import { PokemonV2PokemondexnumberSumFieldsModel, PokemonV2PokemondexnumberSumFieldsModelType } from "./PokemonV2PokemondexnumberSumFieldsModel"
import { PokemonV2PokemondexnumberSumFieldsModelSelector } from "./PokemonV2PokemondexnumberSumFieldsModel.base"
import { PokemonV2PokemondexnumberVarPopFieldsModel, PokemonV2PokemondexnumberVarPopFieldsModelType } from "./PokemonV2PokemondexnumberVarPopFieldsModel"
import { PokemonV2PokemondexnumberVarPopFieldsModelSelector } from "./PokemonV2PokemondexnumberVarPopFieldsModel.base"
import { PokemonV2PokemondexnumberVarSampFieldsModel, PokemonV2PokemondexnumberVarSampFieldsModelType } from "./PokemonV2PokemondexnumberVarSampFieldsModel"
import { PokemonV2PokemondexnumberVarSampFieldsModelSelector } from "./PokemonV2PokemondexnumberVarSampFieldsModel.base"
import { PokemonV2PokemondexnumberVarianceFieldsModel, PokemonV2PokemondexnumberVarianceFieldsModelType } from "./PokemonV2PokemondexnumberVarianceFieldsModel"
import { PokemonV2PokemondexnumberVarianceFieldsModelSelector } from "./PokemonV2PokemondexnumberVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemondexnumberAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemondexnumberAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemondexnumberAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemondexnumber_aggregate_fields"), "pokemon_v2_pokemondexnumber_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemondexnumberVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemondexnumberAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemondexnumberAvgFieldsModelSelector | ((selector: PokemonV2PokemondexnumberAvgFieldsModelSelector) => PokemonV2PokemondexnumberAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemondexnumberAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemondexnumberMaxFieldsModelSelector | ((selector: PokemonV2PokemondexnumberMaxFieldsModelSelector) => PokemonV2PokemondexnumberMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemondexnumberMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemondexnumberMinFieldsModelSelector | ((selector: PokemonV2PokemondexnumberMinFieldsModelSelector) => PokemonV2PokemondexnumberMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemondexnumberMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemondexnumberStddevFieldsModelSelector | ((selector: PokemonV2PokemondexnumberStddevFieldsModelSelector) => PokemonV2PokemondexnumberStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemondexnumberStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemondexnumberStddevPopFieldsModelSelector | ((selector: PokemonV2PokemondexnumberStddevPopFieldsModelSelector) => PokemonV2PokemondexnumberStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemondexnumberStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemondexnumberStddevSampFieldsModelSelector | ((selector: PokemonV2PokemondexnumberStddevSampFieldsModelSelector) => PokemonV2PokemondexnumberStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemondexnumberStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemondexnumberSumFieldsModelSelector | ((selector: PokemonV2PokemondexnumberSumFieldsModelSelector) => PokemonV2PokemondexnumberSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemondexnumberSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemondexnumberVarPopFieldsModelSelector | ((selector: PokemonV2PokemondexnumberVarPopFieldsModelSelector) => PokemonV2PokemondexnumberVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemondexnumberVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemondexnumberVarSampFieldsModelSelector | ((selector: PokemonV2PokemondexnumberVarSampFieldsModelSelector) => PokemonV2PokemondexnumberVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemondexnumberVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemondexnumberVarianceFieldsModelSelector | ((selector: PokemonV2PokemondexnumberVarianceFieldsModelSelector) => PokemonV2PokemondexnumberVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemondexnumberVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemondexnumberAggregateFields() {
  return new PokemonV2PokemondexnumberAggregateFieldsModelSelector()
}

export const pokemonV2PokemondexnumberAggregateFieldsModelPrimitives = selectFromPokemonV2PokemondexnumberAggregateFields().count
