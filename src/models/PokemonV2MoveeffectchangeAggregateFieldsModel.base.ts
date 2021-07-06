/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveeffectchangeAvgFieldsModel, PokemonV2MoveeffectchangeAvgFieldsModelType } from "./PokemonV2MoveeffectchangeAvgFieldsModel"
import { PokemonV2MoveeffectchangeAvgFieldsModelSelector } from "./PokemonV2MoveeffectchangeAvgFieldsModel.base"
import { PokemonV2MoveeffectchangeMaxFieldsModel, PokemonV2MoveeffectchangeMaxFieldsModelType } from "./PokemonV2MoveeffectchangeMaxFieldsModel"
import { PokemonV2MoveeffectchangeMaxFieldsModelSelector } from "./PokemonV2MoveeffectchangeMaxFieldsModel.base"
import { PokemonV2MoveeffectchangeMinFieldsModel, PokemonV2MoveeffectchangeMinFieldsModelType } from "./PokemonV2MoveeffectchangeMinFieldsModel"
import { PokemonV2MoveeffectchangeMinFieldsModelSelector } from "./PokemonV2MoveeffectchangeMinFieldsModel.base"
import { PokemonV2MoveeffectchangeStddevFieldsModel, PokemonV2MoveeffectchangeStddevFieldsModelType } from "./PokemonV2MoveeffectchangeStddevFieldsModel"
import { PokemonV2MoveeffectchangeStddevFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevFieldsModel.base"
import { PokemonV2MoveeffectchangeStddevPopFieldsModel, PokemonV2MoveeffectchangeStddevPopFieldsModelType } from "./PokemonV2MoveeffectchangeStddevPopFieldsModel"
import { PokemonV2MoveeffectchangeStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevPopFieldsModel.base"
import { PokemonV2MoveeffectchangeStddevSampFieldsModel, PokemonV2MoveeffectchangeStddevSampFieldsModelType } from "./PokemonV2MoveeffectchangeStddevSampFieldsModel"
import { PokemonV2MoveeffectchangeStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevSampFieldsModel.base"
import { PokemonV2MoveeffectchangeSumFieldsModel, PokemonV2MoveeffectchangeSumFieldsModelType } from "./PokemonV2MoveeffectchangeSumFieldsModel"
import { PokemonV2MoveeffectchangeSumFieldsModelSelector } from "./PokemonV2MoveeffectchangeSumFieldsModel.base"
import { PokemonV2MoveeffectchangeVarPopFieldsModel, PokemonV2MoveeffectchangeVarPopFieldsModelType } from "./PokemonV2MoveeffectchangeVarPopFieldsModel"
import { PokemonV2MoveeffectchangeVarPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarPopFieldsModel.base"
import { PokemonV2MoveeffectchangeVarSampFieldsModel, PokemonV2MoveeffectchangeVarSampFieldsModelType } from "./PokemonV2MoveeffectchangeVarSampFieldsModel"
import { PokemonV2MoveeffectchangeVarSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarSampFieldsModel.base"
import { PokemonV2MoveeffectchangeVarianceFieldsModel, PokemonV2MoveeffectchangeVarianceFieldsModelType } from "./PokemonV2MoveeffectchangeVarianceFieldsModel"
import { PokemonV2MoveeffectchangeVarianceFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveeffectchangeAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveeffectchangeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveeffectchangeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveeffectchange_aggregate_fields"), "pokemon_v2_moveeffectchange_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveeffectchangeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveeffectchangeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveeffectchangeAvgFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeAvgFieldsModelSelector) => PokemonV2MoveeffectchangeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveeffectchangeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveeffectchangeMaxFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeMaxFieldsModelSelector) => PokemonV2MoveeffectchangeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveeffectchangeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveeffectchangeMinFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeMinFieldsModelSelector) => PokemonV2MoveeffectchangeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveeffectchangeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveeffectchangeStddevFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeStddevFieldsModelSelector) => PokemonV2MoveeffectchangeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveeffectchangeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveeffectchangeStddevPopFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeStddevPopFieldsModelSelector) => PokemonV2MoveeffectchangeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveeffectchangeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveeffectchangeStddevSampFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeStddevSampFieldsModelSelector) => PokemonV2MoveeffectchangeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveeffectchangeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveeffectchangeSumFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeSumFieldsModelSelector) => PokemonV2MoveeffectchangeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveeffectchangeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveeffectchangeVarPopFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeVarPopFieldsModelSelector) => PokemonV2MoveeffectchangeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveeffectchangeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveeffectchangeVarSampFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeVarSampFieldsModelSelector) => PokemonV2MoveeffectchangeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveeffectchangeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveeffectchangeVarianceFieldsModelSelector | ((selector: PokemonV2MoveeffectchangeVarianceFieldsModelSelector) => PokemonV2MoveeffectchangeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveeffectchangeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveeffectchangeAggregateFields() {
  return new PokemonV2MoveeffectchangeAggregateFieldsModelSelector()
}

export const pokemonV2MoveeffectchangeAggregateFieldsModelPrimitives = selectFromPokemonV2MoveeffectchangeAggregateFields().count
