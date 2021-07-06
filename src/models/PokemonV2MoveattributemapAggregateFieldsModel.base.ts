/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveattributemapAvgFieldsModel, PokemonV2MoveattributemapAvgFieldsModelType } from "./PokemonV2MoveattributemapAvgFieldsModel"
import { PokemonV2MoveattributemapAvgFieldsModelSelector } from "./PokemonV2MoveattributemapAvgFieldsModel.base"
import { PokemonV2MoveattributemapMaxFieldsModel, PokemonV2MoveattributemapMaxFieldsModelType } from "./PokemonV2MoveattributemapMaxFieldsModel"
import { PokemonV2MoveattributemapMaxFieldsModelSelector } from "./PokemonV2MoveattributemapMaxFieldsModel.base"
import { PokemonV2MoveattributemapMinFieldsModel, PokemonV2MoveattributemapMinFieldsModelType } from "./PokemonV2MoveattributemapMinFieldsModel"
import { PokemonV2MoveattributemapMinFieldsModelSelector } from "./PokemonV2MoveattributemapMinFieldsModel.base"
import { PokemonV2MoveattributemapStddevFieldsModel, PokemonV2MoveattributemapStddevFieldsModelType } from "./PokemonV2MoveattributemapStddevFieldsModel"
import { PokemonV2MoveattributemapStddevFieldsModelSelector } from "./PokemonV2MoveattributemapStddevFieldsModel.base"
import { PokemonV2MoveattributemapStddevPopFieldsModel, PokemonV2MoveattributemapStddevPopFieldsModelType } from "./PokemonV2MoveattributemapStddevPopFieldsModel"
import { PokemonV2MoveattributemapStddevPopFieldsModelSelector } from "./PokemonV2MoveattributemapStddevPopFieldsModel.base"
import { PokemonV2MoveattributemapStddevSampFieldsModel, PokemonV2MoveattributemapStddevSampFieldsModelType } from "./PokemonV2MoveattributemapStddevSampFieldsModel"
import { PokemonV2MoveattributemapStddevSampFieldsModelSelector } from "./PokemonV2MoveattributemapStddevSampFieldsModel.base"
import { PokemonV2MoveattributemapSumFieldsModel, PokemonV2MoveattributemapSumFieldsModelType } from "./PokemonV2MoveattributemapSumFieldsModel"
import { PokemonV2MoveattributemapSumFieldsModelSelector } from "./PokemonV2MoveattributemapSumFieldsModel.base"
import { PokemonV2MoveattributemapVarPopFieldsModel, PokemonV2MoveattributemapVarPopFieldsModelType } from "./PokemonV2MoveattributemapVarPopFieldsModel"
import { PokemonV2MoveattributemapVarPopFieldsModelSelector } from "./PokemonV2MoveattributemapVarPopFieldsModel.base"
import { PokemonV2MoveattributemapVarSampFieldsModel, PokemonV2MoveattributemapVarSampFieldsModelType } from "./PokemonV2MoveattributemapVarSampFieldsModel"
import { PokemonV2MoveattributemapVarSampFieldsModelSelector } from "./PokemonV2MoveattributemapVarSampFieldsModel.base"
import { PokemonV2MoveattributemapVarianceFieldsModel, PokemonV2MoveattributemapVarianceFieldsModelType } from "./PokemonV2MoveattributemapVarianceFieldsModel"
import { PokemonV2MoveattributemapVarianceFieldsModelSelector } from "./PokemonV2MoveattributemapVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MoveattributemapAggregateFieldsBase
 * auto generated base class for the model PokemonV2MoveattributemapAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapAggregateFieldsModelBase = ModelBase
  .named('PokemonV2MoveattributemapAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_moveattributemap_aggregate_fields"), "pokemon_v2_moveattributemap_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2MoveattributemapVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MoveattributemapAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2MoveattributemapAvgFieldsModelSelector | ((selector: PokemonV2MoveattributemapAvgFieldsModelSelector) => PokemonV2MoveattributemapAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2MoveattributemapAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2MoveattributemapMaxFieldsModelSelector | ((selector: PokemonV2MoveattributemapMaxFieldsModelSelector) => PokemonV2MoveattributemapMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2MoveattributemapMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2MoveattributemapMinFieldsModelSelector | ((selector: PokemonV2MoveattributemapMinFieldsModelSelector) => PokemonV2MoveattributemapMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2MoveattributemapMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2MoveattributemapStddevFieldsModelSelector | ((selector: PokemonV2MoveattributemapStddevFieldsModelSelector) => PokemonV2MoveattributemapStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2MoveattributemapStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2MoveattributemapStddevPopFieldsModelSelector | ((selector: PokemonV2MoveattributemapStddevPopFieldsModelSelector) => PokemonV2MoveattributemapStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2MoveattributemapStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2MoveattributemapStddevSampFieldsModelSelector | ((selector: PokemonV2MoveattributemapStddevSampFieldsModelSelector) => PokemonV2MoveattributemapStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2MoveattributemapStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2MoveattributemapSumFieldsModelSelector | ((selector: PokemonV2MoveattributemapSumFieldsModelSelector) => PokemonV2MoveattributemapSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2MoveattributemapSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2MoveattributemapVarPopFieldsModelSelector | ((selector: PokemonV2MoveattributemapVarPopFieldsModelSelector) => PokemonV2MoveattributemapVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2MoveattributemapVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2MoveattributemapVarSampFieldsModelSelector | ((selector: PokemonV2MoveattributemapVarSampFieldsModelSelector) => PokemonV2MoveattributemapVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2MoveattributemapVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2MoveattributemapVarianceFieldsModelSelector | ((selector: PokemonV2MoveattributemapVarianceFieldsModelSelector) => PokemonV2MoveattributemapVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2MoveattributemapVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2MoveattributemapAggregateFields() {
  return new PokemonV2MoveattributemapAggregateFieldsModelSelector()
}

export const pokemonV2MoveattributemapAggregateFieldsModelPrimitives = selectFromPokemonV2MoveattributemapAggregateFields().count
