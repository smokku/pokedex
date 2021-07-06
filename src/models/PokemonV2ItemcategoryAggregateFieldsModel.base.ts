/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategoryAvgFieldsModel, PokemonV2ItemcategoryAvgFieldsModelType } from "./PokemonV2ItemcategoryAvgFieldsModel"
import { PokemonV2ItemcategoryAvgFieldsModelSelector } from "./PokemonV2ItemcategoryAvgFieldsModel.base"
import { PokemonV2ItemcategoryMaxFieldsModel, PokemonV2ItemcategoryMaxFieldsModelType } from "./PokemonV2ItemcategoryMaxFieldsModel"
import { PokemonV2ItemcategoryMaxFieldsModelSelector } from "./PokemonV2ItemcategoryMaxFieldsModel.base"
import { PokemonV2ItemcategoryMinFieldsModel, PokemonV2ItemcategoryMinFieldsModelType } from "./PokemonV2ItemcategoryMinFieldsModel"
import { PokemonV2ItemcategoryMinFieldsModelSelector } from "./PokemonV2ItemcategoryMinFieldsModel.base"
import { PokemonV2ItemcategoryStddevFieldsModel, PokemonV2ItemcategoryStddevFieldsModelType } from "./PokemonV2ItemcategoryStddevFieldsModel"
import { PokemonV2ItemcategoryStddevFieldsModelSelector } from "./PokemonV2ItemcategoryStddevFieldsModel.base"
import { PokemonV2ItemcategoryStddevPopFieldsModel, PokemonV2ItemcategoryStddevPopFieldsModelType } from "./PokemonV2ItemcategoryStddevPopFieldsModel"
import { PokemonV2ItemcategoryStddevPopFieldsModelSelector } from "./PokemonV2ItemcategoryStddevPopFieldsModel.base"
import { PokemonV2ItemcategoryStddevSampFieldsModel, PokemonV2ItemcategoryStddevSampFieldsModelType } from "./PokemonV2ItemcategoryStddevSampFieldsModel"
import { PokemonV2ItemcategoryStddevSampFieldsModelSelector } from "./PokemonV2ItemcategoryStddevSampFieldsModel.base"
import { PokemonV2ItemcategorySumFieldsModel, PokemonV2ItemcategorySumFieldsModelType } from "./PokemonV2ItemcategorySumFieldsModel"
import { PokemonV2ItemcategorySumFieldsModelSelector } from "./PokemonV2ItemcategorySumFieldsModel.base"
import { PokemonV2ItemcategoryVarPopFieldsModel, PokemonV2ItemcategoryVarPopFieldsModelType } from "./PokemonV2ItemcategoryVarPopFieldsModel"
import { PokemonV2ItemcategoryVarPopFieldsModelSelector } from "./PokemonV2ItemcategoryVarPopFieldsModel.base"
import { PokemonV2ItemcategoryVarSampFieldsModel, PokemonV2ItemcategoryVarSampFieldsModelType } from "./PokemonV2ItemcategoryVarSampFieldsModel"
import { PokemonV2ItemcategoryVarSampFieldsModelSelector } from "./PokemonV2ItemcategoryVarSampFieldsModel.base"
import { PokemonV2ItemcategoryVarianceFieldsModel, PokemonV2ItemcategoryVarianceFieldsModelType } from "./PokemonV2ItemcategoryVarianceFieldsModel"
import { PokemonV2ItemcategoryVarianceFieldsModelSelector } from "./PokemonV2ItemcategoryVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategoryAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemcategoryAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategoryAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategory_aggregate_fields"), "pokemon_v2_itemcategory_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategoryVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategoryAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemcategoryAvgFieldsModelSelector | ((selector: PokemonV2ItemcategoryAvgFieldsModelSelector) => PokemonV2ItemcategoryAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemcategoryAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemcategoryMaxFieldsModelSelector | ((selector: PokemonV2ItemcategoryMaxFieldsModelSelector) => PokemonV2ItemcategoryMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemcategoryMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemcategoryMinFieldsModelSelector | ((selector: PokemonV2ItemcategoryMinFieldsModelSelector) => PokemonV2ItemcategoryMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemcategoryMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemcategoryStddevFieldsModelSelector | ((selector: PokemonV2ItemcategoryStddevFieldsModelSelector) => PokemonV2ItemcategoryStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemcategoryStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemcategoryStddevPopFieldsModelSelector | ((selector: PokemonV2ItemcategoryStddevPopFieldsModelSelector) => PokemonV2ItemcategoryStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemcategoryStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemcategoryStddevSampFieldsModelSelector | ((selector: PokemonV2ItemcategoryStddevSampFieldsModelSelector) => PokemonV2ItemcategoryStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemcategoryStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemcategorySumFieldsModelSelector | ((selector: PokemonV2ItemcategorySumFieldsModelSelector) => PokemonV2ItemcategorySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemcategorySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemcategoryVarPopFieldsModelSelector | ((selector: PokemonV2ItemcategoryVarPopFieldsModelSelector) => PokemonV2ItemcategoryVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemcategoryVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemcategoryVarSampFieldsModelSelector | ((selector: PokemonV2ItemcategoryVarSampFieldsModelSelector) => PokemonV2ItemcategoryVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemcategoryVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemcategoryVarianceFieldsModelSelector | ((selector: PokemonV2ItemcategoryVarianceFieldsModelSelector) => PokemonV2ItemcategoryVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemcategoryVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemcategoryAggregateFields() {
  return new PokemonV2ItemcategoryAggregateFieldsModelSelector()
}

export const pokemonV2ItemcategoryAggregateFieldsModelPrimitives = selectFromPokemonV2ItemcategoryAggregateFields().count
