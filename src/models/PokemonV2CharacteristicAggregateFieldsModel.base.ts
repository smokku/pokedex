/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2CharacteristicAvgFieldsModel, PokemonV2CharacteristicAvgFieldsModelType } from "./PokemonV2CharacteristicAvgFieldsModel"
import { PokemonV2CharacteristicAvgFieldsModelSelector } from "./PokemonV2CharacteristicAvgFieldsModel.base"
import { PokemonV2CharacteristicMaxFieldsModel, PokemonV2CharacteristicMaxFieldsModelType } from "./PokemonV2CharacteristicMaxFieldsModel"
import { PokemonV2CharacteristicMaxFieldsModelSelector } from "./PokemonV2CharacteristicMaxFieldsModel.base"
import { PokemonV2CharacteristicMinFieldsModel, PokemonV2CharacteristicMinFieldsModelType } from "./PokemonV2CharacteristicMinFieldsModel"
import { PokemonV2CharacteristicMinFieldsModelSelector } from "./PokemonV2CharacteristicMinFieldsModel.base"
import { PokemonV2CharacteristicStddevFieldsModel, PokemonV2CharacteristicStddevFieldsModelType } from "./PokemonV2CharacteristicStddevFieldsModel"
import { PokemonV2CharacteristicStddevFieldsModelSelector } from "./PokemonV2CharacteristicStddevFieldsModel.base"
import { PokemonV2CharacteristicStddevPopFieldsModel, PokemonV2CharacteristicStddevPopFieldsModelType } from "./PokemonV2CharacteristicStddevPopFieldsModel"
import { PokemonV2CharacteristicStddevPopFieldsModelSelector } from "./PokemonV2CharacteristicStddevPopFieldsModel.base"
import { PokemonV2CharacteristicStddevSampFieldsModel, PokemonV2CharacteristicStddevSampFieldsModelType } from "./PokemonV2CharacteristicStddevSampFieldsModel"
import { PokemonV2CharacteristicStddevSampFieldsModelSelector } from "./PokemonV2CharacteristicStddevSampFieldsModel.base"
import { PokemonV2CharacteristicSumFieldsModel, PokemonV2CharacteristicSumFieldsModelType } from "./PokemonV2CharacteristicSumFieldsModel"
import { PokemonV2CharacteristicSumFieldsModelSelector } from "./PokemonV2CharacteristicSumFieldsModel.base"
import { PokemonV2CharacteristicVarPopFieldsModel, PokemonV2CharacteristicVarPopFieldsModelType } from "./PokemonV2CharacteristicVarPopFieldsModel"
import { PokemonV2CharacteristicVarPopFieldsModelSelector } from "./PokemonV2CharacteristicVarPopFieldsModel.base"
import { PokemonV2CharacteristicVarSampFieldsModel, PokemonV2CharacteristicVarSampFieldsModelType } from "./PokemonV2CharacteristicVarSampFieldsModel"
import { PokemonV2CharacteristicVarSampFieldsModelSelector } from "./PokemonV2CharacteristicVarSampFieldsModel.base"
import { PokemonV2CharacteristicVarianceFieldsModel, PokemonV2CharacteristicVarianceFieldsModelType } from "./PokemonV2CharacteristicVarianceFieldsModel"
import { PokemonV2CharacteristicVarianceFieldsModelSelector } from "./PokemonV2CharacteristicVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2CharacteristicAggregateFieldsBase
 * auto generated base class for the model PokemonV2CharacteristicAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicAggregateFieldsModelBase = ModelBase
  .named('PokemonV2CharacteristicAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_characteristic_aggregate_fields"), "pokemon_v2_characteristic_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2CharacteristicVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2CharacteristicAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2CharacteristicAvgFieldsModelSelector | ((selector: PokemonV2CharacteristicAvgFieldsModelSelector) => PokemonV2CharacteristicAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2CharacteristicAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2CharacteristicMaxFieldsModelSelector | ((selector: PokemonV2CharacteristicMaxFieldsModelSelector) => PokemonV2CharacteristicMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2CharacteristicMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2CharacteristicMinFieldsModelSelector | ((selector: PokemonV2CharacteristicMinFieldsModelSelector) => PokemonV2CharacteristicMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2CharacteristicMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2CharacteristicStddevFieldsModelSelector | ((selector: PokemonV2CharacteristicStddevFieldsModelSelector) => PokemonV2CharacteristicStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2CharacteristicStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2CharacteristicStddevPopFieldsModelSelector | ((selector: PokemonV2CharacteristicStddevPopFieldsModelSelector) => PokemonV2CharacteristicStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2CharacteristicStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2CharacteristicStddevSampFieldsModelSelector | ((selector: PokemonV2CharacteristicStddevSampFieldsModelSelector) => PokemonV2CharacteristicStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2CharacteristicStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2CharacteristicSumFieldsModelSelector | ((selector: PokemonV2CharacteristicSumFieldsModelSelector) => PokemonV2CharacteristicSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2CharacteristicSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2CharacteristicVarPopFieldsModelSelector | ((selector: PokemonV2CharacteristicVarPopFieldsModelSelector) => PokemonV2CharacteristicVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2CharacteristicVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2CharacteristicVarSampFieldsModelSelector | ((selector: PokemonV2CharacteristicVarSampFieldsModelSelector) => PokemonV2CharacteristicVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2CharacteristicVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2CharacteristicVarianceFieldsModelSelector | ((selector: PokemonV2CharacteristicVarianceFieldsModelSelector) => PokemonV2CharacteristicVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2CharacteristicVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2CharacteristicAggregateFields() {
  return new PokemonV2CharacteristicAggregateFieldsModelSelector()
}

export const pokemonV2CharacteristicAggregateFieldsModelPrimitives = selectFromPokemonV2CharacteristicAggregateFields().count
