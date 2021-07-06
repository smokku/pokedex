/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemflingeffecteffecttextAvgFieldsModel, PokemonV2ItemflingeffecteffecttextAvgFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextAvgFieldsModel"
import { PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextAvgFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextMaxFieldsModel, PokemonV2ItemflingeffecteffecttextMaxFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextMaxFieldsModel"
import { PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextMaxFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextMinFieldsModel, PokemonV2ItemflingeffecteffecttextMinFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextMinFieldsModel"
import { PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextMinFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextStddevFieldsModel, PokemonV2ItemflingeffecteffecttextStddevFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextStddevFieldsModel"
import { PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel, PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel"
import { PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel, PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel"
import { PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextSumFieldsModel, PokemonV2ItemflingeffecteffecttextSumFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextSumFieldsModel"
import { PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextSumFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextVarPopFieldsModel, PokemonV2ItemflingeffecteffecttextVarPopFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextVarPopFieldsModel"
import { PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarPopFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextVarSampFieldsModel, PokemonV2ItemflingeffecteffecttextVarSampFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextVarSampFieldsModel"
import { PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarSampFieldsModel.base"
import { PokemonV2ItemflingeffecteffecttextVarianceFieldsModel, PokemonV2ItemflingeffecteffecttextVarianceFieldsModelType } from "./PokemonV2ItemflingeffecteffecttextVarianceFieldsModel"
import { PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_aggregate_fields"), "pokemon_v2_itemflingeffecteffecttext_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemflingeffecteffecttextVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemflingeffecteffecttextStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemflingeffecteffecttextVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector | ((selector: PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector) => PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextAggregateFields() {
  return new PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextAggregateFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextAggregateFields().count
