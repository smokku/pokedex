/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokeathlonstatnameAvgFieldsModel, PokemonV2PokeathlonstatnameAvgFieldsModelType } from "./PokemonV2PokeathlonstatnameAvgFieldsModel"
import { PokemonV2PokeathlonstatnameAvgFieldsModelSelector } from "./PokemonV2PokeathlonstatnameAvgFieldsModel.base"
import { PokemonV2PokeathlonstatnameMaxFieldsModel, PokemonV2PokeathlonstatnameMaxFieldsModelType } from "./PokemonV2PokeathlonstatnameMaxFieldsModel"
import { PokemonV2PokeathlonstatnameMaxFieldsModelSelector } from "./PokemonV2PokeathlonstatnameMaxFieldsModel.base"
import { PokemonV2PokeathlonstatnameMinFieldsModel, PokemonV2PokeathlonstatnameMinFieldsModelType } from "./PokemonV2PokeathlonstatnameMinFieldsModel"
import { PokemonV2PokeathlonstatnameMinFieldsModelSelector } from "./PokemonV2PokeathlonstatnameMinFieldsModel.base"
import { PokemonV2PokeathlonstatnameStddevFieldsModel, PokemonV2PokeathlonstatnameStddevFieldsModelType } from "./PokemonV2PokeathlonstatnameStddevFieldsModel"
import { PokemonV2PokeathlonstatnameStddevFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevFieldsModel.base"
import { PokemonV2PokeathlonstatnameStddevPopFieldsModel, PokemonV2PokeathlonstatnameStddevPopFieldsModelType } from "./PokemonV2PokeathlonstatnameStddevPopFieldsModel"
import { PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevPopFieldsModel.base"
import { PokemonV2PokeathlonstatnameStddevSampFieldsModel, PokemonV2PokeathlonstatnameStddevSampFieldsModelType } from "./PokemonV2PokeathlonstatnameStddevSampFieldsModel"
import { PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevSampFieldsModel.base"
import { PokemonV2PokeathlonstatnameSumFieldsModel, PokemonV2PokeathlonstatnameSumFieldsModelType } from "./PokemonV2PokeathlonstatnameSumFieldsModel"
import { PokemonV2PokeathlonstatnameSumFieldsModelSelector } from "./PokemonV2PokeathlonstatnameSumFieldsModel.base"
import { PokemonV2PokeathlonstatnameVarPopFieldsModel, PokemonV2PokeathlonstatnameVarPopFieldsModelType } from "./PokemonV2PokeathlonstatnameVarPopFieldsModel"
import { PokemonV2PokeathlonstatnameVarPopFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarPopFieldsModel.base"
import { PokemonV2PokeathlonstatnameVarSampFieldsModel, PokemonV2PokeathlonstatnameVarSampFieldsModelType } from "./PokemonV2PokeathlonstatnameVarSampFieldsModel"
import { PokemonV2PokeathlonstatnameVarSampFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarSampFieldsModel.base"
import { PokemonV2PokeathlonstatnameVarianceFieldsModel, PokemonV2PokeathlonstatnameVarianceFieldsModelType } from "./PokemonV2PokeathlonstatnameVarianceFieldsModel"
import { PokemonV2PokeathlonstatnameVarianceFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokeathlonstatnameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokeathlonstatnameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokeathlonstatnameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokeathlonstatname_aggregate_fields"), "pokemon_v2_pokeathlonstatname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokeathlonstatnameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokeathlonstatnameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokeathlonstatnameAvgFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameAvgFieldsModelSelector) => PokemonV2PokeathlonstatnameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokeathlonstatnameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokeathlonstatnameMaxFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameMaxFieldsModelSelector) => PokemonV2PokeathlonstatnameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokeathlonstatnameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokeathlonstatnameMinFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameMinFieldsModelSelector) => PokemonV2PokeathlonstatnameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokeathlonstatnameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokeathlonstatnameStddevFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameStddevFieldsModelSelector) => PokemonV2PokeathlonstatnameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokeathlonstatnameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector) => PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector) => PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokeathlonstatnameSumFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameSumFieldsModelSelector) => PokemonV2PokeathlonstatnameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokeathlonstatnameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokeathlonstatnameVarPopFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameVarPopFieldsModelSelector) => PokemonV2PokeathlonstatnameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokeathlonstatnameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokeathlonstatnameVarSampFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameVarSampFieldsModelSelector) => PokemonV2PokeathlonstatnameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokeathlonstatnameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokeathlonstatnameVarianceFieldsModelSelector | ((selector: PokemonV2PokeathlonstatnameVarianceFieldsModelSelector) => PokemonV2PokeathlonstatnameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokeathlonstatnameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokeathlonstatnameAggregateFields() {
  return new PokemonV2PokeathlonstatnameAggregateFieldsModelSelector()
}

export const pokemonV2PokeathlonstatnameAggregateFieldsModelPrimitives = selectFromPokemonV2PokeathlonstatnameAggregateFields().count
