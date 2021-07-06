/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflingeffectAvgFieldsModel, PokemonV2ItemflingeffectAvgFieldsModelType } from "./PokemonV2ItemflingeffectAvgFieldsModel"
import { PokemonV2ItemflingeffectAvgFieldsModelSelector } from "./PokemonV2ItemflingeffectAvgFieldsModel.base"
import { PokemonV2ItemflingeffectMaxFieldsModel, PokemonV2ItemflingeffectMaxFieldsModelType } from "./PokemonV2ItemflingeffectMaxFieldsModel"
import { PokemonV2ItemflingeffectMaxFieldsModelSelector } from "./PokemonV2ItemflingeffectMaxFieldsModel.base"
import { PokemonV2ItemflingeffectMinFieldsModel, PokemonV2ItemflingeffectMinFieldsModelType } from "./PokemonV2ItemflingeffectMinFieldsModel"
import { PokemonV2ItemflingeffectMinFieldsModelSelector } from "./PokemonV2ItemflingeffectMinFieldsModel.base"
import { PokemonV2ItemflingeffectStddevFieldsModel, PokemonV2ItemflingeffectStddevFieldsModelType } from "./PokemonV2ItemflingeffectStddevFieldsModel"
import { PokemonV2ItemflingeffectStddevFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevFieldsModel.base"
import { PokemonV2ItemflingeffectStddevPopFieldsModel, PokemonV2ItemflingeffectStddevPopFieldsModelType } from "./PokemonV2ItemflingeffectStddevPopFieldsModel"
import { PokemonV2ItemflingeffectStddevPopFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevPopFieldsModel.base"
import { PokemonV2ItemflingeffectStddevSampFieldsModel, PokemonV2ItemflingeffectStddevSampFieldsModelType } from "./PokemonV2ItemflingeffectStddevSampFieldsModel"
import { PokemonV2ItemflingeffectStddevSampFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevSampFieldsModel.base"
import { PokemonV2ItemflingeffectSumFieldsModel, PokemonV2ItemflingeffectSumFieldsModelType } from "./PokemonV2ItemflingeffectSumFieldsModel"
import { PokemonV2ItemflingeffectSumFieldsModelSelector } from "./PokemonV2ItemflingeffectSumFieldsModel.base"
import { PokemonV2ItemflingeffectVarPopFieldsModel, PokemonV2ItemflingeffectVarPopFieldsModelType } from "./PokemonV2ItemflingeffectVarPopFieldsModel"
import { PokemonV2ItemflingeffectVarPopFieldsModelSelector } from "./PokemonV2ItemflingeffectVarPopFieldsModel.base"
import { PokemonV2ItemflingeffectVarSampFieldsModel, PokemonV2ItemflingeffectVarSampFieldsModelType } from "./PokemonV2ItemflingeffectVarSampFieldsModel"
import { PokemonV2ItemflingeffectVarSampFieldsModelSelector } from "./PokemonV2ItemflingeffectVarSampFieldsModel.base"
import { PokemonV2ItemflingeffectVarianceFieldsModel, PokemonV2ItemflingeffectVarianceFieldsModelType } from "./PokemonV2ItemflingeffectVarianceFieldsModel"
import { PokemonV2ItemflingeffectVarianceFieldsModelSelector } from "./PokemonV2ItemflingeffectVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_aggregate_fields"), "pokemon_v2_itemflingeffect_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffectVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemflingeffectAvgFieldsModelSelector | ((selector: PokemonV2ItemflingeffectAvgFieldsModelSelector) => PokemonV2ItemflingeffectAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemflingeffectAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemflingeffectMaxFieldsModelSelector | ((selector: PokemonV2ItemflingeffectMaxFieldsModelSelector) => PokemonV2ItemflingeffectMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemflingeffectMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemflingeffectMinFieldsModelSelector | ((selector: PokemonV2ItemflingeffectMinFieldsModelSelector) => PokemonV2ItemflingeffectMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemflingeffectMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemflingeffectStddevFieldsModelSelector | ((selector: PokemonV2ItemflingeffectStddevFieldsModelSelector) => PokemonV2ItemflingeffectStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemflingeffectStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemflingeffectStddevPopFieldsModelSelector | ((selector: PokemonV2ItemflingeffectStddevPopFieldsModelSelector) => PokemonV2ItemflingeffectStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemflingeffectStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemflingeffectStddevSampFieldsModelSelector | ((selector: PokemonV2ItemflingeffectStddevSampFieldsModelSelector) => PokemonV2ItemflingeffectStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemflingeffectStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemflingeffectSumFieldsModelSelector | ((selector: PokemonV2ItemflingeffectSumFieldsModelSelector) => PokemonV2ItemflingeffectSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemflingeffectSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemflingeffectVarPopFieldsModelSelector | ((selector: PokemonV2ItemflingeffectVarPopFieldsModelSelector) => PokemonV2ItemflingeffectVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemflingeffectVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemflingeffectVarSampFieldsModelSelector | ((selector: PokemonV2ItemflingeffectVarSampFieldsModelSelector) => PokemonV2ItemflingeffectVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemflingeffectVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemflingeffectVarianceFieldsModelSelector | ((selector: PokemonV2ItemflingeffectVarianceFieldsModelSelector) => PokemonV2ItemflingeffectVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemflingeffectVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemflingeffectAggregateFields() {
  return new PokemonV2ItemflingeffectAggregateFieldsModelSelector()
}

export const pokemonV2ItemflingeffectAggregateFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectAggregateFields().count
