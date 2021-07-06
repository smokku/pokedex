/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItempocketAvgFieldsModel, PokemonV2ItempocketAvgFieldsModelType } from "./PokemonV2ItempocketAvgFieldsModel"
import { PokemonV2ItempocketAvgFieldsModelSelector } from "./PokemonV2ItempocketAvgFieldsModel.base"
import { PokemonV2ItempocketMaxFieldsModel, PokemonV2ItempocketMaxFieldsModelType } from "./PokemonV2ItempocketMaxFieldsModel"
import { PokemonV2ItempocketMaxFieldsModelSelector } from "./PokemonV2ItempocketMaxFieldsModel.base"
import { PokemonV2ItempocketMinFieldsModel, PokemonV2ItempocketMinFieldsModelType } from "./PokemonV2ItempocketMinFieldsModel"
import { PokemonV2ItempocketMinFieldsModelSelector } from "./PokemonV2ItempocketMinFieldsModel.base"
import { PokemonV2ItempocketStddevFieldsModel, PokemonV2ItempocketStddevFieldsModelType } from "./PokemonV2ItempocketStddevFieldsModel"
import { PokemonV2ItempocketStddevFieldsModelSelector } from "./PokemonV2ItempocketStddevFieldsModel.base"
import { PokemonV2ItempocketStddevPopFieldsModel, PokemonV2ItempocketStddevPopFieldsModelType } from "./PokemonV2ItempocketStddevPopFieldsModel"
import { PokemonV2ItempocketStddevPopFieldsModelSelector } from "./PokemonV2ItempocketStddevPopFieldsModel.base"
import { PokemonV2ItempocketStddevSampFieldsModel, PokemonV2ItempocketStddevSampFieldsModelType } from "./PokemonV2ItempocketStddevSampFieldsModel"
import { PokemonV2ItempocketStddevSampFieldsModelSelector } from "./PokemonV2ItempocketStddevSampFieldsModel.base"
import { PokemonV2ItempocketSumFieldsModel, PokemonV2ItempocketSumFieldsModelType } from "./PokemonV2ItempocketSumFieldsModel"
import { PokemonV2ItempocketSumFieldsModelSelector } from "./PokemonV2ItempocketSumFieldsModel.base"
import { PokemonV2ItempocketVarPopFieldsModel, PokemonV2ItempocketVarPopFieldsModelType } from "./PokemonV2ItempocketVarPopFieldsModel"
import { PokemonV2ItempocketVarPopFieldsModelSelector } from "./PokemonV2ItempocketVarPopFieldsModel.base"
import { PokemonV2ItempocketVarSampFieldsModel, PokemonV2ItempocketVarSampFieldsModelType } from "./PokemonV2ItempocketVarSampFieldsModel"
import { PokemonV2ItempocketVarSampFieldsModelSelector } from "./PokemonV2ItempocketVarSampFieldsModel.base"
import { PokemonV2ItempocketVarianceFieldsModel, PokemonV2ItempocketVarianceFieldsModelType } from "./PokemonV2ItempocketVarianceFieldsModel"
import { PokemonV2ItempocketVarianceFieldsModelSelector } from "./PokemonV2ItempocketVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItempocketAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItempocketAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItempocketAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itempocket_aggregate_fields"), "pokemon_v2_itempocket_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItempocketVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItempocketAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItempocketAvgFieldsModelSelector | ((selector: PokemonV2ItempocketAvgFieldsModelSelector) => PokemonV2ItempocketAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItempocketAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItempocketMaxFieldsModelSelector | ((selector: PokemonV2ItempocketMaxFieldsModelSelector) => PokemonV2ItempocketMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItempocketMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItempocketMinFieldsModelSelector | ((selector: PokemonV2ItempocketMinFieldsModelSelector) => PokemonV2ItempocketMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItempocketMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItempocketStddevFieldsModelSelector | ((selector: PokemonV2ItempocketStddevFieldsModelSelector) => PokemonV2ItempocketStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItempocketStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItempocketStddevPopFieldsModelSelector | ((selector: PokemonV2ItempocketStddevPopFieldsModelSelector) => PokemonV2ItempocketStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItempocketStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItempocketStddevSampFieldsModelSelector | ((selector: PokemonV2ItempocketStddevSampFieldsModelSelector) => PokemonV2ItempocketStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItempocketStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItempocketSumFieldsModelSelector | ((selector: PokemonV2ItempocketSumFieldsModelSelector) => PokemonV2ItempocketSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItempocketSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItempocketVarPopFieldsModelSelector | ((selector: PokemonV2ItempocketVarPopFieldsModelSelector) => PokemonV2ItempocketVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItempocketVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItempocketVarSampFieldsModelSelector | ((selector: PokemonV2ItempocketVarSampFieldsModelSelector) => PokemonV2ItempocketVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItempocketVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItempocketVarianceFieldsModelSelector | ((selector: PokemonV2ItempocketVarianceFieldsModelSelector) => PokemonV2ItempocketVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItempocketVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItempocketAggregateFields() {
  return new PokemonV2ItempocketAggregateFieldsModelSelector()
}

export const pokemonV2ItempocketAggregateFieldsModelPrimitives = selectFromPokemonV2ItempocketAggregateFields().count
