/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryAvgFieldsModel, PokemonV2BerryAvgFieldsModelType } from "./PokemonV2BerryAvgFieldsModel"
import { PokemonV2BerryAvgFieldsModelSelector } from "./PokemonV2BerryAvgFieldsModel.base"
import { PokemonV2BerryMaxFieldsModel, PokemonV2BerryMaxFieldsModelType } from "./PokemonV2BerryMaxFieldsModel"
import { PokemonV2BerryMaxFieldsModelSelector } from "./PokemonV2BerryMaxFieldsModel.base"
import { PokemonV2BerryMinFieldsModel, PokemonV2BerryMinFieldsModelType } from "./PokemonV2BerryMinFieldsModel"
import { PokemonV2BerryMinFieldsModelSelector } from "./PokemonV2BerryMinFieldsModel.base"
import { PokemonV2BerryStddevFieldsModel, PokemonV2BerryStddevFieldsModelType } from "./PokemonV2BerryStddevFieldsModel"
import { PokemonV2BerryStddevFieldsModelSelector } from "./PokemonV2BerryStddevFieldsModel.base"
import { PokemonV2BerryStddevPopFieldsModel, PokemonV2BerryStddevPopFieldsModelType } from "./PokemonV2BerryStddevPopFieldsModel"
import { PokemonV2BerryStddevPopFieldsModelSelector } from "./PokemonV2BerryStddevPopFieldsModel.base"
import { PokemonV2BerryStddevSampFieldsModel, PokemonV2BerryStddevSampFieldsModelType } from "./PokemonV2BerryStddevSampFieldsModel"
import { PokemonV2BerryStddevSampFieldsModelSelector } from "./PokemonV2BerryStddevSampFieldsModel.base"
import { PokemonV2BerrySumFieldsModel, PokemonV2BerrySumFieldsModelType } from "./PokemonV2BerrySumFieldsModel"
import { PokemonV2BerrySumFieldsModelSelector } from "./PokemonV2BerrySumFieldsModel.base"
import { PokemonV2BerryVarPopFieldsModel, PokemonV2BerryVarPopFieldsModelType } from "./PokemonV2BerryVarPopFieldsModel"
import { PokemonV2BerryVarPopFieldsModelSelector } from "./PokemonV2BerryVarPopFieldsModel.base"
import { PokemonV2BerryVarSampFieldsModel, PokemonV2BerryVarSampFieldsModelType } from "./PokemonV2BerryVarSampFieldsModel"
import { PokemonV2BerryVarSampFieldsModelSelector } from "./PokemonV2BerryVarSampFieldsModel.base"
import { PokemonV2BerryVarianceFieldsModel, PokemonV2BerryVarianceFieldsModelType } from "./PokemonV2BerryVarianceFieldsModel"
import { PokemonV2BerryVarianceFieldsModelSelector } from "./PokemonV2BerryVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berry"
 */
export const PokemonV2BerryAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berry_aggregate_fields"), "pokemon_v2_berry_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerrySumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryAvgFieldsModelSelector | ((selector: PokemonV2BerryAvgFieldsModelSelector) => PokemonV2BerryAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryMaxFieldsModelSelector | ((selector: PokemonV2BerryMaxFieldsModelSelector) => PokemonV2BerryMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryMinFieldsModelSelector | ((selector: PokemonV2BerryMinFieldsModelSelector) => PokemonV2BerryMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryStddevFieldsModelSelector | ((selector: PokemonV2BerryStddevFieldsModelSelector) => PokemonV2BerryStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryStddevPopFieldsModelSelector | ((selector: PokemonV2BerryStddevPopFieldsModelSelector) => PokemonV2BerryStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryStddevSampFieldsModelSelector | ((selector: PokemonV2BerryStddevSampFieldsModelSelector) => PokemonV2BerryStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerrySumFieldsModelSelector | ((selector: PokemonV2BerrySumFieldsModelSelector) => PokemonV2BerrySumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerrySumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryVarPopFieldsModelSelector | ((selector: PokemonV2BerryVarPopFieldsModelSelector) => PokemonV2BerryVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryVarSampFieldsModelSelector | ((selector: PokemonV2BerryVarSampFieldsModelSelector) => PokemonV2BerryVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryVarianceFieldsModelSelector | ((selector: PokemonV2BerryVarianceFieldsModelSelector) => PokemonV2BerryVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryAggregateFields() {
  return new PokemonV2BerryAggregateFieldsModelSelector()
}

export const pokemonV2BerryAggregateFieldsModelPrimitives = selectFromPokemonV2BerryAggregateFields().count
