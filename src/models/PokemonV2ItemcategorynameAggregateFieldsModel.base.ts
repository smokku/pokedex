/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemcategorynameAvgFieldsModel, PokemonV2ItemcategorynameAvgFieldsModelType } from "./PokemonV2ItemcategorynameAvgFieldsModel"
import { PokemonV2ItemcategorynameAvgFieldsModelSelector } from "./PokemonV2ItemcategorynameAvgFieldsModel.base"
import { PokemonV2ItemcategorynameMaxFieldsModel, PokemonV2ItemcategorynameMaxFieldsModelType } from "./PokemonV2ItemcategorynameMaxFieldsModel"
import { PokemonV2ItemcategorynameMaxFieldsModelSelector } from "./PokemonV2ItemcategorynameMaxFieldsModel.base"
import { PokemonV2ItemcategorynameMinFieldsModel, PokemonV2ItemcategorynameMinFieldsModelType } from "./PokemonV2ItemcategorynameMinFieldsModel"
import { PokemonV2ItemcategorynameMinFieldsModelSelector } from "./PokemonV2ItemcategorynameMinFieldsModel.base"
import { PokemonV2ItemcategorynameStddevFieldsModel, PokemonV2ItemcategorynameStddevFieldsModelType } from "./PokemonV2ItemcategorynameStddevFieldsModel"
import { PokemonV2ItemcategorynameStddevFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevFieldsModel.base"
import { PokemonV2ItemcategorynameStddevPopFieldsModel, PokemonV2ItemcategorynameStddevPopFieldsModelType } from "./PokemonV2ItemcategorynameStddevPopFieldsModel"
import { PokemonV2ItemcategorynameStddevPopFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevPopFieldsModel.base"
import { PokemonV2ItemcategorynameStddevSampFieldsModel, PokemonV2ItemcategorynameStddevSampFieldsModelType } from "./PokemonV2ItemcategorynameStddevSampFieldsModel"
import { PokemonV2ItemcategorynameStddevSampFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevSampFieldsModel.base"
import { PokemonV2ItemcategorynameSumFieldsModel, PokemonV2ItemcategorynameSumFieldsModelType } from "./PokemonV2ItemcategorynameSumFieldsModel"
import { PokemonV2ItemcategorynameSumFieldsModelSelector } from "./PokemonV2ItemcategorynameSumFieldsModel.base"
import { PokemonV2ItemcategorynameVarPopFieldsModel, PokemonV2ItemcategorynameVarPopFieldsModelType } from "./PokemonV2ItemcategorynameVarPopFieldsModel"
import { PokemonV2ItemcategorynameVarPopFieldsModelSelector } from "./PokemonV2ItemcategorynameVarPopFieldsModel.base"
import { PokemonV2ItemcategorynameVarSampFieldsModel, PokemonV2ItemcategorynameVarSampFieldsModelType } from "./PokemonV2ItemcategorynameVarSampFieldsModel"
import { PokemonV2ItemcategorynameVarSampFieldsModelSelector } from "./PokemonV2ItemcategorynameVarSampFieldsModel.base"
import { PokemonV2ItemcategorynameVarianceFieldsModel, PokemonV2ItemcategorynameVarianceFieldsModelType } from "./PokemonV2ItemcategorynameVarianceFieldsModel"
import { PokemonV2ItemcategorynameVarianceFieldsModelSelector } from "./PokemonV2ItemcategorynameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemcategorynameAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemcategorynameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemcategorynameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemcategoryname_aggregate_fields"), "pokemon_v2_itemcategoryname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemcategorynameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemcategorynameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemcategorynameAvgFieldsModelSelector | ((selector: PokemonV2ItemcategorynameAvgFieldsModelSelector) => PokemonV2ItemcategorynameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemcategorynameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemcategorynameMaxFieldsModelSelector | ((selector: PokemonV2ItemcategorynameMaxFieldsModelSelector) => PokemonV2ItemcategorynameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemcategorynameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemcategorynameMinFieldsModelSelector | ((selector: PokemonV2ItemcategorynameMinFieldsModelSelector) => PokemonV2ItemcategorynameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemcategorynameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemcategorynameStddevFieldsModelSelector | ((selector: PokemonV2ItemcategorynameStddevFieldsModelSelector) => PokemonV2ItemcategorynameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemcategorynameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemcategorynameStddevPopFieldsModelSelector | ((selector: PokemonV2ItemcategorynameStddevPopFieldsModelSelector) => PokemonV2ItemcategorynameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemcategorynameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemcategorynameStddevSampFieldsModelSelector | ((selector: PokemonV2ItemcategorynameStddevSampFieldsModelSelector) => PokemonV2ItemcategorynameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemcategorynameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemcategorynameSumFieldsModelSelector | ((selector: PokemonV2ItemcategorynameSumFieldsModelSelector) => PokemonV2ItemcategorynameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemcategorynameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemcategorynameVarPopFieldsModelSelector | ((selector: PokemonV2ItemcategorynameVarPopFieldsModelSelector) => PokemonV2ItemcategorynameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemcategorynameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemcategorynameVarSampFieldsModelSelector | ((selector: PokemonV2ItemcategorynameVarSampFieldsModelSelector) => PokemonV2ItemcategorynameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemcategorynameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemcategorynameVarianceFieldsModelSelector | ((selector: PokemonV2ItemcategorynameVarianceFieldsModelSelector) => PokemonV2ItemcategorynameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemcategorynameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemcategorynameAggregateFields() {
  return new PokemonV2ItemcategorynameAggregateFieldsModelSelector()
}

export const pokemonV2ItemcategorynameAggregateFieldsModelPrimitives = selectFromPokemonV2ItemcategorynameAggregateFields().count
