/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovemetacategoryAvgFieldsModel, PokemonV2MovemetacategoryAvgFieldsModelType } from "./PokemonV2MovemetacategoryAvgFieldsModel"
import { PokemonV2MovemetacategoryAvgFieldsModelSelector } from "./PokemonV2MovemetacategoryAvgFieldsModel.base"
import { PokemonV2MovemetacategoryMaxFieldsModel, PokemonV2MovemetacategoryMaxFieldsModelType } from "./PokemonV2MovemetacategoryMaxFieldsModel"
import { PokemonV2MovemetacategoryMaxFieldsModelSelector } from "./PokemonV2MovemetacategoryMaxFieldsModel.base"
import { PokemonV2MovemetacategoryMinFieldsModel, PokemonV2MovemetacategoryMinFieldsModelType } from "./PokemonV2MovemetacategoryMinFieldsModel"
import { PokemonV2MovemetacategoryMinFieldsModelSelector } from "./PokemonV2MovemetacategoryMinFieldsModel.base"
import { PokemonV2MovemetacategoryStddevFieldsModel, PokemonV2MovemetacategoryStddevFieldsModelType } from "./PokemonV2MovemetacategoryStddevFieldsModel"
import { PokemonV2MovemetacategoryStddevFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevFieldsModel.base"
import { PokemonV2MovemetacategoryStddevPopFieldsModel, PokemonV2MovemetacategoryStddevPopFieldsModelType } from "./PokemonV2MovemetacategoryStddevPopFieldsModel"
import { PokemonV2MovemetacategoryStddevPopFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevPopFieldsModel.base"
import { PokemonV2MovemetacategoryStddevSampFieldsModel, PokemonV2MovemetacategoryStddevSampFieldsModelType } from "./PokemonV2MovemetacategoryStddevSampFieldsModel"
import { PokemonV2MovemetacategoryStddevSampFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevSampFieldsModel.base"
import { PokemonV2MovemetacategorySumFieldsModel, PokemonV2MovemetacategorySumFieldsModelType } from "./PokemonV2MovemetacategorySumFieldsModel"
import { PokemonV2MovemetacategorySumFieldsModelSelector } from "./PokemonV2MovemetacategorySumFieldsModel.base"
import { PokemonV2MovemetacategoryVarPopFieldsModel, PokemonV2MovemetacategoryVarPopFieldsModelType } from "./PokemonV2MovemetacategoryVarPopFieldsModel"
import { PokemonV2MovemetacategoryVarPopFieldsModelSelector } from "./PokemonV2MovemetacategoryVarPopFieldsModel.base"
import { PokemonV2MovemetacategoryVarSampFieldsModel, PokemonV2MovemetacategoryVarSampFieldsModelType } from "./PokemonV2MovemetacategoryVarSampFieldsModel"
import { PokemonV2MovemetacategoryVarSampFieldsModelSelector } from "./PokemonV2MovemetacategoryVarSampFieldsModel.base"
import { PokemonV2MovemetacategoryVarianceFieldsModel, PokemonV2MovemetacategoryVarianceFieldsModelType } from "./PokemonV2MovemetacategoryVarianceFieldsModel"
import { PokemonV2MovemetacategoryVarianceFieldsModelSelector } from "./PokemonV2MovemetacategoryVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovemetacategoryAggregateFieldsBase
 * auto generated base class for the model PokemonV2MovemetacategoryAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MovemetacategoryAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movemetacategory_aggregate_fields"), "pokemon_v2_movemetacategory_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategorySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MovemetacategoryVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovemetacategoryAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MovemetacategoryAvgFieldsModelSelector | ((selector: PokemonV2MovemetacategoryAvgFieldsModelSelector) => PokemonV2MovemetacategoryAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MovemetacategoryAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MovemetacategoryMaxFieldsModelSelector | ((selector: PokemonV2MovemetacategoryMaxFieldsModelSelector) => PokemonV2MovemetacategoryMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MovemetacategoryMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MovemetacategoryMinFieldsModelSelector | ((selector: PokemonV2MovemetacategoryMinFieldsModelSelector) => PokemonV2MovemetacategoryMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MovemetacategoryMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MovemetacategoryStddevFieldsModelSelector | ((selector: PokemonV2MovemetacategoryStddevFieldsModelSelector) => PokemonV2MovemetacategoryStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MovemetacategoryStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MovemetacategoryStddevPopFieldsModelSelector | ((selector: PokemonV2MovemetacategoryStddevPopFieldsModelSelector) => PokemonV2MovemetacategoryStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MovemetacategoryStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MovemetacategoryStddevSampFieldsModelSelector | ((selector: PokemonV2MovemetacategoryStddevSampFieldsModelSelector) => PokemonV2MovemetacategoryStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MovemetacategoryStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MovemetacategorySumFieldsModelSelector | ((selector: PokemonV2MovemetacategorySumFieldsModelSelector) => PokemonV2MovemetacategorySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MovemetacategorySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MovemetacategoryVarPopFieldsModelSelector | ((selector: PokemonV2MovemetacategoryVarPopFieldsModelSelector) => PokemonV2MovemetacategoryVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MovemetacategoryVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MovemetacategoryVarSampFieldsModelSelector | ((selector: PokemonV2MovemetacategoryVarSampFieldsModelSelector) => PokemonV2MovemetacategoryVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MovemetacategoryVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MovemetacategoryVarianceFieldsModelSelector | ((selector: PokemonV2MovemetacategoryVarianceFieldsModelSelector) => PokemonV2MovemetacategoryVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MovemetacategoryVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MovemetacategoryAggregateFields() {
  return new PokemonV2MovemetacategoryAggregateFieldsModelSelector()
}

export const pokemonV2MovemetacategoryAggregateFieldsModelPrimitives = selectFromPokemonV2MovemetacategoryAggregateFields().count
