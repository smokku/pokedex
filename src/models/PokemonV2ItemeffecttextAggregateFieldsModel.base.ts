/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemeffecttextAvgFieldsModel, PokemonV2ItemeffecttextAvgFieldsModelType } from "./PokemonV2ItemeffecttextAvgFieldsModel"
import { PokemonV2ItemeffecttextAvgFieldsModelSelector } from "./PokemonV2ItemeffecttextAvgFieldsModel.base"
import { PokemonV2ItemeffecttextMaxFieldsModel, PokemonV2ItemeffecttextMaxFieldsModelType } from "./PokemonV2ItemeffecttextMaxFieldsModel"
import { PokemonV2ItemeffecttextMaxFieldsModelSelector } from "./PokemonV2ItemeffecttextMaxFieldsModel.base"
import { PokemonV2ItemeffecttextMinFieldsModel, PokemonV2ItemeffecttextMinFieldsModelType } from "./PokemonV2ItemeffecttextMinFieldsModel"
import { PokemonV2ItemeffecttextMinFieldsModelSelector } from "./PokemonV2ItemeffecttextMinFieldsModel.base"
import { PokemonV2ItemeffecttextStddevFieldsModel, PokemonV2ItemeffecttextStddevFieldsModelType } from "./PokemonV2ItemeffecttextStddevFieldsModel"
import { PokemonV2ItemeffecttextStddevFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevFieldsModel.base"
import { PokemonV2ItemeffecttextStddevPopFieldsModel, PokemonV2ItemeffecttextStddevPopFieldsModelType } from "./PokemonV2ItemeffecttextStddevPopFieldsModel"
import { PokemonV2ItemeffecttextStddevPopFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevPopFieldsModel.base"
import { PokemonV2ItemeffecttextStddevSampFieldsModel, PokemonV2ItemeffecttextStddevSampFieldsModelType } from "./PokemonV2ItemeffecttextStddevSampFieldsModel"
import { PokemonV2ItemeffecttextStddevSampFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevSampFieldsModel.base"
import { PokemonV2ItemeffecttextSumFieldsModel, PokemonV2ItemeffecttextSumFieldsModelType } from "./PokemonV2ItemeffecttextSumFieldsModel"
import { PokemonV2ItemeffecttextSumFieldsModelSelector } from "./PokemonV2ItemeffecttextSumFieldsModel.base"
import { PokemonV2ItemeffecttextVarPopFieldsModel, PokemonV2ItemeffecttextVarPopFieldsModelType } from "./PokemonV2ItemeffecttextVarPopFieldsModel"
import { PokemonV2ItemeffecttextVarPopFieldsModelSelector } from "./PokemonV2ItemeffecttextVarPopFieldsModel.base"
import { PokemonV2ItemeffecttextVarSampFieldsModel, PokemonV2ItemeffecttextVarSampFieldsModelType } from "./PokemonV2ItemeffecttextVarSampFieldsModel"
import { PokemonV2ItemeffecttextVarSampFieldsModelSelector } from "./PokemonV2ItemeffecttextVarSampFieldsModel.base"
import { PokemonV2ItemeffecttextVarianceFieldsModel, PokemonV2ItemeffecttextVarianceFieldsModelType } from "./PokemonV2ItemeffecttextVarianceFieldsModel"
import { PokemonV2ItemeffecttextVarianceFieldsModelSelector } from "./PokemonV2ItemeffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemeffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemeffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemeffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemeffecttext_aggregate_fields"), "pokemon_v2_itemeffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemeffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemeffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemeffecttextAvgFieldsModelSelector | ((selector: PokemonV2ItemeffecttextAvgFieldsModelSelector) => PokemonV2ItemeffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemeffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemeffecttextMaxFieldsModelSelector | ((selector: PokemonV2ItemeffecttextMaxFieldsModelSelector) => PokemonV2ItemeffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemeffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemeffecttextMinFieldsModelSelector | ((selector: PokemonV2ItemeffecttextMinFieldsModelSelector) => PokemonV2ItemeffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemeffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemeffecttextStddevFieldsModelSelector | ((selector: PokemonV2ItemeffecttextStddevFieldsModelSelector) => PokemonV2ItemeffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemeffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemeffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2ItemeffecttextStddevPopFieldsModelSelector) => PokemonV2ItemeffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemeffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemeffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2ItemeffecttextStddevSampFieldsModelSelector) => PokemonV2ItemeffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemeffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemeffecttextSumFieldsModelSelector | ((selector: PokemonV2ItemeffecttextSumFieldsModelSelector) => PokemonV2ItemeffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemeffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemeffecttextVarPopFieldsModelSelector | ((selector: PokemonV2ItemeffecttextVarPopFieldsModelSelector) => PokemonV2ItemeffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemeffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemeffecttextVarSampFieldsModelSelector | ((selector: PokemonV2ItemeffecttextVarSampFieldsModelSelector) => PokemonV2ItemeffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemeffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemeffecttextVarianceFieldsModelSelector | ((selector: PokemonV2ItemeffecttextVarianceFieldsModelSelector) => PokemonV2ItemeffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemeffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemeffecttextAggregateFields() {
  return new PokemonV2ItemeffecttextAggregateFieldsModelSelector()
}

export const pokemonV2ItemeffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2ItemeffecttextAggregateFields().count
