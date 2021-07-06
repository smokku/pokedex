/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemspritesAvgFieldsModel, PokemonV2ItemspritesAvgFieldsModelType } from "./PokemonV2ItemspritesAvgFieldsModel"
import { PokemonV2ItemspritesAvgFieldsModelSelector } from "./PokemonV2ItemspritesAvgFieldsModel.base"
import { PokemonV2ItemspritesMaxFieldsModel, PokemonV2ItemspritesMaxFieldsModelType } from "./PokemonV2ItemspritesMaxFieldsModel"
import { PokemonV2ItemspritesMaxFieldsModelSelector } from "./PokemonV2ItemspritesMaxFieldsModel.base"
import { PokemonV2ItemspritesMinFieldsModel, PokemonV2ItemspritesMinFieldsModelType } from "./PokemonV2ItemspritesMinFieldsModel"
import { PokemonV2ItemspritesMinFieldsModelSelector } from "./PokemonV2ItemspritesMinFieldsModel.base"
import { PokemonV2ItemspritesStddevFieldsModel, PokemonV2ItemspritesStddevFieldsModelType } from "./PokemonV2ItemspritesStddevFieldsModel"
import { PokemonV2ItemspritesStddevFieldsModelSelector } from "./PokemonV2ItemspritesStddevFieldsModel.base"
import { PokemonV2ItemspritesStddevPopFieldsModel, PokemonV2ItemspritesStddevPopFieldsModelType } from "./PokemonV2ItemspritesStddevPopFieldsModel"
import { PokemonV2ItemspritesStddevPopFieldsModelSelector } from "./PokemonV2ItemspritesStddevPopFieldsModel.base"
import { PokemonV2ItemspritesStddevSampFieldsModel, PokemonV2ItemspritesStddevSampFieldsModelType } from "./PokemonV2ItemspritesStddevSampFieldsModel"
import { PokemonV2ItemspritesStddevSampFieldsModelSelector } from "./PokemonV2ItemspritesStddevSampFieldsModel.base"
import { PokemonV2ItemspritesSumFieldsModel, PokemonV2ItemspritesSumFieldsModelType } from "./PokemonV2ItemspritesSumFieldsModel"
import { PokemonV2ItemspritesSumFieldsModelSelector } from "./PokemonV2ItemspritesSumFieldsModel.base"
import { PokemonV2ItemspritesVarPopFieldsModel, PokemonV2ItemspritesVarPopFieldsModelType } from "./PokemonV2ItemspritesVarPopFieldsModel"
import { PokemonV2ItemspritesVarPopFieldsModelSelector } from "./PokemonV2ItemspritesVarPopFieldsModel.base"
import { PokemonV2ItemspritesVarSampFieldsModel, PokemonV2ItemspritesVarSampFieldsModelType } from "./PokemonV2ItemspritesVarSampFieldsModel"
import { PokemonV2ItemspritesVarSampFieldsModelSelector } from "./PokemonV2ItemspritesVarSampFieldsModel.base"
import { PokemonV2ItemspritesVarianceFieldsModel, PokemonV2ItemspritesVarianceFieldsModelType } from "./PokemonV2ItemspritesVarianceFieldsModel"
import { PokemonV2ItemspritesVarianceFieldsModelSelector } from "./PokemonV2ItemspritesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemspritesAggregateFieldsBase
 * auto generated base class for the model PokemonV2ItemspritesAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesAggregateFieldsModelBase = ModelBase
  .named('PokemonV2ItemspritesAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemsprites_aggregate_fields"), "pokemon_v2_itemsprites_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2ItemspritesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemspritesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2ItemspritesAvgFieldsModelSelector | ((selector: PokemonV2ItemspritesAvgFieldsModelSelector) => PokemonV2ItemspritesAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2ItemspritesAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2ItemspritesMaxFieldsModelSelector | ((selector: PokemonV2ItemspritesMaxFieldsModelSelector) => PokemonV2ItemspritesMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2ItemspritesMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2ItemspritesMinFieldsModelSelector | ((selector: PokemonV2ItemspritesMinFieldsModelSelector) => PokemonV2ItemspritesMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2ItemspritesMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2ItemspritesStddevFieldsModelSelector | ((selector: PokemonV2ItemspritesStddevFieldsModelSelector) => PokemonV2ItemspritesStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2ItemspritesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2ItemspritesStddevPopFieldsModelSelector | ((selector: PokemonV2ItemspritesStddevPopFieldsModelSelector) => PokemonV2ItemspritesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2ItemspritesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2ItemspritesStddevSampFieldsModelSelector | ((selector: PokemonV2ItemspritesStddevSampFieldsModelSelector) => PokemonV2ItemspritesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2ItemspritesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2ItemspritesSumFieldsModelSelector | ((selector: PokemonV2ItemspritesSumFieldsModelSelector) => PokemonV2ItemspritesSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2ItemspritesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2ItemspritesVarPopFieldsModelSelector | ((selector: PokemonV2ItemspritesVarPopFieldsModelSelector) => PokemonV2ItemspritesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2ItemspritesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2ItemspritesVarSampFieldsModelSelector | ((selector: PokemonV2ItemspritesVarSampFieldsModelSelector) => PokemonV2ItemspritesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2ItemspritesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2ItemspritesVarianceFieldsModelSelector | ((selector: PokemonV2ItemspritesVarianceFieldsModelSelector) => PokemonV2ItemspritesVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2ItemspritesVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2ItemspritesAggregateFields() {
  return new PokemonV2ItemspritesAggregateFieldsModelSelector()
}

export const pokemonV2ItemspritesAggregateFieldsModelPrimitives = selectFromPokemonV2ItemspritesAggregateFields().count
