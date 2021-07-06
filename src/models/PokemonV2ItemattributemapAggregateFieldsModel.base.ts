/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributemapAvgFieldsModel, PokemonV2ItemattributemapAvgFieldsModelType } from "./PokemonV2ItemattributemapAvgFieldsModel"
import { PokemonV2ItemattributemapAvgFieldsModelSelector } from "./PokemonV2ItemattributemapAvgFieldsModel.base"
import { PokemonV2ItemattributemapMaxFieldsModel, PokemonV2ItemattributemapMaxFieldsModelType } from "./PokemonV2ItemattributemapMaxFieldsModel"
import { PokemonV2ItemattributemapMaxFieldsModelSelector } from "./PokemonV2ItemattributemapMaxFieldsModel.base"
import { PokemonV2ItemattributemapMinFieldsModel, PokemonV2ItemattributemapMinFieldsModelType } from "./PokemonV2ItemattributemapMinFieldsModel"
import { PokemonV2ItemattributemapMinFieldsModelSelector } from "./PokemonV2ItemattributemapMinFieldsModel.base"
import { PokemonV2ItemattributemapStddevFieldsModel, PokemonV2ItemattributemapStddevFieldsModelType } from "./PokemonV2ItemattributemapStddevFieldsModel"
import { PokemonV2ItemattributemapStddevFieldsModelSelector } from "./PokemonV2ItemattributemapStddevFieldsModel.base"
import { PokemonV2ItemattributemapStddevPopFieldsModel, PokemonV2ItemattributemapStddevPopFieldsModelType } from "./PokemonV2ItemattributemapStddevPopFieldsModel"
import { PokemonV2ItemattributemapStddevPopFieldsModelSelector } from "./PokemonV2ItemattributemapStddevPopFieldsModel.base"
import { PokemonV2ItemattributemapStddevSampFieldsModel, PokemonV2ItemattributemapStddevSampFieldsModelType } from "./PokemonV2ItemattributemapStddevSampFieldsModel"
import { PokemonV2ItemattributemapStddevSampFieldsModelSelector } from "./PokemonV2ItemattributemapStddevSampFieldsModel.base"
import { PokemonV2ItemattributemapSumFieldsModel, PokemonV2ItemattributemapSumFieldsModelType } from "./PokemonV2ItemattributemapSumFieldsModel"
import { PokemonV2ItemattributemapSumFieldsModelSelector } from "./PokemonV2ItemattributemapSumFieldsModel.base"
import { PokemonV2ItemattributemapVarPopFieldsModel, PokemonV2ItemattributemapVarPopFieldsModelType } from "./PokemonV2ItemattributemapVarPopFieldsModel"
import { PokemonV2ItemattributemapVarPopFieldsModelSelector } from "./PokemonV2ItemattributemapVarPopFieldsModel.base"
import { PokemonV2ItemattributemapVarSampFieldsModel, PokemonV2ItemattributemapVarSampFieldsModelType } from "./PokemonV2ItemattributemapVarSampFieldsModel"
import { PokemonV2ItemattributemapVarSampFieldsModelSelector } from "./PokemonV2ItemattributemapVarSampFieldsModel.base"
import { PokemonV2ItemattributemapVarianceFieldsModel, PokemonV2ItemattributemapVarianceFieldsModelType } from "./PokemonV2ItemattributemapVarianceFieldsModel"
import { PokemonV2ItemattributemapVarianceFieldsModelSelector } from "./PokemonV2ItemattributemapVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributemapAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemattributemapAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemattributemapAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattributemap_aggregate_fields"), "pokemon_v2_itemattributemap_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemattributemapVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributemapAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemattributemapAvgFieldsModelSelector | ((selector: PokemonV2ItemattributemapAvgFieldsModelSelector) => PokemonV2ItemattributemapAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemattributemapAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemattributemapMaxFieldsModelSelector | ((selector: PokemonV2ItemattributemapMaxFieldsModelSelector) => PokemonV2ItemattributemapMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemattributemapMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemattributemapMinFieldsModelSelector | ((selector: PokemonV2ItemattributemapMinFieldsModelSelector) => PokemonV2ItemattributemapMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemattributemapMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemattributemapStddevFieldsModelSelector | ((selector: PokemonV2ItemattributemapStddevFieldsModelSelector) => PokemonV2ItemattributemapStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemattributemapStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemattributemapStddevPopFieldsModelSelector | ((selector: PokemonV2ItemattributemapStddevPopFieldsModelSelector) => PokemonV2ItemattributemapStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemattributemapStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemattributemapStddevSampFieldsModelSelector | ((selector: PokemonV2ItemattributemapStddevSampFieldsModelSelector) => PokemonV2ItemattributemapStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemattributemapStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemattributemapSumFieldsModelSelector | ((selector: PokemonV2ItemattributemapSumFieldsModelSelector) => PokemonV2ItemattributemapSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemattributemapSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemattributemapVarPopFieldsModelSelector | ((selector: PokemonV2ItemattributemapVarPopFieldsModelSelector) => PokemonV2ItemattributemapVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemattributemapVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemattributemapVarSampFieldsModelSelector | ((selector: PokemonV2ItemattributemapVarSampFieldsModelSelector) => PokemonV2ItemattributemapVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemattributemapVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemattributemapVarianceFieldsModelSelector | ((selector: PokemonV2ItemattributemapVarianceFieldsModelSelector) => PokemonV2ItemattributemapVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemattributemapVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemattributemapAggregateFields() {
  return new PokemonV2ItemattributemapAggregateFieldsModelSelector()
}

export const pokemonV2ItemattributemapAggregateFieldsModelPrimitives = selectFromPokemonV2ItemattributemapAggregateFields().count
