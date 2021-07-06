/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2LocationnameAvgFieldsModel, PokemonV2LocationnameAvgFieldsModelType } from "./PokemonV2LocationnameAvgFieldsModel"
import { PokemonV2LocationnameAvgFieldsModelSelector } from "./PokemonV2LocationnameAvgFieldsModel.base"
import { PokemonV2LocationnameMaxFieldsModel, PokemonV2LocationnameMaxFieldsModelType } from "./PokemonV2LocationnameMaxFieldsModel"
import { PokemonV2LocationnameMaxFieldsModelSelector } from "./PokemonV2LocationnameMaxFieldsModel.base"
import { PokemonV2LocationnameMinFieldsModel, PokemonV2LocationnameMinFieldsModelType } from "./PokemonV2LocationnameMinFieldsModel"
import { PokemonV2LocationnameMinFieldsModelSelector } from "./PokemonV2LocationnameMinFieldsModel.base"
import { PokemonV2LocationnameStddevFieldsModel, PokemonV2LocationnameStddevFieldsModelType } from "./PokemonV2LocationnameStddevFieldsModel"
import { PokemonV2LocationnameStddevFieldsModelSelector } from "./PokemonV2LocationnameStddevFieldsModel.base"
import { PokemonV2LocationnameStddevPopFieldsModel, PokemonV2LocationnameStddevPopFieldsModelType } from "./PokemonV2LocationnameStddevPopFieldsModel"
import { PokemonV2LocationnameStddevPopFieldsModelSelector } from "./PokemonV2LocationnameStddevPopFieldsModel.base"
import { PokemonV2LocationnameStddevSampFieldsModel, PokemonV2LocationnameStddevSampFieldsModelType } from "./PokemonV2LocationnameStddevSampFieldsModel"
import { PokemonV2LocationnameStddevSampFieldsModelSelector } from "./PokemonV2LocationnameStddevSampFieldsModel.base"
import { PokemonV2LocationnameSumFieldsModel, PokemonV2LocationnameSumFieldsModelType } from "./PokemonV2LocationnameSumFieldsModel"
import { PokemonV2LocationnameSumFieldsModelSelector } from "./PokemonV2LocationnameSumFieldsModel.base"
import { PokemonV2LocationnameVarPopFieldsModel, PokemonV2LocationnameVarPopFieldsModelType } from "./PokemonV2LocationnameVarPopFieldsModel"
import { PokemonV2LocationnameVarPopFieldsModelSelector } from "./PokemonV2LocationnameVarPopFieldsModel.base"
import { PokemonV2LocationnameVarSampFieldsModel, PokemonV2LocationnameVarSampFieldsModelType } from "./PokemonV2LocationnameVarSampFieldsModel"
import { PokemonV2LocationnameVarSampFieldsModelSelector } from "./PokemonV2LocationnameVarSampFieldsModel.base"
import { PokemonV2LocationnameVarianceFieldsModel, PokemonV2LocationnameVarianceFieldsModelType } from "./PokemonV2LocationnameVarianceFieldsModel"
import { PokemonV2LocationnameVarianceFieldsModelSelector } from "./PokemonV2LocationnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2LocationnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2LocationnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2LocationnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_locationname_aggregate_fields"), "pokemon_v2_locationname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2LocationnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2LocationnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2LocationnameAvgFieldsModelSelector | ((selector: PokemonV2LocationnameAvgFieldsModelSelector) => PokemonV2LocationnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2LocationnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2LocationnameMaxFieldsModelSelector | ((selector: PokemonV2LocationnameMaxFieldsModelSelector) => PokemonV2LocationnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2LocationnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2LocationnameMinFieldsModelSelector | ((selector: PokemonV2LocationnameMinFieldsModelSelector) => PokemonV2LocationnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2LocationnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2LocationnameStddevFieldsModelSelector | ((selector: PokemonV2LocationnameStddevFieldsModelSelector) => PokemonV2LocationnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2LocationnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2LocationnameStddevPopFieldsModelSelector | ((selector: PokemonV2LocationnameStddevPopFieldsModelSelector) => PokemonV2LocationnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2LocationnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2LocationnameStddevSampFieldsModelSelector | ((selector: PokemonV2LocationnameStddevSampFieldsModelSelector) => PokemonV2LocationnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2LocationnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2LocationnameSumFieldsModelSelector | ((selector: PokemonV2LocationnameSumFieldsModelSelector) => PokemonV2LocationnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2LocationnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2LocationnameVarPopFieldsModelSelector | ((selector: PokemonV2LocationnameVarPopFieldsModelSelector) => PokemonV2LocationnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2LocationnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2LocationnameVarSampFieldsModelSelector | ((selector: PokemonV2LocationnameVarSampFieldsModelSelector) => PokemonV2LocationnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2LocationnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2LocationnameVarianceFieldsModelSelector | ((selector: PokemonV2LocationnameVarianceFieldsModelSelector) => PokemonV2LocationnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2LocationnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2LocationnameAggregateFields() {
  return new PokemonV2LocationnameAggregateFieldsModelSelector()
}

export const pokemonV2LocationnameAggregateFieldsModelPrimitives = selectFromPokemonV2LocationnameAggregateFields().count
