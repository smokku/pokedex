/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovechangeAvgFieldsModel, PokemonV2MovechangeAvgFieldsModelType } from "./PokemonV2MovechangeAvgFieldsModel"
import { PokemonV2MovechangeAvgFieldsModelSelector } from "./PokemonV2MovechangeAvgFieldsModel.base"
import { PokemonV2MovechangeMaxFieldsModel, PokemonV2MovechangeMaxFieldsModelType } from "./PokemonV2MovechangeMaxFieldsModel"
import { PokemonV2MovechangeMaxFieldsModelSelector } from "./PokemonV2MovechangeMaxFieldsModel.base"
import { PokemonV2MovechangeMinFieldsModel, PokemonV2MovechangeMinFieldsModelType } from "./PokemonV2MovechangeMinFieldsModel"
import { PokemonV2MovechangeMinFieldsModelSelector } from "./PokemonV2MovechangeMinFieldsModel.base"
import { PokemonV2MovechangeStddevFieldsModel, PokemonV2MovechangeStddevFieldsModelType } from "./PokemonV2MovechangeStddevFieldsModel"
import { PokemonV2MovechangeStddevFieldsModelSelector } from "./PokemonV2MovechangeStddevFieldsModel.base"
import { PokemonV2MovechangeStddevPopFieldsModel, PokemonV2MovechangeStddevPopFieldsModelType } from "./PokemonV2MovechangeStddevPopFieldsModel"
import { PokemonV2MovechangeStddevPopFieldsModelSelector } from "./PokemonV2MovechangeStddevPopFieldsModel.base"
import { PokemonV2MovechangeStddevSampFieldsModel, PokemonV2MovechangeStddevSampFieldsModelType } from "./PokemonV2MovechangeStddevSampFieldsModel"
import { PokemonV2MovechangeStddevSampFieldsModelSelector } from "./PokemonV2MovechangeStddevSampFieldsModel.base"
import { PokemonV2MovechangeSumFieldsModel, PokemonV2MovechangeSumFieldsModelType } from "./PokemonV2MovechangeSumFieldsModel"
import { PokemonV2MovechangeSumFieldsModelSelector } from "./PokemonV2MovechangeSumFieldsModel.base"
import { PokemonV2MovechangeVarPopFieldsModel, PokemonV2MovechangeVarPopFieldsModelType } from "./PokemonV2MovechangeVarPopFieldsModel"
import { PokemonV2MovechangeVarPopFieldsModelSelector } from "./PokemonV2MovechangeVarPopFieldsModel.base"
import { PokemonV2MovechangeVarSampFieldsModel, PokemonV2MovechangeVarSampFieldsModelType } from "./PokemonV2MovechangeVarSampFieldsModel"
import { PokemonV2MovechangeVarSampFieldsModelSelector } from "./PokemonV2MovechangeVarSampFieldsModel.base"
import { PokemonV2MovechangeVarianceFieldsModel, PokemonV2MovechangeVarianceFieldsModelType } from "./PokemonV2MovechangeVarianceFieldsModel"
import { PokemonV2MovechangeVarianceFieldsModelSelector } from "./PokemonV2MovechangeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovechangeAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovechangeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movechange"
 */
export const PokemonV2MovechangeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovechangeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movechange_aggregate_fields"), "pokemon_v2_movechange_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovechangeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovechangeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovechangeAvgFieldsModelSelector | ((selector: PokemonV2MovechangeAvgFieldsModelSelector) => PokemonV2MovechangeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovechangeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovechangeMaxFieldsModelSelector | ((selector: PokemonV2MovechangeMaxFieldsModelSelector) => PokemonV2MovechangeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovechangeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovechangeMinFieldsModelSelector | ((selector: PokemonV2MovechangeMinFieldsModelSelector) => PokemonV2MovechangeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovechangeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovechangeStddevFieldsModelSelector | ((selector: PokemonV2MovechangeStddevFieldsModelSelector) => PokemonV2MovechangeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovechangeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovechangeStddevPopFieldsModelSelector | ((selector: PokemonV2MovechangeStddevPopFieldsModelSelector) => PokemonV2MovechangeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovechangeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovechangeStddevSampFieldsModelSelector | ((selector: PokemonV2MovechangeStddevSampFieldsModelSelector) => PokemonV2MovechangeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovechangeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovechangeSumFieldsModelSelector | ((selector: PokemonV2MovechangeSumFieldsModelSelector) => PokemonV2MovechangeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovechangeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovechangeVarPopFieldsModelSelector | ((selector: PokemonV2MovechangeVarPopFieldsModelSelector) => PokemonV2MovechangeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovechangeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovechangeVarSampFieldsModelSelector | ((selector: PokemonV2MovechangeVarSampFieldsModelSelector) => PokemonV2MovechangeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovechangeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovechangeVarianceFieldsModelSelector | ((selector: PokemonV2MovechangeVarianceFieldsModelSelector) => PokemonV2MovechangeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovechangeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovechangeAggregateFields() {
  return new PokemonV2MovechangeAggregateFieldsModelSelector()
}

export const pokemonV2MovechangeAggregateFieldsModelPrimitives = selectFromPokemonV2MovechangeAggregateFields().count
