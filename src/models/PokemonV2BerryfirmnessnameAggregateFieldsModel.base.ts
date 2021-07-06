/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryfirmnessnameAvgFieldsModel, PokemonV2BerryfirmnessnameAvgFieldsModelType } from "./PokemonV2BerryfirmnessnameAvgFieldsModel"
import { PokemonV2BerryfirmnessnameAvgFieldsModelSelector } from "./PokemonV2BerryfirmnessnameAvgFieldsModel.base"
import { PokemonV2BerryfirmnessnameMaxFieldsModel, PokemonV2BerryfirmnessnameMaxFieldsModelType } from "./PokemonV2BerryfirmnessnameMaxFieldsModel"
import { PokemonV2BerryfirmnessnameMaxFieldsModelSelector } from "./PokemonV2BerryfirmnessnameMaxFieldsModel.base"
import { PokemonV2BerryfirmnessnameMinFieldsModel, PokemonV2BerryfirmnessnameMinFieldsModelType } from "./PokemonV2BerryfirmnessnameMinFieldsModel"
import { PokemonV2BerryfirmnessnameMinFieldsModelSelector } from "./PokemonV2BerryfirmnessnameMinFieldsModel.base"
import { PokemonV2BerryfirmnessnameStddevFieldsModel, PokemonV2BerryfirmnessnameStddevFieldsModelType } from "./PokemonV2BerryfirmnessnameStddevFieldsModel"
import { PokemonV2BerryfirmnessnameStddevFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevFieldsModel.base"
import { PokemonV2BerryfirmnessnameStddevPopFieldsModel, PokemonV2BerryfirmnessnameStddevPopFieldsModelType } from "./PokemonV2BerryfirmnessnameStddevPopFieldsModel"
import { PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevPopFieldsModel.base"
import { PokemonV2BerryfirmnessnameStddevSampFieldsModel, PokemonV2BerryfirmnessnameStddevSampFieldsModelType } from "./PokemonV2BerryfirmnessnameStddevSampFieldsModel"
import { PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevSampFieldsModel.base"
import { PokemonV2BerryfirmnessnameSumFieldsModel, PokemonV2BerryfirmnessnameSumFieldsModelType } from "./PokemonV2BerryfirmnessnameSumFieldsModel"
import { PokemonV2BerryfirmnessnameSumFieldsModelSelector } from "./PokemonV2BerryfirmnessnameSumFieldsModel.base"
import { PokemonV2BerryfirmnessnameVarPopFieldsModel, PokemonV2BerryfirmnessnameVarPopFieldsModelType } from "./PokemonV2BerryfirmnessnameVarPopFieldsModel"
import { PokemonV2BerryfirmnessnameVarPopFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarPopFieldsModel.base"
import { PokemonV2BerryfirmnessnameVarSampFieldsModel, PokemonV2BerryfirmnessnameVarSampFieldsModelType } from "./PokemonV2BerryfirmnessnameVarSampFieldsModel"
import { PokemonV2BerryfirmnessnameVarSampFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarSampFieldsModel.base"
import { PokemonV2BerryfirmnessnameVarianceFieldsModel, PokemonV2BerryfirmnessnameVarianceFieldsModelType } from "./PokemonV2BerryfirmnessnameVarianceFieldsModel"
import { PokemonV2BerryfirmnessnameVarianceFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryfirmnessnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2BerryfirmnessnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2BerryfirmnessnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryfirmnessname_aggregate_fields"), "pokemon_v2_berryfirmnessname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2BerryfirmnessnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryfirmnessnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2BerryfirmnessnameAvgFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameAvgFieldsModelSelector) => PokemonV2BerryfirmnessnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2BerryfirmnessnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2BerryfirmnessnameMaxFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameMaxFieldsModelSelector) => PokemonV2BerryfirmnessnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2BerryfirmnessnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2BerryfirmnessnameMinFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameMinFieldsModelSelector) => PokemonV2BerryfirmnessnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2BerryfirmnessnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2BerryfirmnessnameStddevFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameStddevFieldsModelSelector) => PokemonV2BerryfirmnessnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2BerryfirmnessnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector) => PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector) => PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2BerryfirmnessnameSumFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameSumFieldsModelSelector) => PokemonV2BerryfirmnessnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2BerryfirmnessnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2BerryfirmnessnameVarPopFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameVarPopFieldsModelSelector) => PokemonV2BerryfirmnessnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2BerryfirmnessnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2BerryfirmnessnameVarSampFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameVarSampFieldsModelSelector) => PokemonV2BerryfirmnessnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2BerryfirmnessnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2BerryfirmnessnameVarianceFieldsModelSelector | ((selector: PokemonV2BerryfirmnessnameVarianceFieldsModelSelector) => PokemonV2BerryfirmnessnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2BerryfirmnessnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2BerryfirmnessnameAggregateFields() {
  return new PokemonV2BerryfirmnessnameAggregateFieldsModelSelector()
}

export const pokemonV2BerryfirmnessnameAggregateFieldsModelPrimitives = selectFromPokemonV2BerryfirmnessnameAggregateFields().count
