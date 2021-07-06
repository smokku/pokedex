/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemAvgFieldsModel, PokemonV2ItemAvgFieldsModelType } from "./PokemonV2ItemAvgFieldsModel"
import { PokemonV2ItemAvgFieldsModelSelector } from "./PokemonV2ItemAvgFieldsModel.base"
import { PokemonV2ItemMaxFieldsModel, PokemonV2ItemMaxFieldsModelType } from "./PokemonV2ItemMaxFieldsModel"
import { PokemonV2ItemMaxFieldsModelSelector } from "./PokemonV2ItemMaxFieldsModel.base"
import { PokemonV2ItemMinFieldsModel, PokemonV2ItemMinFieldsModelType } from "./PokemonV2ItemMinFieldsModel"
import { PokemonV2ItemMinFieldsModelSelector } from "./PokemonV2ItemMinFieldsModel.base"
import { PokemonV2ItemStddevFieldsModel, PokemonV2ItemStddevFieldsModelType } from "./PokemonV2ItemStddevFieldsModel"
import { PokemonV2ItemStddevFieldsModelSelector } from "./PokemonV2ItemStddevFieldsModel.base"
import { PokemonV2ItemStddevPopFieldsModel, PokemonV2ItemStddevPopFieldsModelType } from "./PokemonV2ItemStddevPopFieldsModel"
import { PokemonV2ItemStddevPopFieldsModelSelector } from "./PokemonV2ItemStddevPopFieldsModel.base"
import { PokemonV2ItemStddevSampFieldsModel, PokemonV2ItemStddevSampFieldsModelType } from "./PokemonV2ItemStddevSampFieldsModel"
import { PokemonV2ItemStddevSampFieldsModelSelector } from "./PokemonV2ItemStddevSampFieldsModel.base"
import { PokemonV2ItemSumFieldsModel, PokemonV2ItemSumFieldsModelType } from "./PokemonV2ItemSumFieldsModel"
import { PokemonV2ItemSumFieldsModelSelector } from "./PokemonV2ItemSumFieldsModel.base"
import { PokemonV2ItemVarPopFieldsModel, PokemonV2ItemVarPopFieldsModelType } from "./PokemonV2ItemVarPopFieldsModel"
import { PokemonV2ItemVarPopFieldsModelSelector } from "./PokemonV2ItemVarPopFieldsModel.base"
import { PokemonV2ItemVarSampFieldsModel, PokemonV2ItemVarSampFieldsModelType } from "./PokemonV2ItemVarSampFieldsModel"
import { PokemonV2ItemVarSampFieldsModelSelector } from "./PokemonV2ItemVarSampFieldsModel.base"
import { PokemonV2ItemVarianceFieldsModel, PokemonV2ItemVarianceFieldsModelType } from "./PokemonV2ItemVarianceFieldsModel"
import { PokemonV2ItemVarianceFieldsModelSelector } from "./PokemonV2ItemVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_item"
 */
export const PokemonV2ItemAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_item_aggregate_fields"), "pokemon_v2_item_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemAvgFieldsModelSelector | ((selector: PokemonV2ItemAvgFieldsModelSelector) => PokemonV2ItemAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemMaxFieldsModelSelector | ((selector: PokemonV2ItemMaxFieldsModelSelector) => PokemonV2ItemMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemMinFieldsModelSelector | ((selector: PokemonV2ItemMinFieldsModelSelector) => PokemonV2ItemMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemStddevFieldsModelSelector | ((selector: PokemonV2ItemStddevFieldsModelSelector) => PokemonV2ItemStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemStddevPopFieldsModelSelector | ((selector: PokemonV2ItemStddevPopFieldsModelSelector) => PokemonV2ItemStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemStddevSampFieldsModelSelector | ((selector: PokemonV2ItemStddevSampFieldsModelSelector) => PokemonV2ItemStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemSumFieldsModelSelector | ((selector: PokemonV2ItemSumFieldsModelSelector) => PokemonV2ItemSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemVarPopFieldsModelSelector | ((selector: PokemonV2ItemVarPopFieldsModelSelector) => PokemonV2ItemVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemVarSampFieldsModelSelector | ((selector: PokemonV2ItemVarSampFieldsModelSelector) => PokemonV2ItemVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemVarianceFieldsModelSelector | ((selector: PokemonV2ItemVarianceFieldsModelSelector) => PokemonV2ItemVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemAggregateFields() {
  return new PokemonV2ItemAggregateFieldsModelSelector()
}

export const pokemonV2ItemAggregateFieldsModelPrimitives = selectFromPokemonV2ItemAggregateFields().count
