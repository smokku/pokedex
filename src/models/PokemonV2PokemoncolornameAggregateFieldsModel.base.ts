/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemoncolornameAvgFieldsModel, PokemonV2PokemoncolornameAvgFieldsModelType } from "./PokemonV2PokemoncolornameAvgFieldsModel"
import { PokemonV2PokemoncolornameAvgFieldsModelSelector } from "./PokemonV2PokemoncolornameAvgFieldsModel.base"
import { PokemonV2PokemoncolornameMaxFieldsModel, PokemonV2PokemoncolornameMaxFieldsModelType } from "./PokemonV2PokemoncolornameMaxFieldsModel"
import { PokemonV2PokemoncolornameMaxFieldsModelSelector } from "./PokemonV2PokemoncolornameMaxFieldsModel.base"
import { PokemonV2PokemoncolornameMinFieldsModel, PokemonV2PokemoncolornameMinFieldsModelType } from "./PokemonV2PokemoncolornameMinFieldsModel"
import { PokemonV2PokemoncolornameMinFieldsModelSelector } from "./PokemonV2PokemoncolornameMinFieldsModel.base"
import { PokemonV2PokemoncolornameStddevFieldsModel, PokemonV2PokemoncolornameStddevFieldsModelType } from "./PokemonV2PokemoncolornameStddevFieldsModel"
import { PokemonV2PokemoncolornameStddevFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevFieldsModel.base"
import { PokemonV2PokemoncolornameStddevPopFieldsModel, PokemonV2PokemoncolornameStddevPopFieldsModelType } from "./PokemonV2PokemoncolornameStddevPopFieldsModel"
import { PokemonV2PokemoncolornameStddevPopFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevPopFieldsModel.base"
import { PokemonV2PokemoncolornameStddevSampFieldsModel, PokemonV2PokemoncolornameStddevSampFieldsModelType } from "./PokemonV2PokemoncolornameStddevSampFieldsModel"
import { PokemonV2PokemoncolornameStddevSampFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevSampFieldsModel.base"
import { PokemonV2PokemoncolornameSumFieldsModel, PokemonV2PokemoncolornameSumFieldsModelType } from "./PokemonV2PokemoncolornameSumFieldsModel"
import { PokemonV2PokemoncolornameSumFieldsModelSelector } from "./PokemonV2PokemoncolornameSumFieldsModel.base"
import { PokemonV2PokemoncolornameVarPopFieldsModel, PokemonV2PokemoncolornameVarPopFieldsModelType } from "./PokemonV2PokemoncolornameVarPopFieldsModel"
import { PokemonV2PokemoncolornameVarPopFieldsModelSelector } from "./PokemonV2PokemoncolornameVarPopFieldsModel.base"
import { PokemonV2PokemoncolornameVarSampFieldsModel, PokemonV2PokemoncolornameVarSampFieldsModelType } from "./PokemonV2PokemoncolornameVarSampFieldsModel"
import { PokemonV2PokemoncolornameVarSampFieldsModelSelector } from "./PokemonV2PokemoncolornameVarSampFieldsModel.base"
import { PokemonV2PokemoncolornameVarianceFieldsModel, PokemonV2PokemoncolornameVarianceFieldsModelType } from "./PokemonV2PokemoncolornameVarianceFieldsModel"
import { PokemonV2PokemoncolornameVarianceFieldsModelSelector } from "./PokemonV2PokemoncolornameVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemoncolornameAggregateFieldsBase
 * auto generated base class for the model PokemonV2PokemoncolornameAggregateFieldsModel.
 *
 * aggregate fields of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameAggregateFieldsModelBase = ModelBase
  .named('PokemonV2PokemoncolornameAggregateFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemoncolorname_aggregate_fields"), "pokemon_v2_pokemoncolorname_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameAvgFieldsModel)),
    count: types.union(types.undefined, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemoncolornameVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemoncolornameAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | PokemonV2PokemoncolornameAvgFieldsModelSelector | ((selector: PokemonV2PokemoncolornameAvgFieldsModelSelector) => PokemonV2PokemoncolornameAvgFieldsModelSelector)) { return this.__child(`avg`, PokemonV2PokemoncolornameAvgFieldsModelSelector, builder) }
  max(builder?: string | PokemonV2PokemoncolornameMaxFieldsModelSelector | ((selector: PokemonV2PokemoncolornameMaxFieldsModelSelector) => PokemonV2PokemoncolornameMaxFieldsModelSelector)) { return this.__child(`max`, PokemonV2PokemoncolornameMaxFieldsModelSelector, builder) }
  min(builder?: string | PokemonV2PokemoncolornameMinFieldsModelSelector | ((selector: PokemonV2PokemoncolornameMinFieldsModelSelector) => PokemonV2PokemoncolornameMinFieldsModelSelector)) { return this.__child(`min`, PokemonV2PokemoncolornameMinFieldsModelSelector, builder) }
  stddev(builder?: string | PokemonV2PokemoncolornameStddevFieldsModelSelector | ((selector: PokemonV2PokemoncolornameStddevFieldsModelSelector) => PokemonV2PokemoncolornameStddevFieldsModelSelector)) { return this.__child(`stddev`, PokemonV2PokemoncolornameStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | PokemonV2PokemoncolornameStddevPopFieldsModelSelector | ((selector: PokemonV2PokemoncolornameStddevPopFieldsModelSelector) => PokemonV2PokemoncolornameStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, PokemonV2PokemoncolornameStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | PokemonV2PokemoncolornameStddevSampFieldsModelSelector | ((selector: PokemonV2PokemoncolornameStddevSampFieldsModelSelector) => PokemonV2PokemoncolornameStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, PokemonV2PokemoncolornameStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | PokemonV2PokemoncolornameSumFieldsModelSelector | ((selector: PokemonV2PokemoncolornameSumFieldsModelSelector) => PokemonV2PokemoncolornameSumFieldsModelSelector)) { return this.__child(`sum`, PokemonV2PokemoncolornameSumFieldsModelSelector, builder) }
  var_pop(builder?: string | PokemonV2PokemoncolornameVarPopFieldsModelSelector | ((selector: PokemonV2PokemoncolornameVarPopFieldsModelSelector) => PokemonV2PokemoncolornameVarPopFieldsModelSelector)) { return this.__child(`var_pop`, PokemonV2PokemoncolornameVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | PokemonV2PokemoncolornameVarSampFieldsModelSelector | ((selector: PokemonV2PokemoncolornameVarSampFieldsModelSelector) => PokemonV2PokemoncolornameVarSampFieldsModelSelector)) { return this.__child(`var_samp`, PokemonV2PokemoncolornameVarSampFieldsModelSelector, builder) }
  variance(builder?: string | PokemonV2PokemoncolornameVarianceFieldsModelSelector | ((selector: PokemonV2PokemoncolornameVarianceFieldsModelSelector) => PokemonV2PokemoncolornameVarianceFieldsModelSelector)) { return this.__child(`variance`, PokemonV2PokemoncolornameVarianceFieldsModelSelector, builder) }
}
export function selectFromPokemonV2PokemoncolornameAggregateFields() {
  return new PokemonV2PokemoncolornameAggregateFieldsModelSelector()
}

export const pokemonV2PokemoncolornameAggregateFieldsModelPrimitives = selectFromPokemonV2PokemoncolornameAggregateFields().count
