/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetastatchangeAvgFieldsModel, PokemonV2MovemetastatchangeAvgFieldsModelType } from "./PokemonV2MovemetastatchangeAvgFieldsModel"
import { PokemonV2MovemetastatchangeAvgFieldsModelSelector } from "./PokemonV2MovemetastatchangeAvgFieldsModel.base"
import { PokemonV2MovemetastatchangeMaxFieldsModel, PokemonV2MovemetastatchangeMaxFieldsModelType } from "./PokemonV2MovemetastatchangeMaxFieldsModel"
import { PokemonV2MovemetastatchangeMaxFieldsModelSelector } from "./PokemonV2MovemetastatchangeMaxFieldsModel.base"
import { PokemonV2MovemetastatchangeMinFieldsModel, PokemonV2MovemetastatchangeMinFieldsModelType } from "./PokemonV2MovemetastatchangeMinFieldsModel"
import { PokemonV2MovemetastatchangeMinFieldsModelSelector } from "./PokemonV2MovemetastatchangeMinFieldsModel.base"
import { PokemonV2MovemetastatchangeStddevFieldsModel, PokemonV2MovemetastatchangeStddevFieldsModelType } from "./PokemonV2MovemetastatchangeStddevFieldsModel"
import { PokemonV2MovemetastatchangeStddevFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevFieldsModel.base"
import { PokemonV2MovemetastatchangeStddevPopFieldsModel, PokemonV2MovemetastatchangeStddevPopFieldsModelType } from "./PokemonV2MovemetastatchangeStddevPopFieldsModel"
import { PokemonV2MovemetastatchangeStddevPopFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevPopFieldsModel.base"
import { PokemonV2MovemetastatchangeStddevSampFieldsModel, PokemonV2MovemetastatchangeStddevSampFieldsModelType } from "./PokemonV2MovemetastatchangeStddevSampFieldsModel"
import { PokemonV2MovemetastatchangeStddevSampFieldsModelSelector } from "./PokemonV2MovemetastatchangeStddevSampFieldsModel.base"
import { PokemonV2MovemetastatchangeSumFieldsModel, PokemonV2MovemetastatchangeSumFieldsModelType } from "./PokemonV2MovemetastatchangeSumFieldsModel"
import { PokemonV2MovemetastatchangeSumFieldsModelSelector } from "./PokemonV2MovemetastatchangeSumFieldsModel.base"
import { PokemonV2MovemetastatchangeVarPopFieldsModel, PokemonV2MovemetastatchangeVarPopFieldsModelType } from "./PokemonV2MovemetastatchangeVarPopFieldsModel"
import { PokemonV2MovemetastatchangeVarPopFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarPopFieldsModel.base"
import { PokemonV2MovemetastatchangeVarSampFieldsModel, PokemonV2MovemetastatchangeVarSampFieldsModelType } from "./PokemonV2MovemetastatchangeVarSampFieldsModel"
import { PokemonV2MovemetastatchangeVarSampFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarSampFieldsModel.base"
import { PokemonV2MovemetastatchangeVarianceFieldsModel, PokemonV2MovemetastatchangeVarianceFieldsModelType } from "./PokemonV2MovemetastatchangeVarianceFieldsModel"
import { PokemonV2MovemetastatchangeVarianceFieldsModelSelector } from "./PokemonV2MovemetastatchangeVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetastatchangeAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetastatchangeAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetastatchangeAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetastatchange_aggregate_fields"), "pokemon_v2_movemetastatchange_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetastatchangeVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetastatchangeAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetastatchangeAvgFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeAvgFieldsModelSelector) => PokemonV2MovemetastatchangeAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetastatchangeAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetastatchangeMaxFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeMaxFieldsModelSelector) => PokemonV2MovemetastatchangeMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetastatchangeMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetastatchangeMinFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeMinFieldsModelSelector) => PokemonV2MovemetastatchangeMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetastatchangeMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetastatchangeStddevFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeStddevFieldsModelSelector) => PokemonV2MovemetastatchangeStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetastatchangeStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetastatchangeStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeStddevPopFieldsModelSelector) => PokemonV2MovemetastatchangeStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetastatchangeStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetastatchangeStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeStddevSampFieldsModelSelector) => PokemonV2MovemetastatchangeStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetastatchangeStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetastatchangeSumFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeSumFieldsModelSelector) => PokemonV2MovemetastatchangeSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetastatchangeSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetastatchangeVarPopFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeVarPopFieldsModelSelector) => PokemonV2MovemetastatchangeVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetastatchangeVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetastatchangeVarSampFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeVarSampFieldsModelSelector) => PokemonV2MovemetastatchangeVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetastatchangeVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetastatchangeVarianceFieldsModelSelector | ((selector: PokemonV2MovemetastatchangeVarianceFieldsModelSelector) => PokemonV2MovemetastatchangeVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetastatchangeVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetastatchangeAggregateFields() {
  return new PokemonV2MovemetastatchangeAggregateFieldsModelSelector()
}

export const pokemonV2MovemetastatchangeAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetastatchangeAggregateFields().count
