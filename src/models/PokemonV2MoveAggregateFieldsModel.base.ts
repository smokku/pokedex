/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveAvgFieldsModel, PokemonV2MoveAvgFieldsModelType } from "./PokemonV2MoveAvgFieldsModel"
import { PokemonV2MoveAvgFieldsModelSelector } from "./PokemonV2MoveAvgFieldsModel.base"
import { PokemonV2MoveMaxFieldsModel, PokemonV2MoveMaxFieldsModelType } from "./PokemonV2MoveMaxFieldsModel"
import { PokemonV2MoveMaxFieldsModelSelector } from "./PokemonV2MoveMaxFieldsModel.base"
import { PokemonV2MoveMinFieldsModel, PokemonV2MoveMinFieldsModelType } from "./PokemonV2MoveMinFieldsModel"
import { PokemonV2MoveMinFieldsModelSelector } from "./PokemonV2MoveMinFieldsModel.base"
import { PokemonV2MoveStddevFieldsModel, PokemonV2MoveStddevFieldsModelType } from "./PokemonV2MoveStddevFieldsModel"
import { PokemonV2MoveStddevFieldsModelSelector } from "./PokemonV2MoveStddevFieldsModel.base"
import { PokemonV2MoveStddevPopFieldsModel, PokemonV2MoveStddevPopFieldsModelType } from "./PokemonV2MoveStddevPopFieldsModel"
import { PokemonV2MoveStddevPopFieldsModelSelector } from "./PokemonV2MoveStddevPopFieldsModel.base"
import { PokemonV2MoveStddevSampFieldsModel, PokemonV2MoveStddevSampFieldsModelType } from "./PokemonV2MoveStddevSampFieldsModel"
import { PokemonV2MoveStddevSampFieldsModelSelector } from "./PokemonV2MoveStddevSampFieldsModel.base"
import { PokemonV2MoveSumFieldsModel, PokemonV2MoveSumFieldsModelType } from "./PokemonV2MoveSumFieldsModel"
import { PokemonV2MoveSumFieldsModelSelector } from "./PokemonV2MoveSumFieldsModel.base"
import { PokemonV2MoveVarPopFieldsModel, PokemonV2MoveVarPopFieldsModelType } from "./PokemonV2MoveVarPopFieldsModel"
import { PokemonV2MoveVarPopFieldsModelSelector } from "./PokemonV2MoveVarPopFieldsModel.base"
import { PokemonV2MoveVarSampFieldsModel, PokemonV2MoveVarSampFieldsModelType } from "./PokemonV2MoveVarSampFieldsModel"
import { PokemonV2MoveVarSampFieldsModelSelector } from "./PokemonV2MoveVarSampFieldsModel.base"
import { PokemonV2MoveVarianceFieldsModel, PokemonV2MoveVarianceFieldsModelType } from "./PokemonV2MoveVarianceFieldsModel"
import { PokemonV2MoveVarianceFieldsModelSelector } from "./PokemonV2MoveVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_move"
 */
export const PokemonV2MoveAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_move_aggregate_fields"), "pokemon_v2_move_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveAvgFieldsModelSelector | ((selector: PokemonV2MoveAvgFieldsModelSelector) => PokemonV2MoveAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveMaxFieldsModelSelector | ((selector: PokemonV2MoveMaxFieldsModelSelector) => PokemonV2MoveMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveMinFieldsModelSelector | ((selector: PokemonV2MoveMinFieldsModelSelector) => PokemonV2MoveMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveStddevFieldsModelSelector | ((selector: PokemonV2MoveStddevFieldsModelSelector) => PokemonV2MoveStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveStddevPopFieldsModelSelector | ((selector: PokemonV2MoveStddevPopFieldsModelSelector) => PokemonV2MoveStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveStddevSampFieldsModelSelector | ((selector: PokemonV2MoveStddevSampFieldsModelSelector) => PokemonV2MoveStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveSumFieldsModelSelector | ((selector: PokemonV2MoveSumFieldsModelSelector) => PokemonV2MoveSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveVarPopFieldsModelSelector | ((selector: PokemonV2MoveVarPopFieldsModelSelector) => PokemonV2MoveVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveVarSampFieldsModelSelector | ((selector: PokemonV2MoveVarSampFieldsModelSelector) => PokemonV2MoveVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveVarianceFieldsModelSelector | ((selector: PokemonV2MoveVarianceFieldsModelSelector) => PokemonV2MoveVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveAggregateFields() {
  return new PokemonV2MoveAggregateFieldsModelSelector()
}

export const pokemonV2MoveAggregateFieldsModelPrimitives = selectFromPokemonV2MoveAggregateFields().count
