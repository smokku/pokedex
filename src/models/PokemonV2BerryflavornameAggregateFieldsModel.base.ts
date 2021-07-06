/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavornameAvgFieldsModel, PokemonV2BerryflavornameAvgFieldsModelType } from "./PokemonV2BerryflavornameAvgFieldsModel"
import { PokemonV2BerryflavornameAvgFieldsModelSelector } from "./PokemonV2BerryflavornameAvgFieldsModel.base"
import { PokemonV2BerryflavornameMaxFieldsModel, PokemonV2BerryflavornameMaxFieldsModelType } from "./PokemonV2BerryflavornameMaxFieldsModel"
import { PokemonV2BerryflavornameMaxFieldsModelSelector } from "./PokemonV2BerryflavornameMaxFieldsModel.base"
import { PokemonV2BerryflavornameMinFieldsModel, PokemonV2BerryflavornameMinFieldsModelType } from "./PokemonV2BerryflavornameMinFieldsModel"
import { PokemonV2BerryflavornameMinFieldsModelSelector } from "./PokemonV2BerryflavornameMinFieldsModel.base"
import { PokemonV2BerryflavornameStddevFieldsModel, PokemonV2BerryflavornameStddevFieldsModelType } from "./PokemonV2BerryflavornameStddevFieldsModel"
import { PokemonV2BerryflavornameStddevFieldsModelSelector } from "./PokemonV2BerryflavornameStddevFieldsModel.base"
import { PokemonV2BerryflavornameStddevPopFieldsModel, PokemonV2BerryflavornameStddevPopFieldsModelType } from "./PokemonV2BerryflavornameStddevPopFieldsModel"
import { PokemonV2BerryflavornameStddevPopFieldsModelSelector } from "./PokemonV2BerryflavornameStddevPopFieldsModel.base"
import { PokemonV2BerryflavornameStddevSampFieldsModel, PokemonV2BerryflavornameStddevSampFieldsModelType } from "./PokemonV2BerryflavornameStddevSampFieldsModel"
import { PokemonV2BerryflavornameStddevSampFieldsModelSelector } from "./PokemonV2BerryflavornameStddevSampFieldsModel.base"
import { PokemonV2BerryflavornameSumFieldsModel, PokemonV2BerryflavornameSumFieldsModelType } from "./PokemonV2BerryflavornameSumFieldsModel"
import { PokemonV2BerryflavornameSumFieldsModelSelector } from "./PokemonV2BerryflavornameSumFieldsModel.base"
import { PokemonV2BerryflavornameVarPopFieldsModel, PokemonV2BerryflavornameVarPopFieldsModelType } from "./PokemonV2BerryflavornameVarPopFieldsModel"
import { PokemonV2BerryflavornameVarPopFieldsModelSelector } from "./PokemonV2BerryflavornameVarPopFieldsModel.base"
import { PokemonV2BerryflavornameVarSampFieldsModel, PokemonV2BerryflavornameVarSampFieldsModelType } from "./PokemonV2BerryflavornameVarSampFieldsModel"
import { PokemonV2BerryflavornameVarSampFieldsModelSelector } from "./PokemonV2BerryflavornameVarSampFieldsModel.base"
import { PokemonV2BerryflavornameVarianceFieldsModel, PokemonV2BerryflavornameVarianceFieldsModelType } from "./PokemonV2BerryflavornameVarianceFieldsModel"
import { PokemonV2BerryflavornameVarianceFieldsModelSelector } from "./PokemonV2BerryflavornameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavornameAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryflavornameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berryflavorname"
 */
export const PokemonV2BerryflavornameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavornameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavorname_aggregate_fields"), "pokemon_v2_berryflavorname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryflavornameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavornameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryflavornameAvgFieldsModelSelector | ((selector: PokemonV2BerryflavornameAvgFieldsModelSelector) => PokemonV2BerryflavornameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryflavornameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryflavornameMaxFieldsModelSelector | ((selector: PokemonV2BerryflavornameMaxFieldsModelSelector) => PokemonV2BerryflavornameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryflavornameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryflavornameMinFieldsModelSelector | ((selector: PokemonV2BerryflavornameMinFieldsModelSelector) => PokemonV2BerryflavornameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryflavornameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryflavornameStddevFieldsModelSelector | ((selector: PokemonV2BerryflavornameStddevFieldsModelSelector) => PokemonV2BerryflavornameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryflavornameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryflavornameStddevPopFieldsModelSelector | ((selector: PokemonV2BerryflavornameStddevPopFieldsModelSelector) => PokemonV2BerryflavornameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryflavornameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryflavornameStddevSampFieldsModelSelector | ((selector: PokemonV2BerryflavornameStddevSampFieldsModelSelector) => PokemonV2BerryflavornameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryflavornameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerryflavornameSumFieldsModelSelector | ((selector: PokemonV2BerryflavornameSumFieldsModelSelector) => PokemonV2BerryflavornameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerryflavornameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryflavornameVarPopFieldsModelSelector | ((selector: PokemonV2BerryflavornameVarPopFieldsModelSelector) => PokemonV2BerryflavornameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryflavornameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryflavornameVarSampFieldsModelSelector | ((selector: PokemonV2BerryflavornameVarSampFieldsModelSelector) => PokemonV2BerryflavornameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryflavornameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryflavornameVarianceFieldsModelSelector | ((selector: PokemonV2BerryflavornameVarianceFieldsModelSelector) => PokemonV2BerryflavornameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryflavornameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryflavornameAggregateFields() {
  return new PokemonV2BerryflavornameAggregateFieldsModelSelector()
}

export const pokemonV2BerryflavornameAggregateFieldsModelPrimitives = selectFromPokemonV2BerryflavornameAggregateFields().count
