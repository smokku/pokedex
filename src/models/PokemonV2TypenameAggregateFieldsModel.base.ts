/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2TypenameAvgFieldsModel, PokemonV2TypenameAvgFieldsModelType } from "./PokemonV2TypenameAvgFieldsModel"
import { PokemonV2TypenameAvgFieldsModelSelector } from "./PokemonV2TypenameAvgFieldsModel.base"
import { PokemonV2TypenameMaxFieldsModel, PokemonV2TypenameMaxFieldsModelType } from "./PokemonV2TypenameMaxFieldsModel"
import { PokemonV2TypenameMaxFieldsModelSelector } from "./PokemonV2TypenameMaxFieldsModel.base"
import { PokemonV2TypenameMinFieldsModel, PokemonV2TypenameMinFieldsModelType } from "./PokemonV2TypenameMinFieldsModel"
import { PokemonV2TypenameMinFieldsModelSelector } from "./PokemonV2TypenameMinFieldsModel.base"
import { PokemonV2TypenameStddevFieldsModel, PokemonV2TypenameStddevFieldsModelType } from "./PokemonV2TypenameStddevFieldsModel"
import { PokemonV2TypenameStddevFieldsModelSelector } from "./PokemonV2TypenameStddevFieldsModel.base"
import { PokemonV2TypenameStddevPopFieldsModel, PokemonV2TypenameStddevPopFieldsModelType } from "./PokemonV2TypenameStddevPopFieldsModel"
import { PokemonV2TypenameStddevPopFieldsModelSelector } from "./PokemonV2TypenameStddevPopFieldsModel.base"
import { PokemonV2TypenameStddevSampFieldsModel, PokemonV2TypenameStddevSampFieldsModelType } from "./PokemonV2TypenameStddevSampFieldsModel"
import { PokemonV2TypenameStddevSampFieldsModelSelector } from "./PokemonV2TypenameStddevSampFieldsModel.base"
import { PokemonV2TypenameSumFieldsModel, PokemonV2TypenameSumFieldsModelType } from "./PokemonV2TypenameSumFieldsModel"
import { PokemonV2TypenameSumFieldsModelSelector } from "./PokemonV2TypenameSumFieldsModel.base"
import { PokemonV2TypenameVarPopFieldsModel, PokemonV2TypenameVarPopFieldsModelType } from "./PokemonV2TypenameVarPopFieldsModel"
import { PokemonV2TypenameVarPopFieldsModelSelector } from "./PokemonV2TypenameVarPopFieldsModel.base"
import { PokemonV2TypenameVarSampFieldsModel, PokemonV2TypenameVarSampFieldsModelType } from "./PokemonV2TypenameVarSampFieldsModel"
import { PokemonV2TypenameVarSampFieldsModelSelector } from "./PokemonV2TypenameVarSampFieldsModel.base"
import { PokemonV2TypenameVarianceFieldsModel, PokemonV2TypenameVarianceFieldsModelType } from "./PokemonV2TypenameVarianceFieldsModel"
import { PokemonV2TypenameVarianceFieldsModelSelector } from "./PokemonV2TypenameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypenameAggregateFieldsBase
 * auto generated base class for the model PokemonV2TypenameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_typename"
 */
export const PokemonV2TypenameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2TypenameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_typename_aggregate_fields"), "pokemon_v2_typename_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypenameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypenameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2TypenameAvgFieldsModelSelector | ((selector: PokemonV2TypenameAvgFieldsModelSelector) => PokemonV2TypenameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2TypenameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2TypenameMaxFieldsModelSelector | ((selector: PokemonV2TypenameMaxFieldsModelSelector) => PokemonV2TypenameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2TypenameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2TypenameMinFieldsModelSelector | ((selector: PokemonV2TypenameMinFieldsModelSelector) => PokemonV2TypenameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2TypenameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2TypenameStddevFieldsModelSelector | ((selector: PokemonV2TypenameStddevFieldsModelSelector) => PokemonV2TypenameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2TypenameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2TypenameStddevPopFieldsModelSelector | ((selector: PokemonV2TypenameStddevPopFieldsModelSelector) => PokemonV2TypenameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2TypenameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2TypenameStddevSampFieldsModelSelector | ((selector: PokemonV2TypenameStddevSampFieldsModelSelector) => PokemonV2TypenameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2TypenameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2TypenameSumFieldsModelSelector | ((selector: PokemonV2TypenameSumFieldsModelSelector) => PokemonV2TypenameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2TypenameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2TypenameVarPopFieldsModelSelector | ((selector: PokemonV2TypenameVarPopFieldsModelSelector) => PokemonV2TypenameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2TypenameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2TypenameVarSampFieldsModelSelector | ((selector: PokemonV2TypenameVarSampFieldsModelSelector) => PokemonV2TypenameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2TypenameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2TypenameVarianceFieldsModelSelector | ((selector: PokemonV2TypenameVarianceFieldsModelSelector) => PokemonV2TypenameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2TypenameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2TypenameAggregateFields() {
  return new PokemonV2TypenameAggregateFieldsModelSelector()
}

export const pokemonV2TypenameAggregateFieldsModelPrimitives = selectFromPokemonV2TypenameAggregateFields().count
